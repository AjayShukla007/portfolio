import { useRef, useEffect, useState, useCallback, memo } from "react";

const Skills = memo((props) => {

  const texts = props.skills.split(',');
  const textColor = props.color.split(',');
  const computePosition = (idx, random = false, size) => {
    if (random) idx = Math.floor(Math.random() * (texts.length + 1));

    const phi = Math.acos(-1 + (2 * idx + 1) / texts.length);
    const theta = Math.sqrt((texts.length + 1) * Math.PI) * phi;

    return {
      x: (size * Math.cos(theta) * Math.sin(phi)) / 2,
      y: (size * Math.sin(theta) * Math.sin(phi)) / 2,
      z: (size * Math.cos(phi)) / 2
    };
  };

  const createTag = (idx, text, size) => {
    const tagRef = useRef(null);

    return {
      idx: idx,
      text: text,
      opacity: 0,
      filter: "alpha(opacity=0)",
      transform: "translate3d(-50%, -50%, 0) scale(1)",
      tagRef: tagRef,
      ...computePosition(idx, false, size)
    };
  };

  const createInitialState = size => {
    return texts.map((text, i) => {
      return createTag(i, text, size);
    });
  };

  const { radius, maxSpeed, initSpeed, direction } = {
    radius: 300,
    maxSpeed: 20,
    initSpeed: 40,
    direction: 135
  };

  const size = 1.5 * radius;
  const depth = 2 * radius;


  const tagCloudRef = useRef(null);
  const [items, setItems] = useState(createInitialState(size));

  const mouseX0 = useRef(initSpeed * Math.sin(direction * (Math.PI / 180))) // prettier-ignore
  const mouseY0 = useRef(-initSpeed * Math.cos(direction * (Math.PI / 180))) // prettier-ignore
  const mouseX = useRef(mouseX0.current);
  const mouseY = useRef(mouseY0.current);

  const next = useCallback(() => {
    const a = -(Math.min(Math.max(-mouseY.current, -size), size) / radius) * maxSpeed // prettier-ignore
    const b = (Math.min(Math.max(-mouseX.current, -size), size) / radius) * maxSpeed // prettier-ignore

    if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) return; // pause

    // Calculating the offset
    const l = Math.PI / 180;
    const sc = [
      Math.sin(a * l),
      Math.cos(a * l),
      Math.sin(b * l),
      Math.cos(b * l)
    ];

    setItems(prev => {
      const items = prev.map(item => {
        const rx1 = item.x;
        const ry1 = item.y * sc[1] + item.z * -sc[0];
        const rz1 = item.y * sc[0] + item.z * sc[1];
        const rx2 = rx1 * sc[3] + rz1 * sc[2];
        const ry2 = ry1;
        const rz2 = rz1 * sc[3] - rx1 * sc[2];
        const per = (2 * depth) / (2 * depth + rz2);

        item.scale = Number(per.toFixed(3));
        let alpha = per * per - 0.25;
        alpha = Number((alpha > 1 ? 1 : alpha).toFixed(3));

        if (item?.tagRef?.current) {
          const left = (item.x - item.tagRef.current.offsetWidth / 2).toFixed(
            2
          );
          const top = (item.y - item.tagRef.current.offsetHeight / 2).toFixed(
            2
          );

          return {
            ...item,
            x: rx2,
            y: ry2,
            z: rz2,
            opacity: alpha,
            transform: `translate3d(${left}px, ${top}px, 0) scale(${item.scale})`,
            filter: `alpha(opacity=${100 * alpha})`
          };
        }
      });

      return items;
    });
  }, []);

  useEffect(() => {
    if (tagCloudRef?.current) {
      const interval = setInterval(next, 100);
      return () => clearInterval(interval);
    }
  }, [tagCloudRef]);

  return (
    <div
      ref={tagCloudRef}
      className="tag-cloud"
      onMouseMove={ev => {
        if (tagCloudRef?.current) {
          const rect = tagCloudRef.current.getBoundingClientRect();
          mouseX.current = (ev.clientX - (rect.left + rect.width / 2)) / 5;
          mouseY.current = (ev.clientY - (rect.top + rect.height / 2)) / 5;
        }
      }}
      style={{
        position: "relative",
      }}
    >
      {items.map((item, i) => {
        const hexClr = () => "#" + Math.floor(Math.random() * 0xffff).toString(16).padEnd(6, '0');

        return (
          <span
            key={item.idx}
            className="tag-cloud__item"
            ref={item.tagRef}
            style={{
              color: textColor[i],
              filter: item.filter,
              opacity: item.opacity,
              transform: item.transform
            }}
          >
            {item.text}

          </span>
        );
      })}
    </div>
  );
});

export default Skills;

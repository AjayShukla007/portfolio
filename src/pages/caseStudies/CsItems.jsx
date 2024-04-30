import axios from "axios";
import { useQuery } from "react-query";
import ReactFlow from "reactflow";

import "reactflow/dist/style.css";

import { useTitleData } from "../../components/context/csContext.jsx";

const getCsUrl = import.meta.env.VITE_API_GET_CS;


function CsItems() {
  const { title } = useTitleData();
  const { data, isLoading, error } = useQuery(
    `caseStudiesData${title}`,
    async () => {
      const head = await sessionStorage.getItem("authToken");
      try {
        if (head) {
          const headers = {
            authToken: `${head}`
          };
          const res = await axios.get(
            `${getCsUrl}${title}`,
            {
              headers
            }
          );
          // if (!res.ok) {
          //   throw new Error('Unable to fetch data');
          // }
          return res.data;
        }
      } catch (e) {
        console.log(e);
      }
    }
  );

  const keyPoints = element => {
    const saparate = element.split(":");
    return (
      <>
        <div
          className=""
          style={{
            color: "white"
          }}
        >
          {saparate[0]}:
        </div>
        <div>{saparate[1]}</div>
      </>
    );
  };

  const featurePoints = (feature, classes) => {
    const saparate = feature.split("$");
    return (
      <>
        {saparate.map((element, index) => (
          <div key={index} className={classes}>
            {keyPoints(element)}
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      {data ? (
        data.map((element, i) => {
          const allNodes = element.flow.split("$");
          const initialNodes = JSON.parse(allNodes[0].trim());
          const initialEdges = JSON.parse(allNodes[1].trim());
          return (
            <div className="CsItems" key={i}>
              <div className="csTitle">{element.title}</div>
              <div className="csId"> {element.id}</div>
              <div className="csDescription">
                {keyPoints(element.description)}
              </div>
              <div className="csArch csPoints">Architecture:</div>
              <div
                className="csFlow"
                style={{
                  width: "100%",
                  height: "30%"
                  // overflow: "visible"
                }}
              >
                <ReactFlow
                  nodes={initialNodes}
                  edges={initialEdges}
                  // nodesDraggable={true}
                  minZoom={1}
                  maxZoom={1}
                  panOnScroll={true}
                  panOnScrollMode="horizontal"
                  nodesConnectable={false}
                />
                <div className="bettderUi"></div>
              </div>
              <div className="csFeature">
                <div className="csPoints">feature:</div> {featurePoints(element.feature, "featureItems")}
              </div>
              <div className="csTechUsed">
                <span className="headingSpan">techUsed: </span>{" "}
                {featurePoints(element.techUsed, "techUsedItems")}
              </div>

              <div className="csMotivation">
                <span className="headingSpan">Why is build this? </span>{" "}
                {element.motivation}
              </div>
              <div className="csConclusion">
                <span className="headingSpan">conclusion: </span>
                {element.conclusion}
              </div>
            </div>
          );
        })
      ) : (
        <h2 className="CsItems">loading</h2>
      )}
    </>
  );
}

export default CsItems;

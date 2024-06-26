import { useState, useEffect } from "react"

function Time() {

    const [time, setTime] = useState(new Date().toLocaleString().split(','))

    useEffect(() => {
        const updateTime = setInterval(() => {
            setTime(new Date().toLocaleString().split(','))
        }, 1000);

        return () => {
            clearInterval(updateTime);
        }

    }, [time])


    return (
        <div className="time">
            {time.map((data, i) => (
                <div key={i}>{data}</div>
            ))}
        </div>
    )
}

export default Time
import { useState, useEffect } from "react"

function Time() {

    const [time, setTime] = useState(new Date().toLocaleString().split(','))

    useEffect(() => {

        const updateTime = setInterval(() => {
            setTime(new Date().toLocaleString().split(','))
        }, 1000);

    }, [time])


    return (
        <div className="time">
            {time.map(data => (
                <div>{data}</div>
            ))}
        </div>
    )
}

export default Time
import React, { useEffect, useState } from "react";

/**
 * Displays the current time with seconds.
 */
const Clock: React.FC<{ isRunning: boolean }> = ({ isRunning }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        let intervalId: number;
        if (isRunning) {
            intervalId = setInterval(() => {
                setTime(new Date());
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [isRunning]);

    const formattedTime = time.toLocaleTimeString();

    return (
        <>
            {formattedTime}
        </>
    );
};

export default Clock;

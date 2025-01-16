import { useState } from "react";
import Clock from "./Clock";

const TimeCard = (
    {
        timeCardStyle = "timeCardDark",
        timeCardTitle = "Unified Date",
        timeCardDate,
    }: {
        timeCardStyle: string;
        timeCardTitle: string;
        timeCardDate: React.ReactNode;
    },
) => {
    const [isRunning, setIsRunning] = useState(false);

    return (
        <div className={timeCardStyle}>
            <h2 className="doto-rounded text-3xl font-bold">{timeCardTitle}</h2>
            <p className="mt-2 mb-4 text-lg">
                {timeCardDate}{" "}
                {isRunning && (
                    <span className="text-orange-600 dark:text-orange-700 ml-2 ">
                        <Clock isRunning={isRunning} />
                    </span>
                )}
            </p>
            <a
                onClick={() => setIsRunning(!isRunning)}
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                tabIndex={0}
            >
                {isRunning ? "No clock" : "Add clock"}
            </a>
        </div>
    );
};

export default TimeCard;

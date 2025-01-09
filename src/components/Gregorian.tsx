import React, { useState } from "react";
import { getLocalDate } from "../UniDateConverter/Index";

const Gregorian: React.FC = () => {
    const [userDate, setUserDate] = useState(getLocalDate("iso"));
    const [error, setError] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (regex.test(userDate)) {
            setError("");
            console.log("Valid date:", userDate);
            setUserDate(userDate);
        } else {
            setError("Invalid date format. Please use YYYY-MM-DD");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="">
                <div className="mb-6">
                    <div className="text-gray-600 dark:text-gray-500 my-2">
                        Gregorian
                    </div>
                    <h3 className="text-xl font-bold">
                        Enter date (YYYY-MM-DD)
                    </h3>
                </div>

                <input
                    type="text"
                    id="date"
                    value={userDate}
                    onChange={(e) => setUserDate(e.target.value)}
                    className="mt-1 focus:ring-rose-500 focus:border-rose-500 block border-2 w-80 shadow-md sm:text-sm border-sky-100 dark:border-sky-500 dark:bg-slate-400 rounded-md"
                />
                {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

                <h3 className="text-sky-500 text-lg mb-2">
                    {getLocalDate("long", userDate)}
                </h3>
            </div>
            <div className="border border-gray-100 mb-5"></div>

            <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg">
                    </i>
                    Year-Month-Day
                </div>
                <button
                    type="submit"
                    className="h-[36px] appButton text-center text-sm"
                >
                    Update
                </button>
            </div>
        </form>
    );
};

export default Gregorian;

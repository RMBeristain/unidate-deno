import React, { useState } from "react";
import { Style, UnifiedDate, Variant } from "../UniDateConverter/Index";

const TileUnified = () => {
    let userUnidate = new UnifiedDate(); // Today's date by default.
    const [userDate, setUserDate] = useState<string>("");
    const [uniDate, setUniDate] = useState<UnifiedDate>(userUnidate);
    const handleSubmit = (event: React.FormEvent) => event.preventDefault();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newUserDate = event.target.value;
        setUserDate(newUserDate);
        let isValidDate = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(newUserDate);
        if (isValidDate) {
            userUnidate.reverse_unidate(newUserDate);
            setUniDate(userUnidate);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <div className="tileTitle">
                    Unified
                </div>
                <h3 className="text-xl font-extrabold text-sky-500 dark:text-sky-500">
                    {uniDate.format_date(Variant.UNI, Style.LONG)}
                </h3>
            </div>

            <input
                id="UnifiedDate"
                value={userDate}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(event)}
                className="mt-1 focus:ring-rose-500 focus:border-rose-500 block border-2
                        shadow-md sm:text-sm text-center border-sky-100 dark:border-sky-500 dark:bg-slate-400
                        dark:text-black rounded-md mb-8"
            />

            <div className="border border-gray-100 dark:border-gray-600 mb-5">
            </div>

            <h3 className="text-sky-500 mb-2">
                <div className="flex flex-col justify-between mb-1">
                    <div className="tileTitle">Austral:</div>
                    <div className="text-lg">
                        {uniDate.format_date(Variant.AUS, Style.LONG)}
                    </div>
                </div>
                <div className="flex flex-col justify-between mb-1">
                    <div className="tileTitle">Territorian:</div>
                    <div className="text-lg">
                        {uniDate.format_date(Variant.SWT, Style.LONG)}
                    </div>
                </div>
            </h3>

            <div className="border border-gray-100 dark:border-gray-600 mb-5">
            </div>

            <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="doto-rounded text-orange-700 dark:text-orange-600 mb-3">
                    <i className="fa-solid fa-location-dot text-lg">
                    </i>
                    YYYY-QM-DD
                </div>
                <button
                    type="submit"
                    className="h-[36px] appButton text-center text-sm"
                    onClick={() => {
                        setUserDate(
                            userUnidate.format_date(Variant.UNI, Style.ISO),
                        );
                        setUniDate(userUnidate);
                    }}
                >
                    Reset date
                </button>
            </div>
        </form>
    );
};

export default TileUnified;

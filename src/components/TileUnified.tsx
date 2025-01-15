import React, { useState } from "react";
import {
    getGregorianDate,
    Style,
    UnifiedDate,
    Variant,
} from "../UniDateConverter/Index";

const TileUnified = () => {
    const [userDate, setUserDate] = useState<UnifiedDate>(
        new UnifiedDate(getGregorianDate("iso")),
    );
    const handleSubmit = (event: React.FormEvent) => event.preventDefault();

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <div className="tileTitle">
                    Unified
                </div>
                <h3 className="text-xl font-extrabold text-sky-500 dark:text-sky-500">
                    {userDate.format_date(Variant.UNI, Style.LONG)}
                </h3>
            </div>

            <input
                id="UnifiedDate"
                defaultValue={new UnifiedDate(getGregorianDate("iso"))
                    .format_date(
                        Variant.UNI,
                        Style.ISO,
                    )}
                className="mt-1 focus:ring-rose-500 focus:border-rose-500 block border-2
                        shadow-md sm:text-sm text-center border-sky-100 dark:border-sky-500 dark:bg-slate-400
                        dark:text-black rounded-md mb-8"
            />

            <h3 className="text-sky-500 mb-2">
                <div className="flex flex-col justify-between mb-1">
                    <div className="tileTitle">Austral:</div>
                    <div className="text-lg">
                        {userDate.format_date(Variant.AUS, Style.LONG)}
                    </div>
                </div>
                <div className="flex flex-col justify-between mb-1">
                    <div className="tileTitle">Territorian:</div>
                    <div className="text-lg">
                        {userDate.format_date(Variant.SWT, Style.LONG)}
                    </div>
                </div>
            </h3>

            <div className="border border-gray-100 mb-5"></div>

            <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="doto-rounded text-orange-700 dark:text-orange-600 mb-3">
                    <i className="fa-solid fa-location-dot text-lg">
                    </i>
                    YYYY-QM-DD
                </div>
                <a
                    href=""
                    className="h-[36px] appButton text-center text-sm"
                >
                    Reset date
                </a>
            </div>
        </form>
    );
};

export default TileUnified;

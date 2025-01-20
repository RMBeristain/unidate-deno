import React, { useContext, useState } from "react";
import { Style, UnifiedDate, Variant } from "../UniDateConverter/Index";
import { UnidateContext } from "../Contexts";

const showHint = () => {
    const hint = globalThis.document.getElementById("formatHintUni");
    hint ? hint.innerHTML = "YYYY-QM-DD" : null;
};
const hideHint = () => {
    const hint = globalThis.document.getElementById("formatHintUni");
    hint ? hint.innerHTML = "&nbsp;" : null;
};
const showDateError = () => {
    globalThis.document.getElementById("dateError")?.removeAttribute(
        "hidden",
    );
    hideHint();
};
const hideDateError = () => {
    globalThis.document.getElementById("dateError")?.setAttribute(
        "hidden",
        "true",
    );
};

const TileUnified = () => {
    let workingUnidate = new UnifiedDate(); // Today's date by default.
    const { uniDate, setUniDate } = useContext(UnidateContext);
    const [userUniDate, setUserUniDate] = useState<UnifiedDate>(uniDate);
    const [userISODate, setUserISODate] = useState<string>(
        uniDate.format_date(Variant.UNI, Style.ISO),
    );

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        hideDateError();
        hideHint();
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newUserISODate = event.target.value;
        setUserISODate(newUserISODate);
        let isValidShape = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(newUserISODate);
        if (isValidShape) {
            try {
                workingUnidate.reverse_unidate(newUserISODate);
            } catch (error) {
                showDateError();
                return;
            }
            setUserUniDate(workingUnidate); // local
            setUniDate(workingUnidate); // context
            hideDateError();
            hideHint();
        } else {
            showDateError();
            showHint();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <div className="tileTitle">
                    Unified
                </div>
                <h3 className="text-xl font-extrabold text-sky-500 dark:text-sky-500">
                    {userUniDate.format_date(Variant.UNI, Style.LONG)}
                </h3>
            </div>

            <input
                id="UnifiedDate"
                value={userISODate}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(event)}
                className="mt-1 focus:ring-rose-500 focus:border-rose-500 block border-2
                        shadow-md sm:text-sm text-center border-sky-100 dark:border-sky-500 dark:bg-slate-400
                        dark:text-black rounded-md mb-8"
            />
            <div
                hidden
                id="dateError"
                className="text-red-500 dark:text-red-400"
            >
                INVALID DATE
            </div>

            <div className="border border-gray-100 dark:border-gray-600 mb-5">
            </div>

            <h3 className="text-sky-500 mb-2">
                <div className="flex flex-col justify-between mb-1">
                    <div className="tileTitle">Austral:</div>
                    <div className="text-lg">
                        {userUniDate.format_date(Variant.AUS, Style.LONG)}
                    </div>
                </div>
                <div className="flex flex-col justify-between mb-1">
                    <div className="tileTitle">Territorian:</div>
                    <div className="text-lg">
                        {userUniDate.format_date(Variant.SWT, Style.LONG)}
                    </div>
                </div>
            </h3>

            <div className="border border-gray-100 dark:border-gray-600 mb-5">
            </div>

            <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div
                    id="formatHintUni"
                    className="doto-rounded text-orange-700 dark:text-orange-600 mb-3"
                >
                    <i className="fa-solid fa-location-dot text-lg">
                    </i>
                    &nbsp;
                </div>
                <button
                    type="submit"
                    className="h-[36px] appButton text-center text-sm"
                    onClick={() => {
                        setUserISODate(
                            workingUnidate.format_date(Variant.UNI, Style.ISO),
                        );
                        setUserUniDate(workingUnidate);
                    }}
                >
                    Reset date
                </button>
            </div>
        </form>
    );
};

export default TileUnified;

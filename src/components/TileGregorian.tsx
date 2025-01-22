import React, { useContext } from "react";
import { getGregorianDate } from "../UniDateConverter/Index";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GregorianContext } from "../Contexts";

const Gregorian: React.FC = () => {
    const { gregISO, setGregISO } = useContext(GregorianContext);
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };

    let hint = globalThis.document.getElementById("formatHint");
    const showHint = () => {
        hint?.removeAttribute("hidden");
    };
    const hideHint = () => {
        hint?.setAttribute("hidden", "true");
    };

    const userGregorianDate = (date: Date | string) => {
        if (typeof date === "string") {
            return getGregorianDate("long", date);
        } else {
            return getGregorianDate("iso", date.toISOString());
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <div className="mb-6">
                    <div className="tileTitle">
                        Gregorian
                    </div>
                    <h3 className="text-xl font-extrabold text-sky-500 dark:text-sky-400">
                        {userGregorianDate(gregISO)}
                    </h3>
                </div>

                <DatePicker
                    id="GregorianDate"
                    dateFormat="yyyy-MM-dd"
                    selected={new Date(gregISO)}
                    onChange={(date: Date | null) => {
                        date &&
                            // `date` can be null if cleared. In that case we reset it to 'today' in iso format. This
                            // can be wrong due to local differences but it doesn't matter because we never get to
                            // display it. Instead, DatePicker will display the last date that had been selected which
                            // is better ux.
                            setGregISO(userGregorianDate(date));
                        showHint();
                    }}
                    onFocus={() => hideHint()}
                    onCalendarClose={() => hideHint()}
                    className="mt-1 focus:ring-rose-500 focus:border-rose-500 block border-2
                        shadow-md sm:text-sm text-center border-sky-100 dark:border-sky-500 dark:bg-slate-400
                        dark:text-black rounded-md mb-8"
                />
            </div>

            <div className="border border-gray-100 dark:border-gray-600 mb-5">
            </div>

            <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="doto-rounded text-orange-700 dark:text-orange-600 mb-3">
                    <i className="fa-solid fa-location-dot text-lg">
                    </i>
                    <span id="formatHint" hidden>YYYY-MM-DD</span>
                </div>
                <button
                    type="submit"
                    className="h-[36px] appButton text-center text-sm"
                    onClick={() => {
                        setGregISO(getGregorianDate("iso"));
                        hideHint();
                    }}
                >
                    Reset date
                </button>
            </div>
        </form>
    );
};

export default Gregorian;

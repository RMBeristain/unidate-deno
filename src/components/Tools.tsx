// import React from "react";

const Tools = () => {
    return (
        <section className="bg-sky-50 dark:bg-slate-600 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-sky-500 dark:text-sky-200 mb-6 text-center">
                    Convert Dates
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* <!-- Background --> */}
                    <div className="bg-white dark:bg-slate-700 rounded-xl shadow-md relative">
                        <div className="p-4">
                            <div className="mb-6">
                                <div className="text-gray-600 dark:text-gray-500 my-2">
                                    Background
                                </div>
                                <h3 className="text-xl dark:text-gray-300 font-bold">
                                    What <em>is</em> the{" "}
                                    <strong>Unified Calendar</strong>?
                                </h3>
                            </div>

                            <div className="mb-5 dark:text-gray-300">
                                <p className="mb-2">
                                    The calendar system used in the{" "}
                                    <strong>Unfied State</strong>{" "}
                                    has twenty months of exactly 18 days each,
                                    plus 5 or 6 extra festive days.
                                </p>
                                <p>
                                    Learn all about it here.
                                </p>
                            </div>

                            <div className="border border-gray-100 dark:border-gray-600 mb-5">
                            </div>

                            <div className="flex flex-col lg:flex-row justify-between mb-4">
                                <div className="text-orange-700 dark:text-orange-500 mb-3">
                                    <i className="fa-solid fa-location-dot text-lg">
                                    </i>
                                    &gt;
                                </div>
                                <a
                                    href="https://RMBeristain.com/apartoftheworld-unified-calendar"
                                    className="h-[36px] appButton text-center text-sm"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Gregorian --> */}
                    <div className="bg-white dark:bg-slate-700 rounded-xl shadow-md relative">
                        <div className="p-4">
                            <div className="mb-6">
                                <div className="text-gray-600 my-2">
                                    Gregorian
                                </div>
                                <h3 className="text-xl font-bold">
                                    Enter date (YYYY-MM-DD)
                                </h3>
                            </div>

                            <div className="mb-5">
                                2025-01-25
                            </div>

                            <h3 className="text-sky-500 text-lg mb-2">
                                Saturday 25 of January, 2025
                            </h3>

                            <div className="border border-gray-100 mb-5"></div>

                            <div className="flex flex-col lg:flex-row justify-between mb-4">
                                <div className="text-orange-700 mb-3">
                                    <i className="fa-solid fa-location-dot text-lg">
                                    </i>
                                    Year-Month-Day
                                </div>
                                <a
                                    href="job.html"
                                    className="h-[36px] appButton text-center text-sm"
                                >
                                    Update
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Job Listing 3 --> */}
                    <div className="bg-white dark:bg-slate-700 rounded-xl shadow-md relative">
                        <div className="p-4">
                            <div className="mb-6">
                                <div className="text-gray-600 my-2">
                                    Unified
                                </div>
                                <h3 className="text-xl font-bold">
                                    Enter date ("YYYY-QM-DD")
                                </h3>
                            </div>

                            <div className="mb-5">
                                7625-12-06
                            </div>

                            <h3 className="text-sky-500 mb-2">
                                <div className="flex flex-col lg:flex-row justify-between mb-1">
                                    <div>Unfied Long:</div>
                                    <div className="text-lg">
                                        Sixthday 06, Quarter one-B 7625
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row justify-between mb-1">
                                    <div>Territorian:</div>
                                    <div className="text-lg">
                                        Sixthday 06, Winter wane 7625
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row justify-between mb-1">
                                    <div>Austral:</div>
                                    <div className="text-lg">
                                        Sixthday 06, Summer wane 7625
                                    </div>
                                </div>
                            </h3>

                            <div className="border border-gray-100 mb-5"></div>

                            <div className="flex flex-col lg:flex-row justify-between mb-4">
                                <div className="text-orange-700 mb-3">
                                    <i className="fa-solid fa-location-dot text-lg">
                                    </i>
                                    Year-QuarterMonth-Day
                                </div>
                                <a
                                    href="job.html"
                                    className="h-[36px] appButton text-center text-sm"
                                >
                                    Update
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;

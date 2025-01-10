const TileBackground = () => {
    return (
        <>
            <div className="mb-6">
                <div className="tileTitle">
                    Background
                </div>
                <h3 className="text-xl dark:text-gray-300 font-bold">
                    What <em>is</em> the <strong>Unified Calendar</strong>?
                </h3>
            </div>

            <div className="mb-5 dark:text-gray-300">
                <p className="mb-2">
                    The calendar system used in the{" "}
                    <strong>Unfied State</strong>{" "}
                    has twenty months of exactly 18 days each, plus 5 or 6 extra
                    festive days.
                </p>
            </div>

            <div className="border border-gray-100 dark:border-gray-600 mb-5">
            </div>

            <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 dark:text-orange-500 mb-3">
                    <i className="fa-solid fa-location-dot text-lg">
                    </i>
                    Learn all about it here.
                </div>
                <a
                    href="https://RMBeristain.com/apartoftheworld-unified-calendar"
                    className="h-[36px] appButton text-center text-sm"
                >
                    Unified Calendar
                </a>
            </div>
        </>
    );
};

export default TileBackground;

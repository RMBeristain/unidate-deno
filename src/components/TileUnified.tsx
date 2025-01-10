const TileUnified = () => {
    return (
        <>
            <div className="mb-6">
                <div className="tileTitle">
                    Unified
                </div>
                <h3 className="text-xl font-extrabold text-sky-500 dark:text-sky-500">
                    Sixthday 06, Quarter one-B 7625
                </h3>
            </div>

            <div className="mb-5">
                7625-12-06
            </div>

            <h3 className="text-sky-500 mb-2">
                <div className="flex flex-col lg:flex-row justify-between mb-1">
                    <div>Austral:</div>
                    <div className="text-lg">
                        Sixthday 06, Summer wane 7625
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between mb-1">
                    <div>Territorian:</div>
                    <div className="text-lg">
                        Sixthday 06, Winter wane 7625
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
        </>
    );
};

export default TileUnified;

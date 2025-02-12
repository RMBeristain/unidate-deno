import Tile from "./Tile";
import TileBackground from "./TileBackground";
import Gregorian from "./TileGregorian";
import TileUnified from "./TileUnified";
import GregorianProvider from "../Contexts";

const Tools = () => {
    return (
        <GregorianProvider>
            <section className="bg-sky-50 dark:bg-slate-600 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="doto-rounded text-3xl font-bold text-sky-700 dark:text-sky-200 mb-6 text-center">
                        Convert Dates
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Tile>
                            <Gregorian />
                        </Tile>
                        <Tile>
                            <TileUnified />
                        </Tile>
                        <Tile>
                            <TileBackground />
                        </Tile>
                    </div>
                </div>
            </section>
        </GregorianProvider>
    );
};

export default Tools;

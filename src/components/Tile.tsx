import { ReactNode } from "react";

const Tile = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-white dark:bg-slate-700 rounded-xl shadow-md relative">
            <div className="p-4 dark:text-gray-300">
                {children}
            </div>
        </div>
    );
};

export default Tile;

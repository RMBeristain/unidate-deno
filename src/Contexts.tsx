import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
} from "react";
import { getGregorianDate } from "./UniDateConverter/GregorianDate";

export interface GregContextInterface {
    gregISO: string;
    setGregISO: Dispatch<SetStateAction<string>>;
}

const defaultGregISO = {
    gregISO: "2025-01-15",
    setGregISO: () => {},
} as GregContextInterface;

export const GregorianContext = createContext<GregContextInterface>(
    defaultGregISO,
);

type GregorianProviderProps = { children: ReactNode };

export default function GregorianProvider(
    { children }: GregorianProviderProps,
) {
    const [gregISO, setGregISO] = useState<string>(getGregorianDate("iso"));
    return (
        <GregorianContext.Provider value={{ gregISO, setGregISO}}>
            {children}
        </GregorianContext.Provider>
    )
}

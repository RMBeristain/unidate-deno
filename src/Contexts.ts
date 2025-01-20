import { createContext } from "react";
import { UnifiedDate } from "./UniDateConverter/Index";

interface UnidateContextType {
    uniDate: UnifiedDate;
    setUniDate: React.Dispatch<React.SetStateAction<UnifiedDate>>;
}

//
// NOTE: Remember that default values are immutable falllbacks. They cannot be changed.
//
export const UnidateContext = createContext<UnidateContextType>({
    uniDate: new UnifiedDate(),
    setUniDate: () => {},
}); // Share UnifiedDates between components.

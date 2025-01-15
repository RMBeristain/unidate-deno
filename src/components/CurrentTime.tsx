import { useState } from "react";
import TimeCard from "./TimeCard";
import {
    getGregorianDate,
    Style,
    UnifiedDate,
    Variant,
} from "../UniDateConverter/Index";

const CurrentTime = () => {
    const [todayDate] = useState<UnifiedDate>(
        new UnifiedDate(getGregorianDate("iso")),
    );
    return (
        <section className="py-4">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <TimeCard
                        timeCardStyle="timeCardLight"
                        timeCardTitle="Your Date"
                        timeCardDate={getGregorianDate("long")}
                    />
                    <TimeCard
                        timeCardStyle="timeCardDark"
                        timeCardTitle="Unified Date"
                        timeCardDate={todayDate.format_date(
                            Variant.UNI,
                            Style.LONG,
                        )}
                    />
                </div>
            </div>
        </section>
    );
};

export default CurrentTime;

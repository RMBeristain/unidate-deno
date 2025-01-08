import TimeCard from "./TimeCard";
import LocalDate from "./LocalDate";

const CurrentTime = () => {
    return (
        <section className="py-4">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <TimeCard
                        timeCardStyle="timeCardLight"
                        timeCardTitle="Your Date"
                        timeCardDate={<LocalDate />}
                    />
                    <TimeCard
                        timeCardStyle="timeCardDark"
                        timeCardTitle="Unified Date"
                        timeCardDate="Fourthday 04, Quarter two-B 7584"
                    />
                </div>
            </div>
        </section>
    );
};

export default CurrentTime;

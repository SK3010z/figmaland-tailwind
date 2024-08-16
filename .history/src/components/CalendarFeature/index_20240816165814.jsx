import { Button } from "../Button";
import { Heading } from "../Heading";

export const CalendarFeature = ({}) => {
    return (
        <section className="bg-white">
            <div className="flex flex-col">
                <Heading>Fatest way to organize</Heading>
                <p>
                    Most calendars are designed for teams. Slate is designed for
                    freelancers
                </p>
            </div>
            <Button>Try for free</Button>
        </section>
    );
};

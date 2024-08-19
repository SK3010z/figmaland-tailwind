import { Button } from "../Button";
import { Heading } from "../Heading";
import CalendarImage from "../../assets/images/features/calendar-feature-screenshot.png";

export const CalendarFeature = ({}) => {
    return (
        <section className="bg-white py-[90px] px-5">
            <div className="flex flex-col">
                <Heading type="h2">Fatest way to organize</Heading>
                <p className="mb-[60px] mt-4">
                    Most calendars are designed for teams. Slate is designed for
                    freelancers
                </p>
                <Button >Try for free</Button>
            </div>

            <img scr={CalendarImage} />
        </section>
    );
};

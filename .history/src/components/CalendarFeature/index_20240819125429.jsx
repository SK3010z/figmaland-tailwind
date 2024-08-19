import { Button } from "../Button";
import { Heading } from "../Heading";
// import { CalendarImage } from  "../../assets/images/features/calendar-feature-screenshot.png"

export const CalendarFeature = ({}) => {
    return (
        <section className="bg-white">
            <div className="flex flex-col">
                <Heading>Fatest way to organize</Heading>
                <p>
                    Most calendars are designed for teams. Slate is designed for
                    freelancers
                </p>
                <Button>Try for free</Button>
            </div>

            <img scr={CalendarImage}/>
        </section>
    );
};

//parou no video #10 min 7:00

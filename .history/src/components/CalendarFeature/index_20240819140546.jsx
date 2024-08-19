import { Button } from "../Button";
import { Heading } from "../Heading";
import CalendarImage from "../../assets/images/features/calendar-feature-screenshot.png";

export const CalendarFeature = ({}) => {
    return (
        <section className="bg-white py-[90px] px-5">
            <div className="w-full max-w-[400px] flex flex-col items-center mx-auto">
                <div className="flex flex-col">
                    <Heading type="h2" className="text-center">
                        Fatest way to organize
                    </Heading>
                    <Heading type="h4" className="mb-[60px] mt-4 text-center">
                        Most calendars are designed for teams. Slate is designed
                        for freelancers
                    </Heading>
                    <Button>Try for free</Button>
                </div>
            </div>

            <img src={CalendarImage} />
        </section>
    );
};

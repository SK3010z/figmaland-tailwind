import { Button } from "../Button";
import { Heading } from "../Heading";
import CalendarImage from "../../assets/images/features/calendar-feature-screenshot.png";

export const CalendarFeature = ({}) => {
    return (
        <section className="bg-white py-[90px] px-5">
            <div className="w-full max-w-[400px] flex flex-col justify-center items-center mx-auto lg:flex-row lg:max-w-[1243px] lg:gap-[50px]">
                <div className="flex flex-col">
                    <Heading type="h2" className="text-center lg:text-left">
                        Fatest way to organize
                    </Heading>
                    <Heading type="h4" className="mb-[60px] mt-4 text-center lg:text-left">
                        Most calendars are designed for teams. Slate is designed
                        for freelancers
                    </Heading>
                    <Button className="max-w-[236px]">Try for free</Button>
                </div>
                <img className="border-2 border-black" src={CalendarImage} />
            </div>
        </section>
    );
};

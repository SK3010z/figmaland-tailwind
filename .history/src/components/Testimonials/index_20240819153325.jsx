import { Button } from "../Button";
import { Heading } from "../Heading";
import IbmLogo from "../../assets/images/brands/IbmLogo.png";
import TestimonialPerson from "../../assets/images/testimonials/testimonial-1.png";

export const Testimonials = () => {
    return (
        <section className="bg-white">
            <div className="w-full max-w-[360px] mx-auto flex flex-col justify-center items-center gap-20">
                <Heading type="h2" className="w-fit">Testimonials</Heading>
                <div className="flex flex-col py-4 items-center justify-center gap-11">
                    <img src={IbmLogo} />
                    <p className="text-center text-sm text-secondaryText font-bold">
                        Most calendars are designed for teams. Slate is designed
                        for freelancers who want a simple way to plan their
                        schedule.
                    </p>
                    <div className="flex gap-3 justify-center items-center">
                        <img src={TestimonialPerson} />
                        <div>
                            <p>Organize Across</p>
                            <p>UI designer</p>
                        </div>
                    </div>
                </div>
                <Button>More Testimonials</Button>
            </div>
        </section>
    );
};

import { Button } from "../Button";
import { Heading } from "../Heading";
import IbmLogo from "../../assets/images/brands/IbmLogo.png"
import TestimonialPerson from "../../assets/images/testimonials/testimonial-1.png"

export const Testimonials = () => {
    return (
        <section className="bg-white">
            <Heading type="h2">Testimonials</Heading>
            <div>
                <img src={IbmLogo}/>
                <p>
                    Most calendars are designed for teams. Slate is designed for
                    freelancers who want a simple way to plan their schedule.
                </p>
                <div className="flex gap-3 justify-center items-center">
                    <img/>
                    <div>
                        <p>Organize Across</p>
                        <p>UI designer</p>
                    </div>
                </div>
            </div>
            <Button>More Testimonials</Button>
        </section>
    );
};

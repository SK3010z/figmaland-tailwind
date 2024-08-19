import { Button } from "../Button"
import { Heading } from "../Heading"

export const Testimonials = () => {
    return (
        <section className="bg-white">
            <Heading type='h2'>Testimonials</Heading>
            <div>
                <p>
                Most calendars are designed for teams. Slate is designed for freelancers 
                who want a simple way to plan their schedule.
                </p>
            </div>
            <Button>More Testimonials</Button>
        </section>
    )
}
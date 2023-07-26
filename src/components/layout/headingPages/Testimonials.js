import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
                <TestimonialCard name="John Doe" description="This is the best Mediterranean food that I've ever had!"/>
                <TestimonialCard name="Alan Alex" description="My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here."/>
                <TestimonialCard name="Casey Lao" description="I've had some great Mediterranean food before, but none of them beats
             Little Lemon in flavor and texture."/>
                <TestimonialCard name="Weekend" description="Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to."/>
                <TestimonialCard name="Ray Reynolds" description="The food here really refreshed me after a late night shift
                at the local supply depot."/>
                <TestimonialCard name="Miley Cyruss" description="I came to Little Lemon after a 5 hour flight from the East Coast.
                 The food here tasted so delicious after the trip here."/>
                <TestimonialCard name="Tylor swifft" description="The food here was fire!! Everyone should try this place
                 out at least once if they live in Chicago."/>
                <TestimonialCard name="Jack Daniels" description="This restaurant served as a perfect for dinner"/>
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}
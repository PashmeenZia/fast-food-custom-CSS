import React from "react";

const About = () => {
  return (
    <div>
      <section className="about" style={{backgroundImage:"url(image-bg.avif)"}}>
        <div className="about-content">
          <h2 className="fade-in">AboutUs</h2>
          <p>
            Our pizzas are made with love, using the freshest ingredients:
            hand-kneaded dough, ripe San Marzano tomatoes, creamy mozzarella,
            and a touch of Italian herbs. Each pizza is baked to perfection,
            achieving that perfect balance of crispy crust and gooey toppings.
            Whether you prefer the simplicity of a Margherita or the bold
            flavors of a loaded Diavola, we have something for every pizza
            lover. At [Italian Pizza], we believe in celebrating the joy of
            sharing great pizza with family and friends. Come and experience the
            true taste of Italy – one slice at a time!
          </p>
        </div>
      </section>
    </div>
  );
};
export default About;

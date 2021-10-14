import { foodImages } from './Data';
import './about.css';
function About() {
  console.log(foodImages, 'hello');
  return (
    <>
      <section className="about-hero flex justify-center items-center text-white font-bold text-4xl">
        About
      </section>
      <article className="container1 py-8">
        <h3 className="text-center text-2xl mb-8">Our Story</h3>
        <p className="my-5">
          Molu house was opened on 16 December year 2020 Located in New Police
          colony, near Allahabad bank, AIIMS Patna. Molu House takes its pride
          for using freshest ingredients and freshest vegetables to individually
        </p>
        <p className="my-5">
          Our Popular menu items include Chilly Chicken, Manchurian Chicken,
          Lollypop Chicken, Chicken Pakora, Fish Pakora, Hakka Noodles, and many
          more ,Veg & ChickenNoodles, Sandwich, Samosa, Chicken rolls, Veg
          rolls, manchau soup, Veg Manchurian and many more.
        </p>
      </article>
      <section className="container1">
        <ul className="about-gallery">
          {foodImages.map((elm, i) => {
            return (
              <li key={i} className="about-sub-gallery">
                <img src={elm} alt="" />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default About;

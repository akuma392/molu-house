import Slider from './Slider';
import { ContactUs } from './Contact';
import Hero from './Hero';

function Home(props) {
  return (
    <>
      <Hero />

      {/* <div className="container1 h-64">
        <Slider />
      </div> */}
      <Slider />

      <article class="about">
        <div class="container1 flex2">
          <div class="flex-46">
            <h3>Our Story</h3>
            <p>
              Molu house was opened on 16 December year 2020 Located in New
              Police colony, near Allahabad bank, AIIMS Patna. Molu House takes
              its pride for using freshest ingredients and freshest vegetables
              to individually
            </p>
            <p>
              Our Popular menu items include Chilly Chicken, Manchurian Chicken,
              Lollypop Chicken, Chicken Pakora, Fish Pakora, Hakka Noodles, and
              many more ,Veg & ChickenNoodles, Sandwich, Samosa, Chicken rolls,
              Veg rolls, manchau soup, Veg Manchurian and many more.
            </p>
            <div class="about-link">
              <a href="#">About US</a>
            </div>
          </div>
          <div class="flex-46">
            <img src="media/about-bg.jpeg" alt="about" />
          </div>
        </div>
      </article>

      <section className="menu">
        <div className="container1 flex2">
          <section className="grid flex-46">
            <img src="media/menu1.jpeg" alt="menu1" />
            <img src="media/menu2.jpeg" alt="menu2" />
            <img src="media/menu3.jpeg" alt="menu3" />
            <img src="media/menu4.jpeg" alt="menu4" />
          </section>
          <article className="flex-46">
            <h3>Menu</h3>
            <p>
              For those with pure food indulgence in mind, come next door and
              sate your desires with our ever changing internationally and
              seasonally inspired small plates. We love food, lots of different
              food, just like you.
            </p>
            <div className="menu-link">
              <a href="#"> VIEW THE FULL MENU </a>
            </div>
          </article>
        </div>
      </section>
      <ContactUs />
    </>
  );
}

export default Home;

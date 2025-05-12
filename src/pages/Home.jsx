import HeroSlider from '../components/HeroSlider';
import About from '../components/About';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <main>
      <HeroSlider />
      <Products />
      <About />
      <Testimonials />
    </main>
  );
};

export default Home; 
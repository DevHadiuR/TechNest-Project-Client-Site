import { Helmet } from "react-helmet-async";
import Products from "../../allComponents/products/Products";
import Cart from "../../allComponents/cart/Cart";
import About from "../../allComponents/about/About";
import Contact from "../../allComponents/contact/Contact";
import Banner from "../../allComponents/banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TectNest | Home Page</title>
      </Helmet>
      <div className="space-y-20">
        <section>
          <Banner></Banner>
        </section>
        <section id="products">
          <Products></Products>
        </section>

        <section id="cart">
          <Cart></Cart>
        </section>
        <section id="about">
          <About></About>
        </section>
        <section id="contact">
          <Contact></Contact>
        </section>
      </div>
    </div>
  );
};

export default Home;

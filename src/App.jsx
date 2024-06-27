import "./App.css";
import {
  CustomeReviews,
  Hero,
  SpecialOffer,
  PopularProducts,
  SuperQuality,
  Services,
  Subsctibe,
  Footer,
} from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b"><Hero/> </section>
    <section className="padding"><PopularProducts/> </section>
    <section className="padding"><SuperQuality/></section>
    <section className="padding"><Services/></section>
    <section className="padding padding-x py-10"><SpecialOffer/></section>
    <section className=" bg-pale-blue padding"><CustomeReviews/></section>
    <section className="padding-x sm:py-32 py-16 w-full"><Subsctibe/></section>
    <section className="padding-x bg-black padding-t tb-8 text-white">
    <Footer/>
    </section>
  </main>
);

export default App;

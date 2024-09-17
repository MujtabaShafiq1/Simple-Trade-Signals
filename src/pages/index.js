import Banner from "sts/components/banner";
import Introduction from "sts/components/introduction";
import Offer from "sts/components/offer";
import Pricing from "sts/components/pricing";
import Contact from "sts/components/contact";
import About from "sts/components/about";

export default function Home() {
  return (
    <main className={`flex min-h-screen min-w-full flex-col`}>
      <Banner />
      <Introduction />
      <Offer />
      <About />
      <Pricing />
      <Contact />
    </main>
  );
}

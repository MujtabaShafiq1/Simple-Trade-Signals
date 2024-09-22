import Banner from "sts/components/banner";
import Offer from "sts/components/offer";
import About from "sts/components/about";
import Pricing from "sts/components/pricing";
import Contact from "sts/components/contact";
import Introduction from "sts/components/introduction";
import TradeImages from "sts/components/trades/images";

export default function Home() {
  return (
    <main className={`flex min-h-screen min-w-full flex-col`}>
      <Banner />
      <Introduction />
      <Offer />
      <About />
      <TradeImages />
      <Pricing />
      <Contact />
    </main>
  );
}

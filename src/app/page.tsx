import ServiceCard from "@/components/card";
import Hero from "./Hero";
import Title from "@/components/title";

import { bestResorts, dhikalaLodge, familyCoupleTourPackage1, familyCoupleTourPackage2 } from "@/lib/cardValues";
import Footer from "@/components/layout/Footer";
import About from "./About";



export default function Home() {
  return (
    <>
      <Hero />
      <Title subTitle="Talk to Wildlife Expert & Advisor" mainTitle="Miss Saniya 7055660980" />
      <div className="p-7">
        <div className="w-full flex gap-8 flex-wrap justify-center">
          {
            familyCoupleTourPackage1.map((card) => (
              <ServiceCard key={card.title} title={card.title} btnValue={card.btnValue} img={card.img} />
            ))
          }
        </div>
        <div className=" md:tracking-wide  leading-8 text-center mx-auto my-8">
          <p className="max-md:text-xs">Explore the wonders of Jim Corbett National Park with our comprehensive travel guide. Book thrilling Jungle Safaris and Night Stays online, including Dhikala Canter safaris and Corbett Jeep safaris, each offering unique experiences across different zones. Secure your stay at the renowned Dhikala forest lodge, or choose from a selection of Hotels & Resorts nestled amidst the beauty of Jim Corbett. Embark on your Corbett adventure hassle-free with our curated Tour Packages.</p>
          <h1 className="text-4xl max-md:text-2xl text-secondary mt-3 font-semibold">Jim Corbett Family & Couple Tour packages</h1>
        </div>
        <div className="w-full flex gap-8 flex-wrap justify-center">
          {
            familyCoupleTourPackage2.map((card) => (
              <ServiceCard key={card.title} title={card.title} btnValue={card.btnValue} img={card.img} />
            ))
          }
        </div>
      </div>
      <Title subTitle="Stay Inside" mainTitle="Corbett Nation Park" />
      <div className="p-7">
        <div className="w-full flex gap-8 flex-wrap justify-center">
          {
            dhikalaLodge.map((card) => (
              <ServiceCard key={card.title} title={card.title} btnValue={card.btnValue} img={card.img} />
            ))
          }
        </div>
      </div>
      <Title subTitle="The Best" mainTitle="Jim Corbett Resorts" />
      <div className="w-full flex gap-8 flex-wrap justify-center my-8">
        {
          bestResorts.map((card) => (
            <ServiceCard key={card.title} title={card.title} btnValue={card.btnValue} img={card.img} />
          ))
        }
      </div>
      <Title subTitle="Lets Know About" mainTitle="Jim Corbett Nation Park" />
      <About />
      <Footer />
    </>
  );
}

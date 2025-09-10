import Image from "next/image";
import ContactButton from "./_components/ContactButton";
import HeroSection from "./_components/HeroSection";
import IntroSection from "./_components/IntroSection";
import ProductsSection from "./_components/ProductsSection";
import ServicesSection from "./_components/ServicesSection";
import StihlSection from "./_components/StihlSection";
import mihanimata from "@/public/products/mihanimata.png";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <StihlSection />
      <ServicesSection />
      <ContactButton />
      <ProductsSection />
      <section className="-mx-6 bg-main-700/10 py-10">
        <div className="max-w-7xl mx-auto ">
          <h2 className="text-center text-3xl text-main-900 font-semibold pb-10">
            Τα νέα μας
          </h2>
          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-8 items-center">
            <div className="flex flex-col gap-4 p-6 bg-black/20 w-full lg:w-96 rounded-xl hover:scale-102 duration-300 cursor-pointer">
              <Image
                src={mihanimata}
                alt="something"
                className="w-96 rounded-xl"
              />
              <p className="text-main-600 text-2xl font-semibold">Title</p>
              <p className="text-main-700 line-clamp-10">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                veniam eum, totam doloribus libero eos. Magnam commodi
                consectetur enim, perspiciatis vel obcaecati incidunt quaerat
                ipsam voluptas, nisi laboriosam dolorem illum nam a? Nesciunt,
                nostrum aspernatur deleniti incidunt voluptates officia
                voluptatum quis doloremque totam cum eius ex, repellendus eos
                non ratione?
              </p>
            </div>
            <div className="flex flex-col gap-4 p-6 bg-black/20 w-full lg:w-96 rounded-xl hover:scale-102 duration-300 cursor-pointer">
              <Image
                src={mihanimata}
                alt="something"
                className="w-96 rounded-xl"
              />
              <p className="text-main-600 text-2xl font-semibold">Title</p>
              <p className="text-main-700 line-clamp-10">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                veniam eum, totam doloribus libero eos. Magnam commodi
                consectetur enim, perspiciatis vel obcaecati incidunt quaerat
                ipsam voluptas, nisi laboriosam dolorem illum nam a? Nesciunt,
                nostrum aspernatur deleniti incidunt voluptates officia
                voluptatum quis doloremque totam cum eius ex, repellendus eos
                non ratione?
              </p>
            </div>
            <div className="flex flex-col gap-4 p-6 bg-black/20 w-full lg:w-96 rounded-xl hover:scale-102 duration-300 cursor-pointer">
              <Image
                src={mihanimata}
                alt="something"
                className="w-96 rounded-xl"
              />
              <p className="text-main-600 text-2xl font-semibold">Title</p>
              <p className="text-main-700 line-clamp-10">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                veniam eum, totam doloribus libero eos. Magnam commodi
                consectetur enim, perspiciatis vel obcaecati incidunt quaerat
                ipsam voluptas, nisi laboriosam dolorem illum nam a? Nesciunt,
                nostrum aspernatur deleniti incidunt voluptates officia
                voluptatum quis doloremque totam cum eius ex, repellendus eos
                non ratione? Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Odit veniam eum, totam doloribus libero eos. Magnam
                commodi consectetur enim, perspiciatis vel obcaecati incidunt
                quaerat ipsam voluptas, nisi laboriosam dolorem illum nam a?
                Nesciunt, nostrum aspernatur deleniti incidunt voluptates
                officia voluptatum quis doloremque totam cum eius ex,
                repellendus eos non ratione?
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";
import consulting from "@/public/consulting.png";
import garden_con from "@/public/garden_con.png";
import ardeutika from "@/public/ardeutika.png";
import udroponia from "@/public/udroponia.png";

function ServicesSection() {
  return (
    <section className="bg-main-700/10 -mx-6 my-22 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl text-main-900 py-6 font-semibold">
          Οι υπηρεσίες μας
        </h2>
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:gap-6 space-y-14 lg:space-y-0 py-4">
          <div className="flex flex-col items-center gap-3">
            <Image
              src={consulting}
              placeholder="blur"
              alt="demo"
              className="max-w-[300px] rounded-xl hover:scale-105 duration-300"
            />
            <h2 className="text-2xl text-main-600">Γεωπονικές μελετες</h2>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src={garden_con}
              placeholder="blur"
              alt="demo"
              className="max-w-[300px] rounded-xl hover:scale-105 duration-300"
            />
            <h2 className="text-2xl text-main-600">Κατασκευές κήπων</h2>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src={ardeutika}
              placeholder="blur"
              alt="demo"
              className="max-w-[300px] rounded-xl hover:scale-105 duration-300"
            />
            <h2 className="text-2xl text-main-600">Αρδευτικά δίκτυα</h2>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src={udroponia}
              placeholder="blur"
              alt="demo"
              className="max-w-[300px] rounded-xl hover:scale-105 duration-300"
            />
            <h2 className="text-2xl text-main-600">Υδροπονική καλλιέργεια</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

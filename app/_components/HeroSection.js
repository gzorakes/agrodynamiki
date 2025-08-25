import Image from "next/image";
import bg2 from "@/public/bg2.jpg";

function HeroSection() {
  return (
    <div className="relative -mx-6 -my-12 h-[300px] lg:h-[500px]">
      <Image
        src={bg2}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-center"
        alt="Mountains and forests"
      />

      <div className="absolute inset-0 flex flex-col items-center lg:justify-center m-36 lg:m-0 z-20 text-main-600 ">
        <h1 className=" text-3xl lg:text-7xl tracking-wide">ΑΓΡΟΔΥΝΑΜΙΚΗ</h1>
        <h2 className="w-max lg:text-2xl">ΑΝΔΡΟΥΛΑΚΗΣ ΕΛΕΥΘΕΡΙΟΣ & ΣΙΑ Ο.Ε</h2>
      </div>

      <div className="absolute inset-0 bg-white/50 z-10"></div>
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-main-700/100 to-transparent z-10"></div>
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-main-100/100 to-transparent z-10"></div>
    </div>
  );
}

export default HeroSection;

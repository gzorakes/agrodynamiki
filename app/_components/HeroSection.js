import Image from "next/image";
import agricultural_field from "@/public/agricultural_field.png";

function HeroSection({
  height = "lg:h-[500px]",
  titleSpanGreen = "ΑΓΡΟ",
  titleMain = "ΔΥΝΑΜΙΚΗ",
  subtitle = "ΑΝΔΡΟΥΛΑΚΗΣ ΕΛΕΥΘΕΡΙΟΣ & ΣΙΑ Ο.Ε",
}) {
  return (
    <section className={`relative -mx-6 -my-12 h-[300px] ${height}`}>
      <Image
        src={agricultural_field}
        fill
        placeholder="blur"
        quality={100}
        className="object-cover object-top"
        alt="Mountains and forests"
      />

      <div className="absolute inset-0 flex flex-col items-center lg:justify-center m-36 lg:m-0 z-20 text-main-600 ">
        <h1 className=" text-4xl lg:text-8xl tracking-wide font-sans font-bold drop-shadow-[0_0_10px_black]">
          <span className="text-main-900 ">{titleSpanGreen}</span>
          {titleMain}
        </h1>
        <h2 className="w-max sm:text-2xl text-sm font-sans font-semibold drop-shadow-[0_0_10px_black]">
          {subtitle}
        </h2>
      </div>

      {/* <div className="absolute inset-0 bg-white/0 z-10"></div> */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-main-700/100 to-transparent z-10"></div>
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-main-100/100 to-transparent z-10"></div>
    </section>
  );
}

export default HeroSection;

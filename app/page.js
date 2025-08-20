import Link from "next/link";
import Image from "next/image";
import bg2 from "@/public/bg2.jpg";

export default function Page() {
  return (
    <main className="mt-10">
      {/* <Image
        src={bg2}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      /> */}

      {/* <div className="absolute inset-0 bg-gradient-to-t from-white/40 from-10% via-white/20 via-80% to-white/10" /> */}

      <div className="text-center">
        <h1 className="lg:text-6xl text-3xl text-main-700 mb-1 tracking-wide">
          <span className="text-main-700">ΑΓΡΟ</span>
          ΔΥΝΑΜΙΚΗ
        </h1>
        <h2 className="lg:text-2xl text-main-700 ">
          Ανδρουλάκης Ελευθέριος & ΣΙΑ Ο.Ε.
        </h2>
      </div>
    </main>
  );
}

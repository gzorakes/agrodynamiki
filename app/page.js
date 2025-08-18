import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.jpg";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center md:mt-[-20]">
        <h1 className="text-6xl lg:block text-custom-white mb-1 tracking-wide font-normal hidden">
          <span className="text-accent-300">ΑΓΡΟ</span>
          ΔΥΝΑΜΙΚΗ
        </h1>
        <h2 className="text-2xl text-custom-white hidden lg:block">
          Ανδρουλάκης Ελευθέριος & ΣΙΑ Ο.Ε.
        </h2>
      </div>
    </main>
  );
}

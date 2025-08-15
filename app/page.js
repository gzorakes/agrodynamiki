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
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center  md:mt-[-20]">
        <h1 className="sm:text-6xl text-3xl  text-primary-100 mb-1 tracking-tight font-normal">
          <span className="text-accent-500">ΑΓΡΟ</span>
          ΔΥΝΑΜΙΚΗ
        </h1>
        <h2 className="sm:text-2xl text-primary-100">
          Ανδρουλάκης Ελευθέριος & ΣΙΑ Ο.Ε.
        </h2>
        {/* <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link> */}
      </div>
    </main>
  );
}

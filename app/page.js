import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import IntroSection from "./_components/IntroSection";
import stihl_logo from "@/public/stihl_logo.png";
import stihl_tools3 from "@/public/stihl_tools3.jpg";
import stihl_tools2 from "@/public/stihl_tools2.jpg";
import stihl_service1 from "@/public/stihl_service1.jpg";
import stihl_service2 from "@/public/stihl_service2.jpg";

export default function Page() {
  return (
    <main className="">
      <HeroSection />
      <IntroSection />
      <div className="mt-16 lg:mt-22 max-w-7xl mx-auto">
        <h1 className="text-main-600 text-center font-semibold">
          Επίσημος αντιπρόσωπος
        </h1>
        <Image
          src={stihl_logo}
          placeholder="blur"
          quality={100}
          className="md:w-2/3 mx-auto mb-8"
          alt="Stihl logo"
        />

        <div className="text-main-700 text-justify space-y-5 lg:grid lg:grid-cols-4 gap-12">
          <p className="my-10 order-1 lg:col-span-2">
            Στο κατάστημά μας θα βρείτε τα κορυφαία προϊόντα της STIHL, καθώς
            έχουμε την τιμή και την περηφάνια να κατέχουμε την επίσημη
            αντιπροσωπεία της στην Ελλάδα. Η STIHL αποτελεί συνώνυμο αξιοπιστίας
            και ποιότητας στον χώρο των μηχανημάτων δασοκομίας, γεωργίας και
            κηπουρικής.
          </p>
          <Image
            src={stihl_tools2}
            placeholder="blur"
            quality={100}
            className="rounded-[60px] lg:w-[300px] lg:order-3"
            alt="Stihl tools"
          />
          <Image
            src={stihl_tools3}
            placeholder="blur"
            quality={100}
            className="rounded-[60px] lg:w-[300px] lg:order-4"
            alt="Stihl tools"
          />
          <p className="my-10 order-2 lg:col-span-2">
            Μέσα από τη συνεργασία μας, σας προσφέρουμε πλήρη γκάμα μηχανημάτων,
            από αλυσοπρίονα και θαμνοκοπτικά μέχρι φυσητήρες και χορτοκοπτικά,
            μαζί με γνήσια ανταλλακτικά, τεχνική υποστήριξη και εξειδικευμένο
            service.
          </p>
          <Image
            src={stihl_service1}
            placeholder="blur"
            quality={100}
            className="rounded-[60px] lg:w-[300px] lg:order-5"
            alt="Stihl tools"
          />
          <Image
            src={stihl_service2}
            placeholder="blur"
            quality={100}
            className="rounded-[60px] lg:w-[300px] lg:order-6"
            alt="Stihl tools"
          />
        </div>
      </div>
    </main>
  );
}

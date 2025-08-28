import Image from "next/image";
import stihl_logo from "@/public/stihl_logo.png";
import stihl_tools3 from "@/public/stihl_tools3.png";
import stihl_tools2 from "@/public/stihl_tools2.png";
import stihl_service1 from "@/public/stihl_service1.png";
import stihl_service2 from "@/public/stihl_service2.png";

function StihlSection() {
  return (
    <section className="mt-16 lg:mt-22 max-w-7xl mx-auto">
      <h1 className="text-main-600 text-center font-semibold">
        Επίσημος αντιπρόσωπος
      </h1>
      <Image
        src={stihl_logo}
        placeholder="blur"
        quality={100}
        className="md:w-2/3 mx-auto"
        alt="Stihl logo"
      />

      <div className="text-main-700 text-justify space-y-5 lg:grid lg:grid-cols-4 gap-8 lg:gap-6">
        <p className="my-10 lg:my-0 order-1 lg:order-5 lg:col-span-2 lg:max-w-4xl mx-auto p-4 bg-main-700/10 rounded-xl font-semibold">
          Στο κατάστημά μας θα βρείτε τα κορυφαία προϊόντα της STIHL, καθώς
          έχουμε την τιμή να κατέχουμε την επίσημη αντιπροσωπεία της στην
          Ελλάδα. Η STIHL αποτελεί συνώνυμο αξιοπιστίας και ποιότητας στον χώρο
          των μηχανημάτων δασοκομίας, γεωργίας και κηπουρικής.
        </p>
        <Image
          src={stihl_tools2}
          placeholder="blur"
          quality={100}
          className="rounded-xl lg:w-[300px] lg:order-1"
          alt="Stihl tools"
        />
        <Image
          src={stihl_tools3}
          placeholder="blur"
          quality={100}
          className="rounded-xl lg:w-[300px] lg:order-2"
          alt="Stihl tools"
        />
        <p className="my-10 lg:my-0 order-2 lg:order-6 lg:col-span-2 lg:max-w-4xl mx-auto p-4 bg-main-700/10 rounded-xl font-semibold">
          Μέσα από τη συνεργασία μας, σας προσφέρουμε πλήρη γκάμα μηχανημάτων,
          από αλυσοπρίονα και θαμνοκοπτικά μέχρι φυσητήρες και χορτοκοπτικά,
          μαζί με γνήσια ανταλλακτικά, τεχνική υποστήριξη και εξειδικευμένο
          service.
        </p>
        <Image
          src={stihl_service1}
          placeholder="blur"
          quality={100}
          className="rounded-xl lg:w-[300px] lg:order-3"
          alt="Stihl tools"
        />
        <Image
          src={stihl_service2}
          placeholder="blur"
          quality={100}
          className="rounded-xl lg:w-[300px] lg:order-4"
          alt="Stihl tools"
        />
      </div>
    </section>
  );
}

export default StihlSection;

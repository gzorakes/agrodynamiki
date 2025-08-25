import Image from "next/image";
import katastima from "@/public/katastima.jpg";

function IntroSection() {
  return (
    <div className="mt-24 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center max-w-7xl mx-auto">
      <Image
        src={katastima}
        placeholder="blur"
        quality={80}
        className="w-[400px] lg:w-[500px] rounded-[60px]"
        alt="Mountains and forests"
      />
      <div className="flex flex-col gap-5 text-main-700">
        <p className="text-2xl text-center lg:text-start text-main-900">
          Aγροδυναμική από το 1989!
        </p>
        <ul className="mx-auto lg:text-start lg:mx-0 font-semibold">
          <li>• Γεωργικά Εφόδια</li>
          <li>• Κατασκευή Κήπων</li>
          <li>• Γεωπονική Υποστήριξη</li>
        </ul>
        <p className="text-justify">
          Η εταιρία Ανδρουλάκης Ελευθέριος & ΣΙΑ Ο.Ε, δραστηριοποιείται στον
          χώρο της γεωπονίας, από το 1989, στην περιοχή της Χερσονήσου, με σκοπό
          την προμήθεια γεωργικών εφοδίων και την παροχή διάφορων υπηρεσιών ,
          όπως η κατασκευή κήπων και η παροχή γεωπονικών συμβουλών .
        </p>
        <p className="text-justify">
          Προσφέρει ολοκληρωμένες υπηρεσίες σε επαγγελματίες και ερασιτέχνες
          αγρότες και κηπουρούς και λόγω της τουριστικής περιοχής που βρίσκεται,
          εξυπηρετεί και ξενοδοχειακές επιχειρήσεις.
        </p>
        <p className="text-justify">
          Η συνεχώς ανανεωμένη γκάμα των προϊόντων μας , η τεχνογνωσία μας , η
          υψηλή ποιότητα των προϊόντων μας , καθώς και η 30 ετών εμπειρία μας ,
          μας καθιστά πρωτοπόρους στο είδος μας.
        </p>
        <p className="text-justify">
          Το πάθος μας για δουλειά , οι εκατοντάδες ευχαριστημένοι πελάτες μας
          και η συνεχώς αναπτυσσόμενη πορεία μας , μας δίνουν δύναμη να
          συνεχίσουμε την ολοένα και θετικότερη πορεία στον χώρο μας .
        </p>
      </div>
    </div>
  );
}

export default IntroSection;

import Image from "next/image";
import futoprostateutika from "@/public/products/futoprostateutika.png";
import lipasmata from "@/public/products/lipasmata.png";
import mihanimata from "@/public/products/mihanimata.png";
import ardeutika_eidh from "@/public/products/ardeutika_eidh.png";
import eidh_kipou from "@/public/products/eidh_kipou.png";
import sporoi_futa from "@/public/products/sporoi_futa.png";
import zwotrofes from "@/public/products/zwotrofes.png";
import kokofoinikas from "@/public/products/kokofoinikas.png";
import atomiki_prostasia from "@/public/products/atomiki_prostasia.png";
import perifraksi from "@/public/products/perifraksi.png";
import dexamenes_varelia from "@/public/products/dexamenes_varelia.png";
import dimosia_ugeia from "@/public/products/dimosia_ugeia.png";

const products = [
  { title: "Φυτοπροστατευτικά", image: futoprostateutika },
  { title: "Λιπάσματα", image: lipasmata },
  { title: "Μηχανήματα & εργαλεία", image: mihanimata },
  { title: "Αρδευτικά είδη", image: ardeutika_eidh },
  { title: "Είδη κήπου", image: eidh_kipou },
  { title: "Σπόροι - Φυτά", image: sporoi_futa },
  { title: "Ζωοτροφές - Είδη petshop", image: zwotrofes },
  { title: "Υποστρώματα κοκοφοίνικα", image: kokofoinikas },
  { title: "Είδη ατομικής προστασίας", image: atomiki_prostasia },
  { title: "Είδη περίφραξης", image: perifraksi },
  { title: "Δεξαμενές - Συσκευασία", image: dexamenes_varelia },
  { title: "Δημόσια υγεία", image: dimosia_ugeia },
];

function ProductsSection() {
  return (
    <section className="py-18 -mx-6">
      <h2 className="text-center text-3xl text-main-900 font-semibold mb-14">
        Τα προιόντα μας
      </h2>
      <div className="overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <ul className="flex gap-10 text-main-600 animate-infinite-scroll hover:infinite-scroll-paused">
          {[...products, ...products].map((product, index) => (
            <li
              key={`${product.title}-${index}`}
              className="flex flex-col items-center gap-3 bg-black/20 px-12 py-4 rounded-xl"
            >
              <Image
                src={product.image}
                alt={product.title}
                className="rounded-full max-w-32 lg:max-w-52"
              />
              <p className="text-center font-semibold">{product.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProductsSection;

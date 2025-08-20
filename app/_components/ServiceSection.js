import Image from "next/image";

function ServiceSection({ title, image, alt, reverse = false, children }) {
  return (
    <section className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center lg:mb-22 mb-10">
      <div className={reverse ? "lg:order-2" : ""}>
        <h1 className="text-3xl text-main-600 mb-6">{title}</h1>

        <div className="lg:hidden mb-4">
          <Image src={image} alt={alt} placeholder="blur" />
        </div>

        <div className="text-main-700">{children}</div>
      </div>

      <div className={`hidden lg:block ${reverse ? "lg:order-1" : ""}`}>
        <Image src={image} alt={alt} placeholder="blur" />
      </div>
    </section>
  );
}

export default ServiceSection;

import styles from "./motto.module.css";
import Image from "next/image";

export const Motto = () => {
  return (
    <div className={styles.mottoContainer}>
      <div className={styles.textPlaceholder}>
        <div className="text-sm md:text-xl leading-loose p-3 md:px-5 md:py-3 font-serif font-light text-secondary text-justify italic">
          <p className="indent-8">
            „Într-o lume în continuă schimbare,
            <span className="font-medium"> Ghiciuc și Asociații </span>
            este partenerul de încredere care vă oferă soluții juridice
            inovative și personalizate, adaptate nevoilor dumneavoastră.
          </p>
          <p className="indent-8 mt-1 md:mt-8">
            Echipa noastră de avocați este dedicată protejării drepturilor și
            intereselor clienților, abordând fiecare caz cu profesionalism,
            integritate și atenție la detalii.
          </p>
          <p className="indent-8 mt-1 md:mt-8">
            Vă invităm să explorați serviciile noastre și să descoperiți cum
            putem contribui la rezolvarea celor mai complexe provocări juridice,
            cu un angajament total față de succesul dumneavoastră.”
          </p>
        </div>
      </div>
      <div className={styles.imagePlaceholder}>
        <div className={styles.imageWrapper}>
          <Image
            src="/avocat-iasi.webp"
            alt="Avocat Iasi"
            fill
            priority
            sizes="(max-width: 768px) 100vw"
            className={styles.responsiveImage}
          />
        </div>
      </div>
    </div>
  );
};

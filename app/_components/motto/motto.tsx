import styles from "./motto.module.css";

export const Motto = () => {
  return (
    <div
      className={`${styles.mottoContainer} grid grid-rows-2 grid-cols-1 md:flex md:flex-row md:justify-between`}
    >
      <div
        className={`${styles.textPlaceholder} w-full md:w-1/2 p-3 md:p-16 content-center`}
      >
        <div className=" text-sm md:text-2xl leading-loose font-serif font-light text-secondary text-justify italic">
          <p className="indent-8">
            „Într-o lume în continuă schimbare,
            <span className=" font-medium"> Ghiciuc și Asociații </span>
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
      <div className={`${styles.imagePlaceholder} w-full  md:w-1/2`}></div>
    </div>
  );
};

"use client";
import styles from "@/app/home.module.css";
import style from "@/app/_components/servicii/servicii.module.css";
import {
  DreptAdministrativIcon,
  DreptCivilIcon,
  DreptComercialIcon,
  DreptContraventionalIcon,
  DreptImobiliarIcon,
  DreptPenalIcon,
  DreptulFamilieiIcon,
  DreptulMunciiIcon,
  DreptulProprietatiiIntelectualeIcon,
} from "@/app/_components/servicii/svgs/componente/serviciiSvgs";
import { useState, useRef, useEffect } from "react";

const servicii = [
  {
    name: "Drept Comercial și Societar",
    icon: (
      <DreptComercialIcon color="#0D1738" size={50} viewBox="0 0 1024 1024" />
    ),
    subservices: [
      "Consultanță în înființarea și organizarea societăților",
      "Consultanță în managementul afacerilor",
      "Fuziuni și achiziții",
      "Contracte comerciale",
      "Litigii comerciale",
    ],
  },
  {
    name: "Drept Civil",
    icon: <DreptCivilIcon color="#0D1738" size={50} viewBox="0 0 56 56" />,
    subservices: [
      "Contracte civile",
      "Răspunderea civilă contractuală",
      "Moșteniri și succesiuni",
      "Răspunderea civilă delictuală",
      "Executare silită",
    ],
  },
  {
    name: "Dreptul Familiei",
    icon: (
      <DreptulFamilieiIcon
        color="#0D1738"
        size={50}
        viewBox="0 0 98.666 98.666"
      />
    ),
    subservices: [
      "Divorț și Partajul Bunurilor Comune",
      "Custodie și Autoritate Părintească",
      "Pensia Alimentară",
      "Recunoașterea/Tăgada Paternității",
      "Violență Domestică",
    ],
  },
  {
    name: "Dreptul Muncii",
    icon: <DreptulMunciiIcon color="#0D1738" size={50} viewBox="0 0 24 24" />,
    subservices: [
      "Consultanță pentru angajatori",
      "Consultanță pentru angajați",
      "Litigii de muncă",
      "Relații cu sindicatele",
      "Recuperare drepturi salariale",
    ],
  },
  {
    name: "Drept Penal",
    icon: <DreptPenalIcon color="#0D1738" size={50} viewBox="0 0 24 24" />,
    subservices: [
      "Apărare în cauze penale",
      "Contestații și căi de atac",
      "Măsuri preventive și de protecție",
      "Liberare condiționată",
      "Reabilitare",
    ],
  },
  {
    name: "Drept Imobiliar și Construcții",
    icon: <DreptImobiliarIcon color="#0D1738" size={50} viewBox="0 0 50 50" />,
    subservices: [
      "Consultanță tranzacții imobiliare",
      "Proiecte de construcție",
      "Litigii imobiliare",
      "Conformitate și reglementări",
    ],
  },
  {
    name: "Dreptul Proprietății Intelectuale",
    icon: (
      <DreptulProprietatiiIntelectualeIcon
        color="#0D1738"
        size={50}
        viewBox="0 0 53 53"
      />
    ),
    subservices: [
      "Protecția mărcilor și brevetelor",
      "Drepturi de autor și licențiere",
      "Contestații și litigii",
    ],
  },
  {
    name: "Drept Administrativ și Fiscal",
    icon: (
      <DreptAdministrativIcon color="#0D1738" size={50} viewBox="0 0 32 32" />
    ),
    subservices: [
      "Consultanță fiscală",
      "Licitații și contracte publice",
      "Contestații administrative",
    ],
  },
  {
    name: "Drept Contravențional",
    icon: (
      <DreptContraventionalIcon color="#0D1738" size={50} viewBox="0 0 24 24" />
    ),
    subservices: [
      "Consultanță juridică",
      "Reprezentare în fața autorităților",
      "Apărarea în instanță",
      "Redactarea de contestații",
    ],
  },
];

export const Servicii = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleService = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleClickOutside = (event: MouseEvent) => {
      const activeRef = serviceRefs.current[activeIndex];
      if (activeRef && !activeRef.contains(event.target as Node)) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeIndex]);

  return (
    <div
      className={`${styles.homeServicii} flex flex-col px-3 py-24 items-center mb-10`}
    >
      <h1 className="mb-10 text-5xl text-center">Servicii Juridice</h1>
      <div
        className={`${styles.homeGrid} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`}
      >
        {servicii.map(({ name, icon, subservices }, index) => (
          <div
            key={index}
            ref={(el) => {
              serviceRefs.current[index] = el;
            }}
            className={`${styles.homeSvc} group relative py-6 md:p-6 rounded-lg shadow-md transition-all`}
          >
            <div className={`${style.item} z-[1]`}>
              <div
                className={`${style.link} flex flex-col items-center cursor-pointer`}
                onClick={() => toggleService(index)}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  toggleService(index);
                }}
              >
                <div className="mb-2 text-primary">{icon}</div>
                <div className="flex items-center gap-2">
                  <h2 className=" text-lg md:text-xl font-semibold">{name}</h2>
                  <svg
                    viewBox="0 0 360 360"
                    className={`w-5 h-5 fill-current transition-transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                  </svg>
                </div>
              </div>

              <div
                className={`${style.submenu} absolute top-full left-0 w-full shadow-lg rounded-lg mt-2 transition-all duration-300 z-50 bg-lightGray ${
                  activeIndex === index
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {subservices.map((sub, i) => (
                  <div key={i} className={`${style.submenuItem}`}>
                    <div
                      className={`${style.submenuLink} relative block p-3 text-center transition-colors duration-300 hover:text-lightGray`}
                    >
                      {sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

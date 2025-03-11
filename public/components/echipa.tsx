import Image from "next/image";
import styles from "./echipa.module.css";

const echipa = [
  {
    img: "1-avocat-vlad.webp",
    name: "Vlad-Dimitrie Ghiciuc",
    role: "Avocat-Coordonator",
    alt: "Avocat Iasi - Vlad-Dimitrie Ghiciuc",
  },
  {
    img: "2-avocat-anca.webp",
    name: "Anca-Leticia Tiron",
    role: "Avocat-Definitiv",
    alt: "Avocat Iasi - Anca-Leticia Tiron",
  },
  {
    img: "3-avocat-laurentiu.webp",
    name: "Laurențiu Cărămidă",
    role: "Avocat-Definitiv",
    alt: "Avocat Iasi - Laurențiu Cărămidă",
  },
];

export default function Gallery() {
  return (
    <div className="flex flex-col md:flex-row md:h-96  w-full items-center gap-8">
      {echipa.map((member, index) => (
        <div key={index} className="flex flex-col gap-4 items-center">
          <div className={`${styles.card}`}>
            <div className={`${styles.bg}`}>
              <Image
                src={`/echipa/${member.img}`}
                alt={member.alt}
                width={200}
                height={200}
                unoptimized
              />
            </div>
          </div>
          <div>
            <p className="text-center text-xl font-semibold">{member.name}</p>
            <p className="text-center text-md font-medium">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

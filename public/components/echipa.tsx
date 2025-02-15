import Image from "next/image";
import styles from "./echipa.module.css";

const echipa = [
  {
    img: "1vlad.png",
    name: "Vlad-Dimitrie Ghiciuc",
    role: "Avocat Coordonator",
  },
  {
    img: "2anca.png",
    name: "Anca-Leticia Tiron",
    role: "Avocat Definitiv",
  },
  {
    img: "3laurentiu.png",
    name: "Laurențiu Cărămidă",
    role: "Avocat Definitiv",
  },
];

export default function Gallery() {
  return (
    <div className="flex flex-col md:flex-row  w-full items-center gap-8">
      {echipa.map((member, index) => (
        <div key={index} className="flex flex-col gap-4 items-center">
          <div className={`${styles.card}`}>
            <div className={`${styles.bg}`}>
              <Image
                src={`/echipa/${member.img}`}
                alt={member.name}
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

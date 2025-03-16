import { Header } from "@/app/_components/header/header";
import styles from "./abonamente.module.css";
import Link from "next/link";
import { Footer } from "@/app/_components/footer/footer";
import Head from "next/head";
export default async function Abonamente() {
  return (
    <>
      <Head>
        <title>Abonamente Consultanță Juridică | Avocat Iași</title>
        <meta
          name="description"
          content="Alege un abonament de consultanță juridică personalizat în Iași. Servicii pentru persoane fizice și juridice în drept comercial, civil, penal."
        />
        <meta
          name="keywords"
          content="avocat Iasi, abonament avocat Iași, consultanță juridică Iași, avocat firme Iași, avocat contracte Iași, pachet consultanță legală"
        />
        <meta
          property="og:title"
          content="Abonamente Avocat Iași - Servicii Legale pentru Firme și Persoane Fizice"
        />
        <meta
          property="og:description"
          content="Beneficiază de suport juridic continuu cu abonamentele noastre personalizate. Alege cel mai potrivit pachet pentru tine!"
        />
        <meta property="og:url" content="https://www.exemplu.ro/abonamente" />
        <meta property="og:type" content="website" />
      </Head>
      <div className={`bg-tertiary`}>
        <Header />
        <div className={`${styles.abBody} `}>
          <main
            className={` max-w-7xl rounded-lg mx-auto px-4 sm:px-6 md:py-12`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-7xl font-[900] mb-6 md:mb-8 text-center">
              Servicii Juridice pe Bază de Abonament
              <span className="block text-xl sm:text-2xl md:text-3xl mt-2 md:mt-6">
                Asistență juridică permanentă
              </span>
            </h1>

            <p className="text-base font-[500] sm:text-lg p-3 rounded-lg text-secondary mb-8 sm:mb-10 leading-relaxed text-center">
              Societatea noastră de avocatură asigură clienților servicii
              juridice personalizate, în baza unui contract de asistență
              juridică permanentă (abonament lunar sau anual), adaptat nevoilor
              specifice fiecăruia.
            </p>

            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold text-secondary mb-4 sm:mb-6">
                Servicii incluse:
              </h2>
              <ul className="space-y-3 sm:space-y-6">
                {[
                  "Consultanță juridică verbală sau scrisă",
                  "Verificare și redactare de acte juridice, adresate atât instanțelor, parchetelor, autorităților și instituțiilor publice (ex: cereri de chemare în judecată, plângeri contravenționale, contestații, plângeri penale etc.), cât și persoanelor fizice sau juridice de drept privat (ex: notificări, somații, adrese etc.);",
                  "Redactare de contracte și documente",
                  "Consultarea dosarelor aflate pe rolul instanțelor judecătorești, în care clientul are calitate procesuală;",
                  "Asistare și reprezentare în instanță, precum și în fața oricărei persoane fizice sau juridice de drept public ori privat (ex: autorități/instituții publice, negocieri etc.).",
                ].map((service, index) => (
                  <li
                    key={index}
                    className="flex items-start font-[400] shadow-lg p-3 sm:p-4 rounded-lg border-l-4 border-primary"
                  >
                    <span className="text-primary mr-2 sm:mr-3">•</span>
                    <span className="text-sm sm:text-base">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sectiune pret */}
            <div className="bg-muted bg-opacity-30 p-4 sm:p-6 rounded-xl mb-8 sm:mb-10">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                Costul abonamentului
              </h3>
              <p className="text-secondary leading-relaxed text-sm sm:text-base">
                Onorariul lunar este stabilit în funcție de complexitatea și
                natura serviciilor accesate, precum și de frecvența lunară
                estimată. Oferta noastră este flexibilă și transparentă,
                adaptată perfect cerințelor dumneavoastră.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-base  sm:text-lg text-secondary p-3 rounded-lg mb-3 sm:mb-4">
                Nu ezitați să ne contactați pentru mai multe informații!
              </p>

              <Link
                href={"/contact"}
                className="bg-primary text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg hover:bg-muted transition-colors w-full sm:w-auto"
              >
                Contactează-ne
              </Link>
            </div>
          </main>
          <div className={`mt-5`}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export const metadata = {
  title: "Avocat Iași | Ghiciuc și Asociații",
  description:
    "Cabinet de avocatură în Iași. Vlad Ghiciuc și echipa oferă consultanță juridică specializată în drept penal, civil și comercial.",
};

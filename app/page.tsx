import styles from "./home.module.css";
import Link from "next/link";
import {
  FacebookLogo,
  InstagramLogo,
  TikTokLogo,
  WhatsAppLogo,
} from "@/app/svgs/SocialMedia";
import Gallery from "@/public/components/echipa";
import { Footer } from "@/app/_components/footer/footer";
import { Servicii } from "@/app/_components/servicii/servicii";
import { Motto } from "@/app/_components/motto/motto";
import { Header } from "@/app/_components/header/header";
import Image from "next/image";
import Head from "next/head";
import { MapWrapper } from "@/app/_components/Map/MapWrapper";

export default async function Home() {
  const whatsappNumber = "+40755189133";
  const baseUrl = "https://api.whatsapp.com/send";
  const encodedMessage = "Am nevoie de consultanță juridică.";
  const whatsappLink = `${baseUrl}?phone=${whatsappNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Cabinet Avocatură Iași",
            image: "https://www.exemplu.ro/logo.png",
            url: "https://www.exemplu.ro",
            telephone: "+40 755 189 133",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Jud. Iași, Mun. Iași, Str. Ghica Vodă, Nr. 3A mezanin",
              addressLocality: "Iași",
              addressRegion: "IS",
              postalCode: "700469",
              addressCountry: "RO",
            },
            priceRange: "$$",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "17:00",
              },
            ],
            geo: {
              "@type": "GeoCoordinates",
              latitude: "47.1603128",
              longitude: "27.5925227",
            },
            sameAs: [
              "https://www.instagram.com/ghiciucsiasociatii/",
              "https://www.tiktok.com/@ghiciuc.asociatii",
            ],
          })}
        </script>
        <title>
          Avocat Iași - Consultanță Juridică Profesională | Ghiciuc & Asociații
        </title>
        <meta
          name="description"
          content="Cabinet de avocatură în Iași, specializat în drept civil, penal, comercial și familial. Programează o consultație gratuită!"
        />
        <meta
          name="keywords"
          content="avocat Iași, cabinet avocatură Iași, avocat drept penal Iași, avocat drept civil Iași, avocat divorț Iași, consultanță juridică Iași"
        />
        <meta
          property="og:title"
          content="Avocat Iași - Servicii Juridice de Top | [Numele Cabinetului]"
        />
        <meta
          property="og:description"
          content="Echipa noastră de avocați din Iași oferă consultanță juridică și asistență profesională în drept civil, penal, comercial și familie."
        />
        <meta property="og:url" content="https://www.exemplu.ro/" />
        <meta property="og:type" content="website" />
      </Head>

      <div className={styles.homeBody}>
        <div className="flex flex-col w-full font-serif">
          <div
            className={`${styles.homeOverHeader} h-12 w-full flex md:flex-row justify-evenly md:justify-between`}
          >
            <div className="font-sans contact md:flex flex-col  hidden justify-between md:gap-5 md:flex-row md:self-center pl-8 font-semibold">
              <h4>Tel: +40755189133</h4>
              <h4>Email: office@ghiciucsiasociatii.ro</h4>
            </div>
            <div
              className={`${styles.socialMedia} flex-row gap-4 flex self-center  md:pr-8`}
            >
              <Link href="https://www.instagram.com/ghiciucsiasociatii/">
                <InstagramLogo />
              </Link>
              <Link href="https://www.tiktok.com/@ghiciuc.asociatii">
                <TikTokLogo />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61572888712185&rdid=42IyXBEbLb1amF2h&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BSm52J6SD%2F#">
                <FacebookLogo />
              </Link>
              <Link href={whatsappLink}>
                <WhatsAppLogo />
              </Link>
            </div>
          </div>
          <Header />

          <div
            className={`${styles.homeBanner} group gap-4 flex flex-col justify-center items-center relative`}
          >
            <Image
              src="/column_11zon.webp"
              alt="Avocat Iasi | Ghiciuc si Asociatii"
              rel="preload"
              priority
              fill={true}
            />
            <h2
              className={`text-4xl md:text-8xl font-[800] font-serif  italic text-lightGray tracking-wide z-10`}
            >
              Consilium et Actio
            </h2>
            <div
              className="
              flex flex-col text-sm md:text-lg justify-center gap-2
               z-[6]"
            >
              <h4 className="text-center">
                <span className={`italic`}>Consilium</span> reflectă strategia
                noastră atent construită, bazată pe o înțelegere profundă a
                fiecărei situații legale, pentru a oferi soluții clare și
                fundamentate.{" "}
              </h4>
              <h4 className="text-center">
                <span className={`italic`}>Actio</span> este pasiunea și
                dedicarea cu care punem în practică aceste strategii,
                asigurându-ne că fiecare pas este calculat și eficient.{" "}
              </h4>
            </div>
          </div>
          <div className={`${styles.homeMotto} w-full `}>
            <Motto />
          </div>
          <div
            className={`${styles.homeSubBanner} flex w-full flex-col h-auto justify-center  `}
          >
            <Servicii />

            <div
              className={` ${styles.homeEchipa} flex mb-10 flex-col w-full mt-12 justify-center`}
            >
              <h1 className="my-10 text-5xl self-center">Echipa</h1>
              <div
                className={`${styles.homeGallery} flex flex-row self-center`}
              >
                <Gallery />
              </div>
            </div>
            <div className={` border-2 border-muted shadow-xl overflow-hidden`}>
              <MapWrapper />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

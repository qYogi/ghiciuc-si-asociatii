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

export default async function Home() {
  const whatsappNumber = "+40755189133";
  const baseUrl = "https://api.whatsapp.com/send";
  const encodedMessage = "Cum vă putem ajuta?";
  const whatsappLink = `${baseUrl}?phone=${whatsappNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;

  return (
    <div className={styles.homeBody}>
      <div className="flex flex-col w-full font-serif">
        <div
          className={`${styles.homeOverHeader} h-12 w-full flex md:flex-row justify-evenly md:justify-between`}
        >
          <div className="font-sans contact md:flex flex-col  hidden justify-between md:gap-5 md:flex-row md:self-center pl-8 font-semibold">
            <h4>Tel: +40 747 402 252</h4>
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
          <h2
            className={`text-4xl md:text-8xl font-serif font-semibold italic text-lightGray tracking-wide z-10 ${styles.animatefadein} transition-transform duration-300 hover:scale-105\``}
          >
            Consilium et Actio
          </h2>
          <div
            className="opacity-0 group-hover:opacity-100
              transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
              flex flex-col justify-center gap-2
              transform origin-top"
          >
            <h4 className="text-center">
              Consilium reflectă strategia noastră atent construită, bazată pe o
              înțelegere profundă a fiecărei situații legale, pentru a oferi
              soluții clare și fundamentate.{" "}
            </h4>
            <h4 className="text-center">
              Actio este pasiunea și dedicarea cu care punem în practică aceste
              strategii, asigurându-ne că fiecare pas este calculat și eficient.{" "}
            </h4>
          </div>
        </div>
        <div className={`${styles.homeMotto} w-full`}>
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
            <div className={`${styles.homeGallery} flex flex-row self-center`}>
              <Gallery />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

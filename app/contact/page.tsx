import { Header } from "@/app/_components/header/header";
import { Footer } from "@/app/_components/footer/footer";
import { BigContactForm } from "@/app/contact/bigContactForm";
import Head from "next/head";

export default async function Contact() {
  return (
    <>
      <Head>
        <title>
          Contactează Avocat Iași - Consultanță Juridică | [Numele Cabinetului]
        </title>
        <meta
          name="description"
          content="Ai nevoie de un avocat în Iași? Contactează-ne pentru asistență juridică rapidă și eficientă în drept civil, penal, comercial și familie."
        />
        <meta
          name="keywords"
          content="contact avocat Iași, programare avocat Iași, consultanță juridică Iași, avocat drept penal Iași, avocat drept civil Iași"
        />
        <meta
          property="og:title"
          content="Contact Avocat Iași - Programează o Consultație"
        />
        <meta
          property="og:description"
          content="Contactează echipa noastră de avocați din Iași pentru suport juridic personalizat. Consultanță rapidă și eficientă!"
        />
        <meta property="og:url" content="https://www.exemplu.ro/contact" />
        <meta property="og:type" content="website" />
      </Head>
      <div>
        <Header />
        <div className={`font-serif`}>
          <BigContactForm />
        </div>
        <Footer />
      </div>
    </>
  );
}

export const metadata = {
  title: "Avocat Iași | Ghiciuc și Asociații",
  description:
    "Cabinet de avocatură în Iași. Vlad Ghiciuc și echipa oferă consultanță juridică specializată în drept penal, civil și comercial.",
};

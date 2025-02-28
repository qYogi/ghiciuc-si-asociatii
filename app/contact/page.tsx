import { Header } from "@/app/_components/header/header";
import { Footer } from "@/app/_components/footer/footer";
import { BigContactForm } from "@/app/contact/bigContactForm";

export default async function Contact() {
  return (
    <div>
      <Header />
      <div className={`font-serif`}>
        <BigContactForm />
      </div>
      <Footer />
    </div>
  );
}

export const metadata = {
  title: "Avocat Iași | Ghiciuc și Asociații",
  description:
    "Cabinet de avocatură în Iași. Vlad Ghiciuc și echipa oferă consultanță juridică specializată în drept penal, civil și comercial.",
};

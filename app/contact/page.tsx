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

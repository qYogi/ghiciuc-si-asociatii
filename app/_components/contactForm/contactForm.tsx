import styles from "@/app/_components/footer/footer.module.css";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    // 👇 A nice little track to get all the form values as an object
    const form = e.target as HTMLFormElement;
    const formValues = Object.fromEntries(new FormData(form).entries());

    setLoading(true);
    setSuccessMessage("");

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formValues),
      }).then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      });
      setLoading(false);
      setSuccessMessage(
        "Mulțumim că ne-ați contactat!\nVă vom răspunde în cel mai scurt timp.",
      );

      form.reset();
    } catch (err) {
      console.error(err);
      setLoading(false);
      setSuccessMessage("A apărut o eroare. Vă rugăm încercați din nou.");
    }
  };

  return (
    <div className={`${styles.footerForm} w-full px-4`}>
      <h1 className={`text-3xl font-semibold mb-4`}> Contactează-ne </h1>
      <form onSubmit={onSubmit} className={`flex flex-col `}>
        <input
          type="text"
          placeholder="Nume  "
          id="name"
          name="name"
          required={true}
        />
        <input
          type="tel"
          placeholder="Telefon"
          id="tel"
          name="tel"
          required={true}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          required={true}
        />
        <input
          type="text"
          name="website"
          className="hidden absolute left-[-9999px]"
          autoComplete="off"
        />
        <textarea
          id="message"
          placeholder="Mesaj"
          name="message"
          rows={5}
          required={true}
        />
        <Form.Check
          id="privacy-check"
          type="checkbox"
          required
          label={
            <>
              Sunt de acord cu prelucrarea datelor conform{" "}
              <a href="/politica-confidentialitate" className="underline">
                Politicii de Confidențialitate
              </a>
            </>
          }
        />
        <button
          className="text-white py-2 mt-4 px-4"
          disabled={loading}
          type="submit"
        >
          Trimite
        </button>
        {successMessage && <p>{successMessage}</p>}
      </form>
    </div>
  );
};

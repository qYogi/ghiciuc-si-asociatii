"use client";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

export const BlogContactForm = () => {
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
    <div className="">
      <h1 className="text-4xl font-bold text-primary mb-8">Contactează-ne</h1>
      <form onSubmit={onSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Nume"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border-2 border-secondary rounded-lg focus:outline-none focus:border-primary transition-colors duration-200 text-secondary"
        />

        <input
          type="tel"
          placeholder="Telefon"
          id="tel"
          name="tel"
          required
          className="w-full px-4 py-3 border-2 border-secondary rounded-lg focus:outline-none focus:border-primary transition-colors duration-200 text-secondary"
        />

        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border-2 border-secondary rounded-lg focus:outline-none focus:border-primary transition-colors duration-200 text-secondary"
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
          required
          className="w-full px-4 py-3 border-2 border-secondary rounded-lg focus:outline-none focus:border-primary transition-colors duration-200 text-secondary resize-none"
        />

        <Form.Check
          id="privacy-check"
          type="checkbox"
          required
          className="text-secondary [&>label]:ml-2 [&>input]:mt-1"
          label={
            <>
              Sunt de acord cu prelucrarea datelor conform{" "}
              <a
                href="/politica-confidentialitate"
                className="underline text-primary hover:text-muted transition-colors"
              >
                Politicii de Confidențialitate
              </a>
            </>
          }
        />

        <button
          className={`w-full py-4 px-6 bg-primary text-tertiary rounded-lg font-semibold hover:bg-muted transition-colors duration-200 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
          type="submit"
        >
          {loading ? "Se trimite..." : "Trimite"}
        </button>

        {successMessage && (
          <p className="mt-4 p-4 bg-primary/10 text-primary rounded-lg whitespace-pre-line">
            {successMessage}
          </p>
        )}
      </form>
    </div>
  );
};

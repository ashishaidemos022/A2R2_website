"use client";

import { motion } from "framer-motion";
import { Check, Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import { fadeUp, stagger, viewport } from "@/lib/motion";

type Errors = Partial<Record<"name" | "email" | "company" | "message", string>>;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };
    const nextErrors: Errors = {};

    if (!values.name) nextErrors.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = "Enter a valid work email.";
    if (!values.company) nextErrors.company = "Company is required.";
    if (values.message.length < 20) nextErrors.message = "Message should be at least 20 characters.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    setLoading(false);

    if (response.ok) setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-bg-secondary/60 py-24 md:py-40" aria-labelledby="contact-heading">
      <motion.div
        className="container-grid mx-auto max-w-3xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger}
      >
        <motion.p className="eyebrow mb-5" variants={fadeUp}>
          Get in Touch
        </motion.p>
        <motion.h2 id="contact-heading" className="display text-4xl md:text-6xl" variants={fadeUp}>
          Start a conversation.
        </motion.h2>
        <motion.p className="mx-auto mt-6 max-w-2xl text-lg leading-[1.7] text-text-secondary" variants={fadeUp}>
          If you are evaluating an agentic AI initiative and want to talk through architecture, deployment, or build
          options with senior practitioners, we welcome the conversation.
        </motion.p>

        <motion.div className="mt-12 rounded-lg border border-border bg-surface/55 p-5 text-left md:p-8" variants={fadeUp}>
          {submitted ? (
            <div className="grid min-h-[360px] place-items-center text-center">
              <div>
                <div className="mx-auto grid size-14 place-items-center rounded-full bg-accent text-bg-primary">
                  <Check size={24} />
                </div>
                <h3 className="mt-6 text-2xl font-medium">Thank you. We&apos;ll be in touch.</h3>
                <p className="mx-auto mt-3 max-w-md text-text-secondary">
                  Your inquiry has been received and routed for follow-up.
                </p>
              </div>
            </div>
          ) : (
            <form className="grid gap-5" onSubmit={onSubmit} noValidate>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Name" name="name" error={errors.name} autoComplete="name" />
                <Field label="Work email" name="email" error={errors.email} autoComplete="email" inputMode="email" />
              </div>
              <Field label="Company" name="company" error={errors.company} autoComplete="organization" />
              <div>
                <label className="mb-2 block text-sm font-medium text-text-primary" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full resize-none rounded-md border border-border bg-bg-primary px-4 py-3 text-text-primary transition focus:border-accent"
                />
                {errors.message ? <p className="mt-2 text-sm text-accent">{errors.message}</p> : null}
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg-primary transition hover:bg-text-primary active:scale-[0.99] disabled:cursor-wait disabled:opacity-70"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit inquiry"}
              </button>
              <a
                className="link-underline inline-flex w-fit items-center gap-2 text-sm text-text-secondary hover:text-text-primary"
                href="mailto:hello@a2r2labs.com"
              >
                <Mail size={16} />
                hello@a2r2labs.com
              </a>
            </form>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: "name" | "email" | "company";
  error?: string;
  autoComplete?: string;
  inputMode?: "email";
};

function Field({ label, name, error, autoComplete, inputMode }: FieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-text-primary" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        inputMode={inputMode}
        autoComplete={autoComplete}
        className="h-12 w-full rounded-md border border-border bg-bg-primary px-4 text-text-primary transition focus:border-accent"
      />
      {error ? <p className="mt-2 text-sm text-accent">{error}</p> : null}
    </div>
  );
}

"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import styles from "./page.module.css";

const DEPARTMENTS = [
  "General Enquiry",
  "Admissions (Academics Department)",
  "Capacity Building & Training",
  "Research & Innovation",
  "Standards Department",
  "Utility Management & Consultancy (UMC)",
  "Support Services",
];

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    subject: "",
    message: "",
  });

  const set = (key: keyof typeof fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setFields((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (apiUrl) {
        const res = await fetch(`${apiUrl}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(fields),
        });
        if (!res.ok) throw new Error();
      } else {
        // Simulate network delay when no API configured
        await new Promise((r) => setTimeout(r, 1200));
      }
      setStatus("success");
      setFields({ name: "", email: "", phone: "", department: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={styles.formSuccess}>
        <div className={styles.formSuccessIcon}>
          <CheckCircle size={36} strokeWidth={1.5} />
        </div>
        <h3 className={styles.formSuccessTitle}>Message received!</h3>
        <p className={styles.formSuccessText}>
          Thank you for reaching out. A member of our team will get back to you within 1–2 business days.
        </p>
        <button className={styles.formSuccessReset} onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">Full Name <span className={styles.req}>*</span></label>
          <input
            id="name"
            type="text"
            className={styles.input}
            placeholder="John Kamau"
            value={fields.name}
            onChange={set("name")}
            required
            autoComplete="name"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">Email Address <span className={styles.req}>*</span></label>
          <input
            id="email"
            type="email"
            className={styles.input}
            placeholder="john@example.com"
            value={fields.email}
            onChange={set("email")}
            required
            autoComplete="email"
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="phone">Phone Number <span className={styles.opt}>(optional)</span></label>
          <input
            id="phone"
            type="tel"
            className={styles.input}
            placeholder="+254 7XX XXX XXX"
            value={fields.phone}
            onChange={set("phone")}
            autoComplete="tel"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="department">Department</label>
          <select
            id="department"
            className={styles.select}
            value={fields.department}
            onChange={set("department")}
          >
            <option value="">Select a department…</option>
            {DEPARTMENTS.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="subject">Subject <span className={styles.req}>*</span></label>
        <input
          id="subject"
          type="text"
          className={styles.input}
          placeholder="e.g. Admission enquiry for Diploma in Electrical Engineering"
          value={fields.subject}
          onChange={set("subject")}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="message">Message <span className={styles.req}>*</span></label>
        <textarea
          id="message"
          className={styles.textarea}
          placeholder="Write your message here…"
          rows={5}
          value={fields.message}
          onChange={set("message")}
          required
        />
      </div>

      {status === "error" && (
        <div className={styles.formError}>
          <AlertCircle size={15} />
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <button
        type="submit"
        className={styles.submitBtn}
        disabled={status === "sending"}
      >
        {status === "sending" ? (
          <>
            <Loader2 size={16} className={styles.spinner} />
            Sending…
          </>
        ) : (
          <>
            Send Message <Send size={15} />
          </>
        )}
      </button>
    </form>
  );
}

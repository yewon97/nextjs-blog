"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";

type Form = {
  from: string;
  subject: string;
  message: string;
};

const LABEL_CLASS = "font-semibold";
const INPUT_CLASS = "text-black px-1";

export default function ContactForm() {
  const [form, setForm] = useState<Form>({
    from: "",
    subject: "",
    message: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const [banner, setBanner] = useState<BannerData | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setBanner({ message: "성공했습니다!", state: "success" });

    setTimeout(() => {
      setBanner(null);
    }, 3000);
  };

  return (
    <section className="w-full max-w-md">
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-lg text-white"
      >
        <label htmlFor="from" className={LABEL_CLASS}>
          Your Email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
          className={INPUT_CLASS}
        />
        <label htmlFor="subject" className={LABEL_CLASS}>
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
          className={INPUT_CLASS}
        />
        <label htmlFor="message" className={LABEL_CLASS}>
          Message
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          value={form.message}
          onChange={onChange}
          className={INPUT_CLASS}
        />
        <button
          type="submit"
          className="bg-yellow-300 font-bold text-black hover:bg-yellow-400"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

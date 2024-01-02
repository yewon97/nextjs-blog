import ContactForm from "@/components/ContactForm";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const LINKS = [
  { icon: <AiFillGithub />, url: "" },
  { icon: <AiFillLinkedin />, url: "" },
  { icon: <AiFillYoutube />, url: "" },
];

const H2_CLASS = "text-3xl font-bold my-2";

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className={H2_CLASS}>Contact Me</h2>
      <p>dpdnjs402@naver.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, idx) => {
          return (
            <li key={idx}>
              <a
                href={link.url}
                target="_blank"
                className="text-5xl hover:text-yellow-500"
              >
                {link.icon}
              </a>
            </li>
          );
        })}
      </ul>
      <h2 className={H2_CLASS}>Or Send me an Email</h2>
      <ContactForm />
    </section>
  );
}

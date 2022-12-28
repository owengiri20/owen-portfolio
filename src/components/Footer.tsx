import { useNavigate } from "react-router";

export const Footer = () => {
  const nav = useNavigate();
  return (
    <footer id="contact">
      <div className="socials">
        <a onClick={() => nav("/contact")}>Contact Me</a>
        <a href="https://www.linkedin.com/in/owen-giri-0635b3178/">LinkedIn</a>
        <a href="https://github.com/owengiri20">Github</a>
        <a href="mailto:owengiri20@gmail.com">Email</a>
      </div>

      <div>Handcrafted from scratch by me</div>
      <div className="copyright">© 2022 Owen Giri</div>
    </footer>
  );
};

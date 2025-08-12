import Facebook from "../icons/facebook";
import Linkedin from "../icons/linkedin";
const social = () => (
  <div className="flex flex-row justify-center w-5/6 mx-auto -translate-x-2 gap-4 transform">
    <a
      href="https://instagram.com/asa.industries?utm_medium=copy_link"
      passHref="false"
      target="_blank"
    >
      <Facebook />
    </a>
    <a
      href="https://www.linkedin.com/company/asa-indus"
      passHref="false"
      target="_blank"
    >
      <Linkedin />
    </a>
  </div>
);

export default social;

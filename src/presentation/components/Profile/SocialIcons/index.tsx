import Link from "next/link";
import { Icons } from "./styles";
import { FaGithub, FaLinkedinIn, FaDiscord, FaSkype } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <Icons>
      <a
        href="https://github.com/fabionascimento1?tab=repositories"
        target="_blank"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/fabio-nascimento-95b38b194/"
        target="_blank"
      >
        <FaLinkedinIn />
      </a>
      <a href="https://discord.gg/ZDEUnd" target="_blank">
        <FaDiscord />
      </a>
      <a href="https://join.skype.com/invite/tfMchgHR6VOS" target="_blank">
        <FaSkype />
      </a>
    </Icons>
  );
};

export default SocialIcons;

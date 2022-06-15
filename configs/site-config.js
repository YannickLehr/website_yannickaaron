import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Yannick Aaron. All Rights Reserved.`,
  author: {
    name: "Yannick Aaron",
    accounts: [
      {
        url: "https://github.com/YannickAaron",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://www.linkedin.com/in/yannicklehr/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "mailto:me@yannickaaron.io",
        label: "Yannick Aaron Lehr",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;

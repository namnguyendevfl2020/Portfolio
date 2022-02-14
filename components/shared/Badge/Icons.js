import { IconContext } from "react-icons";
import { HiMail } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiStackOverflowLine } from "react-icons/ri";
import Link from "next/link";

export const Icon = ({type}) => {
  const url = (() => {
    switch (type) {
      case "email":
        return "/contact"
      case "github":
        return "https://github.com/namnguyendevfl2020";
      case "linkedin":
        return "https://www.linkedin.com/in/namnguyenfl990";
      case "stackoverflow":
        return "https://stackoverflow.com/users/18200538/nam-h-nguyen";
    }
  })()
  return <IconContext.Provider value={{ color: "black", className: "icon-30" }}>
    <a href = {url} target="_blank" rel="noreferrer">
      <button className="border-outline-none bg-none element-center">
          {type === "email" && <HiMail />}
          {type === "github" && <AiFillGithub />}
          {type === "linkedin" && <AiFillLinkedin />}
          {type === "stackoverflow" && <RiStackOverflowLine />}
      </button>
    </a>

  </IconContext.Provider>
}

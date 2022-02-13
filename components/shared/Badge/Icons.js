import { IconContext } from "react-icons";
import { HiMail } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiStackOverflowLine } from "react-icons/ri";

export const Icon = ({type}) => {
    return <IconContext.Provider value={{ color: "black", className: "icon-30" }}>
    <button className="border-outline-none bg-none element-center">
        {type === "mail" && <HiMail />}
        {type === "github" && <AiFillGithub />}
        {type === "linkedin" && <AiFillLinkedin />}
        {type === "stackOverflow" && <RiStackOverflowLine />}
    </button>
  </IconContext.Provider>
}

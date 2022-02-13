import { IconContext } from "react-icons";
import { HiMail } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import { MdLocationOn  } from "react-icons/md";
import { AiFillSkype } from "react-icons/ai";
import { SiVercel } from "react-icons/si";


export const Icon = ({type}) => {
    return <IconContext.Provider value={{ color: "orange", className: "icon-20" }}>
    <button className="border-outline-none bg-none element-center">
        {type === "address" && <MdLocationOn />}
        {type === "phone" && <BsTelephoneFill />}
        {type === "skype" && <AiFillSkype />}
        {type === "email" && <HiMail />}
        {type === "test" && <SiVercel />}

    </button>
  </IconContext.Provider>
}

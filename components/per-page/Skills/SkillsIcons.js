import { IconContext } from "react-icons";
import { SiVercel } from "react-icons/si";

export const VercelIcon = ({size}) => {
    return <IconContext.Provider value={{ color: "white", className: size <100 ? "vercel-logo-sm" : "vercel-logo-lg" }}>
    <div>
        <SiVercel />
    </div>
  </IconContext.Provider>
}

import { IconContext } from "react-icons";
import { SiVercel } from "react-icons/si";

export const VercelIcon = () => {
    return <IconContext.Provider value={{ color: "white", className: "vercel-logo" }}>
    <div>
        <SiVercel />
    </div>
  </IconContext.Provider>
}

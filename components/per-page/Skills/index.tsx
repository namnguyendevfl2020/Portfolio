import styles from './skills.module.css'
import { VercelIcon } from './SkillsIcons'
import Image from 'next/image';


const vercelIcon = (size: number) => <div className='d-flex align-items-center justify-content-center' >
    <div className='d-flex align-items-center border-rounded justify-content-center black-white' style = {{height:`${size}px`, width: `${size}px`}}>
        <VercelIcon size = {size}/>
    </div>
</div>
const chaiIcon = (size: number) => <div className='d-flex align-items-center justify-content-center' >
<div className='d-flex align-items-center justify-content-center' style = {{zIndex: "1", height:`${size}px`, width: `${size}px`}}>
    <Image alt = "chai" src = "/skills/chai-logo.png" width={`${size}px`} height = {`${size}px`} className='chai-skill-image' />
</div>
</div>

interface SkillsPropType {
    viewWidth: number | undefined;
}

export default function Skills ({viewWidth}: SkillsPropType) {
    const images = [
        {"HTML": 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'},
        {"CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},
        {"Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"},
        {"TailwindCSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"},
        {"Javascript": 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},
        {"Typescript": 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'},
        {"Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"},
        {"React":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
        {"Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"},
        {"Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
        {"Express":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"},
        {"PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"},
        {"Mocha": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg"},
        {"Chai": chaiIcon},
        {"Vercel": vercelIcon},
        {"Heroku": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg"},
        {"Github": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},
    ]

    const renderedImages = images.map((image, idx) => {
        const name = Object.keys(image)
        const src = Object.values(image)
        const link = (() => {
            if (name[0] === "Vercel" || name[0] === "Chai") return false
            return true
        })()
        const vercel = viewWidth && viewWidth > 1000 ? vercelIcon(100) : vercelIcon(50);
        const chai = viewWidth && viewWidth > 1000 ? chaiIcon(100) : chaiIcon(50)

        return (
            <div key = {idx} className='col-2 mx-2 my-2'>
                {link
                ?   <div className="d-flex justify-content-center align-items-center">
                        {viewWidth && viewWidth > 1000
                        ? <img className={styles["image-lg"]} src = {src[0]} alt = "language icons" />
                        : <img className={styles["image-sm"]} src = {src[0]} alt = "language icons" />
                        }
                    </div>
                :   name[0] === "Vercel" ? vercel : chai
                }
                <p className='w-100 d-flex justify-content-center m-0 p-2 txt-sm fw-5'>{name[0]}</p>
            </div>
        )
    })
    return (
        <>
        <div className='w-100 d-flex '>
            <div className='row d-flex flex-wrap justify-content-none justify-content-center'>
                {renderedImages}
            </div>
        </div>
        
        </>
    )
}
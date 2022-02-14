import styles from './badge.module.css'
import avatar from "./myAvatar.jpg";
import Image from 'next/image';
import { Icon } from "./Icons";
import { useEffect, useState } from 'react';

interface BadgePropsType {
    displayBadge: boolean;
    setDisplayBadge:  React.Dispatch<React.SetStateAction<any>>;
}

export default function Badge({displayBadge, setDisplayBadge}: BadgePropsType) {
    const initialWidth = window.innerWidth;
    const [viewWidth, setViewWidth] = useState(initialWidth);
    const handleResize = () => setViewWidth(() => window.innerWidth);
    window.addEventListener('resize', handleResize);
    useEffect(() => {
        if (viewWidth > 1200) {
            setDisplayBadge(() => true)
        } else {
            if (displayBadge === true)
            setDisplayBadge(() => !displayBadge);
        }
    }, [viewWidth])

    return (displayBadge
        ? <>
        <div className={styles.container + " me-4 mt-2 p-0 d-xl-block"}>
            <div className='py-4' style = {{border: "2px solid #ced4da"}}>
                <div className={styles.center}>
                    <div className={styles.image}>
                        <Image alt = "my avatar" src = {avatar} />
                    </div>
                </div>
                <div className={styles.break + " px-3"}></div>
                <p className="d-flex justify-content-center txt-lg fw-7 py-1 m-0 w-100">Nam Nguyen</p>
                <p className="d-flex justify-content-center m-0 py-1 txt-sm fw-5 w-100">Full Stack Web Developer</p>
                <div className="">  
                    <div className='element-center'>
                        <hr className="m-0 mt-3" style = {{width:"250px"}}></hr>
                    </div>
                    <div className="d-flex justify-content-center py-4">
                        <button className={styles.btn + " border-outline-none border-8px px-4 txt-md fw-6"} > Download CV
                        </button>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Icon type = "email"/>
                        <Icon type = "github"/>
                        <Icon type = "linkedin"/>
                        <Icon type = "stackoverflow"/>
                    </div>
                </div>
            </div>
        </div>
        </>
        : <></>
    )
} 
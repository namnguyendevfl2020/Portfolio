import React, { useState, CSSProperties, useEffect } from "react";
import Link from "next/link"
import { StyledContainer, StyledNavItem, StyledList, StyledAvatar } from "./HeaderStyles"
import { useRouter } from "next/router";
import Image from "next/image";
import avatar from "./myAvatar.jpg";
import Resume from "@/pages/resume";

interface HeaderPropsType {
    displayBadge: boolean;
    setDisplayBadge:  React.Dispatch<React.SetStateAction<any>>;
    viewWidth: number | undefined;
}

export default function Header({displayBadge, setDisplayBadge, viewWidth}: HeaderPropsType) {
    const { pathname } = useRouter();
    const navItem = pathname.split("/")[1];

    const capNavItem = (() => {
        if (pathname === "/") {
            return "About";
        } 
        return navItem[0].toUpperCase() + navItem.slice(1);
    })() 

    const [ itemclicked, setItemclicked ] = useState("");
    const [ containerClassName, setContainerClassName ] = useState("")
    useEffect (() => {
        if (viewWidth) {
            if (viewWidth<1200) {
                setContainerClassName(() => "p-0 d-flex align-items-center left-0")
            } else {
                setContainerClassName(() => "p-0 d-flex align-items-center")
            }
        }
    },[viewWidth])

    useEffect(() => {
        setItemclicked(() => capNavItem)
    },[capNavItem])

    useEffect(() => {
        setItemclicked(() => capNavItem)
    },[capNavItem])


    const navItems = ['Profile', 'About', 'Skills', 'Projects', 'Contact', 'Resume']

    const renderedNavItems = navItems.map((item, idx) => {
        const link = (() => {
            if (item === "About") return '/'
            if (item === 'Q&A') return '/questions-and-anwsers'
            return `/${item.toLowerCase()}`
        })()
        // const padding = {
        //     padding : "0 20px 0 20px"
        // }
        // const homePadding = {
        //     padding : "0 20px 0 0px"
        // }
        const handleClick = (e: MouseEvent) => {
            setItemclicked(() => item)
            if (item === "Profile") {
                setDisplayBadge(() => !displayBadge)
            }
        }
        
        const nondisplay = " d-sm-block d-none"
        const itemStyle = "m-0 txt-md px-3 px-sm-4 fw-5 txt-gray-7 d-sm-block d-xs-none "
        return ( 
        <li key = {idx}>
            {item !== "Profile"
            ?   <Link href = {link} >
                    <StyledNavItem onClick = {(e: MouseEvent) => handleClick(e)} className={item === "Resume" ? itemStyle + nondisplay : itemStyle}>
                        <span style= {item === itemclicked ? {color:"#38bdf8"} : {color: "white"}}>{item}</span> 
                    </StyledNavItem >
                </Link>
            :   <StyledNavItem id = {idx} onClick = {(e: MouseEvent) => handleClick(e)}  className="m-0 txt-md fw-5 px-3 px-sm-4 txt-gray-7 d-xl-none">
                    <StyledAvatar>
                        <div style = {{borderRadius: "50%"}}>
                            <Image alt = "my avatar" src = {avatar} />
                        </div>
                    </StyledAvatar>
                    {/* <span style= {item === itemclicked ? {color:"#38bdf8"} : {color: "white"}}>{item}</span>  */}
                </StyledNavItem >
            }
        </li>
        )
    })
    return (<>
        <StyledContainer fluid className = {containerClassName}>
            <StyledList className = "m-0 p-0 d-flex justify-content-xl-start justify-content-center">
                {/* <button>Profile</button> */}
                {renderedNavItems}
            </StyledList>
        </StyledContainer>
    </>)
}
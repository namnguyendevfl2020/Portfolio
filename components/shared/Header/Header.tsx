import React, { useState, CSSProperties, useEffect } from "react";
import Link from "next/link"
import { StyledContainer, StyledNavItem, StyledList, StyledAvatar } from "./HeaderStyles"
import { useRouter } from "next/router";
import Image from "next/image";
import avatar from "./myAvatar.jpg";

interface HeaderPropsType {
    displayBadge: boolean;
    setDisplayBadge:  React.Dispatch<React.SetStateAction<any>>;
}

export default function Header({displayBadge, setDisplayBadge}: HeaderPropsType) {
    const { pathname } = useRouter()
    const navItem = pathname.split("/")[1]
    const capNavItem = (() => {
        if (pathname === "/") {
            return "About"
        } 
        return navItem[0].toUpperCase() + navItem.slice(1)
    })() 
    const [itemclicked, setItemclicked] = useState("")
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
        const padding = {
            padding : "0 20px 0 30px"
        }
        const homePadding = {
            padding : "0 20px 0 0px"
        }
        const handleClick = (e: MouseEvent) => {
            setItemclicked(() => item)
            if (item === "Profile") {
                setDisplayBadge(() => !displayBadge)
                console.log(displayBadge)
            }
        }
        
        return ( 
        <li key = {idx}>
            {item !== "Profile"
            ?   <Link href = {link} >
                    <StyledNavItem onClick = {(e: MouseEvent) => handleClick(e)} style = {item !== "Profile" ? padding : homePadding} className="m-0 txt-md fw-5 pe-4 txt-gray-7">
                        <span style= {item === itemclicked ? {color:"#38bdf8"} : {color: "white"}}>{item}</span> 
                    </StyledNavItem >
                </Link>
            :   <StyledNavItem id = {idx} onClick = {(e: MouseEvent) => handleClick(e)} style = {item !== "Profile" ? padding : homePadding} className="m-0 txt-md fw-5 pe-4 txt-gray-7 d-xl-none">
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
        <StyledContainer fluid className = "p-0 d-flex align-items-center">
            <StyledList className = "m-0 p-0 d-flex justify-content-start">
                {/* <button>Profile</button> */}
                {renderedNavItems}
            </StyledList>
        </StyledContainer>
    </>)
}
import React, { useState, CSSProperties, useEffect } from "react";
import Link from "next/link"
import { StyledContainer, StyledNavItem, StyledList } from "./HeaderStyles"
import { useRouter } from "next/router";

export default function Header() {
    const { pathname } = useRouter()
    const navItem = pathname.split("/")[1]
    const capNavItem = (() => {
        if (pathname === "/") {
            return "About"
        } 
        if (pathname === "/questions-and-anwsers") {
            return "Q&A"
        } 
        return navItem[0].toUpperCase() + navItem.slice(1)
    })() 
    const [itemclicked, setItemclicked] = useState("")
    useEffect(() => {
        setItemclicked(() => capNavItem)
    },[capNavItem])
    const navItems = ['About', 'Skills', 'Projects', 'Contact', 'Resume']
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
        }
        
        return (
        <li key = {idx}>
            <Link href = {link} >
                <StyledNavItem onClick = {(e: MouseEvent) => handleClick(e)} style = {item !== "About" ? padding : homePadding} className="m-0 txt-md fw-5 pe-4 txt-gray-7">
                    <span style= {item === itemclicked ? {color:"#38bdf8"} : {color: "white"}}>{item}</span> 
                </StyledNavItem >
            </Link>
        </li>
        )
    })
    return (<>
        <StyledContainer fluid className = "p-0 d-flex align-items-center">
            <StyledList className = "m-0 p-0 d-flex justify-content-start">
                {renderedNavItems}
            </StyledList>
        </StyledContainer>
    </>)
}
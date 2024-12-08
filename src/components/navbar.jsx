import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { onThemeChange, toggleTheme } from "../helpers/theme";
import { useEffect, useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { BrowserView, MobileView } from "react-device-detect";
import Logo from "./Logo";

export default function Navbar() {

    const navigate = useNavigate();
    const [theme, setTheme] = useState("dark")
    const [hamburger, setHamburger] = useState(false)

    useEffect(() => {
        onThemeChange(setTheme)
    }, [])

    const moonIcon = <FontAwesomeIcon icon={faMoon} className="text-blue-400 size-6"/>
    const sunIcon = <FontAwesomeIcon icon={faSun} className="text-yellow-500 size-6"/>

    const themeIcon = theme == "dark" ? moonIcon : sunIcon

    return (
        <>
        <BrowserView>
        <header className="fixed w-full h-24 p-8 flex justify-between">
            <div className="flex items-center gap-2">
                <div className="h-6 opacity-[96%]">
                    <Logo />
                </div>
                <h1 className="text-3xl font-medium text-foreground">Rookit</h1>
            </div>
            <div className="flex items-center gap-8">
                <button onClick={() => navigate("/about")} className="text-foreground/80 font-medium">About</button>
                <button onClick={() => {toggleTheme()}}>{themeIcon}</button>
                <a href="https://github.com/rookitnet" target="_blank"><FontAwesomeIcon icon={faGithub} className="text-foreground/80 size-6"/></a>
            </div>
        </header>
        </BrowserView>
        <MobileView>
        <header className="fixed w-full h-24 p-8 flex justify-between">
            <div className="flex items-center gap-2">
                <div className="h-6 opacity-[96%]">
                    <Logo />
                </div>
                <h1 className="text-3xl font-medium text-foreground">Rookit</h1>
            </div>
            <div className="flex items-center gap-8">
                <button onClick={() => {setHamburger(!hamburger)}}><FontAwesomeIcon icon={faBars} className="text-foreground size-7"/></button>
            </div>
        </header>
        {hamburger ? <>
        <div className="absolute w-full h-full bg-background opacity-40 z-10" onClick={() => {setHamburger(!hamburger)}}>

        </div>
        </> : <></>}
        </MobileView>
        </>
    )
}
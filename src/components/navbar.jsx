import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCross, faMoon, faSun, faTimes, faX } from "@fortawesome/free-solid-svg-icons";
import { onThemeChange, toggleTheme } from "../helpers/theme";
import { useEffect, useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { BrowserView, MobileView } from "react-device-detect";
import { Logo } from "./logo";

export function Navbar() {

    const navigate = useNavigate();
    const [theme, setTheme] = useState("dark")
    const [hamburger, setHamburger] = useState(false)

    useEffect(() => {
        onThemeChange(setTheme)
    }, [])

    const moonIcon = <FontAwesomeIcon icon={faMoon} className="text-blue-400 size-6"/>
    const sunIcon = <FontAwesomeIcon icon={faSun} className="text-yellow-400 size-6"/>

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
                <button onClick={() => navigate("/login")} className="text-foreground/80 font-medium">Login</button>
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
            {/* Darken the background */}
            <div className="z-10 absolute w-full h-full bg-foreground/5 backdrop-blur-sm" onClick={() => {setHamburger(!hamburger)}}></div>
            {/* Hamburger */}
            <div className="z-30 absolute right-0 top-0 m-4 p-4">
                <button onClick={() => {setHamburger(!hamburger)}}><FontAwesomeIcon icon={faTimes} className="text-foreground/40 size-7"/></button>
            </div>
            <div className="z-20 absolute right-0 top-0 w-2/3 m-4 p-4 bg-background rounded-lg">
                <div className="grid gap-4">
                    <button onClick={() => navigate("/about")} className="text-foreground/80 font-medium text-[1.3rem] text-left">About</button>
                    <button onClick={() => navigate("/about")} className="text-foreground/80 font-medium text-[1.3rem] text-left">Login</button>
                    
                    {/** Divider*/}
                    <div className="bg-foreground/5 h-1 w-full rounded-lg"></div>
                    
                    <div className="float-right">
                        <div className="flex float-right gap-4">
                            <button onClick={() => {toggleTheme()}}>{themeIcon}</button>
                            <a href="https://github.com/rookitnet" target="_blank"><FontAwesomeIcon icon={faGithub} className="text-foreground/80 size-6"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </> : <></>}
        </MobileView>
        </>
    )
}
import { useEffect, useState } from "react"
import { onThemeChange } from "../helpers/theme"

export default function Logo() {

    const [theme, setTheme] = useState("dark")

    useEffect(() => {
        onThemeChange(setTheme)
    }, [])

    const light = "https://github.com/rookitnet/.github/blob/main/images/rookit-logo.png?raw=true"
    const dark = "https://github.com/rookitnet/.github/blob/main/images/rookit-logo-black.png?raw=true"

    const src = theme == "dark" ? light : dark

    return (
        <img className="max-h-full max-w-full" src={src} />
    )
}
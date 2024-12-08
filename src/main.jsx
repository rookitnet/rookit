import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import { useEffect } from "react"
import "./output.css"

import Join from "./pages/join/Join"

export default function Main() {

  // Does the use have dark mode selected?
  useEffect(() => {

    const selectedTheme = localStorage.getItem('theme')

    // Do they already have a selected theme?
    if (selectedTheme) {
      document.body.classList.add(selectedTheme)

      // Does the os prefer dark mode?
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add("dark")

      // Otherwise, use light mode.
    } else {
      document.body.classList.add("light")
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Routes>
            <Route path='/' element={<Join/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<Main/>)
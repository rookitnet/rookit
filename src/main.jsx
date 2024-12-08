import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import { useEffect } from "react"
import "./output.css"

import Join from "./pages/join/Join"
import { onPageLoad } from "./helpers/theme"

export default function Main() {

  // Does the use have dark mode selected?
  useEffect(() => onPageLoad(), [])

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
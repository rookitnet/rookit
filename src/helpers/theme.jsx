export var setFunctionList = []
export var theme = "dark"

export function onPageLoad() {
    const selectedTheme = localStorage.getItem('theme')

    // Do they already have a selected theme?
    if (selectedTheme) {
      document.body.classList.add(selectedTheme)
      theme = selectedTheme

      // Does the os prefer dark mode?
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add("dark")
      setTheme("dark")

      // Otherwise, use light mode.
    } else {
      document.body.classList.add("light")
      setTheme("light")
    }
}

export function toggleTheme() {
  if (theme == "dark") {
    setTheme("light")
  } else {
    setTheme("dark")
  }
}

export function setTheme(newTheme) {
  if (newTheme == "dark") {
    document.body.classList.remove("light")
    document.body.classList.add("dark")
    setFunctionList.forEach(item => item("dark"))
    theme = "dark"
  } else {
    document.body.classList.remove("dark")
    document.body.classList.add("light")
    setFunctionList.forEach(item => item("light"))
    theme = "light"
  }
}

export function onThemeChange(setFunction) {
  setFunctionList.push(setFunction)
}
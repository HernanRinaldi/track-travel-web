const applyInitialDataTheme = () => {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light")
  } else if(localStorage.getItem("theme")) {
    let mode = localStorage.getItem("theme")
    document.getElementById("switch").className = mode
    document.documentElement.setAttribute("data-theme", mode)
  }
}



module.exports = { applyInitialDataTheme }

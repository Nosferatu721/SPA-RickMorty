const defTheme = () => {
  const btnSwitch = document.getElementById("switch"),
    nodeListDark = document.querySelectorAll("[data-dark]");

  document.addEventListener("DOMContentLoaded", (e) => {
    console.log("XD");
    if (localStorage.getItem("theme") === "light")
      nodeListDark.forEach((et) => et.classList.remove("darkTheme"));
    if (localStorage.getItem("theme") === "dark")
      nodeListDark.forEach((et) => et.classList.add("darkTheme"));
  });

  document.addEventListener("click", (e) => {
    if (e.target.matches("#switch")) {
      if (btnSwitch.checked) {
        localStorage.setItem("theme", "dark");
        nodeListDark.forEach((et) => et.classList.add("darkTheme"));
      } else {
        localStorage.setItem("theme", "light");
        nodeListDark.forEach((et) => et.classList.remove("darkTheme"));
      }
    }
  });
};

export default defTheme;

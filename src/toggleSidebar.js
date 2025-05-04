import { getElement } from "./utils.js";

const toggleNav = getElement(".toggle-nav");
const sidebar = getElement(".sidebar-overlay");
const sidebarClose = getElement(".sidebar-close");

toggleNav.addEventListener("click", () => {
  sidebar.classList.add("show");
});

sidebarClose.addEventListener("click", () => {
  sidebar.classList.remove("show");
});

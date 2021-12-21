import { getLoopRemoveSidebar } from "./getLoopRemoveSidebar";

export const getRemoveSidebar = (e) => {
     const sidebar = document.querySelector(".navbar__bars-sidebar");
     const navbar = document.querySelector(".navbar");
     const main = document.querySelector(".main");
     const section = document.querySelectorAll("section");
     const a = document.querySelectorAll("a");
     const p = document.querySelectorAll("p");

     const exitSidebar = document.querySelector(".sidebar__times");
     if (e.target === sidebar) {
          sidebar.classList.remove("active__sidebar");
          sidebar.classList.add("remove__sidebar");
     }

     if (e.target === navbar || e.target === main || e.target === exitSidebar) {
          if (sidebar.classList.contains("active__sidebar")) {
               sidebar.classList.remove("active__sidebar");
               sidebar.classList.add("remove__sidebar");
          }
     }

     getLoopRemoveSidebar(section, e);
     getLoopRemoveSidebar(p, e);
     getLoopRemoveSidebar(a, e);
};

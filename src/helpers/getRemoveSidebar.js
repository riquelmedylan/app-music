export const getRemoveSidebar = () => {
     const sidebar = document.querySelector(".navbar__bars-sidebar");
     sidebar.classList.remove("active__sidebar");
     sidebar.classList.add("remove__sidebar");
};

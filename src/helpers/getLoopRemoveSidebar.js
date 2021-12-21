export const getLoopRemoveSidebar = (arr, e) => {
     const sidebar = document.querySelector(".navbar__bars-sidebar");

     if (sidebar.classList.contains("active__sidebar")) {
          arr.forEach((sec) => {
               if (e.target === sec) {
                    sidebar.classList.remove("active__sidebar");
                    sidebar.classList.add("remove__sidebar");
               }
          });
     }
     // if (sidebar.classList.contains("active__sidebar")) {
     //      a.forEach((sec) => {
     //           if (e.target === sec) {
     //                sidebar.classList.remove("active__sidebar");
     //                sidebar.classList.add("remove__sidebar");
     //           }
     //      });
     // }
     // if (sidebar.classList.contains("active__sidebar")) {
     //      p.forEach((sec) => {
     //           if (e.target === sec) {
     //                sidebar.classList.remove("active__sidebar");
     //                sidebar.classList.add("remove__sidebar");
     //           }
     //      });
     // }
};

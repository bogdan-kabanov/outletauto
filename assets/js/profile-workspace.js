const profileLinks = document.querySelectorAll(".profile-link");
const workspaceList = document.querySelectorAll(".workspace");

profileLinks.forEach((e) => {
  e.addEventListener("click", () => {
    const workspaceId = e.getAttribute("data-workspace");

    if (!e.classList.contains("profile-link-active")) {
      profileLinks.forEach((e) => {
        e.classList.remove("profile-link-active");
      });
      e.classList.add("profile-link-active");
    }

    workspaceList.forEach((e) => {
      e.classList.remove("workspace-active");
      if (e.getAttribute("data-workspace") == workspaceId) {
        e.classList.add("workspace-active");
      }
    });
  });
});

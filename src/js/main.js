function toggleMenu() {
  const burger = document.querySelector("#burger");
  const menu = document.querySelector("#mobile-menu");
  const body = document.querySelector("body");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
    body.classList.toggle("overflow-hidden");
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 767.99) {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
      burger.classList.remove("active");
      body.classList.remove("overflow-hidden");
    }
  });
}
toggleMenu();

function toggleTabs(tabsTriggerClass, tabsContentClass) {
  const tabsTriggers = document.querySelectorAll(tabsTriggerClass);
  const tabsContent = document.querySelectorAll(tabsContentClass);

  tabsContent.forEach((content, idx) => {
    if (idx === 0) {
      content.classList.remove("hidden");
    } else {
      content.classList.add("hidden");
    }
  });

  tabsTriggers.forEach((trigger, idx) => {
    trigger.addEventListener("click", () => {
      tabsTriggers.forEach((t) => t.classList.remove("active"));
      trigger.classList.add("active");

      tabsContent.forEach((content) => {
        content.classList.add("hidden");
      });

      if (trigger.classList.contains("show-all")) {
        tabsContent.forEach((content) => {
          content.classList.remove("hidden");
        });
      } else {
        tabsContent[idx].classList.remove("hidden");
      }

      if (trigger.classList.contains("show-all")) {
        trigger.classList.remove("active");
      }
    });
  });
}

toggleTabs(".tab-trigger", ".tab-content");

toggleTabs(".tab-trigger", ".tab-content");

//Scroll Down
document.addEventListener("DOMContentLoaded", function () {
  const checkCoursesBtn = document.getElementById("checkCoursesBtn");
  const coursesSection = document.getElementById("coursesSection");

  checkCoursesBtn.addEventListener("click", function (event) {
    event.preventDefault();

    coursesSection.scrollIntoView({ behavior: "smooth" });
  });
});
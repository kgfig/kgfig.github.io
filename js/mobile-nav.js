const toggleCollapsibleNav = function () {
  toggleVisibility("nav-collapse");
};

const toggleDropdown = function () {
    toggleVisibility("dropdown-list");
};

const toggleVisibility = function (id) {
    const DISPLAY_BLOCK = "block";
    const DISPLAY_NONE = "none";
  
    const $nav_collapse = document.getElementById(id);
    // let display = $nav_collapse.style.display;
    // if (!display || display === DISPLAY_NONE) {
    //     $nav_collapse.style.display = DISPLAY_BLOCK;
    // } else {
    //   $nav_collapse.style.display = DISPLAY_NONE;
    // }
    slideToggle($nav_collapse, 150);
};
  
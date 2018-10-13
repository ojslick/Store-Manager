
const myFunction = () => {
    const topNav = document.getElementById("myTopnav");
    if (topNav.className === "top-nav") {
      topNav.className += " responsive";
    } else {
      topNav.className = "top-nav";
    }
}
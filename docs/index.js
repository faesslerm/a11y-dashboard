const navigation = document.getElementById("navigation");
const links = [
    { href: "index.html", name: "Dashboard", icon: "fa-tachometer-alt" },
    { href: "blog.html", name: "Blog", icon: "fa-rss" },
    { href: "typography.html", name: "Typography", icon: "fa-font" },
    { href: "color.html", name: "Color", icon: "fa-palette" },
    { href: "sidepanel.html", name: "Sidepanel", icon: "fa-th" },
    { href: "form.html", name: "Forms", icon: "fa-keyboard" },
    { href: "table.html", name: "Tables", icon: "fa-table" },
    { href: "alert.html", name: "Alerts", icon: "fa-bell" },
    { href: "slider.html", name: "Slider", icon: "fa-sliders-h" },
    { href: "avatar.html", name: "Avatar", icon: "fa-user" },
    { href: "button.html", name: "Button", icon: "fa-toggle-on" },
    { href: "progress.html", name: "Progress", icon: "fa-spinner" },
    { href: "badge.html", name: "Badge", icon: "fa-certificate" },
];

const createNavItem = (href, name, iconName) => {
    const navItem = document.createElement("li");
    navItem.classList.add("nav-item");

    const link = document.createElement("a");
    link.href = href;
    link.classList.add("nav-link", "link-dark");

    const icon = document.createElement("i");
    icon.classList.add("fa", iconName, "me-2");
    link.appendChild(icon);
    link.appendChild(document.createTextNode(name));

    navItem.appendChild(link);

    return navItem;
};

links.forEach(link => {
    const navItem = createNavItem(link.href, link.name, link.icon);
    navigation.appendChild(navItem);
});
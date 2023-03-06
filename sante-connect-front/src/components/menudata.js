// Data for navbar menu in non-logged condition with unprotected options (screens) and about page
// CSS Styles are the same for both navbars

import './navbar-styles.css'

export const MenuData = [
    {
        title: "Se connecter",
        url: "/sign-in",
        className: "nav-links",
    },
    {
        title: "S'inscrire",
        url: "/sign-up",
        className: "nav-links",
    },
    {
        title: "À propos",
        url: "/about",
        className: "nav-links",
    }
];

export default MenuData;
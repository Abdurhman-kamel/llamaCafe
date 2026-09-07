/** Navigation link config — single source of truth for the Header drawer. */
export const MENU_LINKS = [
    {
        id: "01",
        key: "welcome",
        path: "#welcome",
        preview: "/images/NavMenu/llama store.webp",
    },
    {
        id: "02",
        key: "menu",
        path: "#menu",
        preview: "/images/NavMenu/coffee.webp",
    },
    {
        id: "03",
        key: "aboutUs",
        path: "#aboutUs",
        preview: "/images/NavMenu/aboutUs.webp",
    },
    {
        id: "04",
        key: "favorites",
        path: "#favorites",
        preview: "/images/NavMenu/contact.webp",
    },
    {
        id: "05",
        key: "branches",
        path: "#branches",
        preview: "/images/NavMenu/llama outside.webp",
    },
    {
        id: "06",
        key: "contact",
        path: "#contact",
        preview: "/images/NavMenu/contact.webp",
    },
];

export const SOCIAL_LINKS = [
    { key: "instagram", href: "https://www.instagram.com/llama.cafe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
    { key: "tiktok", href: "https://www.tiktok.com/@llama_sa?_r=1" },
];

export const MENU_NOISE_BG =
    'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")';

export const NAV_ID = "main-navigation";
export const menuItems = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'Products',
        url: '/products',
        submenu: [
            {
                title: 'Blink for Restaurants',
                url: 'restaurants',
                icon: 'fa-utensils'
            },
            {
                title: 'Blink for Supermarket',
                url: 'supermarket',
                icon: 'fa-shopping-cart'
            },
            {
                title: 'Blink for Cloud Kitchen',
                url: 'cloud-kitchen',
                icon: 'fa-cloud'
            },
            {
                title: 'Blink for Other Retail',
                url: 'other-retail',
                icon: 'fa-store'
            },
            {
                title: 'Blink for Delivery',
                url: 'delivery',
                icon: 'fa-truck'
            },
            {
                title: 'Blink Enterprise Practice',
                url: 'enterprise',
                icon: 'fa-building'
            },
            {
                title: 'Blink POS',
                url: 'pos',
                icon: 'fa-cash-register'
            },
        ],
    },
    {
        title: 'Pricing',
        url: '/pricing',
    },
    {
        title: 'CUSTOMERS',
        url: '/customers',
    },
    {
        title: 'About Us',
        url: '/about',
    },
    {
        title: 'Resources',
        url: '/resources',
        submenu: [
            {
                title: 'Blog',
                url: 'blog',
                icon: 'fa-blog'
            },
            {
                title: 'Glossary',
                url: 'glossary',
                icon: 'fa-book'
            },
            {
                title: 'Help Center',
                url: 'help',
                icon: 'fa-life-ring'
            },
            {
                title: 'Release Notes',
                url: 'release-notes',
                icon: 'fa-sticky-note'
            },
            {
                title: 'Developer Docs',
                url: 'developer-docs',
                icon: 'fa-code'
            },
        ],
    },
];

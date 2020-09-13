module.exports = {
    title: "Laravel Jetstream (日本語勝手訳)",
    description: "Beautifully designed application scaffolding for Laravel",
    base: '/',

    head: [
        [
            'link',
            {
                href:
                    'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i',
                rel: 'stylesheet',
                type: 'text/css',
            },
        ],
    ],

    themeConfig: {
        logo: '/assets/img/logo.svg',
        displayAllHeaders: true,
        activeHeaderLinks: false,
        searchPlaceholder: '/ 押下で検索',
        lastUpdated: false, // string | boolean
        sidebarDepth: 0,

        repo: 'laravel/jetstream',

        docsRepo: 'chatii/jetstream-docs',
        editLinks: true,
        editLinkText: '翻訳のミス・漏れがありましたらお知らせください',

        nav: [
            { text: 'Home', link: '/', target: '_self' },
        ],

        sidebar: {
            '/1.x/': require('./1.x')
        },
    },
}

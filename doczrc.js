export default {
  port: process.env.PORT || 3000,
  title: "Discord List API Docs",
  description: "Documentação da API oficial da Discord List",
  themeConfig: {
    initialColorMode: 'dark',
    showDarkModeSwitch: false,
    showMarkdownEditButton: false
  },
  files: '**/*.mdx',
  menu: [
    'Introdução',
    'Referência',
    'Recursos'
  ]
}
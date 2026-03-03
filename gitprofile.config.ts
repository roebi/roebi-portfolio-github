// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'roebi', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/roebi-portfolio-github/', // use '/repo-name/', if you host on GitHub Pages (Subdirectory)
  projects: {
    github: {
      display: true,
      header: 'My Projects',
      mode: 'manual' {
        projects: [
          'roebi/aider-skills',
          'roebi/agent-skills',
          'roebi/awesome-agent-skills',
          'roebi/github-api-get',
          'roebi/github-api-get-nodejs-example',
        ],
      },
    },
  },
  seo: {
    title: 'Portfolio of roebi',
    description: '',
    imageURL: '',
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    // defaultTheme: 'light',
    // defaultTheme: 'procyon',
    defaultTheme: 'emerald',
    disableSwitch: true, // fix theme switch
  },
};

export default CONFIG;


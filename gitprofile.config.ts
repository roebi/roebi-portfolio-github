// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'roebi', // Your GitHub org/user name. (This is the only required config)
  }
  base: '/roebi-portfolio-github/', // use '/repo-name/', if you host on GitHub Pages (Subdirectory)
  projects: {
    github: {
      display: true,
      header: 'My Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
        },
      },
    },
  },
  themeConfig: {
    // defaultTheme: 'light',
    defaultTheme: 'procyon',
    disableSwitch: true // fix theme switch
  },
};

export default config;


import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Taadland PokeDex`,
        short_name: `TAadlandDex`,
        icon: `src/images/pika_icon.png`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
  ],
  jsxRuntime: `automatic`,
};

export default config;

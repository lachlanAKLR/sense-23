module.exports = {
  siteMetadata: {
    title: `sense`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'bhn8ea2c',
        dataset: 'production',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-transition-link',
    'gatsby-plugin-scroll-reveal',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-scroll-reveal',
      options: {
        threshold: 0.1,
      },
    },
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        mode: 'render-blocking',
        enableListener: true,
        custom: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: [
              'Remington',
              'EverettMedium',
              'EverettRegular',
              'EverettItalic',
              'Druk',
            ],
            /* Path to the font CSS file inside the "static" folder with @font-face definition */
            file: '/fonts/fonts.css',
          },
        ],
      },
    },
  ],
};

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `UpišiFon.rs`,
    description: `Edukativni centar Binary Bioskop organizuje online pripremu za prijemni         ispit iz matematike za upis na FON 2023/2024. Celokupnu pripremu je, putem naše e-learning platforme UpišiFon.rs, moguće pohađati od kuće.`,
    author: `@binarybioskop`,
    image: `/upisiFonLogo.png`,
    keywords: `prijemni, FON, upis, online, upišifon, matematika, priprema, upisifon`,
    siteUrl: `https://upisifon.rs/`,
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -60,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `UpisiFon.rs`,
        short_name: `UpisiFon.rs`,
        description: `Edukativni centar Binary Bioskop organizuje online pripreme za prijemni
        ispit iz matematke za upis na FON 2023/2024`,
        lang: `sr`,
        display: `standalone`,
        icon: `static/upisiFonLogo.png`,
        start_url: `/`,
        background_color: `#901447`,
        theme_color: `#fff`,
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "sr",
      },
    },
  ],
}

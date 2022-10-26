/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `UpišiFon.rs`,
    description: `Edukativni centar Binary Bioskop organizuje online pripreme za prijemni
        ispit iz matematke za upis na FON 2023/2024. Celokupnu pripremu je,
        putem naše e-learning platforme, moguće pohađati od kuće, a u cilju
        praćenja napretka svih polaznika, koristićemo i kanale komunikacije kao
        što su email i WhatsApp.`,
    image: `/upisiFonLogo.png`,
    author: `@binarybioskop`,
    keywords: `fon, prijemni, matematika, upis, onlajn, online, priprema`,
    siteUrl: `https://upisifon.rs/`,
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
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
  ],
}

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "nZq2NMDhzePh4qWEQUgVej",
        token: "4hmpCnRdGZDcRq5Oa5XdG8BFxSDlKngH7Lvh1pn3pgAmefJ2vHcEuLBILmqwIVccuztGq1ly3c5vMWGqWA",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: require.resolve("./src/templates/defaultPlasmicPage.jsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}

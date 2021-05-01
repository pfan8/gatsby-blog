const config = require("./customize")
const remarkMath = require(`remark-math`)
const rss = require("./gatsby-rss")

module.exports = {
  siteMetadata: config,
  pathPrefix: "/gatsby-blog",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-remark-emoji`, // Emoji list: https://emojipedia.org/joypixels/
    rss,

    // Read markdown/mdx files
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/_posts`,
      },
    },

    // Read images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/_assets`,
      },
    },

    // mdx support
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          // Adding title to code blocks. Usage: ```js:title=example.js
          {
            resolve: "gatsby-remark-code-titles",
            options: {
              className: "code-title-custom",
            },
          },

          // Process images in markdown
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: config.maxWidth,
              backgroundColor: `transparent`,
              linkImagesToOriginal: true,
            },
          },

          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `anchor-heading`,
            },
          },

          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `${__dirname}/_posts`,
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              tight: false,
              ordered: false,
              fromHeading: 2,
              toHeading: 6,
              className: "table-of-contents",
            },
          },
          `gatsby-remark-autolink-headers`,
        ],
        remarkPlugins: [remarkMath, require("remark-html-katex")],
      },
    },

    // Using svg as component
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /_assets/,
        },
      },
    },

    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // Removes warnings trying to use non-gatsby image in markdown
        checkSupportedExtensions: false,
      },
    },

    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: config.gaTrackingId,
    //   },
    // },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-blog-mdx`,
        short_name: `blog`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: config.faviconSrc, // This path is relative to the root of the site.
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `dummy`,
        path: `${__dirname}/src/z_`,
      },
    },
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn:
          "https://3c4e4380e42743098667bf3e22afa54d@o559656.ingest.sentry.io/5694695",
        sampleRate: 0.7,
      },
    },
  ],
}

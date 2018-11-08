const cspBuilder = require('content-security-policy-builder');

const site = require('./src/pages/site');
const theme = require('./src/pages/theme');

const families = theme.fonts.body.split(',')
  .concat(theme.fonts.heading.split(','))
  .map((family) => family.trim())
  .filter((family) => !(family.toLowerCase() in ['serif', 'sans-serif']));

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families
        }
      },
    },
    'gatsby-transformer-json',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer'
            }
          },
          'gatsby-remark-katex',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-prismjs',
          'gatsby-remark-responsive-iframe',
        ],
      },
    },
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
        {
          siteJson {
            url
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }`,
        serialize: ({ siteJson: { url }, allSitePage: { edges } }) => edges
          .map(({ node: { path } }) => ({
            url: url + path,
            changefreq: 'daily',
            priority: 0.7,
          })),
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: site.title,
        short_name: site.titleAlt || site.title,
        description: site.description,
        start_url: '/',
        background_color: theme.palette.primary.main,
        theme_color: theme.palette.secondary.main,
        display: 'standalone',
        icon: `static/${site.favicon}`,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            `Content-Security-Policy: ${cspBuilder({
              directives: {
                defaultSrc: "'none'",
                scriptSrc: ["'self'", "'unsafe-inline'"],
                styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
                imgSrc: 'https:',
                mediaSrc: 'https:',
                fontSrc: ['data:', 'https://fonts.gstatic.com'],
                connectSrc: "'self'",
                formAction: "'self'",
                frameAncestors: "'self",
                baseUri: "'self",
              }
            })}`,
            'Referrer-Policy: same-origin',
            'Feature-Policy: geolocation none; midi none; microphone none; camera none; magnetometer '
            + 'none; gyroscope none; payment none',
            'Strict-Transport-Security: max-age=63072000; includeSubDomains; preload'
          ]
        }
      }
    }
  ],
};

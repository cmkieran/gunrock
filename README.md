# Gunrock

[![pipeline status](https://gitlab.com/smythian/gunrock/badges/master/pipeline.svg)](https://gitlab.com/smythian/gunrock/commits/master)
[![coverage report](https://gitlab.com/smythian/gunrock/badges/master/coverage.svg)](https://gitlab.com/smythian/gunrock/commits/master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a2a2c9aa7a2541eab0fd119839d93382)](https://www.codacy.com/app/ecsmyth/gunrock?utm_source=gitlab.com&amp;utm_medium=referral&amp;utm_content=smythian/gunrock&amp;utm_campaign=Badge_Grade)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://gitlab.com/smythian/gunrock/blob/master/LICENSE)
[![Maintenance](https://img.shields.io/badge/maintained-Yes-brightgreen.svg)](https://gitlab.com/smythian/gunrock/activity)

Professional website for UC Davis Agricultural and Resource Economics PhD candidates

## Getting Started

Gunrock uses the Gatsby v2 site generator and is styled after the HTML5 Up Strata theme.

<a href="https://app.netlify.com/start/deploy?repository=https://gitlab.com/smythian/gunrock&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

### Features

- 100% configurable from CMS interface (e.g., avatar image, theme colors, fonts)
- Fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- [Material UI](https://material-ui.com/) for Material design
  - CSS in JS
  - Prebuilt (static/themes) and customizable themes
  - Responsive theme
- [FontAwesome support](https://fontawesome.com)
- [NetlifyCMS](https://www.netlifycms.org) support for creating/editing posts via admin panel
- Posts in markdown
  - Syntax highlighting via [PrismJS](http://prismjs.com/)
  - Math equation support via [katex](https://github.com/Khan/KaTeX)
  - Automatic image transformation and size optimization
  - Catch links
  - Image processing via [Sharp](https://github.com/lovell/sharp)
- Author segment
  - Name
  - Location
  - Customizable external links (e.g., for social media)
- Tags
  - Separate page for posts under each tag
- SEO
  - [React Helmet](https://github.com/nfl/react-helmet)
  - [Sitemap generation](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sitemap)
  - robots.txt
- Development tools
  - ESLint and remark linting
  - Jest for testing
  - [Storybook](https://storybook.js.org/) for UI development
  - Automated snapshot (component structure) and visual regression testing 

### Prerequisites

* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [NVM](https://github.com/creationix/nvm) (Optional) If you use NVM, run `n=$(which node);n=${n%/bin/node}; chmod -R 755 $n/bin/*; sudo cp -r $n/{bin,lib,share} /usr/local` to copy Node to /usr/local
* [Node](https://nodejs.org/en/download/)
* [Yarn](https://yarnpkg.com/lang/en/docs/install).
* [Gatsby CLI](https://www.gatsbyjs.org/)
* [Docker](https://docs.docker.com/install/) (Optional) To run visual regression tests

### Commands

* `yarn` - Installs dependencies
* `yarn start` - Start development server and open the website (<https://localhost:8000>) in your default browser
* `yarn test:unit` - Run unit tests
  * (TODO) Add enzyme tests for NavBar once enzyme adds support for `React.memo`
  * (TODO) Figure out more meaningful tests for Navigation and Layout (i.e. components with a gatsby `StaticQuery` component). This issue also affects tests for `src/pages` and `src/templates` components.
* `yarn test:visual` - Run visual regression tests
* `yarn lint` - Lint JavaScript, Markdown, and YAML
* `yarn storybook` - Start storybook (<https://localhost:9000>) and open in your default browser
* `yarn security` - 

## Working with content

(TODO)

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://gitlab.com/smythian/gunrock/tags).

## Authors

* [Eric Smyth](https://gitlab.com/smythian)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 

The following files retain the license of the original copyright holder.

- `src/img/robot.jpg` - CC0
- `static/img/grass-field-during-sunset.jpeg` - [Pexels License. Credit to Annette Bauer](https://www.pexels.com/photo/grass-field-during-sunset-1184556) 
- `static/img/seattle.jpeg` - [Pexels License. Credit to Zoe Pappas](https://www.pexels.com/photo/space-needle-seattle-944636/) 
- `src/content/netlify/made-with-cc.pdf` - (C) 2017 by Creative Commons. Published under a Creative Commons Attribution-ShareAlike license (CC BY-SA), version 4.0.
- `src/content/netlify/Publicdomain.pdf` - CC0

# blog-next-giscus-hygraph-chakra-ui-adsense-coil

# 🚀 Programming blog with Next.js GitHub Giscus Hygraph (formerly GraphCMS), Google Adsense, Coil Ad Monetization, read Medium and Dev.To articles via API 🚀

### Status and Issues (see Issue Tab)

- Can't build, it should work otherwise. 
- Hygraph cloned schema is set up but photograph url's are not editable.
- #2 (closed) Giscus - GitHub discussions - is set up
- #3 (closed) Hygraph account is set up
- #6 (closed) Google analytics is set up
- #11 (closed) Substack is set up
- #4 (open) Hygraph cloned schema is set up but photograph url's are not editable
- #5 (open) Create a new Hygraph schema for a blog
- #7 (open) Google Adsense is not set up
- #8 (open) Ko-fi is set up but needs a Stripe account
- #9 (open) Create a Stripe account
- #10 (open) Cloudinary is set up but needs Author image uploaded
- #12 (open) Build is failing because needs at least one featured post, tags
- #13 (open) config/site.config.js needs to be modified
- #14 (open) Coil and ad display is not set up

https://github.com/coding-to-music/blog-next-giscus-hygraph-chakra-ui-adsense-coil

https://blog-next-giscus-hygraph-chakra-ui-adsense-coil.vercel.app

From / By https://github.com/RakeshPotnuru/blog

https://blog.itsrakesh.com/

https://blog.itsrakesh.com/how-to-set-up-your-own-personal-blog-step-by-step-guide

https://hygraph.com/

Clone this blog project  https://app.hygraph.com/clone/13f9db967a6640af82423ad6f304025d?name=itsrakesh-blog  

https://cloudinary.com/

https://coil.com/


<!-- <div style="text-align:center;">
  <img src="/images/chakra.jpg" alt="Image" />
  <p><em>Chakra Component Library with Next.js</em></p>
</div> -->

## Node Version:

```java
nvm use 18

Now using node v18.17.1 (npm v10.1.0)
```

## Environment variables:

See `.env.example`

```java
NEXT_PUBLIC_HYGRAPH_CONTENT_API_URL=
NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN=

NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID=

NEXT_PUBLIC_SITE_URL=

NEXT_PUBLIC_GISCUS_REPO=
NEXT_PUBLIC_GISCUS_REPO_ID=
NEXT_PUBLIC_GISCUS_CATEGORY=
NEXT_PUBLIC_GISCUS_CATEGORY_ID=

NEXT_PUBLIC_KOFI_WIDGET_EMBED_URL=

NEXT_PUBLIC_CLOUDINARY_CLOUDNAME=

NEXT_PUBLIC_SUBSTACK_URL=

```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/blog-next-giscus-hygraph-chakra-ui-adsense-coil.git
git push -u origin main
```

## Giscus GitHub Discussion Commenting system

### Instructions

https://hugomods.com/en/blog/2023/05/how-to-configure-giscus/

### Install the Giscus app:

https://github.com/apps/giscus

### Configure the Giscus app for your site:

https://giscus.app/

1 - Page <--> Discussion Mapping  
2 - Enter the username/reponame   
3 - Discussion Category   
4 - Features   
5 - Theme   

Scroll down, view the JSON that is proposed for your site. Adjust the checkboxes as needed

Copy the JSON values and store into the .env values

Here is how the settings are implemented in this website

```java
// /src/common/components/misc/Comment.jsx

import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react';
import Giscus from '@giscus/react';

const CommentBox = () => {
  const giscusTheme = useColorModeValue('light', 'dark');

  return (
    <Container maxW={'container.md'} my={10}>
      <Heading size={'md'}>LEAVE A COMMENT OR START A DISCUSSION</Heading>
      <Box my={10}>
        <Giscus
          repo={process.env.NEXT_PUBLIC_GISCUS_REPO}
          repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID}
          category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY}
          categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
          mapping="url"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme={giscusTheme}
          lang="en"
          loading="lazy"
          crossorigin="anonymous"
        />
      </Box>
    </Container>
  );
};

export default CommentBox;
```

## Begin original README.md

<div id="top"></div>

[![Netlify Status](https://api.netlify.com/api/v1/badges/1c639728-6ada-4eaa-beb6-4bdcb492baa1/deploy-status)](https://app.netlify.com/sites/blog-itsrakesh/deploys)
[![Better Stack Badge](https://uptime.betterstack.com/status-badges/v1/monitor/sq5a.svg)](https://status.itsrakesh.com)

<br />
<div align="center">

  <h3 align="center">itsrakesh - blog</h3>

  <p align="center">
    Browse programming tutorials and articles written by Rakesh Potnuru.
    <br />
    <br />
    <a href="https://blog.itsrakesh.com">View Example</a>
    ·
    <a href="https://github.com/coding-to-music/blog-next-giscus-hygraph-chakra-ui-adsense-coil/issues">Report Bug</a>
    ·
    <a href="https://github.com/coding-to-music/blog-next-giscus-hygraph-chakra-ui-adsense-coil/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![itsrakesh blog][product-screenshot]](https://blog.itsrakesh.com)

Follow [this](https://blog.itsrakesh.com/how-to-set-up-your-own-personal-blog-step-by-step-guide) guide to set up your own instance of this blog.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Next.js](https://nextjs.org/)
* [Chakra UI](https://chakra-ui.com/)
* [Hygraph](https://hygraph.com/) (Previously GraphCMS)

### Tools And Technologies Used

* [BeyondWords](https://beyondwords.io/) - Audio
* [Coil](https://coil.com/) - Web monetization
* [Google Analytics](https://analytics.google.com/)
* [Google AdSense](https://www.google.com/adsense/start/)
* [Giscus](https://giscus.app/) - A comments system powered by [GitHub Discussions](https://docs.github.com/en/discussions).
* [Netlify](https://netlify.com/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Setup project locally for development.

> **Note** [Important]
> These instructions are for development purposes only. Follow [this](https://blog.itsrakesh.com/how-to-set-up-your-own-personal-blog-step-by-step-guide) guide to set up your own instance of this blog.

### Prerequisites

#### Hygraph project set up
* Create or sign in to your [Hygraph](https://hygraph.com/) account.
* Click the button below to clone the Hygraph project.

[![Clone project](https://hygraph.com/button)](https://app.hygraph.com/clone/13f9db967a6640af82423ad6f304025d?name=itsrakesh-blog)

* Create or sign in to your [Cloudinary](https://cloudinary.com/) account.
* Follow [this](https://hygraph.com/blog/integrate-cloudinary-with-hygraph-ui-extensions) guide to install Cloudinary UI extension in Hygraph.

#### Blog set up
* npm
  ```sh
  npm install npm@latest -g
  ```
* Create `.env.local` file at the root level of the project and copy env variables from `.env.example` file. You need to fill atleast these three variables for development purpose.
  ```sh
  NEXT_PUBLIC_HYGRAPH_CONTENT_API_URL=
  NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN=
  NEXT_PUBLIC_CLOUDINARY_CLOUDNAME=
  ```

### Installation

1. Fork the repo
2. Clone the repo
   ```sh
   git clone https://github.com/[YOUR_USERNAME]/[YOUR_FORKED_PROJECT_NAME].git
   ```
3. Install the dependencies
   ```sh
   yarn
   ```
4. Start the development server
   ```sh
   yarn dev
   ```
5. Your project will be running at http://localhost:3000

<p align="right">(<a href="#top">back to top</a>)</p>

## Or

### With Docker

1. Fork the repo
2. Clone the repo
   ```sh
   git clone https://github.com/[YOUR_USERNAME]/[YOUR_FORKED_PROJECT_NAME].git
   ```
3. Build the image
   ```sh
   docker-compose build
   ```
4. Run docker image
   ```sh
   docker-compose up
   ```
5. Your project will be running at http://localhost:3000

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Twitter - [@rakesh_at_tweet](https://twitter.com/rakesh_at_tweet)

Project Link: [https://github.com/coding-to-music/blog-next-giscus-hygraph-chakra-ui-adsense-coil](https://github.com/coding-to-music/blog-next-giscus-hygraph-chakra-ui-adsense-coil)

Status - [status.itsrakesh.com](https://status.itsrakesh.com)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: https://project-assets.showwcase.com/9161/1656502274336-home%2520page%2520-%2520light.png

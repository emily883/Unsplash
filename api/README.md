
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

<h1 align="center">My Unsplash</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/emily883/Unsplash">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/rYyhwJAxMfES5jNQ9YsP">
      Challenge
    </a>
  </h3>
</div>

<br />

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

<br />

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Built With](#built-with)
- [Api reference](#api-reference)
- [Stack](#stack)
- [Contact](#contact)

<Br />
<Br />

## My Unsplash
---
<br />

The customized image gallery website is an intuitive platform that allows users to upload and organize images using descriptive labels. Users can easily search for images using keywords and enjoy customizable display options. It is a versatile and secure tool for efficiently creating and managing online image galleries.

<br />


---

### Built With

- [Express Js]()

<br />

<br />

## API Reference

<br />

#### Get all Images

```http
  GET /list
```

<br />


#### Add an image

```http
  POST /image
```

| Json Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of image to add  |
| `label`   | `string` | **Required**. Label of the Image  |
| `image`   | `string` | **Required**. Image URL           |



<br />


#### Delete an Image

```http
  DELETE /image/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to delete|






<br />


<br />

## Features

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge]() was to build an application to complete the given user stories.

<br />


<br />


## Stack 

#### **Server:** 
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Vitest](https://vitest.dev/)
- [Express Js](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)


## Contact

- Website [emilyportfolio.netlify.app](https://emilyportfolio.netlify.app/)
- GitHub [@emily883](https://github.com/emily883)
- Linkedin [Emily Cruz Gutiérrez](https://www.linkedin.com/in/emily-fullstack/)


## License

[MIT](https://choosealicense.com/licenses/mit/)


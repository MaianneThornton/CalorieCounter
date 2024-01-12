# freeCodeCamp JavaScript Algorithms and Data Structures - Calorie Counter

This is a project in the [Learn Basic JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/news/learn-javascript-with-new-data-structures-and-algorithms-certification-projects/).

## Table of contents 😌

- [Overview](#overview)
  - [The project](#the-project)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Code snippets](#im-really-proud-of-these-code-snippets%EF%B8%8F)
  - [Useful resources](#useful-resources)
- [Author](#author)
<!-- - [Acknowledgments](#acknowledgments) -->

## Overview👋🏾

Welcome to the <sup>2nd</sup> project of the course! While I already earned my certification, I thought it would be fun to go through the course again since its just been revamped. You can now learn JavaScript by building 21 projects, and I will be detailing each one 😊.

### The project😥

In this project users will be able to:

- Validate user input, perform calculations based on that input, and dynamically update your interface to display the results. 
- This project covers basic regular expressions, template literals, the addEventListener() method, and more.

### Screenshot🌇

![](./screenshot.png)

### Links👩🏾‍💻

- Live Site URL: (https://maianne-caloriecounter.netlify.app/)

## My process💭

This is a simple project that started by marking out initial structure, classes, and id's in HTML. The CSS was given to us with the beginning docs, along with the HTML boilerplate.  Functionality was added by way of JavaScript to allow users to enter their calorie budget, consumed calories, and exercise calories. The app then can then calculate the remaining calories. Users can also clear the form at any time.

### Built with👷🏾‍♀️

- Semantic HTML5 markup
- CSS custom properties
- JavaScript

### What I learned👩🏾‍🏫

This project was a review of basic JavaScript methods. I was able to refresh my memory and practice accessing data in arrays and objects, if/else statements, loops, accessing and updating the DOM, and methods such as .split, .replace, .match, .toLowerCase and Math.abs.

I was also able to brush up on my regex, which is something I have not used in quite a while.

### Continued development🔮

In the future I plan on continuing to practice using different selectors to be more precise when select elements.

I plan on using more regex in my code as regular expressions can easily condense large blocks of code with ease, and the more I work with them the better I get!

I also plan on continuing to practice using event listeners to make my pages more functional.

I plan on continuing to learn the best ways to phrase git commits, so that future viewers can fully understand the changes that have occurred.

### I'm really proud of these code snippets✂️

```js
const regex = /[+-\s]/g;
    return str.replace(regex, "");
};

//Filters out number inputs allowed for exponential notation (such as 1e10).
function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
};
```

### Useful resources📖

- [Resource 1](https://www.freecodecamp.org/news/learn-javascript-with-new-data-structures-and-algorithms-certification-projects/) - This is an amazing article which details the updated freeCodeCamp curriculum.
- [Resource 2](https://www.w3schools.com/jsref/jsref_obj_regexp.asp) - This guide which helped me write regular expressions. I'd recommend it to anyone still learning this concept or needing to look up a method or property.
- [Resource 3](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/) - This is an amazing article which helped me write better commit messages. I'd recommend it to anyone still learning this concept.

## Author🔎

- Website - [Portfolio Site](https://maiannethornton.netlify.app/)
- Frontend Mentor - [@MaianneThornton](https://www.frontendmentor.io/profile/MaianneThornton)
- GitHub - [@MaianneThornton](GitHub.com/MaianneThornton)
- Twitter - [@MaianneThornton](https://twitter.com/MaianneThornton)
- LinkedIn - [@MaianneThornton](https://www.linkedin.com/in/maiannethornton/)

<!-- ## Acknowledgments🙏🏾 -->


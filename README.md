<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/angiejo21/COUNTER">
    <img src="assets\img\favicon\android-chrome-192x192.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Retro-counter</h3>

  <p align="center">
    Vanilla JS counter
  </p>

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

</div>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://counter.bello.codes)

Retro-Counter is the final project for [start2impact](https://www.start2impact.it/)'s module "JavaScript Basics" in the Full-stack developer course.

### The assignment:

Develop a JS app that lets the user increment or decrement the counter value. Entering the page, the user should see: 0 set as the counter value, and two buttons (+ and -) to change said value.

### Requirements:

- The app must be developed with JS, without the help of Jquery or any framework.
- The buttons, as well as the counter, have to be implemented through JS.
- Additional features may be added if necessary.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Development

### The idea

The theme I chose is 90's videogames.

I set up the counter as a Gameboy with three buttons <strong>_+_ _-_</strong> and <strong>_RESET_</strong>; I gave them the iconic bulky look and chose a font that would fit the aesthetic: _Press Start 2P_. To create some dynamism, I added a moving background of repeated titles in gradient color.

I included sound and simple animation in each button:

- The display will "load" when starting the counter and during the reset,
- When pressed, an operator symbol will briefly bubble up or drop.

My <strong>main goal</strong> was for it to be <strong>responsive</strong> and <strong>user-friendly</strong>, meaning, even during stressing, the animations and sounds would end and reload without crashing.

The whole HTML structure is implemented through a JS function and the eventListener is placed on the buttons wrapper in order to use the Event Delegation.

### Built With

- JavaScript
- CSS
- HTML

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Angela Bellò - [Portfolio](https://bello.codes)

Project Link: [https://github.com/angiejo21/COUNTER](https://github.com/angiejo21/COUNTER)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/angiejo21/COUNTER.svg?style=for-the-badge
[license-url]: https://github.com/angiejo21/COUNTER/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/angelabello/
[product-screenshot]: assets\img\screenshot.gif

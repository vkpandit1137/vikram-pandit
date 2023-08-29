// const typedTextSpan = document.querySelector(".typed-text");
// const cursorSpan = document.querySelector(".cursor");

// const textArray = ["Aadarsh Thakur", "The Debug Arena"];
// const typingDelay = 200;
// const erasingDelay = 100;
// const newTextDelay = 800; // Delay between current and next text
// let textArrayIndex = 0;
// let charIndex = 0;

// function type() {
//   if (charIndex < textArray[textArrayIndex].length) {
//     if (!cursorSpan.classList.contains("typing"))
//       cursorSpan.classList.add("typing");
//     typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
//     charIndex++;
//     setTimeout(type, typingDelay);
//   } else {
//     cursorSpan.classList.remove("typing");
//     setTimeout(erase, newTextDelay);
//   }
// }

// function erase() {
//   if (charIndex > 0) {
//     if (!cursorSpan.classList.contains("typing"))
//       cursorSpan.classList.add("typing");
//     typedTextSpan.textContent = textArray[textArrayIndex].substring(
//       0,
//       charIndex - 1
//     );
//     charIndex--;
//     setTimeout(erase, erasingDelay);
//   } else {
//     cursorSpan.classList.remove("typing");
//     textArrayIndex++;
//     if (textArrayIndex >= textArray.length) textArrayIndex = 0;
//     setTimeout(type, typingDelay + 1100);
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   // On DOM Load initiate the effect
//   if (textArray.length) setTimeout(type, newTextDelay + 250);
// });

const typedTextSpan1 = document.querySelector(".typed-text1");
const cursorSpan1 = document.querySelector(".cursor1");

const textArray1 = [
  "Full Stack Developer",
  "Web Developer",
  "App Developer",
  // "Business Strategist",
];
const typingDelay1 = 190;
const erasingDelay1 = 100;
const newTextDelay1 = 800; // Delay between current and next text
let textArrayIndex1 = 0;
let charIndex1 = 0;

function type1() {
  if (charIndex1 < textArray1[textArrayIndex1].length) {
    if (!cursorSpan1.classList.contains("typing1"))
      cursorSpan1.classList.add("typing1");
    typedTextSpan1.textContent +=
      textArray1[textArrayIndex1].charAt(charIndex1);
    charIndex1++;
    setTimeout(type1, typingDelay1);
  } else {
    cursorSpan1.classList.remove("typing1");
    setTimeout(erase1, newTextDelay1);
  }
}

function erase1() {
  if (charIndex1 > 0) {
    if (!cursorSpan1.classList.contains("typing1"))
      cursorSpan1.classList.add("typing1");
    typedTextSpan1.textContent = textArray1[textArrayIndex1].substring(
      0,
      charIndex1 - 1
    );
    charIndex1--;
    setTimeout(erase1, erasingDelay1);
  } else {
    cursorSpan1.classList.remove("typing1");
    textArrayIndex1++;
    if (textArrayIndex1 >= textArray1.length) textArrayIndex1 = 0;
    setTimeout(type1, typingDelay1 + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray1.length) setTimeout(type1, newTextDelay1 + 250);
});

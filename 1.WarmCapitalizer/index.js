/*
  It is almost impossible to reused the code as a component
*/

// @ts-ignore
const warmCapitalizer = document.getElementsByClassName('warm-capitalizer')[0];

if (warmCapitalizer instanceof HTMLElement) {
  const text = warmCapitalizer.innerText;
  warmCapitalizer.innerText = text.toUpperCase() + '!!!';
}
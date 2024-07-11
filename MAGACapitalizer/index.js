/* 
  It is almost impossible to reused the code as a component
*/

const magaCapitalizer = document.getElementsByClassName('maga-capitalizer')[0];

if (magaCapitalizer instanceof HTMLElement)
{
  const text = magaCapitalizer.innerText;
  magaCapitalizer.innerText = text.toUpperCase() + "!!!";
}
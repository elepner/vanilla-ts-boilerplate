export function appendElement(el: HTMLElement) {
  const header = document.createElement('h1');
  header.innerText = 'Hey, I was inserted by TS';
  el.appendChild(header);
}
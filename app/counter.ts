import { incFnCreator } from './increment';
export function appendElement(button: HTMLButtonElement, text: HTMLElement) {
  const incFn = incFnCreator();
  button.onclick = () => {
    text.innerText = incFn().toString();
  };
}


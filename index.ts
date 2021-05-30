import { appendElement } from './app/counter';

const btn = document.getElementById('button') as HTMLButtonElement;
const text = document.getElementById('count') as HTMLSpanElement;

appendElement(btn, text);

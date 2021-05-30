import { appendElement } from './app/test';

const el = document.getElementsByTagName('body')[0];

const inc = (function incFn() {
  let counter = 0;
  return () => {
    return counter++;
  };
})();

inc();
inc();
inc();
inc();



appendElement(el);

export function incFnCreator() {
  let counter = 0;
  return () => {
    return counter++;
  };
}

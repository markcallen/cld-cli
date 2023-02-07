export const replaceWithAstrisk = (str: string) => {
  if (str) {
    return [...str]
      .map((e, i) => {
        if (i > 0 && i < str.length - 4) {
          return '*';
        }

        return e;
      })
      .join('');
  }

  return '';
};

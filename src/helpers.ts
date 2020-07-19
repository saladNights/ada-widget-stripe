export const flattenObject = (obj: any, prefix = ''): typeof obj => {
  return Object.keys(obj).reduce((acc: any, k) => {
    const pre = prefix.length ? prefix + '.' : '';

    if (typeof obj[k] === 'object' && obj[k] !== null) {
      Object.assign(acc, flattenObject(obj[k], pre + k));
    } else {
      acc[pre + k] = obj[k];
    }
    return acc;
  }, {});
};

export const truncateString = (
  str: string,
  maxLength: number = 50,
  end: string = '...'
) => {
  if (str.length <= maxLength) {
    return str;
  }

  const length = maxLength - end.length;

  return str.slice(0, length) + end;
};

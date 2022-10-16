export const getWordCount = (sentence) => {
  const matches = sentence.match(/\S+/g);
  return matches ? matches.length : 0;
};

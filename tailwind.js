import { absoluteFull, shadow, css, primary } from './styled';

const tailwind = (className) => {
  let styledCustom = { absoluteFull, shadow, ...css, ...primary };
  let styles = {};
  if (!className) return;
  const items = className.split(' ');
  items.forEach((item) => {
    styles = { ...styles, ...(styledCustom[item] || {}) };
  });
  return styles;
};

export default tailwind;

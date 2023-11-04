let pageSize = 15;

const screenSizes = window.matchMedia("(min-width: 50rem)");

const matchMedia = () => {
  if (screenSizes.matches) pageSize = 25;
};

window.addEventListener("resize", matchMedia());

export const totalPages = (data) => Math.ceil(data.length / pageSize);

export const countriesPerPageData = (data, pages) => {
  const start = (pages - 1) * pageSize;
  const end = start + pageSize;
  return data.slice(start, end);
};

export const baseUrl = "https://restcountries.com/v3.1/all";

export const fetchCountries = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

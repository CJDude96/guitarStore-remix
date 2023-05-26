export const getGuitars = async () => {
  const resp = await fetch(
    `${process.env.API_URL_DEV}/guitars?sort=id&populate=image`
  );
  const res = await resp.json();
  return res
};

export const getGuitar = async (guitarUrl) => {
  const resp = await fetch(
    `${process.env.API_URL_DEV}/guitars?filters[url]=${guitarUrl}&populate=image`
  );
  const res = await resp.json();
  return res
};
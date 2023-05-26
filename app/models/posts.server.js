export const getPosts = async () => {
  const resp = await fetch(
    `${process.env.API_URL_DEV}/posts?sort=id&populate=image`
  );
  const res = await resp.json();
  return res;
};

export const getPost = async (postUrl) => {
  const resp = await fetch(
    `${process.env.API_URL_DEV}/posts?filters[url]=${postUrl}&populate=image`
  );
  const res = await resp.json();
  return res;
};

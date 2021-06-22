export const fetchData = (url) => {
  const data = await fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(data => data.hits)
    .catch(() => {
      throw new Error(
        'There was a problem loading the articles, please try again later.'
      );
    });

  return data;
};
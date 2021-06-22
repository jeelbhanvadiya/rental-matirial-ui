import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [isloading, setIsLoading] = useState(true);
  const [error, seterror] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then( json => {
        setIsLoading(false);
        if(json.success){
          setData(json.data.memes);
        }
        seterror(json.error_message);
      })
      .catch((e) => {
        // throw new Error(
        //   'There was a problem loading the articles, please try again later.'
        // );
        setIsLoading(false);
        seterror(e.message);
        
      });
  }, []);

  return { data, isloading, error };
};

export default useFetch;

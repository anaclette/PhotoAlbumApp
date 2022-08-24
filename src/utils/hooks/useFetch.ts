import {useState, useEffect} from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState({
    response: [],
    error: false,
    loading: true,
  });

  useEffect(() => {
    setData({...data, error: false, loading: true});
    fetch(url)
      .then(async response => {
        const data = await response.json();
        setData({
          response: data,
          error: !response.ok,
          loading: false,
        });
      })
      .catch(error => {
        setData({
          response: error.toString(),
          error: true,
          loading: false,
        });
      });
  }, [url]);

  return data;
};

export default useFetch;

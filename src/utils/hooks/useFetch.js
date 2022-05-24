import {useState, useEffect} from 'react';
import {createUrl} from '../variables';

const useFetch = (url, options = {method: 'GET', body: {}, query: {}}) => {
  const [data, setData] = useState({
    response: null,
    error: false,
    loading: true,
  });

  useEffect(() => {
    setData({...data, error: null, loading: true});
    fetch(createUrl(url, options.query), {
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: options.method !== 'GET' && JSON.stringify(options.body),
    })
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
          response: {status: `${error.toString()}`},
          error: true,
          loading: false,
        });
      });
  }, [url, JSON.stringify(options)]);

  return data;
};

export default useFetch;

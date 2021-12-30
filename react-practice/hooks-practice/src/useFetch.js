import React from 'react';
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));
    fetch(url)
      .then((data) => data.text())
      .then((data) => {
        setState({ data: data, loading: false });
      })
      .catch((e) => console.error(e));
  }, [url]);

  return state;
};

export default useFetch;

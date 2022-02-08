import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { ADD_STOCK, createAction } from '../../redux/stocks';

const populateReduxStore = (missions, dispatch) => {
  missions.forEach((mission) => {
    dispatch(createAction(ADD_STOCK, mission));
  });
};

const Home = () => {
  const dispatch = useDispatch();
  const api = 'http://api.worldbank.org/v2/country?format=json';

  useEffect(() => {
    axios.get(api).then((stocks) => populateReduxStore(stocks.data, dispatch));
  }, []);
  return <div> Home</div>;
};

export default Home;

import React, { useState, useEffect } from 'react';
import Header from './Header';

const Dashboard = () => {
  const [ipoData, setIpoData] = useState([]);
  const [currencyRates, setCurrencyRates] = useState({});
  const token = 'pk_d110f665a4694855bc96297024288a3f';

  // Fetch IPO data
  useEffect(() => {
    fetch(`https://api.iex.cloud/v1/data/CORE/UPCOMING_IPOS/market?token=${token}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch IPO data');
        }
        return response.json();
      })
      .then((data) => {
        // Handle fetched IPO data
        setIpoData(data);
      })
      .catch((error) => {
        // Handle API errors
        console.error(error);
      });
  }, [token]);

  // Fetch Currency Exchange Rates
  useEffect(() => {
    fetch(`https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=${token}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch currency rates');
        }
        return response.json();
      })
      .then((data) => {
        // Handle fetched currency rates
        setCurrencyRates(data);
      })
      .catch((error) => {
        // Handle API errors
        console.error(error);
      });
  }, [token]);

  return (
    <>
    <Header/>
    <h1>Dashboard</h1>
    <div className="list-container">
      <div className="ipocalendar-container">
        <h2>IPO Calendar</h2>
        <ul className="ipocalendar-list">
            {ipoData.map((ipo) => (
            <li key={ipo.id} className="ipocalendar-item">
                <span className="ipocalendar-text">{ipo.companyName} - {ipo.offeringDate}</span>
            </li>
            ))}
        </ul>
      </div>
      <div className="currency-container">
      <h2>Currency Exchange Rates</h2>
      <ul className="currency-list">
        {Object.keys(currencyRates).map((symbol) => (
          <li key={symbol} className="currency-item">
            <span className="currency-text">{symbol}: {currencyRates[symbol].rate}</span>
          </li>
        ))}
      </ul>
     </div>
    </div>
    </>
  );
};

export default Dashboard;
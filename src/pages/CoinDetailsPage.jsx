import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import toast from 'react-stacked-toast';
import { CoinContext } from '../context/CoinContext';
import Loader from '../components/Loader/Loader';
import LineChart from '../components/Chart/LineChart';

const CoinDetailsPage = () => {
  const { coinId } = useParams()
  const { setCurrency } = useContext(CoinContext);
  const { currency } = useContext(CoinContext);
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const [days, setDays] = useState(5)
  const [loading, setLoading] = useState(true)
  const API_KEY = import.meta.env.VITE_COINGECKO_API_KEY

  const currencyHandler = (e) => {
    // setLoading(true)
    const selectedCurrency = e.target.value;
    const currencyData = {
      name: selectedCurrency,
      symbol: selectedCurrency === 'inr' ? '₹' : selectedCurrency === 'eur' ? '€' : '$',
    };
    setCurrency(currencyData);
    sessionStorage.setItem('currency', JSON.stringify(currencyData)); // Save to sessionStorage
  }
  const fetchCoinData = async () => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`, {
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': API_KEY
        }
      })
      if (response) {
        setCoinData(response.data)
      }

    } catch (error) {
      toast.error('Error while fetching the data by ID')
      console.error(error);

    }
  }

  const fetchHistoricalData = async () => {
    setLoading(true)
    try {
      if (!currency || !currency.name || !days) {
        throw new Error('Invalid currency or days value');
      }

      const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart', {
        params: {
          vs_currency: `${currency.name}`,
          days: `${days}`,
          interval: 'daily'
        },
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': API_KEY
        }
      })

      if (response && response.data) {
        setHistoricalData(response.data);
        setTimeout(() => {
          setLoading(false)
        }, 1500)
      } else {
        setLoading(false)
        throw new Error('No data received from the API');
      }
    } catch (error) {
      setLoading(false);
      if (error.code === 'ERR_NETWORK') {
        toast.error('Network error. Please check your connection.');
      } else {
        toast.error('Error while fetching historical data. Please try again.');
      }
      console.error('Error fetching historical data:', error);
    }
  };
  const selecDuration = (e) => {
    const val = parseInt(e.target.value)
    switch (val) {
      case 5:
        setDays(5)
        break;
      case 10:
        setDays(10)
        break;
      case 20:
        setDays(20)
        break;
      default:
        setDays(5)
        break;
    }
  }

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency, days, coinId])

  useEffect(() => {
    const savedCurrency = sessionStorage.getItem('currency');
    if (savedCurrency) {
      setCurrency(JSON.parse(savedCurrency)); // Retrieve from sessionStorage
    } else {
      // Fallback to default currency if not found
      setCurrency({ name: 'inr', symbol: '₹' });
    }
  }, [])

  return (
    <div className='pt-18 h-auto px-4 dark:bg-[#192d49de] bg-blue-50 overflow-hidden'>

      {
        coinData && historicalData ? (
          <div className='w-full flex flex-col items-center pb-32'>
            <div className='flex flex-col gap-y-4 justify-center items-center w-full'>
              <img src={coinData.image.large} alt="" className='w-30' />
              <p className='dark:text-zinc-200 text-4xl'><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
            </div>

            {/* Selection */}
            <div className='flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col justify-center gap-x-14 gap-y-6 my-6'>
              {/* Currency selector */}
              <div className='flex gap-x-6 items-center'>
                <label htmlFor="" className='dark:text-zinc-200 text-zinc-700 font-medium'>Select Currency</label>
                <select onChange={currencyHandler} value={currency.name} className='bg-white px-2 py-2 rounded shadow selection:outline-0 focus:outline-0 cursor-pointer'>
                  <option value="inr" selected>INR</option>
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                </select>
              </div>
              {/* Duration selector */}
              <div className='flex gap-x-6 items-center'>
                <label htmlFor="" className='dark:text-zinc-200 text-zinc-700 font-medium'>Select Duration</label>
                <select onChange={selecDuration} className='bg-white px-2 py-2 rounded shadow selection:outline-0 focus:outline-0 cursor-pointer'>
                  <option value={5} selected>Last 5 days</option>
                  <option value={10}>Last 10 days</option>
                  <option value={20}>Last 20 days</option>
                </select>
              </div>
            </div>

            {/* Coin Chart */}
            <div className='mt-4 rounded-md w-full flex justify-center'>
              <div className='2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-full sm:w-full w-full shadow rounded-md'>
                <LineChart historicalData={historicalData} />
              </div>
            </div>

            <div className='2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-full sm:w-full w-full flex flex-col items-center pt-10'>
              <ul className='flex dark:text-zinc-200 justify-between border-b-[1px] border-zinc-400 dark:border-zinc-200 py-3 w-full'>
                <li className='font-medium'>Crypto Market Rank</li>
                <li>{coinData.market_cap_rank}</li>
              </ul>
              <ul className='flex dark:text-zinc-200 justify-between border-b-[1px] border-zinc-400 dark:border-zinc-200 py-3 w-full' >
                <li className='font-medium'>Current Price</li>
                <li>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
              </ul>
              <ul className='flex dark:text-zinc-200 justify-between border-b-[1px] border-zinc-400 dark:border-zinc-200 py-3 w-full'>
                <li className='font-medium'>Market Cap</li>
                <li>{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
              </ul>
              <ul className='flex dark:text-zinc-200 justify-between border-b-[1px] border-zinc-400 dark:border-zinc-200 py-3 w-full'>
                <li className='font-medium'>24 Hour High</li>
                <li>{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
              </ul>
              <ul className='flex dark:text-zinc-200 justify-between border-b-[1px] border-zinc-400 dark:border-zinc-200 py-3 w-full'>
                <li className='font-medium'>24 Hour Low</li>
                <li>{currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
              </ul>
            </div>
          </div>
        ) :
          (
            <div className='h-[91vh] flex justify-center items-center'>
              
            </div>
          )
      }

      {
        loading && (
          <div>
            <Loader />
          </div>
        )
      }
    </div>
  )
}

export default CoinDetailsPage


// https://api.coingecko.com/api/v3/coins/binancecoin/market_chart?vs_currency=eur&days=5&interval=daily
// https://api.coingecko.com/api/v3/coins/litecoin/market_chart?vs_currency=eur&days=5&interval=daily
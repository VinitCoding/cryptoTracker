import React, { useContext, useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { CoinContext } from '../context/CoinContext';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import toast from 'react-stacked-toast';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { setCurrency } = useContext(CoinContext);
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [noData, setNoData] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin])
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
    const savedCurrency = sessionStorage.getItem('currency');
    if (savedCurrency) {
      setCurrency(JSON.parse(savedCurrency)); // Retrieve from sessionStorage
    }else {
      // Fallback to default currency if not found
      setCurrency({ name: 'inr', symbol: '₹' });
    }
  }, []);

  const searchInput = (e) => {
    const inp_val = e.target.value
    setInputValue(inp_val);
    if (inp_val === "") {
      setDisplayCoin(allCoin)
    }
  }

  const openDetailCoinPage = (id) => {
    navigate(`/coin/${id}`)
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      toast.error({
        title: 'Error',
        description: 'Please enter a coin name',
      })
    } else {
      const coins = await allCoin.filter((item) => {
        return item.name.toLowerCase().includes(inputValue.toLocaleLowerCase())
      })
      if (coins.length === 0) {
        setNoData(true);
      } else {
        setNoData(false);
        setDisplayCoin(coins)
      }
    }
  }

  const currencyHandler = (e) => {
    setInputValue('')
    // switch (e.target.value) {
    //   case 'inr':
    //     setCurrency({
    //       name: 'inr',
    //       symbol: '₹'
    //     })
    //     break;
    //   case 'eur':
    //     setCurrency({
    //       name: 'eur',
    //       symbol: '€'
    //     })
    //     break;
    //   case 'usd':
    //     setCurrency({
    //       name: 'usd',
    //       symbol: '$'
    //     })
    //     break;
    //   default:
    //     setCurrency({
    //       name: 'inr',
    //       symbol: '₹'
    //     })
    //     break;
    // }
    const selectedCurrency = e.target.value;
    const currencyData = {
      name: selectedCurrency,
      symbol: selectedCurrency === 'inr' ? '₹' : selectedCurrency === 'eur' ? '€' : '$',
    };

    setCurrency(currencyData);
    sessionStorage.setItem('currency', JSON.stringify(currencyData)); // Save to sessionStorage
  }

  return (
    <div data-aos="fade-up" className='pt-12 px-2 sm:px-4 md:px-10 lg:px-10 xl:px-10 2xl:px-10 w-full min-h-[91.8vh] bg-gradient-to-b from-sky-100 to-blue-200 dark:from-transparent dark:to-transparent dark:bg-[#192d49de] pb-28 sm:pb-16 md:pb-16 lg:pb-16 xl:pb-16 2xl:pb-16 '>
      <div className='w-full flex flex-col justify-center items-center gap-y-4'>
        <h2 className='font-Inter text-6xl text-center font-bold bg-gradient-to-b h-full from-blue-300 to-blue-500 bg-clip-text text-transparent mt-10'>Track every coin with Ease</h2>
        <p className='font-Inter text-xl text-center dark:text-zinc-200 2xl:w-[53%] xl:w-[53%] lg:w-[53%] md:w-full sm:w-full w-full'>Explore live crypto prices and trends effortlessly across currencies like USD, EUR, and more. Your real-time crypto companion is here.</p>
      </div>

      {/* Input field */}
      <div className='overflow-x-hidden flex justify-center gap-x-16 items-center mt-4'>
        <form className='flex justify-center items-center gap-x-2 bg-white rounded shadow px-4 py-2 w-96' onSubmit={handleSearch}>
          <input type="text" list={inputValue ? 'coinList' : undefined} className='focus:outline-0 text-zinc-600 w-full' placeholder='Enter a coin name...' onChange={searchInput} value={inputValue} />
          <datalist id='coinList'>
            {allCoin.map((coin, index) => (
              <option key={index} value={coin.name} />
            ))}
          </datalist>
          <button type='submit' className='cursor-pointer'><IoSearch /></button>
        </form>

        <div className='flex gap-x-2'>
          {/* <label htmlFor="" className='dark:text-zinc-200'>Select Currency</label> */}
          <select onChange={currencyHandler} value={currency.name} className='bg-white px-2 py-2 rounded shadow selection:outline-0 focus:outline-0 cursor-pointer'>
            {/* <option selected disabled>Select Currency</option> */}
            <option value="inr" selected>INR</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
          </select>
        </div>
      </div>

      {/* Table */}
      {
        displayCoin.length > 0 && !noData && (
          <div className='mt-14 h-full'>
            <div className='2xl:flex xl:flex md:flex sm:block block justify-center overflow-auto max-h-[400px] w-full '>
              <table className='border-collapse table-auto w-fit min-w-[80%]'>
                <thead className='sticky top-0'>
                  <tr>
                    <th className='border border-gray-400 dark:border-zinc-500 text-zinc-700 p-2 px-4 bg-gray-100 dark:bg-[#192d49de] dark:text-zinc-200'>#</th>
                    <th className='border border-gray-400 dark:border-zinc-500 text-zinc-700 p-2 px-4 bg-gray-100 dark:bg-[#192d49de] dark:text-zinc-200'>Coins</th>
                    <th className='border border-gray-400 dark:border-zinc-500 text-zinc-700 p-2 px-4 bg-gray-100 dark:bg-[#192d49de] dark:text-zinc-200'>Price</th>
                    <th className='border border-gray-400 dark:border-zinc-500 text-zinc-700 p-2 px-4 bg-gray-100 dark:bg-[#192d49de] dark:text-zinc-200'>24H Change</th>
                    <th className='border border-gray-400 dark:border-zinc-500 text-zinc-700 p-2 px-4 bg-gray-100 dark:bg-[#192d49de] dark:text-zinc-200'>Market Cap</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    displayCoin.map((coin, index) => (
                      <tr key={index} onClick={() => openDetailCoinPage(coin.id)} className='cursor-pointer' title='Click to know more'>
                        <td className='px-4 p-2 text-start bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-zinc-300 dark:border-zinc-600'>{coin.market_cap_rank}</td>
                        <td className='px-4 p-2 text-start bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-zinc-300 dark:border-zinc-600 flex justify-start items-center gap-x-5 overflow-x-hidden'>
                          <img src={coin.image} alt="" className='w-11' />
                          <p>{coin.name + " - " + coin.symbol}</p>
                        </td>
                        <td className='px-4 p-2 text-start bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-zinc-300 dark:border-zinc-600 truncate '>{currency.symbol} {coin.current_price.toLocaleString()}</td>
                        <td className={`px-4 p-2 text-start bg-white dark:bg-[#1f2a3bde] border-[0.3px] border-zinc-300 dark:border-zinc-600 ${coin.price_change_percentage_24h > 0 ? 'text-green-400' : 'text-red-400'}`}>{Math.floor(coin.price_change_percentage_24h * 100) / 100}</td>
                        <td className='px-4 p-2 text-start bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-zinc-300 dark:border-zinc-600 truncate'>{currency.symbol} {coin.market_cap.toLocaleString()}</td>
                      </tr>
                    ))
                  }
                </tbody>

              </table>
            </div>
          </div>
        )
      }

      {
        noData && (
          <div className='flex justify-center items-center h-[50vh]'>
            <h2 className='text-xl font-IBM font-semibold dark:text-zinc-200'>No data found</h2>
          </div>
        )
      }
    </div>
  )
}

export default HomePage

{/* <th className='border border-gray-400 dark:border-zinc-500 text-zinc-700 p-2 px-4 bg-gray-100 dark:bg-[#192d49de] dark:text-zinc-200'>#</th> */ }
{/* <td className='px-4 p-2 text-start bg-white dark:bg-[#1f2a3bde] dark:text-zinc-200 border-[0.3px] border-gray-300 dark:border-zinc-600'>{coin.market_cap_rank}</td> */ }

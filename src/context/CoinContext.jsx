import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import toast from "react-stacked-toast";
import Loader from "../components/Loader/Loader";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
    const [allCoin, setAllCoin] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currency, setCurrency] = useState({
        name: "inr",
        symbol: "₹"
    })
    const API_KEY = import.meta.env.VITE_COINGECKO_API_KEY
    const fetchAllCoin = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets`, {
                params: { vs_currency: currency.name },
                headers: {
                    accept: 'application/json',
                    'x-cg-demo-api-key': API_KEY
                }})
            if (response) {
                setTimeout(() => {
                    setLoading(false);
                }, 1000)
                // console.log('data fetch successfully', response.data);
                setAllCoin(response.data)
            }
        } catch (error) {
            setTimeout(() => {
                setLoading(false);
            }, 1000)
            toast.error('Error while fetching data')
            console.error(error);
        }finally {
            setTimeout(() => {
                setLoading(false);
            }, 1000)
        }
    }

    useEffect(() => {
        fetchAllCoin()
    }, [currency])

    const contextValue = {
        allCoin,
        currency,
        setCurrency
    }
    return (
        <CoinContext.Provider value={contextValue}>
            {loading ? <Loader /> : props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider
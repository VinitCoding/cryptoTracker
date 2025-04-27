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

    useEffect(() => {
        const debounceFetch = setTimeout(() => {
            fetchAllCoin();
        }, 500); // 500ms debounce

        return () => clearTimeout(debounceFetch);
    }, [currency])

    const fetchAllCoin = async () => {
        try {
            const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets`, {
                params: { vs_currency: currency.name },
                headers: {
                    accept: 'application/json',
                    'x-cg-demo-api-key': API_KEY
                }})
            if (response) {
                setAllCoin(response.data)
                // console.log('data fetch successfully', response.data);
            }
        } catch (error) {
            toast.error('Error while fetching data')
            console.error(error);
        }finally {
        }
    }



    const contextValue = {
        allCoin,
        currency,
        setCurrency
    }
    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
            {/* {loading && <Loader />} */}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider
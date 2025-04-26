import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "inr",
        symbol: "₹"
    })
    const API_KEY = import.meta.env.VITE_COINGECKO_API_KEY
    const fetchAllCoin = async () => {
        
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets`, {
            params: { vs_currency: currency.name },
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': API_KEY
            }
        }).catch((error) => {
            console.error('Error while fetching data from CoinGekko APP', error);
        })

        if (response) {
            console.log('data fetch successfully', response.data);
            setAllCoin(response.data)
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
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider
import React,{useState,useContext,useEffect } from 'react'
import axios from 'axios';
// import{watchlist} from '../data/data'
import {Tooltip, Grow} from '@mui/material';
import{BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz} from "@mui/icons-material";

import GeneralContext from "./GeneralContext";
import GeneralContextForSell from './GeneralContextForSell';

import { DoughnoutChart } from './DoughnoutChart';

const API_URL = import.meta.env.VITE_API_URL;



export default function WatchList(){
         const [companies, setCompanies] = useState([]);
         const [prices, setPrices] = useState({});
         const[searchVal, setSearchVal]=useState("");
         const [filterCompanies, setFilteredCompanies]=useState({});

         
         



  useEffect(() => {
    axios
      .get(`${API_URL}/api/companies`)
      .then((res) => setCompanies(res.data.data.slice(20, 500))) 
      .catch((err) => console.error(err));
  }, []);

  
  useEffect(() => {
    const fetchPrices = async () => {
      for (const c of companies) {
        try {
          const res = await axios.get(
            `${API_URL}/api/price/${c.symbol}`
          );
          setPrices((prev) => ({
            ...prev,
            [c.symbol]: parseFloat(res.data.price || res.data.close || 0),
            
          }));
         

        } catch (err) {
          console.error(`Error fetching ${c.symbol}`, err);
        }
      }
    };
    if (companies.length > 0) fetchPrices();

  const interval = setInterval(fetchPrices, 10000);

  }, [companies]);

  // Chart.js data
  const labels = companies.map((c) => c.name);
  

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price (INR)",
        data: companies.map((c) =>prices[c.symbol] || 0),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

const searchingValue = () => {
  const filtered = companies.filter((stock) =>
    stock.name.toLowerCase().includes(searchVal.toLowerCase())
  );
  setFilteredCompanies(filtered);
  
  

  
};


    return(
        <div className='watchlist-container'>
            <div className='search-container'>
                <input type="text" name="search" id="search"
               placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
               onChange={(e)=>setSearchVal(e.target.value)}
               value={searchVal}
          className="search "
        /><button
  type="button"
  className="btn btn-outline-success"
  onClick={searchingValue}
>
  Search
</button>


        {/* <span className="counts "> {companies.length} / 100</span> */}
         </div>
         
            <ul className='list'>
    
                {(filterCompanies.length > 0 ? filterCompanies : companies).map((stock,index)=>{
                    return(
                 <WatchListItem 
                  stock={stock}
                  price={prices[stock.symbol]}
                  key={index}
                  
                 />)
                })}
            </ul>
            {companies.length > 0 && Object.keys(prices).length > 0 && (
  <DoughnoutChart data={data} />
)}


        </div>
    )
}

const WatchListItem=({stock,price})=>{

    const [showWatchlistActions,setShowWatchlistActions]=useState(false);

    const handleMouseEnter=(e)=>{
        setShowWatchlistActions(true);
        }

          const handleMouseLeave=(e)=>{
        setShowWatchlistActions(false);
        }
                  

        return(
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className='item'>
                    <p className={stock.isDown? "down":"up"}>  {stock.name }</p>
                    <div className='itemInfo'>
                        <span className='percent'>{stock.percent}</span>
                        {stock.isDown? (<KeyboardArrowDown className="down"/>):(<KeyboardArrowUp className="up"/>)}
                     <span className='price'>&#8377;{price}</span>
                    </div>
                </div>
                {showWatchlistActions && <WatchlistAction uid={stock.name} price={price}/>}
            </li>
        )
}

const WatchlistAction=({uid,price})=>{
  const generalContext = useContext(GeneralContext);
 
  const generalContextSell=useContext(GeneralContextForSell);

  const handleSellClick=()=>{
    generalContextSell.openSellWindow(uid,price);
  }

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid,price);
  };
    
    return(
        <span className='actions'>
            <span>
                <Tooltip
                title="Buy (B)"
                placement='top'
                arrow
                TransitionComponent={Grow}
                 onClick={handleBuyClick}
                >
                    <button className='buy'>buy</button>
                </Tooltip>

                 <Tooltip
                title="Sell (S)"
                placement='top'
                arrow
                TransitionComponent={Grow}
               
                >
                    <button className='sell'  onClick={handleSellClick}>sell</button>
                </Tooltip>

                 <Tooltip
                title="Analytics (A)"
                placement='top'
                arrow
                TransitionComponent={Grow}
                >
                  <button className='action'>  <BarChartOutlined className='icon'/></button>
                </Tooltip>

                <Tooltip
                title="More (M)"
                placement='top'
                arrow
                TransitionComponent={Grow}
                >
                    <button className='action'>  <MoreHoriz className='icon'/></button>
                </Tooltip>
            </span>
        </span>
    )
}
import React, {useState, useEffect} from 'react';
import classes from './GlobalPerCountry.module.scss';
import axios from 'axios'

const GlobalPerCountry = () => {
    const country = new Array(220).fill("");
    const [theAPIData, setAPIData] = useState();
    const [state, setState] = useState([]);
    const [count, setCountry] = useState([]);
    const [findCountry, setfindCountry] = useState('');
    const [findCountryName, setfindCountryName] = useState('Country');
    const [value, setValue] = useState('');
    const getData = () => {
        const allAPI = 'https://corona.lmao.ninja/v2/countries?yesterday&sort=cases';
        
        const fetchData = async () => {
            const data = await axios.get(allAPI);
            let countryCases = [];
            data.data.map(country => {countryCases.push(country.cases)})
            setState(countryCases);
            countryCases = [];
            data.data.map(country => {countryCases.push(country.country)});
            setCountry(countryCases);
            setAPIData(countryCases);
        }
        fetchData();
    }
    const onChange = (event) => {
        setValue(event.target.value);
        let find = theAPIData.findIndex(checkValue);
        function checkValue(c) {
            return c.search(value) != -1;
        }
        setfindCountry(state[find]);
        setfindCountryName(count[find]);
        console.log(value);
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className={classes.sheet__wrapper}>
                <input value={value} onChange={onChange} type="text"/>
               <div>{findCountryName}: <br/>{findCountry}</div>
           <div className={classes.table}>
               <ul className='leftColumn'>
               {country.map((value, index) => {
                       return <li key={index}>{count[index]}</li>
                   })}
               </ul>
               <ul className='rightColumn'>
                   {country.map((value, index) => {
                       return <li key={index}>{state[index]}</li>
                   })}
               </ul>
           </div>
        </div>
    )
}

export default GlobalPerCountry;

import React, {useState, useEffect} from 'react';
import classes from './table.module.scss';
import axios from 'axios'

const Table = () => {
    const [title, setTitle] = useState('Global Deaths')
    const [state, setState] = useState('');
    const [apiData, setAPI] = useState();
    const getData = () => {
        const allAPI = 'https://corona.lmao.ninja/v2/all?yesterday';
        const fetchData = async () => {
            const data = await axios.get(allAPI);
            setState(data.data.deaths);
            setAPI(data.data);
        }
        fetchData();
    }
    function recovery(){
        setTitle('Global recovery');
        setState(apiData.recovered);
    }
    function deaths(){
        setTitle('Global Deaths');
        setState(apiData.deaths);
    }
    function todayDeaths(){
        setTitle('Deaths today');
        setState(apiData.todayDeaths);
    }
    function todayCases(){
        setTitle('Cases today');
        setState(apiData.todayCases);
    }
    function casesPerOneMillion(){
        setTitle('Cases to PerOneMillion');
        setState(apiData.casesPerOneMillion);
    }
    function deathsPerOneMillion(){
        setTitle('Deaths to PerOneMillion');
        setState(apiData.deathsPerOneMillion);
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className={classes.sheet__wrapper}>
            <table>
                <thead>
                    <td>{title}</td>
                </thead>
                <tbody>
                    <td>{state}</td>
                </tbody>
            </table>
            <button onClick={recovery}>RECOVERED</button>
            <button onClick={deaths}>DEATHS</button>
            <div>
                <button  onClick={todayDeaths}>today Deaths</button>
                <button onClick={todayCases}>today Cases</button>
            </div>
            <div>
                <button  onClick={casesPerOneMillion}>Cases PerOneMillion</button>
                <button onClick={deathsPerOneMillion}>Deaths PerOneMillion</button>
            </div>
        </div>
    );
};
  
export default Table;

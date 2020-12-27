import React, {useState, useEffect} from 'react';
import classes from './GlobalSheet.module.scss';
import axios from 'axios'

const Global = () => {
    const [state, setState] = useState('');
    const getData = () => {
        const allAPI = 'https://corona.lmao.ninja/v2/all?yesterday';
        
        const fetchData = async () => {
            const data = await axios.get(allAPI);
            setState(data.data.cases);
        }
        fetchData();
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className={classes.sheet__wrapper}>
            <table>
                <thead>
                    <td>Global cases!</td>
                </thead>
                <tbody>
                    <td>{state}</td>
                </tbody>
            </table>
        </div>
    );
};
  
export default Global;

import React from 'react'
import classes from './GlobalSheet.module.scss'

const Global = () => {

    return (
        <div className={classes.sheet__wrapper}>
            <table>
                <thead>
                    <td>Global cases</td>
                </thead>
                <tbody>
                    <td> 1,829,903 </td>
                </tbody>
            </table>
        </div>
    );
};
  
export default Global;

import React from 'react';
import StateDistrict from '../../API/StateDistrict';

const State = () => {
    const result = StateDistrict.map((elem,i) => {
        return <React.Fragment key={Number(i)} >
            <option key={elem.id} value={elem.state}>{elem.state.toUpperCase()}</option>
        </React.Fragment>
    });

    return (result);
}




export default State;
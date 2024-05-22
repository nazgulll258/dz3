import React from 'react';
import {useSelector} from "react-redux";

const CounterComponent = () => {
    const count = useSelector(state => state.counter);
    return (
        <div>
            <span>{count}</span>
        </div>
    );
};

export default CounterComponent;

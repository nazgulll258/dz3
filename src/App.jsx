import React from 'react';
import ButtonComponent from "./components/ButtonComponent.jsx";
import ContainerComponent from "./components/ContainerComponent.jsx";
import {useDispatch, useSelector} from "react-redux";

const App = () => {
    const count = useSelector(state => state.counter)
    const dispatch = useDispatch();
    const counter = (e) => {
        if (e.target.innerText === '+'){
            dispatch({type: 'INCREMENT'});
        }else if(count > 0){
            dispatch({type: 'DECREMENT'});
        }
    }
    return (
        <>
            <ButtonComponent onClick={(e) => counter(e)} sign={'-'}/>
            <ContainerComponent/>
            <ButtonComponent onClick={counter} sign={'+'}/>
        </>
    );
};

export default App;
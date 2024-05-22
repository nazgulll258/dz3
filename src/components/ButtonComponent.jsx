import React from 'react';

const ButtonComponent = ({sign, onClick}) => {
    return (
        <>
            <button onClick={onClick}>{sign}</button>

        </>
    );
};

export default ButtonComponent;
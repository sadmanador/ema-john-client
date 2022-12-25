import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Inventory = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h1>This is inventory components</h1>
            <h2>{user}</h2>
        </div>
    );
};

export default Inventory;
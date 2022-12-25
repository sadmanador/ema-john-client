import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Inventory = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h1>This is inventory components</h1>
            <p>{user}</p>
        </div>
    );
};

export default Inventory;
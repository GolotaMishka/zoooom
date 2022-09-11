import React from 'react';
import  { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { roomPath } from './constants';

const Home = ()=>{
    return (
        <div>
            <h1>Home</h1>

            <Link to={roomPath(v4())}>Create new room</Link>

        </div>
    );
};

export default Home;
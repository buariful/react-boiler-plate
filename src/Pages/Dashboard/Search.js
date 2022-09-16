import React, { useState } from 'react';
import { useEffect } from 'react';
import Shared from '../../Shared/Shared';
import SingleUser from './SingleUser';

const Search = () => {
    const [gender, setGender] = useState('Men')
    const [users, setUsers] = useState([]);
    const [result, setResult] = useState([]);


    const handleSearch = event => {
        event.preventDefault();
        const age = event.target.age.value;
        console.log(age, gender)
        console.log(users.filter(us => us.gender == JSON.parse(age)))
    }


    useEffect(() => {
        fetch('https://serene-stream-39702.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    })


    return (
        <div className='text-black top-7'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                {users ? users.map(user => <SingleUser user={user}></SingleUser>) : console.log('dksljfl')}
            </div>


        </div>
    );
};

export default Search;
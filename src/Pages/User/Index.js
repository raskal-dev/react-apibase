import React, { useEffect, useState } from 'react'
import AuthServices from '../../Services/Auth.services';
import { useNavigate } from 'react-router-dom';

function User() {

    const [users, setUser] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/');
        }
        AuthServices.getList()
        .then(res => {
            console.log(res.data.data);
            setUser(res.data.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    const handleLogout = () => {
        AuthServices.logout()
        .then(res => {
            localStorage.removeItem('token');
            navigate('/');
        })
        .catch(err => {
            console.log(err);
        })
    }
  return (
    <div>
        {users.length  > 0 && users.map(user => (
            <div key={user.id}>
                <p>{user.id}</p>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
        ))}

        <button type='button' onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default User
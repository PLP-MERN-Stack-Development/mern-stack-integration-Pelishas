import {useState, useEffect} from 'react';
import axio from 'axios';

function Home(){
    const [uers, setUsers] = useState([]);
    useEffect(() => {
        axio.get('/api/users')
        .then(response => {
            setUsers(response.data);
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
    }, []);
    return(
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user._id}>{user.username}</li>
                ))}
            </ul>
        </div>
    );
} 
export default Home;
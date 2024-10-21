import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };

    return (
        <div className="profile">
            <h1>Профіль користувача</h1>
            <p>Це приватна сторінка, доступна тільки після авторизації.</p>
            <button onClick={handleLogout}>Вийти</button>
        </div>
    );
}

export default Profile;

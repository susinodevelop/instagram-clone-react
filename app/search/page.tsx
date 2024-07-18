'use client'
import React from "react"
import { FaSearch, FaTimes } from "react-icons/fa";

const Search: React.FC = () => {

    const recentSearches = [
        { username: 'usiamtn', name: 'Uxia', following: true },
        { username: 'davidtopo', name: 'David Topo', following: true },
        { username: 'pedrobuerbaum', name: 'Pedro Buerbaum', following: true, verified: true },
        { username: 'joanpradells', name: 'Joan Pradells IFBB PRO', following: true, verified: true },
    ];

    return (
        <div style={{ backgroundColor: '#000', color: '#fff', height: '100vh', padding: '20px' }}>
            <h1>Búsqueda</h1>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <FaSearch style={{ marginRight: '10px' }} />
                <input
                    type="text"
                    placeholder="Busca"
                    style={{
                        backgroundColor: '#333',
                        border: 'none',
                        borderRadius: '5px',
                        color: '#fff',
                        padding: '10px',
                        flex: '1'
                    }}
                />
                <FaTimes style={{ marginLeft: '10px' }} />
            </div>
            <div>
                <h2>Recientes</h2>
                <a href="#" style={{ color: '#00f', textDecoration: 'none' }}>Borrar todo</a>
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                    {recentSearches.map((search, index) => (
                        <li key={index} style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
                            <img
                                src={`https://via.placeholder.com/50`}
                                alt={search.username}
                                style={{ borderRadius: '50%', marginRight: '10px' }}
                            />
                            <div style={{ flex: '1' }}>
                                <p style={{ margin: '0', fontWeight: 'bold' }}>{search.username}</p>
                                <p style={{ margin: '0', color: '#bbb' }}>{search.name} {search.following && '• Siguiendo'}</p>
                            </div>
                            <FaTimes style={{ marginLeft: '10px' }} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Search;
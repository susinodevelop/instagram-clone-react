'use client'
import User from "@/interface/User";
import { getAllUsers } from "@/services/UserService";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react"
import { FaSearch, FaTimes } from "react-icons/fa";

const Search: React.FC = () => {

    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        const loadInitialData = async () => {
            setUsers(await getAllUsers())
        }
        loadInitialData()
    }, [])

    return (
        <Flex className="flex flex-col w-full h-screen">
            <h1 className="mx-[10px] my-[30px]">Búsqueda</h1>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <FaSearch style={{ marginRight: '10px' }} />
                <input
                    name="profile-search"
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
            <hr />
            <div>
                <div className="flex flex-row justify-between my-[30px]">
                    <h2>Recientes</h2>
                    <a href="#" style={{ color: '#00f', textDecoration: 'none' }}>Borrar todo</a>
                </div>
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                    {users.map((user, index) => (
                        <li key={index} className="flex justify-between mt-[15px] w-full h-[50px]">
                            <div className="flex flex-row items-center">
                                <div className="relative w-[50px] h-[50px]">
                                    <Image src={user.profile_img}
                                        alt={user.username}
                                        fill
                                        sizes="50px"
                                        className="rounded-full"
                                    />
                                </div>
                                <div className="flex flex-col ml-[10px]">
                                    <p style={{ margin: '0', fontWeight: 'bold' }}>{user.username}</p>
                                    <p style={{ margin: '0', color: '#bbb' }}>{user.biography_name} {/*TODO search.following && '• Siguiendo'*/}</p>
                                </div>
                            </div>
                            <div className="mr-[20px] h-full flex items-start">
                                <FaTimes />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Flex>
    );
}

export default Search;
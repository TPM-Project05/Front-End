import React, { useEffect, useState } from 'react';
import axios from '../config/instance';

interface User {
    id: number;
    name: string;
    email: string;
}

interface Team {
    id: number;
    name: string;
    created_at: string;
    leader: User;
    members: User[];
}

const FetchData: React.FC = () => {
    const [teams, setTeams] = useState<Team[]>([]);  // State untuk menyimpan data tim
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');  // State untuk input search
    const [sortField, setSortField] = useState<string>('name');  // Sorting berdasarkan 'name' atau 'created_at'
    const [sortDirection, setSortDirection] = useState<string>('asc');  // Sorting arah 'asc' atau 'desc'

    // Fungsi untuk memuat tim
    const fetchTeams = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get('/teams', {
                params: {
                    search: searchTerm,  // Menggunakan searchTerm untuk filter
                    sortField: sortField,  // Field untuk sorting
                    sortDirection: sortDirection,  // Arah sorting
                },
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            });

            // Log respons data
            console.log('Response Data:', response.data);

            setTeams(response.data.data);
        } catch (err) {
            // Log error jika gagal
            console.error('Error Fetching Data:', err);

            setError('Gagal mengambil data tim');
        } finally {
            setLoading(false);
        }
    };

    // Mengambil data saat komponen pertama kali dimuat
    useEffect(() => {
        fetchTeams();
    }, [searchTerm, sortField, sortDirection]); // Mengupdate data saat searchTerm, sortField, atau sortDirection berubah

    return (
        <div className='bg-[#17116B]'>
            <h1 className="text-[72px] text-glow w-[500px] h-[80px] font-semibold">Members</h1>
        </div>
    );
};

export default FetchData;

import { useState } from 'react';
import { MagnifyingGlass } from "phosphor-react"
import { List } from 'antd';
import axios from 'axios';

import logoImage from "../assets/Logo.png"

interface Result {
    search: string
    totalResults: string
    searchTime: string
    results: Array<{
        displayLink: string;
        link: string;
        title: string;
    }>
}

export default function SearchComponent() {
    const [query, setQuery] = useState('');
    const [responses, setResponses] = useState<Result>()
    const handleSearch = async () => {
        const response = await axios.post(import.meta.env.VITE_SERVER_URL, {
            search: encodeURI(query)
        })
        setResponses(response.data)
    };

    const handleClick = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.key === "Enter") {
            handleSearch()
        }
    }

    return (
        <>
            <div className="m-0 p-5 justify-center flex flex-col items-center">
                <img src={logoImage} alt="busca-icon" className='w-[40%] h-66' />
                <div className='flex'>
                    <input
                        className='w-[300px] md:w-[400px] p-2.5 border border-solid rounded-l-lg'
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyUp={(e) => handleClick(e)}
                    />
                    <button onClick={handleSearch} className='border-none bg-blue-400 hover:bg-blue-600  text-white rounded-r-lg cursor-pointer'>
                        <MagnifyingGlass size={40} />
                    </button>
                </div>
            </div>

            <div className='w-[80%] md:w-[60%] xl:w-[35%] m-auto p-5'>
                {responses ? (
                    <>
                        <p
                            className='pb-3 italic text-xs text-right'>
                            Aproximadamente {responses?.totalResults} resultados
                        </p>
                        <List
                            pagination={{
                                align:"center",
                                pageSize: 5,
                            }}
                            itemLayout="horizontal"
                            dataSource={responses?.results}
                            renderItem={(item, index) => (
                                <List.Item>
                                    <List.Item.Meta
                                        key={index}
                                        title={item?.title ?? ""}
                                        description={<a href={item?.link ?? ""}>{item?.link ?? ""}</a>}
                                    />
                                </List.Item>
                            )}
                        />
                    </>
                ) : ""}
            </div>
        </>
    );
};

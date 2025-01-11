'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";

const inputStyle = 'flex bg-white h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm';

interface Item {
    content?: string;
    action?: () => void;
    tag?: React.ReactNode;
    styles?: string;
}

interface ItemsProps {
    items: Item[];
}

const Items = ({ items }: ItemsProps) => {
    const router = useRouter();
    const redirectToHome = () => router.push('/');

    return (
        <>
            <div className='flex justify-center gap-6 font-bold hover:cursor-pointer'>
                <p onClick={redirectToHome}>Next Learn</p>
            </div>
            <ul className="flex gap-6">
                {items.map((item, index) => (
                    <li key={index} className={item.styles || 'p-2 hover:cursor-pointer hover:bg-white hover:text-black'} onClick={item.action}>
                        {item.tag ? item.tag : item.content}
                    </li>
                ))}
            </ul>
        </>
    );
};

const Navbar = () => {
    const [state, setState] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const switchState = () => setState(!state);
    const categories = state ? 'Categories ▲' : 'Categories ▼';
    const router = useRouter();

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/search?query=${searchValue}`);
    };

    const items = [
        {
            pageTitle: 'Next Learn',
            fields: [
                {
                    content: categories,
                    action: switchState,
                },
                {
                    tag: (
                        <form onSubmit={handleSearchSubmit}>
                            <input
                                type="search"
                                placeholder="Search"
                                className={inputStyle}
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                        </form>
                    ),
                    styles: 'hover:none text-black'
                },
                {
                    content: 'My Courses',
                },
                {
                    content: 'Notifications',
                },
                {
                    content: 'Account',
                },
            ],
        },
    ];

    return (
        <nav className='flex justify-around items-center w-full h-14 bg-blue-700 select-none'>
            {items.map((item, index) => (
                <Items key={index} items={item.fields} />
            ))}
        </nav>
    );
};

export default Navbar;

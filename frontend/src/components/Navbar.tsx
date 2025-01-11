'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

const inputStyle = 'flex bg-white h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm';


const Navbar = () => {
    const [state, setState] = useState(false);
    const switchState = () => setState(!state);
    const router = useRouter();

    const redirectToHome = () => router.push('/')
    let categories = 'Categories ▼';


    if (state) {
        categories = 'Categories ▲';
    }

    return (
        <nav className='flex justify-around items-center w-full h-14 bg-blue-700 select-none'>
            <div className='flex justify-center gap-6 font-bold hover:cursor-pointer'>
                <p onClick={redirectToHome}>Next Learn</p>
            </div>
            <ul className="flex gap-6  ">
                <li className="p-2 hover:cursor-pointer hover:bg-white hover:text-black" onClick={switchState}>{categories}</li>
                <li className="text-black"><input className={inputStyle} type="search" /></li>
                <li className="p-2 hover:cursor-pointer hover:bg-white hover:text-black">My Courses</li>
            </ul>
            <ul className='flex gap-6 hover:cursor-pointer'>
                <li className="p-2 hover:cursor-pointer hover:bg-white hover:text-black">Notificações</li>
                <li className="p-2 hover:cursor-pointer hover:bg-white hover:text-black">Conta</li>
            </ul>
        </nav>
    )
}
export default Navbar;

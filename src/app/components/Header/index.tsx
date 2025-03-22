'use client';
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon, PlusIcon, BuildingStorefrontIcon } from "@heroicons/react/24/solid";
import NavList from "../Shared/NavList";

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [sticky, setSticky] = useState(false);


    useEffect(() => {
        window?.document?.addEventListener('scroll', () => {
            const scrollPosition = window?.scrollY;
            if (scrollPosition > 20) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        });
    }, []);
    return (
        <div className={`${sticky ? 'sticky top-0 transition scroll-smooth' : ''}  flex justify-between items-center p-4 bg-white shadow-md z-50`}>
            <div className="text-xl font-bold hidden md:flex gap-2"><BuildingStorefrontIcon className="h-6 w-6 text-grey-800" />Restaurant Dashboard</div>
            <div className="block md:hidden">
                <button className="p-2 rounded-lg hover:bg-gray-200" onClick={() => setOpen(true)}>
                    <Bars3Icon className="h-6 w-6 text-blue-500" />
                </button>
            </div>
            {open && (
                <div className="absolute lg:hidden top-0 left-0 w-full h-full bg-white z-[60]">
                    <button className="absolute top-4 right-4 text-xl" onClick={() => setOpen(false)}>
                        <XMarkIcon className="h-6 w-6 text-blue-500" />
                    </button>
                    <div className="flex flex-col items-center mt-16">
                        <NavList />
                        <button className="bg-gray-800 hover:bg-blue-500/80 text-white px-4 py-2 rounded mb-4">Add Product</button>
                        {/* Add more menu items here */}
                    </div>
                </div>
            )}
            <div className="flex space-x-4">
                <button className="bg-gray-800 hover:bg-gray-800/80 cursor-pointer flex gap-2 text-white px-4 py-2 rounded"><PlusIcon className="h-6 w-6 text-grey-800" /> Add Product</button>
            </div>
        </div>
    );
};

export default Header;

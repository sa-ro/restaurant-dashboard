import React from 'react';
import NavList from '../Shared/NavList';

const SideBar: React.FC = () => {
    return (
        <div className="h-screen  fixed hidden lg:flex flex-col justify-end w-32 bg-gray-800 text-white">
            <NavList />
        </div>
    );
};

export default SideBar;


import React from "react";


const NavList: React.FC = () => {
    return(
        <ul>
                <li className="p-4 hover:bg-gray-700 cursor-pointer text-center">Solutions</li>
                <li className="p-4 hover:bg-gray-700 cursor-pointer text-center">About</li>
                <li className="p-4 hover:bg-gray-700 cursor-pointer text-center">Portfolio</li>
                <li className="p-4 hover:bg-gray-700 cursor-pointer text-center">Contact</li>
            </ul>
    )
};

export default NavList;
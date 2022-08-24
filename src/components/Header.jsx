import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"

import Logo from "./img/logo.png";
import Avatar from "./img/avatar.png"
import Slogan from "./img/slogan.png"

const Header = () => {
    return (
        <header className="fixed z-50 w-screen p-6 px-16">
            {/* Desktop & tablet */}
            <div className="hidden md:flex w-full h-full items-center justify-between">
                <Link to={'/'} className="flex items-center gap-2">
                    <img src={Logo} className="w-12 object-cover" alt="logo" />
                    <img src={Slogan} className="w-12 object-cover" alt="slogan" />
                    {/* <p className="text-headingColor text-lg font-bold">Autocafé</p> */}
                </Link>
                <div className="flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Inicio</li>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Cardápio</li>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Contato</li>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Sobre Nós</li>
                    </ul>
                    <div className="relative flex items-center justify-center">
                        <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
                        <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                            <p className="text-xs text-white font-semibold">2</p>
                        </div>
                    </div>

                    <motion.img whileTap={{ scale: 0.6 }} src={Avatar} className="w-10 min-2-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer" alt="User profile" />
                </div>
            </div>


            {/* Mobile */}
            <div className="flex md:hidden w-full h-full"></div>
        </header>
    )
}

export default Header
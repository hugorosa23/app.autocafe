import React, { useState } from "react";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png"
// import Slogan from "../img/slogan.png"

const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{ user }, dispatch] = useStateValue();

    const [isMenu, setIsMenu] = useState(false);

    const login = async () => {
        if (!user) {
            const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider);
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            });
            localStorage.setItem("user", JSON.stringify(providerData[0]));
        } else {
            setIsMenu(!isMenu);
        }
    };

    const logout = () => {
        setIsMenu(false)
        localStorage.clear()

        dispatch({
            type: actionType.SET_USER,
            user: null
        })
    }

    return (
        <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16">
            {/* Desktop & tablet */}
            <div className="hidden md:flex w-full h-full items-center justify-between">
                <Link to={'/'} className="flex items-center gap-2">
                    <img src={Logo} className="w-12 object-cover" alt="logo" />
                    {/* <img src={Slogan} className="w-12 object-cover" alt="slogan" /> */}
                    {/* <p className="text-headingColor text-lg font-bold">Autocafé</p> */}
                </Link>
                <div className="flex items-center gap-8">
                    <motion.ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className="flex items-center gap-8">
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Inicio</li>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Cardápio</li>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Contato</li>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Sobre Nós</li>
                    </motion.ul>
                    <div className="relative flex items-center justify-center">
                        <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
                        <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                            <p className="text-xs text-white font-semibold">2</p>
                        </div>
                    </div>

                    <div className="relative">
                        <motion.img whileTap={{ scale: 0.6 }}
                            src={user ? user.photoURL : Avatar}
                            className="w-10 min-2-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                            alt="Perfil de Usuário"
                            onClick={login}
                        />
                        {isMenu && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col
                            absolute top-12 right-0">
                                {user && user.email === "hugo.rosa2304@gmail.com" && (
                                    <Link to={'/criarItem'}>
                                        <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100
                                    transition-all durantion-100 ease-in-out text-textColor text-base">
                                            Novo Item <MdAdd />
                                        </p>
                                    </Link>
                                )}
                                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100
                            transition-all durantion-100 ease-in-out text-textColor text-base">
                                    Sair <MdLogout />
                                </p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>


            {/* Mobile */}
            <div className="flex items-center justify-between md:hidden w-full h-full">

                <div className="relative flex items-center justify-center">
                    <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
                    <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                        <p className="text-xs text-white font-semibold">2</p>
                    </div>
                </div>

                <Link to={'/'} className="flex items-center gap-1">
                    <img src={Logo} className="w-12 object-cover" alt="logo" />
                    {/* <p className="text-headingColor text-md font-bold">Autocafé<span className="text-red-600">.</span></p> */}
                </Link>

                <div className="relative">
                    <motion.img whileTap={{ scale: 0.6 }}
                        src={user ? user.photoURL : Avatar}
                        className="w-10 min-2-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                        alt="Perfil de Usuário"
                        onClick={login}
                    />
                    {isMenu && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col
                            absolute top-12 right-0">
                            {user && user.email === "hugo.rosa2304@gmail.com" && (
                                <Link to={'/criarItem'}>
                                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100
                                    transition-all durantion-100 ease-in-out text-textColor text-base">
                                        Novo Item <MdAdd />
                                    </p>
                                </Link>
                            )}
                            <ul
                                className="flex flex-col">
                                <li className="text-base text-textColor hover:text-headingColor
                                duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">Inicio</li>
                                <li className="text-base text-textColor hover:text-headingColor
                                duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">Cardápio</li>
                                <li className="text-base text-textColor hover:text-headingColor
                                duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">Contato</li>
                                <li className="text-base text-textColor hover:text-headingColor
                                duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">Sobre Nós</li>
                            </ul>
                            <p className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300
                            transition-all durantion-100 ease-in-out text-textColor text-base"
                                onClick={logout}>
                                Sair <MdLogout />
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
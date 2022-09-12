import React, { useState, useEffect } from "react";
import { categories } from "../utils/data";
import { motion } from 'framer-motion';
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";


const MenuContainer = () => {

    const [filter, setFilter] = useState("favoritos");

    const [{ foodItems }, dispatch] = useStateValue();

    return (
        <section className="w-full my-2" id="menu">
            <div className="w-full flex flex-col items-center justify-center">
                <p className="text-2xl font-semibold capitalize text-headingColor relative 
                        before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 
                        before:left-0 before:bg-gradient-to-tr from-red-400 to-red-600 transition-all 
                        ease-in-out duration-100 mr-auto">Nosso Cardápio
                </p>

                <div className="w-full flex items-center justify-start lg:justify-center gap-5 py-5 overflow-x-scroll scrollbar-none">
                    {categories && categories.map((category) => (
                        <motion.div whileTap={{ scale: 0.6 }}
                            key={category.id}
                            className={`group ${filter === category.urlParamName ? 'bg-cartNumBg' : 'bg-card'} w-24 min-w-[94px] h-28 px-3 cursor-pointer rounded-lg drop-shadow-lg flex flex-col 
                            gap-3 items-center justify-center hover:bg-cartNumBg`}
                            onClick={() => setFilter(category.urlParamName)}
                        >
                            <div className={`w-10 h-10 rounded-full shadow-lg ${filter === category.urlParamName ? 'bg-card' : 'bg-cartNumBg'} group-hover:bg-white flex items-center justify-center`}>
                                {category.iconSrc}
                            </div>
                            <p className={`text-sm ${filter === category.urlParamName ? 'text-white' : 'text-textColor'} group-hover:text-white`}>{category.name}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="w-full">
                    <RowContainer flag={false} data={foodItems?.filter(n => n.category === filter)} />
                </div>
            </div>
        </section>
    )
}

export default MenuContainer
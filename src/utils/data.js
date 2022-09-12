
import Fit from "../img/fit.png";
import Bac from "../img/bac.png";
import Wok from "../img/wok.png";
import Salada from "../img/salada.png";

import { MdLiquor, MdEco, MdLunchDining, MdRamenDining, MdFavorite } from "react-icons/md";
import { FaCheese, FaDrumstickBite, FaMugHot } from "react-icons/fa";
import { GiWaterBottle, GiCupcake } from "react-icons/gi";
import { BsCupStraw } from "react-icons/bs";
import { IoFish } from "react-icons/io5";
import { TbMeat } from "react-icons/tb";

// MdRestaurant, MdWineBar, MdRoomService, MdSportsBar, GiCoffeeMug, CgGlassAlt.

export const heroData = [
    { id: 1, nome: 'Frango Fitness', desc: 'Frango grelhado', preco: '36,90', imageSrc: Fit, alt: 'Prato 1' },
    { id: 2, nome: 'Salada Autocafé', desc: 'Salada com camarões', preco: '46,90', imageSrc: Salada, alt: 'Prato 2' },
    { id: 3, nome: 'Wok de Camarão', desc: 'Macarrão e camarão', preco: '42,90', imageSrc: Wok, alt: 'Prato 3' },
    { id: 4, nome: 'Bacalhau', desc: 'Bacalhau com legumes', preco: '47,90', imageSrc: Bac, alt: 'Prato 4' },
];

export const categories = [
    {
        id: 1,
        name: "Favoritos",
        urlParamName: "favoritos",
        iconSrc: <MdFavorite className={`text-lg text-white  group-focus:text-white group-hover:text-textColor`} />
    },
    {
        id: 2,
        name: "Cafés",
        urlParamName: "cafes",
        iconSrc: <FaMugHot className={`text-lg text-white  group-focus:text-white group-hover:text-textColor`} />,
    },
    {
        id: 3,
        name: "Sanduíches",
        urlParamName: "sanduiches",
        iconSrc: <MdLunchDining className={`text-lg text-white  group-focus:text-white group-hover:text-textColor`} />,
    },
    {
        id: 4,
        name: "Salgados",
        urlParamName: "salgados",
        iconSrc: <FaCheese className={`text-lg text-white  group-focus:text-white group-hover:text-textColor`} />,
    },
    {
        id: 5,
        name: "Saladas",
        urlParamName: "saladas",
        iconSrc: <MdEco className={`text-lg text-white  group-focus:text-white group-hover:text-textColor`} />,
    },
    {
        id: 6,
        name: "Massas",
        urlParamName: "massas",
        iconSrc: <MdRamenDining className={`text-lg text-white  group-focus:text-white group-hover:text-textColor`} />,
    },
    {
        id: 7,
        name: "Aves",
        urlParamName: "aves",
        iconSrc: <FaDrumstickBite className={`text-lg text-white  group-focus:text-white group-hover:text-textColor`} />,
    },
    {
        id: 8,
        name: "Frutos do Mar",
        urlParamName: "peixes",
        iconSrc: <IoFish className={`text-lg text-white  group-focus:text-white group-hover:text-textColor`} />,
    },
    {
        id: 9,
        name: "Carnes",
        urlParamName: "carnes",
        iconSrc: <TbMeat className={`text-lg text-white  group-focus:text-white group-hover:text-textColor`} />,
    },
    {
        id: 10,
        name: "Sucos",
        urlParamName: "sucos",
        iconSrc: <BsCupStraw className={`text-lg text-white  group-focus:text-white group-hover:text-textColor`} />,
    },
    {
        id: 11,
        name: "Refri gerantes",
        urlParamName: "refrigerantes",
        iconSrc: <GiWaterBottle className={`text-lg text-white  group-focus:text-white group-hover:text-textColor`} />,
    },
    {
        id: 12,
        name: "Demais bebidas",
        urlParamName: "bebidas-diversas",
        iconSrc: <MdLiquor className={`text-lg text-white  group-focus:text-white group-hover:text-textColor`} />,
    },
    {
        id: 15,
        name: "Sobremesas",
        urlParamName: "sobremesas",
        iconSrc: <GiCupcake className={`text-lg text-white  group-focus:text-white group-hover:text-textColor`} />,
    },

];

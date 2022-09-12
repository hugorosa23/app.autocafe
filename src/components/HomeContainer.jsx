import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// const d = new Date();
// let day = weekday[d.getDay()];

const HomeContainer = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
            <div className="py-2 flex-1 flex flex-col items-start 
            justify-start gap-5">
                <div className="flex items-center gap-2 justify-center bg-red-100 
                px-4 py-1 rounded-full">
                    <p className="text-base text-red-500 font-semibold">Serviço de Entregas</p>

                    <div className="w-8 h-8 bg-white rounded-full overflow-hidden
                    drop-shadow-xl">
                        <img src={Delivery}
                            className="w-full h-full object-contain"
                            alt="Delivery"
                        />
                    </div>
                </div>

                <p className="text-[2.25rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
                    A entrega mais deliciosa de{" "}
                    <span className="text-red-600 text-[2.75rem] lg:text-[4.5rem]">Maragogi</span></p>

                <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit velit itaque quae dolore modi expedita deserunt
                    consectetur aliquid quaerat impedit possimus laborum autem
                    sunt repellendus quam voluptate, neque dicta ut.</p>

                <button type="button" className="bg-gradient-to-br from-red-400 to-red-500 
                w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all 
                ease-in-out duration-100">Solicite Agora</button>
            </div>
            <div className="py-3 flex-1 flex items-center relative">
                <div className="w-full h-full absolute flex justify-center flex-wrap">
                    <p className="text-[1rem] lg:text-[2rem] font-bold tracking-wide text-headingColor">
                        Conheça as{" "}
                        <span className="text-red-600 text-[1.25rem] lg:text-[2.25rem]">Promoções!</span>
                    </p>
                </div>
                <img
                    src={HeroBg}
                    className="ml-auto mt-8 h-400 w-full lg:w-auto lg:p-2 lg:h-650"
                    alt="Imagem de Background" />

                <div className="w-full h-full absolute top-4 left-0 flex items-center justify-center lg:px-32 py-6 gap-3 flex-wrap">
                    {heroData && heroData.map(n => (
                        <div key={n.id} className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">
                            <img src={n.imageSrc} className="w-20 lg:w-40 -mt-10 lg:-mt-30" alt={n.alt} />
                            <p className="text-base lg:text-lg font-semibold text-textColor mt-2 lg:mt-4">{n.nome}</p>

                            <p className="text-[10px] lg:text-sm text-gray-500 font-semibold my-1 lg:my-3">{n.desc}</p>

                            <p className="text-sm font-semibold text-headingColor">
                                <span className="text-xs text-red-600">R$</span>{n.preco}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeContainer
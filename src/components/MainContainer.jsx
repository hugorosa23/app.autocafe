import React from "react";
import Delivery from "../img/delivery.png"

const MainContainer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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

                <p className="text-[2rem] font-bold tracking-wide text-headingColor">
                    A entrega mais deliciosa de{" "}
                    <span className="text-red-600 text-[2.5rem]">Maragogi</span></p>

                <p className="text-base text-textColor text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit velit itaque quae dolore modi expedita deserunt
                    consectetur aliquid quaerat impedit possimus laborum autem
                    sunt repellendus quam voluptate, neque dicta ut.</p>

                <button type="button" className="bg-gradient-to-br from-red-400 to-red-500 
                w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all 
                ease-in-out duration-100">Solicite Agora</button>
            </div>
            <div className="py-2 bg-blue-400 flex-1"></div>
        </div>
    )
}

export default MainContainer
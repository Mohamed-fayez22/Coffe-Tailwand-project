import React from "react";
import {
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
} from "../assets";

const Gallery = () => {
    const Images = [
        { id: 1, img: gallery1 },
        { id: 2, img: gallery2 },
        { id: 3, img: gallery3 },
        { id: 4, img: gallery4 },
        { id: 5, img: gallery5 },
        { id: 6, img: gallery6 },
    ];

    return (
        <div className="py-10 bg-[#3F181C]">
            {/* العنوان */}
            <div className="flex flex-col items-center text-center font-bold capitalize text-3xl mb-10">
                <h1 className="text-white">Gallery</h1>
                <div className="bg-orange-400 w-[100px] h-[2px] mt-3"></div>
            </div>

            {/* الصور */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-8">
                {Images.map((img) => (
                    <div key={img.id} className="overflow-hidden rounded-lg shadow-md">
                        <img
                            src={img.img}
                            alt=''
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;

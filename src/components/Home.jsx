import { imgHero } from "../assets";

const Home = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 my-20">
            {/* النصوص */}
            <div className="text-white flex flex-col gap-6 max-w-lg">
                <h1 className="text-4xl font-bold font-mono text-orange-300">
                    Best Coffee
                </h1>
                <h2 className="text-4xl font-bold">
                    Make Your Day Great With Our Special Coffee
                </h2>
                <p className="text-lg">
                    Welcome to our coffee paradise, where every bean tells a story and every cup sparks joy.
                </p>

                {/* الأزرار */}
                <div className="flex gap-4">
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-transparent transition duration-300">
                        Order Now
                    </button>
                    <button className="bg-transparent text-white px-6 py-3 rounded-full font-medium border border-white     transition duration-300">
                        Contact Us
                    </button>
                </div>
            </div>

            {/* الصورة */}
            <div className="flex justify-center">
                <img
                    src={imgHero}
                    alt="Hero Coffee"
                    // className="w-full max-w-md object-cover rounded-md"
                />
            </div>
        </div>
    );
};

export default Home;

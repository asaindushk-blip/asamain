

const Hero = () => {
    return (
        <div className="grid grid-rows-1 top-20" id="Intro">
            <div className="relative h-min">
                <img
                    src="hero.png"
                    alt="ASA Industries Hero Image"
                    className="w-screen opacity-50 filter brightness-75 drop-shadow-md saturate-60"
                />
                <h3 className="my-auto z-10 w-1/5 text-white left-[5vw] text-7xl">
                    Work Culture
                </h3>
            </div>
            <h1 className="pt-20 mx-auto">Quality Checks</h1>
            <div className="pt-8 w-16 bg-red-400 mx-auto h-[0.5]"></div>
            
        </div>
    );
};
export default Hero;

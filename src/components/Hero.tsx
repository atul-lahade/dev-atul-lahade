import meImg from "../assets/img/hero/me.png";

export default function Hero() {
    return (
        <section
            className="hero-section relative pt-130px lg:pt-40 xl:pt-200px pb-10 md:pb-30px lg:pb-50px after:absolute after:top-0 after:right-0 after:w-322px after:h-308px after:blur-[150px] after:rounded-50% after:bg-gradient-circle after:-z-1 after:-mt-5% after:-mr-5% overflow-hidden">
            <div className="intro_text">
                <svg viewBox="0 0 1320 300" className="overflow-hidden">
                    <text x="50%" y="50%" textAnchor="middle" className="animate-stroke">
                        HI
                    </text>
                </svg>
            </div>
            <div className="container">
                <div className="hidded md:grid md:grid-cols-2 md:items-center gap-30px">
                    <div>
                        <h4
                            className="text-seondary-color dark:text-body-color text-size-22 md:text-size-25 lg:text-4xl lg:leading-1.5 font-bold mb-1.5 xl:mb-10px">
                            I am Gerold
                        </h4>
                        <h1
                            className="text-size-35 md:text-size-38 lg:text-size-50 xl:text-6xl 2xl:text-size-65 bg-gradient-text-light dark:bg-gradient-text bg-clip-text xl:leading-1.2 text-transparent mb-15px">
                            Next-Level Web <br />
                            Developer.
                        </h1>
                        <div className="flex md:hidden justify-center items-center my-30px">
                            <img src={meImg} alt="banner image"
                                className="rounded-38px border-2 border-seondary-color hover:border-primary-color rotate-[4.29deg] hover:rotate-0 transition-all duration-300 max-w-[80%] shadow-2xl" />
                        </div>
                        <p className="text-xl leading-1.5 text-primary-color-light dark:text-body-color max-w-540px">
                            I break down complex user experinece problems to create
                            integritiy focussed solutions that connect billions of people
                        </p>
                        <div className="flex items-center gap-30px lg:gap-25px mt-5 flex-wrap lg:flex-nowrap md:mt-30px lg:mt-50px">
                            <div>
                                <a href="#"
                                    className="text-size-15 font-medium text-primary-color hover:text-body-color capitalize py-17px px-35px bg-200 bg-transparent hover:bg-primary-color rounded-full leading-1 border border-primary-color text-nowrap tracking-1px">Download
                                    CV
                                    <i className="flaticon-download ml-0.5 text-size-17"></i></a>
                            </div>
                            <div>
                                <ul className="flex gap-x-5">
                                    <li>
                                        <a href="#"
                                            className="text-primary-color hover:text-body-color border border-primary-color w-35px h-35px rounded-full flex items-center justify-center overflow-hidden relative z-0 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:scale-0 after:bg-primary-color hover:after:scale-105 after:transition-all after:duration-300 after:z-[-1] after:rounded-full"><i
                                                className="fa-brands fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            className="text-primary-color hover:text-body-color border border-primary-color w-35px h-35px rounded-full flex items-center justify-center overflow-hidden relative z-0 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:scale-0 after:bg-primary-color hover:after:scale-105 after:transition-all after:duration-300 after:z-[-1] after:rounded-full"><i
                                                className="fa-light fa-basketball"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            className="text-primary-color hover:text-body-color border border-primary-color w-35px h-35px rounded-full flex items-center justify-center overflow-hidden relative z-0 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:scale-0 after:bg-primary-color hover:after:scale-105 after:transition-all after:duration-300 after:z-[-1] after:rounded-full"><i
                                                className="fa-brands fa-linkedin-in"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            className="text-primary-color hover:text-body-color border border-primary-color w-35px h-35px rounded-full flex items-center justify-center overflow-hidden relative z-0 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:scale-0 after:bg-primary-color hover:after:scale-105 after:transition-all after:duration-300 after:z-[-1] after:rounded-full"><i
                                                className="fa-brands fa-github"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        className="hidden md:flex md:justify-center md:items-center relative after:absolute after:bottom-0 after:left-0 after:w-220px after:h-220px after:blur-[150px] after:rounded-50% after:bg-gradient-circle after:-z-1 after:-mt-5% after:-mr-5%">
                        <img src={meImg} alt="banner image"
                            className="rounded-38px border-2 border-seondary-color hover:border-primary-color rotate-[4.29deg] hover:rotate-0 transition-all duration-300 shadow-black" />
                    </div>
                </div>
            </div>
            <div className="funfact-area mt-60px xl:mt-70px 2xl:mt-30">
                <div className="container">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-30px text-primary-color dark:text-body-color">
                        <div
                            className="funfact-item flex flex-wrap sm:flex-nowrap flex-col sm:flex-row justify-center lg:justify-start items-center gap-15px">
                            <div className="number text-size-45 md:text-size-55 xl:text-size-64 font-medium">
                                <span className="odometer !font-sora tracking-[0.04em]" data-count="14">0</span>
                            </div>
                            <div className="text">Years of <br />Experience</div>
                        </div>
                        <div
                            className="funfact-item flex flex-wrap sm:flex-nowrap flex-col sm:flex-row justify-center lg:justify-start items-center gap-15px">
                            <div className="number text-size-45 md:text-size-55 xl:text-size-64 font-medium">
                                <span className="odometer !font-sora tracking-[0.04em]" data-count="50">0</span>+
                            </div>
                            <div className="text">Project <br />Completed</div>
                        </div>
                        <div
                            className="funfact-item flex flex-wrap sm:flex-nowrap flex-col sm:flex-row justify-center lg:justify-start items-center gap-15px">
                            <div className="number text-size-45 md:text-size-55 xl:text-size-64 font-medium">
                                <span className="odometer !font-sora tracking-[0.04em]" data-count="1.5">0</span>K
                            </div>
                            <div className="text">Happy <br />Clients</div>
                        </div>

                        <div
                            className="funfact-item flex flex-wrap sm:flex-nowrap flex-col sm:flex-row justify-center lg:justify-start items-center gap-15px">
                            <div className="number text-size-45 md:text-size-55 xl:text-size-64 font-medium">
                                <span className="odometer !font-sora tracking-[0.04em]" data-count="14">0</span>
                            </div>
                            <div className="text">Years of <br />Experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
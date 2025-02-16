import logoLight from "../assets/img/logo/logo.png";

export default function Footer() {
    return (
        <footer>
            <div className="footer-inner bg-seondary-color dark:bg-dark-color">
                <div className="container">
                    <div className="flex flex-col items-center pt-50px pb-5 md:pt-60px">
                        <div className="footer-logo w-75px h-75px mb-6">
                            <a href="#"><img src={logoLight} alt="" /></a>
                        </div>
                        <div>
                            <ul className="nav flex flex-wrap justify-center items-center gap-x-35px">

                                <li className="nav_item group relative">
                                    <a href="#services"
                                        className="text-size-15 font-medium text-white-color capitalize py-10px md:py-15px lg:py-25px 2xl:py-30px relative z-0 after:w-0 after:h-0.5 after:bg-gradient-primary after:absolute after:right-0 hover:after:left-0 after:bottom-[10px] md:after:bottom-[15px] lg:after:bottom-[25px] after:transition-all after:duration-500 group-hover:after:w-full">Services
                                    </a>
                                </li>
                                <li className="nav_item group relative">
                                    <a href="#portfolio"
                                        className="text-size-15 font-medium text-white-color capitalize py-10px md:py-15px lg:py-25px 2xl:py-30px relative z-0 after:w-0 after:h-0.5 after:bg-gradient-primary after:absolute after:right-0 hover:after:left-0 after:bottom-[10px] md:after:bottom-[15px] lg:after:bottom-[25px] after:transition-all after:duration-500 group-hover:after:w-full">Portfolios
                                    </a>
                                </li>

                                <li className="nav_item group relative">
                                    <a href="#resume"
                                        className="text-size-15 font-medium text-white-color capitalize py-10px md:py-15px lg:py-25px 2xl:py-30px relative z-0 after:w-0 after:h-0.5 after:bg-gradient-primary after:absolute after:right-0 hover:after:left-0 after:bottom-[10px] md:after:bottom-[15px] lg:after:bottom-[25px] after:transition-all after:duration-500 group-hover:after:w-full">Experience
                                    </a>
                                </li>
                                <li className="nav_item group relative">
                                    <a href="#skills"
                                        className="text-size-15 font-medium text-white-color capitalize py-10px md:py-15px lg:py-25px 2xl:py-30px relative z-0 after:w-0 after:h-0.5 after:bg-gradient-primary after:absolute after:right-0 hover:after:left-0 after:bottom-[10px] md:after:bottom-[15px] lg:after:bottom-[25px] after:transition-all after:duration-500 group-hover:after:w-full">Skills
                                    </a>
                                </li>

                                <li className="nav_item group relative">
                                    <a href="#blogs"
                                        className="text-size-15 font-medium text-white-color capitalize py-10px md:py-15px lg:py-25px 2xl:py-30px relative z-0 after:w-0 after:h-0.5 after:bg-gradient-primary after:absolute after:right-0 hover:after:left-0 after:bottom-[10px] md:after:bottom-[15px] lg:after:bottom-[25px] after:transition-all after:duration-500 group-hover:after:w-full">Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="copyright text-gray-color whitespace-nowrap text-sm md:text-base mt-5">
                            © 2024 All rights reserved by
                            <a href="index.html" className="text-white-color hover:text-primary-color">ThemeJunction</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
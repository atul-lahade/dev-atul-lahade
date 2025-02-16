import pfFourImg from "../assets/img/portfolio/4.jpg";
import pfOneImg from "../assets/img/portfolio/1.jpg";
import pfThreeImg from "../assets/img/portfolio/3.jpg";
import pfTwoImg from "../assets/img/portfolio/2.jpg";

export default function Portfolio() {
    return (
        <section id="portfolio">
            <div className="pt-60px pb-30px md:pt-20 md:pb-60px lg:pt-100px lg:pb-20">
                <div className="container">
                    <div className="text-center flex flex-col items-center mb-10 md:mb-50px">
                        <h2
                            className="text-3xl md:text-size-35 lg:text-size-40 xl:text-size-45 bg-gradient-text-light dark:bg-gradient-text bg-clip-text xl:leading-1.2 text-transparent mb-15px wow fadeInUp"
                            data-wow-delay=".3s">
                            My Recent Works
                        </h2>
                        <p className="text-primary-color-light dark:text-body-color max-w-700px wow fadeInUp" data-wow-delay=".4s">
                            We put your ideas and thus your wishes in the form of a unique
                            web project that inspires you and you customers.
                        </p>
                    </div>
                    <div className="portfolio-filter">
                        <div className="flex items-center">
                            <div
                                className="button-group filter-button-group max-w-400 mx-auto inline-flex items-center justify-center bg-cream-light-color dark:bg-black rounded-full px-2 py-1 md:py-1.5 relative z-0 wow fadeInUp"
                                data-wow-delay=".5s">
                                <button data-filter="*"
                                    className="text-sm md:text-size-15 px-3 md:px-25px py-10px md:py-3 text-primary-color dark:text-white-color leading-1 active">
                                    All
                                </button>
                                <button data-filter=".uxui"
                                    className="text-sm md:text-size-15 px-3 md:px-25px py-10px md:py-3 text-primary-color dark:text-white-color leading-1">
                                    UX/UI
                                </button>
                                <button data-filter=".branding"
                                    className="text-sm md:text-size-15 px-3 md:px-25px py-10px md:py-3 text-primary-color dark:text-white-color leading-1">
                                    Branding
                                </button>
                                <button data-filter=".mobile-app"
                                    className="text-sm md:text-size-15 px-3 md:px-25px py-10px md:py-3 text-primary-color dark:text-white-color leading-1">
                                    Apps
                                </button>
                                <div className="active-bg !-z-1"></div>
                            </div>
                        </div>

                        <div className="portfolio-box wow fadeInUp mt-10 md:mt-50px wow fadeInUp" data-wow-delay=".6s">
                            <div className="portfolio-sizer"></div>
                            <div className="gutter-sizer"></div>
                            <div
                                className="portfolio-item branding bg-primary-color-light px-15px pt-25px pb-0 lg:p-9 lg:pb-0 rounded-10px group relative float-left inline-flex">
                                <img src={pfTwoImg} alt="" />
                                <div
                                    className="absolute left-0 bottom-[15px] group-hover:bottom-5 translate-y-5 group-hover:translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible w-full group-hover: px-15px lg:px-5 transition-all duration-300">
                                    <a href="portfolio-details.html"
                                        className="text-white-color p-15px pr-30px lg:p-5 lg:pr-50px bg-gradient-primary rounded-15px w-full">
                                        <span className="block text-xl md:text-size-25 lg:text-3xl font-bold mb-2 lg:mb-15px">
                                            Deloitte
                                        </span>

                                        <span className="block text-body-color">
                                            Project was about precision and information.
                                        </span>
                                        <i
                                            className="flaticon-up-right-arrow text-size-15 md:text-xl text-primary-color group-hover:text-white-color absolute top-1/2 right-8 lg:right-[55px] -translate-y-1/2 rotate-[-360deg] group-hover:rotate-0 transition-all duration-300"></i>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="portfolio-item uxui bg-primary-color-light px-15px pt-25px pb-0 lg:p-9 lg:pb-0 rounded-10px group relative float-left inline-flex">
                                <img src={pfThreeImg} alt="" />
                                <div
                                    className="absolute left-0 bottom-[15px] group-hover:bottom-5 translate-y-5 group-hover:translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible w-full group-hover: px-15px lg:px-5 transition-all duration-300">
                                    <a href="portfolio-details.html"
                                        className="text-white-color p-15px pr-30px lg:p-5 lg:pr-50px bg-gradient-primary rounded-15px w-full">
                                        <span className="block text-xl md:text-size-25 lg:text-3xl font-bold mb-2 lg:mb-15px">
                                            New Age
                                        </span>

                                        <span className="block text-body-color">
                                            Project was about precision and information.
                                        </span>
                                        <i
                                            className="flaticon-up-right-arrow text-size-15 md:text-xl text-primary-color group-hover:text-white-color absolute top-1/2 right-8 lg:right-[55px] -translate-y-1/2 rotate-[-360deg] group-hover:rotate-0 transition-all duration-300"></i>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="portfolio-item mobile-app bg-primary-color-light px-15px pt-25px pb-0 lg:p-9 lg:pb-0 rounded-10px group relative float-left inline-flex">
                                <img src={pfFourImg} alt="" />
                                <div
                                    className="absolute left-0 bottom-[15px] group-hover:bottom-5 translate-y-5 group-hover:translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible w-full group-hover: px-15px lg:px-5 transition-all duration-300">
                                    <a href="portfolio-details.html"
                                        className="text-white-color p-15px pr-30px lg:p-5 lg:pr-50px bg-gradient-primary rounded-15px w-full">
                                        <span className="block text-xl md:text-size-25 lg:text-3xl font-bold mb-2 lg:mb-15px">
                                            Sebastian
                                        </span>

                                        <span className="block text-body-color">
                                            Project was about precision and information.
                                        </span>
                                        <i
                                            className="flaticon-up-right-arrow text-size-15 md:text-xl text-primary-color group-hover:text-white-color absolute top-1/2 right-8 lg:right-[55px] -translate-y-1/2 rotate-[-360deg] group-hover:rotate-0 transition-all duration-300"></i>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="portfolio-item branding bg-primary-color-light px-15px pt-25px pb-0 lg:p-9 lg:pb-0 rounded-10px group relative float-left inline-flex">
                                <img src={pfOneImg} alt="" />
                                <div
                                    className="absolute left-0 bottom-[15px] group-hover:bottom-5 translate-y-5 group-hover:translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible w-full group-hover: px-15px lg:px-5 transition-all duration-300">
                                    <a href="portfolio-details.html"
                                        className="text-white-color p-15px pr-30px lg:p-5 lg:pr-50px bg-gradient-primary rounded-15px w-full">
                                        <span className="block text-xl md:text-size-25 lg:text-3xl font-bold mb-2 lg:mb-15px">
                                            Mochnix
                                        </span>

                                        <span className="block text-body-color">
                                            Project was about precision and information.
                                        </span>
                                        <i
                                            className="flaticon-up-right-arrow text-size-15 md:text-xl text-primary-color group-hover:text-white-color absolute top-1/2 right-8 lg:right-[55px] -translate-y-1/2 rotate-[-360deg] group-hover:rotate-0 transition-all duration-300"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

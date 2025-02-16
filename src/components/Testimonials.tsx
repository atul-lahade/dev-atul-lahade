import testLogo1Dark from "../assets/img/testimonials/logo/1-dark.png";
import testLogo1Light from "../assets/img/testimonials/logo/1.png";
import testLogo2Dark from "../assets/img/testimonials/logo/2-dark.png";
import testLogo2Light from "../assets/img/testimonials/logo/2.png";
import userOneImg from "../assets/img/testimonials/user/1.jpg";
import userTwoImg from "../assets/img/testimonials/user/2.jpg";

export default function Testimonials() {
    return (
        <section id="testimonials">
            <div className="bg-cream-light-color dark:bg-black-color py-60px md:py-20 lg:py-30">
                <div className="container">
                    <div className="testimonials grid lg:grid-cols-12 gap-6">
                        <div className="lg:col-start-1 lg:col-span-5">
                            <div className="mb-5 md:mb-50px text-center lg:text-start wow fadeInUp" data-wow-delay=".3s">
                                <h2
                                    className="text-3xl md:text-size-35 lg:text-size-40 xl:text-size-45 bg-gradient-text-light dark:bg-gradient-text bg-clip-text xl:leading-1.2 text-transparent mb-15px wow fadeInLeft"
                                    data-wow-delay=".3s">
                                    My Client's Stories
                                </h2>
                                <p className="text-primary-color-light dark:text-body-color wow fadeInLeft" data-wow-delay=".4s">
                                    Empowering people in new a digital journey with my super
                                    services
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-start-6 xl:col-start-7 lg:col-span-7 xl:col-span-6 wow fadeInRight overflow-hidden"
                            data-wow-delay=".5s">
                            <div className="owl-carousel testimonial-carousel">
                                <div className="p-25px bg-white-color dark:bg-primary-color-light rounded-15px relative z-0 group">
                                    <div className="flex justify-between gap-30px mb-5">
                                        <div className="max-w-100px w-full">
                                            <img src={testLogo1Light} alt="" className="!hidden dark:!block" />
                                            <img src={testLogo1Dark} alt="" className="!block dark:!hidden" />
                                        </div>
                                        <div className="max-w-120px w-2/5">
                                            <img className="rounded-5px rounded-bl-125px w-full" src={userOneImg}
                                                alt="" />
                                        </div>
                                    </div>
                                    <div className="text-primary-color-light dark:text-white-color relative z-10">
                                        <div className="icon-box mb-25px flex gap-1">
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                className="transition-all duration-300">
                                                <path
                                                    d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                                                    fill="url(#paint6_linear_263_514)" className="fill-primary-color"></path>
                                                <defs>
                                                    <linearGradient x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                                                        gradientUnits="userSpaceOnUse">
                                                        <stop offset="1" stopColor="var(--tj-theme-primary)"></stop>
                                                        <stop offset="1" stopColor="#140C1C" stopOpacity="0"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                className="transition-all duration-300 ml-1">
                                                <path
                                                    d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                                                    fill="url(#paint7_linear_263_515)" className="fill-primary-color"></path>
                                                <defs>
                                                    <linearGradient x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                                                        gradientUnits="userSpaceOnUse">
                                                        <stop offset="1" stopColor="var(--tj-theme-primary)"></stop>
                                                        <stop offset="1" stopColor="#140C1C" stopOpacity="0"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <p className="text-primary-color-light dark:text-body-color mb-30px md:mb-50px">
                                            “Taylor is a professional Designer he really helps my
                                            business by providing value to my business.
                                        </p>
                                        <h4 className="text-lg mb-2">Tim Bailey</h4>

                                        <p className="text-primary-color-light dark:text-body-color text-sm">
                                            SEO Specialist, Theme Junction
                                        </p>
                                    </div>
                                </div>
                                <div className="p-25px bg-white-color dark:bg-primary-color-light rounded-15px relative z-0 group">
                                    <div className="flex justify-between gap-30px mb-5">
                                        <div className="max-w-100px w-full">
                                            <img src={testLogo2Light} alt="" className="!hidden dark:!block" />
                                            <img src={testLogo2Dark} alt="" className="!block dark:!hidden" />
                                        </div>
                                        <div className="max-w-120px w-2/5">
                                            <img className="rounded-5px rounded-bl-125px w-full" src={userTwoImg}
                                                alt="" />
                                        </div>
                                    </div>
                                    <div className="text-primary-color-light dark:text-white-color relative z-10">
                                        <div className="icon-box mb-25px flex gap-1">
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                className="transition-all duration-300">
                                                <path
                                                    d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                                                    fill="url(#paint6_linear_263_514)" className="fill-primary-color"></path>
                                                <defs>
                                                    <linearGradient x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                                                        gradientUnits="userSpaceOnUse">
                                                        <stop offset="1" stopColor="var(--tj-theme-primary)"></stop>
                                                        <stop offset="1" stopColor="#140C1C" stopOpacity="0"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                className="transition-all duration-300 ml-1">
                                                <path
                                                    d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                                                    fill="url(#paint7_linear_263_515)" className="fill-primary-color"></path>
                                                <defs>
                                                    <linearGradient x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                                                        gradientUnits="userSpaceOnUse">
                                                        <stop offset="1" stopColor="var(--tj-theme-primary)"></stop>
                                                        <stop offset="1" stopColor="#140C1C" stopOpacity="0"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <p className="text-primary-color-light dark:text-body-color mb-30px md:mb-50px">
                                            “Taylor is a professional Designer he really helps my
                                            business by providing value to my business.
                                        </p>
                                        <h4 className="text-lg mb-2">Brandon Fraser</h4>

                                        <p className="text-primary-color-light dark:text-body-color text-sm">
                                            Senior Software Dev, Cosmic Sport
                                        </p>
                                    </div>
                                </div>
                                <div className="p-25px bg-white-color dark:bg-primary-color-light rounded-15px relative z-0 group">
                                    <div className="flex justify-between gap-30px mb-5">
                                        <div className="max-w-100px w-full">
                                            <img src={testLogo1Light} alt="" className="!hidden dark:!block" />
                                            <img src={testLogo1Dark} alt="" className="!block dark:!hidden" />
                                        </div>
                                        <div className="max-w-120px w-2/5">
                                            <img className="rounded-5px rounded-bl-125px w-full" src={userOneImg}
                                                alt="" />
                                        </div>
                                    </div>
                                    <div className="text-primary-color-light dark:text-white-color relative z-10">
                                        <div className="icon-box mb-25px flex gap-1">
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                className="transition-all duration-300">
                                                <path
                                                    d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                                                    fill="url(#paint6_linear_263_514)" className="fill-primary-color"></path>
                                                <defs>
                                                    <linearGradient x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                                                        gradientUnits="userSpaceOnUse">
                                                        <stop offset="1" stopColor="var(--tj-theme-primary)"></stop>
                                                        <stop offset="1" stopColor="#140C1C" stopOpacity="0"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                className="transition-all duration-300 ml-1">
                                                <path
                                                    d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                                                    fill="url(#paint7_linear_263_515)" className="fill-primary-color"></path>
                                                <defs>
                                                    <linearGradient x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                                                        gradientUnits="userSpaceOnUse">
                                                        <stop offset="1" stopColor="var(--tj-theme-primary)"></stop>
                                                        <stop offset="1" stopColor="#140C1C" stopOpacity="0"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <p className="text-primary-color-light dark:text-body-color mb-30px md:mb-50px">
                                            “Taylor is a professional Designer he really helps my
                                            business by providing value to my business.
                                        </p>
                                        <h4 className="text-lg mb-2">Tim Bailey</h4>

                                        <p className="text-primary-color-light dark:text-body-color text-sm">
                                            SEO Specialist, Theme Junction
                                        </p>
                                    </div>
                                </div>
                                <div className="p-25px bg-white-color dark:bg-primary-color-light rounded-15px relative z-0 group">
                                    <div className="flex justify-between gap-30px mb-5">
                                        <div className="max-w-100px w-full">
                                            <img src={testLogo2Light} alt="" className="!hidden dark:!block" />
                                            <img src={testLogo2Dark} alt="" className="!block dark:!hidden" />
                                        </div>
                                        <div className="max-w-120px w-2/5">
                                            <img className="rounded-5px rounded-bl-125px w-full" src={userTwoImg}
                                                alt="" />
                                        </div>
                                    </div>
                                    <div className="text-primary-color-light dark:text-white-color relative z-10">
                                        <div className="icon-box mb-25px flex gap-1">
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                className="transition-all duration-300">
                                                <path
                                                    d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                                                    fill="url(#paint6_linear_263_514)" className="fill-primary-color"></path>
                                                <defs>
                                                    <linearGradient x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                                                        gradientUnits="userSpaceOnUse">
                                                        <stop offset="1" stopColor="var(--tj-theme-primary)"></stop>
                                                        <stop offset="1" stopColor="#140C1C" stopOpacity="0"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                className="transition-all duration-300 ml-1">
                                                <path
                                                    d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                                                    fill="url(#paint7_linear_263_515)" className="fill-primary-color"></path>
                                                <defs>
                                                    <linearGradient x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                                                        gradientUnits="userSpaceOnUse">
                                                        <stop offset="1" stopColor="var(--tj-theme-primary)"></stop>
                                                        <stop offset="1" stopColor="#140C1C" stopOpacity="0"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <p className="text-primary-color-light dark:text-body-color mb-30px md:mb-50px">
                                            “Taylor is a professional Designer he really helps my
                                            business by providing value to my business.
                                        </p>
                                        <h4 className="text-lg mb-2">Brandon Fraser</h4>

                                        <p className="text-primary-color-light dark:text-body-color text-sm">
                                            Senior Software Dev, Cosmic Sport
                                        </p>
                                    </div>
                                </div>
                                <div className="p-25px bg-white-color dark:bg-primary-color-light rounded-15px relative z-0 group">
                                    <div className="flex justify-between gap-30px mb-5">
                                        <div className="max-w-100px w-full">
                                            <img src={testLogo1Light} alt="" className="!hidden dark:!block" />
                                            <img src={testLogo1Dark} alt="" className="!block dark:!hidden" />
                                        </div>
                                        <div className="max-w-120px w-2/5">
                                            <img className="rounded-5px rounded-bl-125px w-full" src={userOneImg}
                                                alt="" />
                                        </div>
                                    </div>
                                    <div className="text-primary-color-light dark:text-white-color relative z-10">
                                        <div className="icon-box mb-25px flex gap-1">
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                className="transition-all duration-300">
                                                <path
                                                    d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                                                    fill="url(#paint6_linear_263_514)" className="fill-primary-color"></path>
                                                <defs>
                                                    <linearGradient x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                                                        gradientUnits="userSpaceOnUse">
                                                        <stop offset="1" stopColor="var(--tj-theme-primary)"></stop>
                                                        <stop offset="1" stopColor="#140C1C" stopOpacity="0"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                className="transition-all duration-300 ml-1">
                                                <path
                                                    d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                                                    fill="url(#paint7_linear_263_515)" className="fill-primary-color"></path>
                                                <defs>
                                                    <linearGradient x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                                                        gradientUnits="userSpaceOnUse">
                                                        <stop offset="1" stopColor="var(--tj-theme-primary)"></stop>
                                                        <stop offset="1" stopColor="#140C1C" stopOpacity="0"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <p className="text-primary-color-light dark:text-body-color mb-30px md:mb-50px">
                                            “Taylor is a professional Designer he really helps my
                                            business by providing value to my business.
                                        </p>
                                        <h4 className="text-lg mb-2">Tim Bailey</h4>

                                        <p className="text-primary-color-light dark:text-body-color text-sm">
                                            SEO Specialist, Theme Junction
                                        </p>
                                    </div>
                                </div>
                                <div className="p-25px bg-white-color dark:bg-primary-color-light rounded-15px relative z-0 group">
                                    <div className="flex justify-between gap-30px mb-5">
                                        <div className="max-w-100px w-full">
                                            <img src={testLogo2Light} alt="" className="!hidden dark:!block" />
                                            <img src={testLogo2Dark} alt="" className="!block dark:!hidden" />
                                        </div>
                                        <div className="max-w-120px w-2/5">
                                            <img className="rounded-5px rounded-bl-125px w-full" src={userTwoImg}
                                                alt="" />
                                        </div>
                                    </div>
                                    <div className="text-primary-color-light dark:text-white-color relative z-10">
                                        <div className="icon-box mb-25px flex gap-1">
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                className="transition-all duration-300">
                                                <path
                                                    d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                                                    fill="url(#paint6_linear_263_514)" className="fill-primary-color"></path>
                                                <defs>
                                                    <linearGradient x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                                                        gradientUnits="userSpaceOnUse">
                                                        <stop offset="1" stopColor="var(--tj-theme-primary)"></stop>
                                                        <stop offset="1" stopColor="#140C1C" stopOpacity="0"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                className="transition-all duration-300 ml-1">
                                                <path
                                                    d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                                                    fill="url(#paint7_linear_263_515)" className="fill-primary-color"></path>
                                                <defs>
                                                    <linearGradient x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                                                        gradientUnits="userSpaceOnUse">
                                                        <stop offset="1" stopColor="var(--tj-theme-primary)"></stop>
                                                        <stop offset="1" stopColor="#140C1C" stopOpacity="0"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <p className="text-primary-color-light dark:text-body-color mb-30px md:mb-50px">
                                            “Taylor is a professional Designer he really helps my
                                            business by providing value to my business.
                                        </p>
                                        <h4 className="text-lg mb-2">Brandon Fraser</h4>

                                        <p className="text-primary-color-light dark:text-body-color text-sm">
                                            Senior Software Dev, Cosmic Sport
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

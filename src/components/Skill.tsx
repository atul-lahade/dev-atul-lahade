
type SkillProps = {
    imgUrl: string;
    skillName: string;
    percentage: number;
};

export default function Skill(props: SkillProps) {
    return (
        <div className="max-w-180px w-full group wow fadeInUp" data-wow-delay=".5s">
            <div
                className="flex flex-col items-center py-25px px-15px md:pt-30px 2xl:pt-10 2xl:mb-30px rounded-25px bg-cream-light-color dark:bg-primary-color-light border border-transparent group-hover:border-primary-color group-hover:bg-seondary-color transition-all duration-500 mb-15px">
                <div className="mb-5 md:mb-30px mx-9 2xl:mx-44px w-60px flex flex-col justify-center items-center">
                    <img
                        className="grayscale-[90%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 opacity-50 group-hover:opacity-100 w-60px"
                        src={props.imgUrl} alt="" />
                </div>
                <div
                    className="text-xl text-gray-color-2 group-hover:text-primary-color transition-none duration-300 font-extrabold">
                    {props.percentage}%
                </div>
            </div>
            <p className="text-primary-color text-center">{props.skillName}</p>
        </div>
    )
}
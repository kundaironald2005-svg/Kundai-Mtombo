import {words} from "../constants/index.js";
import Button from "../components/Button.jsx";
import { useGSAP} from "@gsap/react";
import gsap from 'gsap';
import AnimatedCounter from "../components/AnimatedCounter.jsx";

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                easing: 'power2.inOut',
            },
        );

        gsap.fromTo('.hero-profile-img',
            {
                scale: 0.85,
                opacity: 0,
                y: 30
            },
            {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'power2.out',
                delay: 0.2
            }
        );
    })

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background" />
            </div>

            <div className="hero-layout">
                {/*LEFT: HERO CONTENT */}
                <header className="flex flex-col justify-center w-full xl:w-[56%] z-10">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>
                                Shaping
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word) => (
                                            <span key={word.text} className="flex items-center
                                            md:gap-3 gap-1 pb-2">
                                                <img
                                                src={word.imgPath}
                                                alt={word.text}
                                                className="xl:size-12 md:size-10 size-7 md:p-2 p-1
                                                rounded-full bg-white-50"
                                                />
                                                {word.text}
                                            </span>
                                        ))}
                                    </span>

                                </span>
                            </h1>
                            <h1 className="text-gradient font-bold tracking-tight pb-2">into Real Projects</h1>
                            <h1 className="text-gradient font-bold tracking-tight">that Deliver Results</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative z-10">
                            Hi, I'm Kundai Mtombo, a Computer Science Student and Software rep <br className="hidden md:inline" /> based in Zimbabwe with a passion for technology. I'm also the founder <br className="hidden md:inline" /> of SaaS (Software as a Service) Labs Zimbabwe.
                        </p>
                        <Button
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                            text="See my work"
                        />
                    </div>
                </header>

                {/*RIGHT: PROFILE PICTURE */}
                <figure className="hero-image-layout">
                    <div className="relative flex justify-center items-center">
                        {/* Ambient modern glow behind the portrait */}
                        <div className="absolute size-64 sm:size-80 md:size-96 rounded-full bg-gradient-to-tr from-[#00c6ff]/25 via-[#0072ff]/20 to-transparent blur-3xl pointer-events-none" />

                        {/* Profile Picture */}
                        <img
                            src="/images/profile-picture-removebg-preview.png"
                            alt="Kundai Mtombo"
                            className="hero-profile-img relative z-10 w-64 sm:w-80 md:w-96 xl:w-[440px] max-w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,198,255,0.25)] transition-transform duration-500 hover:scale-[1.03]"
                        />
                    </div>
                </figure>
            </div>
            <AnimatedCounter />
        </section>
    )
}
export default Hero

import React from 'react'
import TitleHeader from "../components/TitleHeader.jsx";
import {expCards} from "../constants/index.js";
import GlowCard from "../components/GlowCard.jsx";
import gsap from 'gsap';
import { useGSAP} from '@gsap/react'
import { ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
    useGSAP(() => {
        gsap.utils.toArray('.timeline-card').forEach((card) => {
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: 'left left',
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                }
            })
        })

        gsap.to('.timeline', {
            transformOrigin: 'bottom bottom',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top center',
                end: '70% center',
                onUpdate: (self) => {
                    // Use gsap.set to avoid creating a new tween on every update tick
                    gsap.set('.timeline', { scaleY: 1 - self.progress })
                }
            },
        })

        gsap.utils.toArray('.expText').forEach((text) => {
            gsap.from(text, {
                xPercent: 0,
                opacity: 0,
                transformOrigin: 'left left',
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: text,
                    start: 'top 60%'
                }
            })
        })


    }, []);
    return (
        <section id="experience" className="w-full md:mt-40 mt-20
        section-padding xl:px-0">
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader title="Professional Learning Experience" sub="My Learning-Path Overview"/>

                <div className="mt-32 relative">
                    <div className="relative z-50 xl:space-y-32 space-y-10">
                        {expCards.map((card, index) =>(
                            <div key={card.title} className="exp-card-wrapper timeline-card">
                                <div className="xl:w-2/6">
                                    <GlowCard card={card} index={index}>
                                        <div>
                                            <img src={card.imgPath} alt={card.title} />
                                        </div>
                                    </GlowCard>
                                </div>

                                <div className="xl:w-4/6">
                                    <div className="flex items-start">
                                        <div className="timeline-wrapper">
                                            <div className="timeline"/>
                                            <div className="gradient-line w-1 h-full" />
                                        </div>

                                        <div className="expText flex xl:gap-20 md:gap-10 gap-5
                                        relative z-20">
                                                <div className="timeline-logo">
                                                    <img src={card.logoPath} alt={`${card.title} logo`} />
                                                </div>
                                                <div>
                                                    <h1 className="font-semibold text-3xl">{card.title}</h1>
                                                    <p className="my-5 text-white-50">
                                                        {card.date}
                                                    </p>
                                                    {/* Render key responsibilities/achievements to fill the right-side space */}
                                                    {Array.isArray(card.responsibilities) && card.responsibilities.length > 0 && (
                                                        <ul className="list-disc pl-6 space-y-2 text-white-50">
                                                            {card.responsibilities.map((item, i) => (
                                                                <li key={i} className="leading-relaxed">{item}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ExperienceSection

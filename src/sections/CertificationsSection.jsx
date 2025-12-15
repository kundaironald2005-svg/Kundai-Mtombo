import React from 'react'
import TitleHeader from "../components/TitleHeader.jsx";

const CertificationsSection = () => {
    return (
        <section id="certifications" className="w-full md:mt-40 mt-20 section-padding xl:px-0">
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader title="Certifications" sub="Credentials & Achievements" />

                <div className="mt-16">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-lg">
                            <img
                                src="/images/gemini-academy-certificate-for-cims-02.png"
                                alt="Gemini Academy certificate"
                                className="w-full h-auto object-contain"
                                loading="lazy"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-lg">
                            <img
                                src="/images/img_1.png"
                                alt="Certification image 2"
                                className="w-full h-auto object-contain"
                                loading="lazy"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-lg">
                            <img
                                src="/images/Allison_Certificate.png"
                                alt="Allison Certificate"
                                className="w-full h-auto object-contain"
                                loading="lazy"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-lg">
                            <img
                                src="/images/udemy.jpg"
                                alt="Udemy Certificate"
                                className="w-full h-auto object-contain"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CertificationsSection

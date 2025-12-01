import React from 'react'
import {logoIconsList} from "../constants/index.js";

const LogoIcon = ({ icon, alt }) => {
    return (
        <div className="flex-none flex-center marquee-item">
            <img src={icon.imgPath} alt={alt} />

        </div>
    )

}

const LogoSection = () => {
    return (
        <div className="md:my-20 my-10 relative">
            <div className="gradient-edge  "/>
            <div className="gradient-edge  "/>

            <div className="marquee h-52">
                <div className="marquee-box md:gap-12 gap-5">
                    {logoIconsList.map((icon, index) => (
                        <LogoIcon key={`${index}-${icon.imgPath}`} icon={icon} alt={`logo-${index}`} />
                    ))}

                    {logoIconsList.map((icon, index) => (
                        <LogoIcon key={`dup-${index}-${icon.imgPath}`} icon={icon} alt={`logo-dup-${index}`} />
                    ))}
                </div>

            </div>
        </div>
    )
}
export default LogoSection

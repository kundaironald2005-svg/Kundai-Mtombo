import {socialImgs} from "../constants/index.js";

import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center md:items-start items-center">
                    <div className="flex items-center">
                        <a href="/">Visit my blog</a>
                        <a
                            href="https://drive.google.com/file/d/1U1ZM7FLwvulG7HunTbZfkFR2U3xr6UfG/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ marginLeft: '8px' }}
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
                <div className="socials">
                    {socialImgs.map((img) => (
                        <a
                            className="icon"
                            // Fallback to "#" if url is not provided in constants
                            href={img.url ?? "#"}
                            key={img.name}
                            target={img.url ? "_blank" : undefined}
                            rel={img.url ? "noopener noreferrer" : undefined}
                            aria-label={img.name}
                        >
                            <img src={img.imgPath} alt={img.name} />
                        </a>
                    ))}
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Kundai Mtombo. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
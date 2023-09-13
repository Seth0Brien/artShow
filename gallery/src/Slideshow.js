import "./css/mobile.css"
import "./css/tablet.css"
import "./css/desktop.css"
import data from "./data.json"
import { useState } from "react"

export default function Slideshow(props) {

    const [count, setCount] = useState(0);

    const open = () => {
        props.setOpenModal(true)
    }

    const increment = () => {
        if (count === 14) {
            setCount(count - 14)
        } else {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count === 0) {
            setCount(count + 14)
        } else {
            setCount(count - 1);
        }
    }

    return (
        <body className="body">

            <main>

                <div className="image">

                    <picture className="big-starry-night">
                        <source media="(min-width: 768px)" srcSet={data[count].images.hero.large} />
                        <img src={data[count].images.hero.small} alt={data[count].name} />
                    </picture>
                    <div className="image-text">
                        {data[count].name} <span>{data[count].artist.name}</span>
                    </div>

                    <img id="artist-big" src={data[count].artist.image} />

                </div>

                <div className="image-info">
                    <div className="image-top">
                        <img src={data[count].artist.image} alt={data[count].artist.name} />
                        <span className="image-date">{data[count].year}</span>
                    </div>

                    <div className="description">
                        <p>{data[count].description}</p>
                        <a href={data[count].source}>GO TO SOURCE</a>
                    </div>
                </div>

            </main>

            <footer>
                <div className="footer-left">
                    {data[count].name} <span>{data[count].artist.name}</span>
                </div>

                <div className="footer-right">
                    <button onClick={decrement}>
                    <a href="#top">
                        <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fill-rule="evenodd">
                                <path stroke="#000" d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z" stroke-width="2" />
                                <path stroke="#000" fill="#000" d="M.986.5h-1v22.775h1z" />
                            </g>
                        </svg>
                        </a>
                    </button>

                    <button onClick={increment}> 
                    <a href="#top">
                        <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fill-rule="evenodd">
                                <path stroke="#000" d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z" stroke-width="2" />
                                <path stroke="#000" fill="#000" d="M24.708.5h1v22.775h-1z" />
                            </g>
                        </svg>
                        </a>
                    </button>
                </div>
            </footer>

        </body>
    );
    }
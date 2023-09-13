import { useState } from "react"
import "./css/display.css"

export default function Display() {

    const [id, setId] = useState(0);

    return (
        <body className="body">
        

            <main>
                <div className="painting-thumbnail">

                    <div className="left-side">
                        <div className="column">
                            <a onClick={id} href=""><img src="assets/starry-night/thumbnail.jpg" alt="Starry Night" />
                                <div className="thumbnail-text">Starry Night
                                    <span>Vincent
                                        Van Gogh</span>
                                </div>
                            </a>

                            <a onClick={() => {setId(1)}} href=""><img src="assets/the-storm-on-the-sea-of-galilee/thumbnail.jpg"
                                alt="The Storm on the Sea of Galilee" />
                                <div className="thumbnail-text">The Storm on the Sea of Galilee <span>Rembrandt</span>
                                </div>
                            </a>

                            <a onClick={() => {setId(2)}} href=""><img src="assets\lady-with-an-ermine\thumbnail.jpg" alt="Lady with an Ermine" />
                                <div className="thumbnail-text">
                                    Lady with an
                                    Ermine <span>Leonardo da Vinci</span>
                                </div>
                            </a>

                            <a onClick={() => {setId(3)}} href=""><img src="assets/the-boy-in-the-red-vest/thumbnail.jpg"
                                alt="The Boy in the Red Vest" />
                                <div className="thumbnail-text">The
                                    Boy in the Red Vest <span>Edward Hopper</span>
                                </div>
                            </a>
                        </div>



                        <div className="column">
                            <a onClick={() => {setId(4)}} href=""><img src="assets\girl-with-pearl-earring\thumbnail.jpg"
                                alt="Girl with Pearl Earring" />
                                <div className="thumbnail-text">Girl
                                    with Pearl Earring <span>Johannes Vermeer</span>
                                </div>
                            </a>

                            <a onClick={() => {setId(5)}} href=""><img src="assets\the-great-wave-off-kanagawa\thumbnail.jpg"
                                alt="The Great Wave off Kanagawa" />
                                <div className="thumbnail-text">The Great Wave off Kanagawa <span>Hokusai</span>
                                </div>
                            </a>

                            <a onClick={() => {setId(6)}} href=""><img src="assets\the-night-cafe\thumbnail.jpg" alt="The Night Cafe" />
                                <div className="thumbnail-text">The Night Cafe
                                    <span>Vincent van Gogh</span>
                                </div>
                            </a>

                            <a onClick={() => {setId(7)}} href=""><img src="assets\arnolfini-portrait\thumbnail.jpg" alt="Arnolfini Portrait" />
                                <div className="thumbnail-text">Arnolfini
                                    Portrait <span>Jan van Eyck</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="right-side">
                        <div className="column">

                            <a onClick={() => {setId(8)}} href=""><img src="assets\guernica\thumbnail.jpg" alt="Guerrnica" />
                                <div className="thumbnail-text">Guerrnica <span>Pablo
                                    Picasso</span>
                                </div>
                            </a>

                            <a onClick={() => {setId(9)}} href=""><img src="assets\van-gogh-self-portrait\thumbnail.jpg" alt="Van Gogh Self Portrait" />
                                <div className="thumbnail-text">Van
                                    Gogh Self Portrait <span>Vincent Van Gogh</span>
                                </div>
                            </a>

                            <a onClick={() => {setId(10)}} href=""><img src="assets\mona-lisa\thumbnail.jpg" alt="Mona Lisa" />
                                <div className="thumbnail-text">Mona Lisa <span>Leonardo da
                                    Vinci</span>
                                </div>
                            </a>
                        </div>

                        <div className="column">

                            <a onClick={() => {setId(11)}} href=""><img src="assets\penitent-magdalene\thumbnail.jpg" alt="Pentitent Magdalene" />
                                <div className="thumbnail-text">Pentitent
                                    Magdalene <span>Artemisia Gentileschi</span>
                                </div>
                            </a>

                            <a onClick={() => {setId(12)}} href=""><img src="assets\the-sleeping-gypsy\thumbnail.jpg" alt="The Sleeping Gypsy" />
                                <div className="thumbnail-text">The Sleeping
                                    Gypsy <span>Henri Rousseau</span>
                                </div>
                            </a>

                            <a onClick={() => {setId(13)}} href=""><img src="assets\the-basket-of-apples\thumbnail.jpg" alt="The Basket of Apples" />
                                <div className="thumbnail-text">The
                                    Basket
                                    of Apples <span>Paul Cézanne</span>
                                </div>
                            </a>

                            <a onClick={() => {setId(14)}} href=""><img src="assets\the-swing\thumbnail.jpg" alt="The Swing" />
                                <div className="thumbnail-text">The Swing <span>Jean-Honoré
                                    Fragonard</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </main>

        </body>
    )
}
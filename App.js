import React from "react"
import Contact from "./Contact"

function App() {
    return (
        <div className="contacts">
            <Contact
                image="./images/ciku.jpg"
                name="Mr.Chikuuu"
                phone="(+91)xxxxxxxxxx"
                email="mr.chiku.bhaw"
            />
            <Contact
                img="./images/lulu.jpeg"
                name="Mr.Lulu"
                phone="(+91)xxxxxxxxxx"
                email="lulubhaw.com"
            />
            <Contact
                img="./images/piku.jpg"
                name="Mr.Piku"
                phone="(+91)xxxxxxxxxx"
                email="pikuuuuuuuuuuuu.com"
            />
            <Contact
                img="./images/shonu.jpg"
                name="Mr.Shonu"
                phone="(+91)xxxxxxxxxx"
                email="shonushinu.bhaw"
            />
        </div>
    )
}

export default App
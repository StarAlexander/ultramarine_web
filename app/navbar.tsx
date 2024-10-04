import "./globals.css"
import profile from "../public/profile.svg"
import search from "../public/search.svg"
import Image from "next/image"

export default function Navbar() {
    return (
        <div className="navbar">
            <h3>Últramarine</h3>
            <div className="search-form">
            <input type="text"/>
            <button className="search"><Image src={search} width={30} height={30} alt="search"/></button>
            </div>
            
            <button className="profile"><Image src={profile} width={30} height={30} alt="profile"/></button>
        </div>
    )
}



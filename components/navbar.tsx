import "../app/globals.css"
import profile from "../public/profile.svg"
import search from "../public/search.svg"
import menu from "../public/menu.svg"
import Image from "next/image"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="menu-nav">
            <h3>Últramarine</h3>
            <button className="wrap-icon"><Image src={menu} width={30} height={30} alt="menu"/></button>
            </div>
            
            <div className="search-form">
            <input type="text"/>
            <button className="wrap-icon"><Image src={search} width={30} height={30} alt="search"/></button>
            </div>
            
            <button className="wrap-icon profile"><Image src={profile} width={30} height={30} alt="profile"/></button>
        </div>
    )
}



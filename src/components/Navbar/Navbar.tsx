import { useState } from "react";
import { Button } from "../Button/button"
import { burger } from "../../assets";
export const Navbar = ({ }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="flex items-center justify-between h-16 px-3 lg:px-20 bg-primary">
            <div className="lg:hidden">
                <Button className="uppercase" variant='burger' size='burger' onClick={() => setMenuOpen(true)}> <img src={burger} alt="Logo" className="h-6 w-6" /></Button>
            </div>
            {menuOpen &&

                <div className="flex items-center justify-between gap-4 w-full h-full max-w-full bg-white rounded-md shadow-md fixed top-0 left-0 z-50">
                    <Button className="uppercase" variant='burger' size='burger' onClick={() => setMenuOpen(false)}> <img src={burger} alt="Logo" className="h-6 w-6" /></Button>
                </div>
            }
            <div className="lg:items-center lg:flex-1 lg:gap-2 hidden lg:flex">
                <Button className="uppercase">Shop</Button>
                <Button className="uppercase">About</Button>
            </div>
            <div className="flex-1 text-center">
                <a className="uppercase text-p5 lg:text-p3 font-bold">the Urnest store</a>
            </div>
            <div className="flex items-center lg:flex-1 justify-end">
                <Button className="uppercase">Cart</Button>
            </div>
        </nav>

    )
}

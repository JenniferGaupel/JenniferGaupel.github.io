import Link from "next/link";

const Menu = ()=> {
    return (
        <div>
            <ul className="menu-ul">
                <li className="menu-li"><Link href="/">Home</Link></li>
                <li className="menu-li"><Link href="/about">About</Link></li>
                <li className="menu-li"><Link href="/contact">Contact</Link></li>
            </ul>            
        </div>
    )
}

export default Menu;

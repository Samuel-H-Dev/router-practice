import { Link } from "react-router-dom";

export default function NavList(){


    return(

        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li> <Link to="/about">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><a href="github.com/samuel-h-dev" target="_blank" rel="norefferrer">github</a></li>
            </ul>
        </nav>
    )
}
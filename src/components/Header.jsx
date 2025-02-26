import { NavLink } from "react-router-dom"

export default function Header() {

    return (

        <header>

            <nav>

                <ul>

                    <li>

                        <NavLink to="/">Home</NavLink>

                    </li>

                    <li>

                        <NavLink to="/about">AboutUs</NavLink>

                    </li>

                </ul>

            </nav>

        </header>

    )

}
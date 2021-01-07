import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/typography">Typography</Link>
                </li>
                <li>
                    <Link to="/color">Color</Link>
                </li>
                <li>
                    <Link to="/buttonsAndIcons">Buttons and Icons</Link>
                </li>
                <li>
                    <Link to='/Action-Button'>Action button</Link>
                </li>
                <li>
                    <Link to='/Navbar'>Navbar</Link>
                </li>
                <li>
                    <Link to='/Collection'>Collection & Budget</Link>
                </li>
                <li>
                    <Link to='/Grid'>Grid</Link>
                </li>
                <li>
                    <Link to='/Cards'>Cards</Link>
                </li>
                <li>
                    <Link to='/Footer'>Footer</Link>
                </li>
            </ul>
        </div>
    )
}

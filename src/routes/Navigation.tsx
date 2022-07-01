import { BrowserRouter, Navigate } from "react-router-dom"
import { Routes, Route, NavLink } from 'react-router-dom';
import { ShoppingPage } from "../02-components-patterns/pages/ShoppingPage";
import logo from '../logo.svg';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React-logo" />
                    <ul>
                        <li>
                            <NavLink to="/shopping" className={ ( {isActive} ) => isActive ? 'nav-active' : ''}>Shopping</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={ ( {isActive} ) => isActive ? 'nav-active' : ''}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={ ( {isActive} ) => isActive ? 'nav-active' : ''}>Users</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/about" element={<h1>About Page</h1>} />
                    <Route path="/users" element={<h1>Users Page</h1>} />
                    <Route path="/shopping" element={<ShoppingPage />} />
                    <Route path="/*" element = { <Navigate to="/about" replace />} />
                </Routes>

            </div>

        </BrowserRouter>
    )
}

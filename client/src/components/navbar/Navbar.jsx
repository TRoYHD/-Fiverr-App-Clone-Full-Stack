import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";

function Navbar() {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    
    const {pathname} = useLocation();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(true);
    };

    useEffect(() => {
        window.addEventListener("scroll", isActive);
        return() => {
            window.removeEventListener("scroll", isActive);
        };
    }, []);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await newRequest.post("/auth/logout");
            localStorage.setItem("currentUser", null);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    const toggleDropdown1 = () => {
        setShowDropdown1(!showDropdown1);
    };

    const toggleDropdown2 = () => {
        setShowDropdown2(!showDropdown2);
    };

    return (
        <div className={
            active ? "navbar active" : "navbar"
        }>
            <div className="container">
                <div className="logo">
                    <Link className="link" to="/">
                        <span className="text">fiverr</span>
                    </Link>
                    <span className="dot">.</span>
                </div>
                <div className="links">
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    {
                    ! currentUser ?. isSeller && <span>Become a Seller</span>
                }
                    {
                    currentUser ? (
                        <div className="user"
                            onClick={
                                () => setOpen(!open)
                        }>
                            <img src={
                                    currentUser.img || "/img/noavatar.jpg"
                                }
                                alt=""/>
                            <span>{
                                currentUser ?. username
                            }</span>
                            {
                            open && (
                                <div className="options">
                                    {
                                    currentUser.isSeller && (
                                        <>
                                            <Link className="link" to="/mygigs">
                                                Gigs
                                            </Link>
                                            <Link className="link" to="/add">
                                                Add New Gig
                                            </Link>
                                        </>
                                    )
                                }
                                    <Link className="link" to="/orders">
                                        Orders
                                    </Link>
                                    <Link className="link" to="/messages">
                                        Messages
                                    </Link>
                                    <Link className="link"
                                        onClick={handleLogout}>
                                        Logout
                                    </Link>
                                </div>
                            )
                        }
                            {" "} </div>
                    ) : (
                        <>
                            <Link to="/login" className="link">
                                Sign in
                            </Link>
                            <Link className="link" to="/register">
                                <button>Join</button>
                            </Link>
                        </>
                    )
                }
                    {" "} </div>
            </div>
            {
            (active || pathname !== "/") && (
                <>
                    <hr/>
                    <div className="menu">
                        <div className="dropdown">
                            <span className="dropdown-toggle"
                                onMouseEnter={toggleDropdown1}
                                onMouseLeave={toggleDropdown1}>
                                Graphics & Design
                            </span>
                            {
                            showDropdown1 && (
                                <div className="dropdown-menu">
                                    <Link className="link menuLink" to="/">
                                        <div className="category-item">
                                            <img className="category-icon" src="path/to/image1.png" alt="Category 1"/>
                                            <span className="category-name">Category 1</span>
                                        </div>
                                    </Link>
                                    {/* Add more links for dropdown 1 */}
                                    {" "} </div>
                            )
                        }
                            {" "} </div>
                        <div className="dropdown">
                            <span className="dropdown-toggle"
                                onMouseEnter={toggleDropdown2}
                                onMouseLeave={toggleDropdown2}>
                                Video & Animation
                            </span>
                            {
                            showDropdown2 && (
                                <div className="dropdown-menu">
                                    <Link className="link menuLink" to="/">
                                        <div className="category-item">
                                            <img className="category-icon" src="path/to/image1.png" alt="Category 1"/>
                                            <span className="category-name">Category 1</span>
                                        </div>
                                        </Link>
                                    {/* Add more links for dropdown 2 */}
                                    {" "} </div>
                            )
                        }
                            {" "} </div>
                        <div className="dropdown">
                            <span className="dropdown-toggle"
                                onMouseEnter={toggleDropdown2}
                                onMouseLeave={toggleDropdown2}>
                                Video & Animation
                            </span>
                            {
                            showDropdown2 && (
                                <div className="dropdown-menu">
                                    <Link className="link menuLink" to="/">
                                        <div className="category-item">
                                            <img className="category-icon" src="path/to/image1.png" alt="Category 1"/>
                                            <span className="category-name">Category 1</span>
                                        </div>
                                        </Link>
                                    {/* Add more links for dropdown 2 */}
                                    {" "} </div>
                            )
                        }
                            {" "} </div>
                        <div className="dropdown">
                            <span className="dropdown-toggle"
                                onMouseEnter={toggleDropdown2}
                                onMouseLeave={toggleDropdown2}>
                                Video & Animation
                            </span>
                            {
                            showDropdown2 && (
                                <div className="dropdown-menu">
                                    <Link className="link menuLink" to="/">
                                        <div className="category-item">
                                            <img className="category-icon" src="path/to/image1.png" alt="Category 1"/>
                                            <span className="category-name">Category 1</span>
                                        </div>
                                        </Link>
                                    {/* Add more links for dropdown 2 */}
                                    {" "} </div>
                            )
                        }
                            {" "} </div>
                        <div className="dropdown">
                            <span className="dropdown-toggle"
                                onMouseEnter={toggleDropdown2}
                                onMouseLeave={toggleDropdown2}>
                                Video & Animation
                            </span>
                            {
                            showDropdown2 && (
                                <div className="dropdown-menu">
                                    <Link className="link menuLink" to="/">
                                        <div className="category-item">
                                            <img className="category-icon" src="path/to/image1.png" alt="Category 1"/>
                                            <span className="category-name">Category 1</span>
                                        </div>
                                        </Link>
                                    {/* Add more links for dropdown 2 */}
                                    {" "} </div>
                            )
                        }
                            {" "} </div>
                        <div className="dropdown">
                            <span className="dropdown-toggle"
                                onMouseEnter={toggleDropdown2}
                                onMouseLeave={toggleDropdown2}>
                                Video & Animation
                            </span>
                            {
                            showDropdown2 && (
                                <div className="dropdown-menu">
                                    <Link className="link menuLink" to="/">
                                        <div className="category-item">
                                            <img className="category-icon" src="path/to/image1.png" alt="Category 1"/>
                                            <span className="category-name">Category 1</span>
                                        </div>
                                        </Link>
                                    {/* Add more links for dropdown 2 */}
                                    {" "} </div>
                            )
                        }
                            {" "} </div>
                        {/* Add more dropdown menus here */}
                        {" "} </div>
                    <hr/>
                </>
            )
        }
            {" "} </div>
    );
}

export default Navbar;

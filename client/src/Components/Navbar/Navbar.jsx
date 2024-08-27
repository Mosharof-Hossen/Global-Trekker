import { NavLink } from "react-router-dom";
import "./Navbar.css"
import defaultUser from "../../assets/user.png"
const Navbar = () => {
    const links = <>
        <NavLink className={"hover:bg-primary-c hover:text-white rounded font-semibold"} to={"/"}><li><a>Home</a></li></NavLink>
        <NavLink className={"hover:bg-primary-c hover:text-white rounded font-semibold"} to={"/spots"}><li><a>Spots</a></li></NavLink>
        <NavLink className={"hover:bg-primary-c hover:text-white rounded font-semibold"} to={"/add-tourists-spot"}><li><a>Add Tourists Spot</a></li></NavLink>
        <NavLink className={"hover:bg-primary-c hover:text-white rounded font-semibold"} to={"/my-lists"}><li><a>My List</a></li></NavLink>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold"><span className="text-primary-c">GO</span>Travel</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <div className="avatar ">
                    <div className="w-10 rounded-full">
                        <img src={defaultUser} />
                    </div>
                </div>
                <a className=" px-3 py-2 rounded bg-primary-c text-white">LogIn</a>
            </div>
        </div>
    );
};

export default Navbar;
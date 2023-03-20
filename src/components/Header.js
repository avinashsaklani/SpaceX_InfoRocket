import { useState } from "react"
import { Link } from "react-router-dom"
import { SiSpacex } from "react-icons/si"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <header className="absolute flex items-center justify-between px-5 w-full">
                <div onClick={() => setIsOpen(false)}>
                    <Link to="/">
                        <SiSpacex className="text-8xl text-white" />
                    </Link>
                </div>

                <nav className={`${isOpen ? "open" : ""}`}>
                    <ul>
                        <li onClick={() => setIsOpen(!isOpen)}>
                            <Link to="/capsules" className="text-white ">
                                Capsules
                            </Link>
                        </li>
                        <li onClick={() => setIsOpen(!isOpen)}>
                            <Link to="/cores" className="text-white ">
                                Cores
                            </Link>
                        </li>
                        <li onClick={() => setIsOpen(!isOpen)}>
                            <Link to="/crew" className="text-white ">
                                Crew
                            </Link>
                        </li>
                        <li onClick={() => setIsOpen(!isOpen)}>
                            <Link to="/dragons" className="text-white ">
                                Dragons
                            </Link>
                        </li>
                        <li onClick={() => setIsOpen(!isOpen)}>
                            <Link to="/landpads" className="text-white ">
                                Landpads
                            </Link>
                        </li>
                        <li onClick={() => setIsOpen(!isOpen)}>
                            <Link to="/launches" className="text-white ">
                                Launches
                            </Link>
                        </li>
                        <li onClick={() => setIsOpen(!isOpen)}>
                            <Link to="/launchpads" className="text-white ">
                                Launchpads
                            </Link>
                        </li>
                        <li onClick={() => setIsOpen(!isOpen)}>
                            <Link to="/payloads" className="text-white ">
                                Payloads
                            </Link>
                        </li>
                        <li onClick={() => setIsOpen(!isOpen)}>
                            <Link to="/roadster" className="text-white ">
                                Roadster
                            </Link>
                        </li>
                        <li onClick={() => setIsOpen(!isOpen)}>
                            <Link to="/rockets" className="text-white ">
                                Rockets
                            </Link>
                        </li>
                        <li onClick={() => setIsOpen(!isOpen)}>
                            <Link to="/ships" className="text-white ">
                                Ships
                            </Link>
                        </li>
                        <li onClick={() => setIsOpen(!isOpen)}>
                            <Link to="/starlink" className="text-white ">
                                Starlink
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white text-sm uppercase tracking-wider"
                    >
                        {isOpen ? "Close" : "Menu"}
                    </button>
                </div>
            </header>
        </>
    )
}
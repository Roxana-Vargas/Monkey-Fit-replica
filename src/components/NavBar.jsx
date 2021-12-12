import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faUsers, faBlog} from '@fortawesome/free-solid-svg-icons'
import { faBuilding} from '@fortawesome/free-regular-svg-icons'
import "./navBar.css"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light">
            <button className="btn navbar-toggler border-3 px-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offCanvasNav" aria-controls="offCanvasNav">
                <span className='navbar-toggle-icon'>☰</span>
            </button>
            <div className="offcanvas  offcanvas-start-sm" tabindex="-1" id="offCanvasNav" aria-labelledby="offCanvasNavLabel">
                <div className="offcanvas-header d-flex justify-content-end d-sm-none">
                    <button className="btn text-reset p-0" data-bs-dismiss="offcanvas" aria-label="close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFFFFF" className="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                </div>
                <div className="offcanvas-body p-sm-0">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#empresas"><FontAwesomeIcon icon={faBuilding} className='link-icon' />  Para empresas</a></li>
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#empleados"><FontAwesomeIcon icon={faUsers} className='link-icon' />  Para empleados</a></li>
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#blog"><FontAwesomeIcon icon={faBlog} className='link-icon' />  Blog</a></li>
                        <li className="nav-item"><a className="nav-link login-offcanvas active" aria-current="page" href="#iniciar-sesión">Iniciar sesión</a></li>
                        <li className="nav-item"><a className="nav-link register active" aria-current="page" href="#crear-cuenta"><FontAwesomeIcon icon={faUserPlus} className='link-icon' /> Crear cuenta</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar

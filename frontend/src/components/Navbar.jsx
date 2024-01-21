import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand mx-5" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav mx-5">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="signin">Sign In</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="signup">Sign Up</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    )
}

export default Navbar
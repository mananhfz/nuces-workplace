import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary">
                <div className="btn-group" role="group" aria-label="Button group with dropdown menu">
                        <button type="button" className="btn btn-success">Success</button>
                        <div className="btn-group" role="group">
                            <button id="btnDrop3" type="button" className="btn btn-success dropdown-toggle" aria-haspopup="true" aria-expanded="false"></button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="https://devexpress.github.io/bootstrap-themes/">Dropdown Item</a>
                                <a className="dropdown-item" href="https://devexpress.github.io/bootstrap-themes/">Dropdown Item</a>
                                <a className="dropdown-item" href="https://devexpress.github.io/bootstrap-themes/">Dropdown Item</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar

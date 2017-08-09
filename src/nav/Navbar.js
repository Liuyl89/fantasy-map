import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { getUnhandledProps } from '../lib'

const BrandLink = (props) => {
    return (<Link className="navbar-brand" to={props.to}>{props.children}</Link>)
}

const NavItem = (props) => {
    return (<li><Link to={props.to}>{props.children}</Link></li>)
}
class Navbar extends React.Component {
    static propTypes = {
        fixed: PropTypes.string,
        fluid: PropTypes.bool,
        brand: PropTypes.node,
        left: PropTypes.node,
        right: PropTypes.node,
    }
    static defaultProps = {
        fluid: true,
        fixed: '',
    }

    componentDidMount() {
        $('.collapse').collapse({ toggle: false })
    }

    render() {
        let navbarClassName = 'navbar navbar-default navbar-inverse'
        let containerClassName = 'container'
        if (this.props.fixed === 'top') {
            navbarClassName += 'navbar-fixed-top '
        }
        if (this.props.fluid) {
            containerClassName = 'container-fluid '
        }
        const rest = getUnhandledProps(Navbar, this.props)
        return (
            <nav className={navbarClassName} {...rest} >
                <div className={containerClassName}>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        {this.props.brand}
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-collapse">
                        <ul className="nav navbar-nav">
                            {this.props.left || ''}
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            {this.props.right || ''}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
export {
    BrandLink,
    NavItem,
}

import React from 'react'
import { LayoutNLC } from 'fantasy-ui-react/Layout'
import { Navbar, BrandLink, NavItem } from 'fantasy-ui-react/Nav'

const navbarHeight = 63
const styles = {
    navbar: {
        height: '63px',
        paddingTop: '5px',
    },
}
const brandLink = (<BrandLink to="/">Fantasy UI React</BrandLink>)
const left = [
    <NavItem key="0" to="/introduction">INTRODUCTION</NavItem>,
    <NavItem key="2" to="/documentation">DOCUMENTATION</NavItem>,
    <NavItem key="3" to="/examples">EXAMPLES</NavItem>,
]
const navbar = (<Navbar style={styles.navbar} brand={brandLink} left={left} fluid={true}/>)
class Layout extends React.Component {
    render() {
        return (
            <LayoutNLC navbarHeight={navbarHeight}
                navbar={navbar}
                leftbar={<div >leftbar</div>}
                center={<div >center</div>}
            />
        )
    }
}
export default Layout

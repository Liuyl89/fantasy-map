import React from 'react'
import { Layout as LayoutUI } from 'fantasy-skeleton-lib'
import { Nav } from 'fantasy-skeleton-lib'

const { Navbar, BrandLink, NavItem } = Nav
const { LayoutNLC } = LayoutUI
const navbarHeight = 63
const styles = {
    navbar: {
        height: '63px',
        paddingTop: '5px',
    },
}
const brandLink = (<BrandLink to="/">Fantasy Skeleton Lib</BrandLink>)
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

import React from 'react'
import PropTypes from 'prop-types'
import LayoutItem from './LayoutItem'

const layout = [
    [
        { i: 'navbar', col: { xs: 12 } },
    ],
    [
        { i: 'leftbar', col: { xs: 12, sm: 3, lg: 2 } },
        { i: 'center', col: { xs: 12, sm: 9, lg: 10 } },
    ],
]


class LayoutNLC extends React.Component {
    constructor(props) {
        super(props)
        this.styles = {
            navbar: {
                height: `${this.props.navbarHeight}px`,
            },
            leftbar: {
            },
            center: {
            },
        }
    }

    render() {
        const rows = _.map(layout, (row, i) => {
            const cols = _.map(row, (col) => {
                return (
                    <LayoutItem key={col.i} col={col.col} style={this.styles[col.i]}>
                        {this.props[col.i]}
                    </LayoutItem>
                )
            })
            return (<div className="row" key={i}><div className="row-wrap">{cols}</div></div>)
        })
        return (
            <div className="container-fluid layout-nlc">
                {rows}
            </div>
        )
    }
}
LayoutNLC.propTypes = {
    navbarHeight: PropTypes.number,
    navbar: PropTypes.node,
    leftbar: PropTypes.node,
    center: PropTypes.node,
}
LayoutNLC.defaultProps = {
    navbarHeight: 63,
}
export default LayoutNLC

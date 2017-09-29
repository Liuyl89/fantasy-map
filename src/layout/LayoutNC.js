import React from 'react'
import PropTypes from 'prop-types'
import LayoutItem from './LayoutItem'

const layout = [
    [
        { i: 'navbar', col: { xs: 12 } },
    ],
    [
        { i: 'center', col: { xs: 12 } },
    ],
]


class LayoutNC extends React.Component {
    constructor(props) {
        super(props)
        this.styles = {
            navbar: {},
            leftbar: {},
            center: {},
        }
    }

    render() {
        let containerClassName = 'container'
        if (this.props.fluid) {
            containerClassName = 'container-fluid '
        }
        const rows = _.map(layout, (row, i) => {
            const cols = _.map(row, (col) => {
                return (
                    <LayoutItem key={col.i} col={col.col} style={this.styles[col.i]}>
                        {this.props[col.i]}
                    </LayoutItem>
                )
            })
            return (<div className="row" key={i}>
                <div className="row-wrap">{cols}</div>
            </div>)
        })
        return (
            <div className={`"${containerClassName} layout-nlc"`}>
                {rows}
            </div>
        )
    }
}
LayoutNC.propTypes = {
    fluid: PropTypes.bool,
    navbarHeight: PropTypes.number,
    navbar: PropTypes.node,
    center: PropTypes.node,
}
LayoutNC.defaultProps = {
    fluid: false,
    navbarHeight: 63,
}
export default LayoutNC

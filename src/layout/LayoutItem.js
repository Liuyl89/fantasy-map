import React from 'react'
import PropTypes from 'prop-types'
import { getUnhandledProps } from '../lib'

class LayoutItem extends React.Component {
    static propTypes = {
        col: PropTypes.object,
    }
    static defaultProps = {
        col: {},
    }

    render() {
        const className = _.reduce(this.props.col, (s, v, k) => {
            return `${s} col-${k}-${v}`
        }, '')
        const rest = getUnhandledProps(LayoutItem, this.props)
        return (
            <div className={`${className} layout-item`} {...rest}>
                {this.props.children}
            </div>
        )
    }
}
export default LayoutItem

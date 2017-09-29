import React from 'react'
import PropTypes from 'prop-types'
import { getUnhandledProps } from '../lib'

class BootstrapTreeview extends React.Component {
    static propTypes = {
        children: PropTypes.array,
    }
    static defaultProps = {
        children: [],
    }

    componentDidMount() {
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default BootstrapTreeview

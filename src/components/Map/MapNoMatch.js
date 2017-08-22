import React from 'react'
import PropTypes from 'prop-types'

class MapNoMatch extends React.Component {
    static propTypes = {
        children: PropTypes.array,
    }
    static defaultProps = {}

    render() {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <p>当前运行环境下未找到匹配的Map组件</p>
            </div>
        )
    }
}
export default MapNoMatch

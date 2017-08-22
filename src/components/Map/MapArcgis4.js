import React from 'react'
import PropTypes from 'prop-types'

class MapArcgis4 extends React.Component {
    static propTypes = {
        children: PropTypes.array,
        layers: PropTypes.array,
        basemap: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object,
        ]),
    }
    static defaultProps = {
        basemap: null,
        layers: [],
    }

    componentDidMount() {
        window.require(['esri/Map', 'esri/views/MapView'], (EsriMap, MapView) => {
            this.map = new EsriMap({
                basemap: this.props.basemap,
                layers: this.props.layers,
            })

            this.view = new MapView({
                container: this.dom,
                map: this.map,
                extent: this.props.extent,
            })
            this.view.on('click', (event) => {
                console.log(`${event.mapPoint.x},${event.mapPoint.y}`)
            })
        })
    }

    render() {
        return (
            <div style={{ width: '100%', height: '100%' }}
                ref={(dom) => {
                    this.dom = dom
                }}
            />
        )
    }
}
export default MapArcgis4

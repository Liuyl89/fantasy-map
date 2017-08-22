import * as platformDetect from '../../lib/platformDetect'
import BasemapArcgis4 from './BasemapArcgis4'

class Basemap {
    create(props) {
        if (platformDetect.isArcgis4()) {
            return new BasemapArcgis4(props)
        }
        return null
    }
}
export default Basemap

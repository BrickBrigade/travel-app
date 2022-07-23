import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

export default function makeMap(lat, lon){
	new Map({
		view: new View({ center:fromLonLat([lon, lat]),zoom:10 }),
		target: 'map',
		layers: [
			new TileLayer({ source: new OSM() })
		]
	});
}

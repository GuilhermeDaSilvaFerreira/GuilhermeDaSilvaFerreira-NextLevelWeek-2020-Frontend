import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanages-map.css';

import mapMarkerImg from '../images/map-marker.svg';

let OrphanagesMap = () => {
	return (
		<div id="page-map">
			<aside>
				<header>
					<img src={mapMarkerImg} alt="Logo da Happy"/>

					<h2>Escolha um orfanato no mapa</h2>
					<p>Mutas crianças estão sperando a sua visita!</p>
				</header>

				<footer>
					<strong>Minas Gerais</strong>
					<span>Contagem</span>
				</footer>
			</aside>

			<MapContainer center={[-19.9643773,-44.0501734]} zoom={15} style={{ width: '100%', height: '100%'}}>
				{/*TileLayer utilizando o Open Street Map*/}
				{/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}

				{/*TileLayer utilizando o Map Box (mais opções de estilização do mapa)*/}
				<TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`} />
			</MapContainer>

			<Link to="" className="create-orphanage">
				<FiPlus size={32} color="#FFF" />
			</Link>
		</div>
	);
};

export default OrphanagesMap;
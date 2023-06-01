function Card({ datos }) {


	return <>
		<div className="card-cadrdatos">
			<p>Nombre: {datos.nombre}</p>
			<p>Banda: {datos.band}</p>
			<p>Hobby: {datos.hobby}</p>
		</div>
	</>
}
export default Card;

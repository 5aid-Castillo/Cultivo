import React from 'react'
import '../styles/Reservar.scss';

const Reservar = () => {
  return (
      <>
        <section className="reservar">
        <h1>Reservaciones</h1>
        <h5>Reservaciones por el número de teléfono, redes sociales y por este medio.</h5>

        <div class="container">
	<div class="card">
		<div class="card-image">	
			<h2 class="card-heading">
			Haz tu reservación ahora
        <small>Cultivo te espera</small>
			</h2>
		</div>
		<form class="card-form">
			<div class="input">
				<input type="text" class="input-field"  required/>
				<label class="input-label">Nombre</label>
			</div>
						<div class="input">
				<input type="text" class="input-field"  required/>
				<label class="input-label">Correo</label>
			</div>
						<div class="input">
				<input type="date" class="input-field" required/>
				<label >Fecha de Reservacion</label>
			</div>
						<div class="input">
				<input type="time" class="input-field" required/>
				<label>Hora de Reservación</label>
			</div>
      <div class="input">
				<input type="number" min="1" class="input-field"  required/>
				<label class="input-label">Número de Personas:</label>
			</div>
      <div class="input">
				<input type="text" class="input-field"  required/>
				<label class="input-label">Número de Teléfono</label>
			</div>
			<div class="action">
				<button class="action-button">Reservar</button>
			</div>
		</form>
		
	</div>
</div>

        </section>
      </>
  )
}

export default Reservar
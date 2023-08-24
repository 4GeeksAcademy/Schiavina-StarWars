const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personaje: [{}],
			planeta:[{}],
			vehiculo:[{}],
			listaFavoritos:[],
			single1:[{}],
			singlePlaneta:[{}],
			singleVehicle:[{}],
		},


		actions: {
			

			obtenerPersonaje: ()=> {
				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(data => setStore({ personaje: data.results }))
					.catch(err => console.log(err));				
			},

			obtenerPlaneta: ()=> {
				fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())
					.then(data => setStore({ planeta: data.results }))
					.catch(err => console.log(err));				
			},
			obtenerVehiculo: ()=> {
				fetch("https://www.swapi.tech/api/vehicles")
					.then(response => response.json())
					.then(data => setStore({ vehiculo: data.results }))
					.catch(err => console.log(err));				
			},
			agregarFavorito: (nombreFavorito)=> {
				setStore({ listaFavoritos: getStore().listaFavoritos.concat(nombreFavorito) });
				
			},
			eliminarFavorito: (nombreFavorito)=> {
				const store = getStore();
				const nuevaLista = store.listaFavoritos.filter(item => item !== nombreFavorito);
				setStore({ listaFavoritos: nuevaLista });
			},

			singlePersonajeIndividual: (idPersonaje)=>{
				fetch("https://www.swapi.tech/api/people/"+ idPersonaje)
					.then(response => response.json())
					.then(data => setStore({ single1: data.result.properties }))
					.catch(err => console.log(err));
			},
			singlePlanetaIndividual: (idPlaneta)=>{
				fetch("https://www.swapi.tech/api/planets/"+ idPlaneta)
					.then(response => response.json())
					.then(data => setStore({ singlePlaneta: data.result.properties }))
					.catch(err => console.log(err));
					console.log(idPlaneta)

			},
			singleVehicleIndividual: (idVehicle) => {
				fetch("https://www.swapi.tech/api/vehicles/" + idVehicle)
				  .then(response => response.json())
				  .then(data => {
					const { properties } = data.result;
					setStore({ singleVehicle: properties });
				  })
				  .catch(err => console.log(err));
			  },
			  login: (userEmail, userPassword) => {
				fetch("https://literate-couscous-66765j679jv256pp-3000.app.github.dev/login", {
					method: 'POST',
					body: JSON.stringify({email:userEmail, password:userPassword}),
					headers:{ 'Content-Type':'application/json'
				}
				})
				  .then(response => response.json())
				  .then(data => console.log(data))
				  .catch((error) => console.log(error));
			  },
			  register: (userEmail, userPassword, userName) => {
				fetch("https://literate-couscous-66765j679jv256pp-3000.app.github.dev/usuario", {
					method: 'POST',
					body: JSON.stringify({name:userName, email:userEmail, password:userPassword}),
					headers:{ 'Content-Type':'application/json'
				}
				})
				  .then(response => response.json())
				  .then(data => console.log(data))
				  .catch((error) => console.log(error));
			  },

		}
	};
};

export default getState;

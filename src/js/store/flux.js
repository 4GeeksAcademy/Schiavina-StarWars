const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personaje: [{}],
			planeta:[{}],
			vehiculo:[{}],
			listaFavoritos:[],
			single1:[{}]
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
					console.log(idPersonaje)

			}

		}
	};
};

export default getState;

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
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

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

			// personajeSingle:(id)=> {
			// 	fetch({"https://www.swapi.tech/api/people/"+id})
			// 					  .then(response => response.json())
			// 					  .then(data => setStore({ personaje: data.results }))
			// 					  .catch(err => console.log(err));

		}
	};
};

export default getState;

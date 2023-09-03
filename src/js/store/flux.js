
const API_BASE_URL = "https://literate-couscous-66765j679jv256pp-3000.app.github.dev";

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
			isLogged: false,
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
			agregarFavorito: (nombreFavorito) => {
				const store = getStore();
				if (!store.listaFavoritos.includes(nombreFavorito)) {
				  setStore({ listaFavoritos: store.listaFavoritos.concat(nombreFavorito) });
				}
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
			  login: async (userEmail, userPassword) => {
				try {
				  const response = await fetch(API_BASE_URL + "/login", {
					method: 'POST',
					body: JSON.stringify({ email: userEmail, password: userPassword }),
					headers: { 'Content-Type': 'application/json' }
				  });
			  
				  if (!response.ok) {
					throw new Error('Error de inicio de sesión'); // Puedes personalizar este mensaje de error
				  }
			  
				  const data = await response.json();
			  
				  localStorage.setItem('token', data.access_token);
				  localStorage.setItem('user', userEmail);
				  setStore({ isLogged: true });
				} catch (error) {
				  console.log(error);
				}
			  },

			logout: () => {
				console.log("logout en flux activado")
				// let token = localStorage.getItem(token)
				// if (token === null) return false
				// console.log(token)
				localStorage.removeItem("token")
				localStorage.removeItem("user")
				// const store = getStore();
				setStore({isLogged: false});
			},

			  register: (userEmail, userPassword, userName) => {
				fetch(API_BASE_URL+"/usuario", {
					method: 'POST',
					body: JSON.stringify({name:userName, email:userEmail, password:userPassword}),
					headers:{ 'Content-Type':'application/json'
				}
				})
				.then(response => {
					if (!response.ok) {
					  throw new Error('Error en el registro');
					}
					return response.json();
				  })
				  .then(data => {
					console.log(data); 
				  })
				  .catch((error) => {
					console.log(error);
					alert(error.message); 
				  });
			  },

		}
	};
};

export default getState;

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			naves: [],
			readText: 'inicial',
			favoritos: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeText: (nombre) => {
				console.log('voy a cambiar texto desde flux')
				// readText =  'actualizado'
				setStore({ readText: nombre });
				const store = getStore();
				if(store.favoritos.includes(nombre)){
					console.log('ya esta se debe eliminar')
					setStore({ favoritos: store.favoritos.filter( (item)=> item != nombre ) });
				}else{
					console.log('no esta se debe agregar')
					setStore({ favoritos: [...store.favoritos, nombre] });
				}
				// favoritos = ['el 3']
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				console.log('esta listo desde FLUX')
				fetch('https://swapi.dev/api/starships')
				.then( (response)=> response.json() )
				.then( (data)=> setStore({ naves: data.results }) )
				
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
			}
		}
	};
};

export default getState;

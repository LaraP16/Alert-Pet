import { useState } from 'react';
import './App.css';
import CadastrarAnimal from './components/CadastrarAnimal';
import Filtrar from './components/Filtrar';
import Listagem from './components/Listagem';
 
function App() {
  const [listaAnimais, setListaAnimais] = useState([
    { id: 1, fotoUrl: "data:image/jpeg;base64,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",
     raca: "Boxer",nome:"Sasha" ,local: "Praça", tipo: "Perdido" },
    { id: 2, fotoUrl: "https://catracalivre.com.br/cdn-cgi/image/f=auto,q=60,w=700,h=1680,fit=scale-down/wp-content/uploads/2015/06/2004_08_13_Koko_Has_The_Blues-L.jpg", 
      raca: "Siamês", nome:"Encrenca",local: "Mercado xxxx", tipo: "Resgatado" },
    { id: 3, fotoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG9abqmkIbt1LGonbE87fu2jFcmUE79l0gxg&usqp=CAU",
     raca: "Golden",nome:"Caramelo" ,local: "Bairro xxxx", tipo: "Resgatado" },
    { id: 4, fotoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0YY9NyMRShd9iwYjJipZ9dXGG_V6DynmnsmblHsdD1LRL9m4KURMIJ9CaG_R6FuWekzc&usqp=CAU", 
      raca: "Preto", nome:"Mouser",local: "Cidade xxxx Bairro xxxx", tipo: "Perdido" },
  ]);
 
  const addAnimal = (animalInfo) => {
    const newListaAnimais = [...listaAnimais, { id: Math.floor(Math.random() * 1000000), ...animalInfo }];
    setListaAnimais(newListaAnimais);
  };
 
  const alterarStatusAnimal = (id) => {
    const newListaAnimais = listaAnimais.map(animal => {
      if (animal.id === id) {
        return {...animal, tipo: animal.tipo === "Perdido" ? "Resgatado" : "Perdido" };
      }
      return animal;
    });
    setListaAnimais(newListaAnimais);
  };
 
  const removerAnimal = (id) => {
    const newListaAnimais = listaAnimais.filter(animal => animal.id !== id);
    setListaAnimais(newListaAnimais);
  };
 
  const [search, setSearch] = useState('');
  const [filtro, setFiltro] = useState('Todos');
  const [ordem, setOrdem] = useState('');
 
  return (
<>
<div className="app">
<h1 className="alerta">Alerta Pet</h1>
<CadastrarAnimal addAnimal={addAnimal}  />
<Filtrar
          search={search}
          setSearch={setSearch}
          filtro={filtro}
          setFiltro={setFiltro}
          setOrdem={setOrdem}
        />
        {listaAnimais
          .filter(animal => {
            if (filtro === "Concluido") {
              return animal.tipo === "Resgatado"; 
            } else if (filtro === "Pendente") {
              return animal.tipo === "Perdido";
            } else {
              return  "Nome: ",animal;
            }
          })
          .filter(animal => animal.raca.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => {
            if (ordem === "Crescente") {
              return a.raca.localeCompare(b.raca);
            } else if (ordem === "Decrescente") {
              return b.raca.localeCompare(a.raca);
            } else {
              return false;
            }
          })
          .map((animal) => (
<Listagem
              key={animal.id}
              animal={animal}
              alterarStatusAnimal={alterarStatusAnimal}
              removerAnimal={removerAnimal}
            />
          ))}
</div>
</>
  );
}
 
export default App;
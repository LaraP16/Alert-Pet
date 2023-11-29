import React from 'react';
 
function Listagem({ animal, alterarStatusAnimal, removerAnimal }) {
  return (
<>
<div className="tarefa">
<img src={animal.fotoUrl} className="imagem" alt={animal.raca} style={{ width: '100px', height: '100px' }} />
<h3>{animal.raca} {animal.nome}</h3>
<p>{`Local: ${animal.local}, Status: ${animal.tipo}`}</p>
<div>
<button className="alt_status" onClick={() => alterarStatusAnimal(animal.id)}>Alterar Status</button>
<button className="remover" onClick={() => removerAnimal(animal.id)}>Remover</button>
</div>
</div>
</>
  );
}
 
export default Listagem;
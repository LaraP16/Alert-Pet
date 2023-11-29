import React, { useState } from "react";
 
function CadastrarAnimal({ addAnimal }) {
  const [fotoUrl, setFotoUrl] = useState('');
  const [raca, setRaca] = useState('');
  const [nome, setNome] = useState('');
  const [local, setLocal] = useState('');
  const [tipo, setTipo] = useState('');

 
  const cadastrar = () => {
    if (fotoUrl === '' || raca === '' || nome === '' || local === '' || tipo === '') return;
 
    addAnimal({ fotoUrl, raca, nome, local, tipo });

    setFotoUrl('');
    setRaca('');
    setNome('');
    setLocal('');
    setTipo('');

      if (descricao == ' ') return;

      addTarefa(descricao);

      setDescricao(' ');
  
  };
 
  return (
<>
<h2>Cadastrar Animal</h2>
<div className="cadastrar">

  <span class="material-symbols-outlined">pets</span>

<input className="foto" type="text" onChange={(e) => setFotoUrl(e.target.value)} placeholder="URL da Foto" />
<input className="raca" type="text" onChange={(e) => setRaca(e.target.value)} placeholder="Raça"/>
<input className="nome" type="text" onChange={(e) => setNome(e.target.value)} placeholder="Nome"/>
<input className="local" type="text" onChange={(e) => setLocal(e.target.value)} placeholder="Local" />
<input className="status" type="text" onChange={(e) => setTipo(e.target.value)} placeholder="Status (Perdido/Resgatado)" />
<button className="alt_statuss" onClick={cadastrar}>Cadastrar</button>
</div>
</>
  );
}
 
export default CadastrarAnimal;
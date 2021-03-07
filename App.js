import React from 'react';
import  CardNota  from './components/CardNota';
import { FormularioCadastro } from './components/FormularioCadastro';
import ListaDeNotas from "./components/ListaDeNotas"
function App() {
  return (
    <section>
    <FormularioCadastro/>
    <ListaDeNotas/>
    <CardNota/>
    </section>
  );
}

export default App;

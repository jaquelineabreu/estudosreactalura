import React, { Component } from 'react';
import  CardNota  from './components/CardNota';
import { FormularioCadastro } from './components/FormularioCadastro';
import ListaDeNotas from "./components/ListaDeNotas"
class App extends Component {
  render(){
    return (
      <section>
      <FormularioCadastro/>
      <ListaDeNotas/>
      <CardNota/>
      </section>
    );
  }
  
}

export default App;

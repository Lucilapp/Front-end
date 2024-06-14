import './App.css';
import Title from './Components/Title/Index';
import Button from './Components/Button/Index';
import Buscador from './Components/Buscador/Index';
import Card from './Components/Card/Index';

function App() {
  const arrayCategorias = [
    {
      name: "App",
      pendientes: 3,
      tiempo: 1
    },
    {
      name: "Web",
      pendientes: 1,
      tiempo: 23
    },
    {
      name: "Turnos",
      pendientes: 2,
      tiempo: 10
    },
    {
      name: "Instagram",
      pendientes: 3,
      tiempo: 5
    },
    {
      name: "Gobierno de la ciudad",
      pendientes: 13,
      tiempo: 5
    }
  ]
  const arrayFiltros = ["Instagram", "App", "turnos medicos", "Instalar apps"]
  const tarea = {
    nombreTarea: "Instalar instagram",
    descTarea: "quiero instalar instagram y crearme una cuenta para que me sigan todos mis familiares",
    infoAsistido: {
      NombreAsistido: "raul",
      EdadAsistido: 87,
      GeneroAsistido: "Masculino"
    }
  }
  return (
    <div className="App">
      <div className="frame">
        <div className='Buscador'>
          <Buscador></Buscador>
        </div>
          <Card TitleText={arrayCategorias[1].name} ParaPendientes={arrayCategorias[1].pendientes} ParaTiempo={arrayCategorias[1].tiempo} width="22.5rem" height="77px"/>
          <Card TitleText={arrayCategorias[3].name} ParaPendientes={arrayCategorias[3].pendientes} ParaTiempo={arrayCategorias[3].tiempo} width="22.5rem" height="77px"/>
      </div>
    </div>
  );
}

export default App;

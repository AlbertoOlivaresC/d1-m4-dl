import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <div className="container">
        <Header
          className="text-primary text-center"
          texto="Galeria de Imágenes con React"
        ></Header>
        <Card
          direccion="https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          titulo="Elefante"
          descripcion="Elefante paseando con su hijo"
        ></Card>
        <Card
          direccion="https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          titulo="Ardilla"
          descripcion="Ardilla comiendo en el bosque"
        ></Card>
        <Card
          direccion="https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          titulo="Gato"
          descripcion="Una camada de gatos"
        ></Card>
        <Card
          direccion="https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          titulo="Tigre"
          descripcion="Tigre mirando a su presa"
        ></Card> 
        <Footer></Footer>
      </div>
    </>
  );
};

export default App;

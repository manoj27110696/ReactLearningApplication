import React from 'react';
import './App.css';
import DishType from './Interfaces/Dish';
import FoodProps from './Interfaces/FoodProps';
import restaurant from './restaurant.jpg';

const Dish=(id:number,title: string) =>{
  const Id= id;
  const Title= title;
  return {Id,Title};
}

const Header=(props:any) => {
  return(
    <header>
    <h1>{props.name} Kitchen</h1>
    </header>
  );
}

const Main=(props:FoodProps)=> {
  return(
    <section>
    <p>We serve the most {props.adjective} food</p>
    <img 
    src={restaurant} 
    height={200} 
    alt="napkin and silverware at a restaurant table"
    />
    <ul style={{textAlign:"left"}}>
      {props.dishes.map((dish:DishType) =><li key={dish.Id}>{dish.Title}</li> )}
    </ul>
    
    </section>
  );
}

const Footer=(props:any) =>{
 return (
   <footer>
     <p>&copy; {props.year}</p>
   </footer>
 )
}

function App() {
  return (
    <div className="App">
      <Header name="Cindy"/>
      <Main adjective="Amazing" dishes={dishes}/>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}


const dishesArray=[
  "Macroni and Cheese",
  "Chicken Parmesan",
  "Chicken and Waffles",
  "Chicken and Bacon",
  "Chicken and Spinach",
]

const dishes= dishesArray.map((dish:string, i:number) => (Dish(i,dish)))



export default App;

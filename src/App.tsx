import './App.css'

function App(){

  const fullName: string = "Coding Temple"
  const year: number = 2024
  const isThisBootCampFun: boolean = true; 
  const fruits: string[] = ['Banana','Apple','Orange']
  
  type Person = {
    name: string;
    age: number;
  };

  const person1: Person = {
    name: "Alex",
    age: 26,
  };

  //Render the typed data to the screen
  return (
    <div>
      <p>Full Name: {fullName}</p>
      <p>Year: {year}</p>
      <p>Is this Bootcamp fun: {isThisBootCampFun ? 'Yes' : 'No'}</p>
      <p>name: {person1.name}</p>
      <p>age: {person1.age}</p>

      <p>Fruit 1: {fruits[0]}</p>
      <p>Fruit 2: {fruits[1]}</p>
      <p>Fruit 3: {fruits[2]}</p>
    </div>
  );
}


export default App
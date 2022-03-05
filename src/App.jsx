
import './App.css';
import ShowData from './components/ShowData';

function App() {
  let data = [{heading:"Mobile Oporeating System",items:['Android','Blackberry','iphone','Windows Phone']},
  {heading:"Mobile Menufacturers",items:['Samsung','HTC','iphone','Micromax','Apple']}]
  return (
    <div className="App">

        {data.map((e)=>(
           <ShowData heading={e.heading} list={e.items} />
        ))}
       
          
    </div>
  );
}




export default App;

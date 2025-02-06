
import './App.css'
import Card from './Components/Cards'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <h1>List of Products:</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ea animi libero debitis cumque ad sunt dicta doloribus ipsam velit dolore nisi maiores neque unde numquam! Asperiores maiores sed quos!</p>
    {/* <Cards/> */}
    <div style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
    <Card />
    </div>
    </>
  )
}

export default App

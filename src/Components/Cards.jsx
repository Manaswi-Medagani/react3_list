// import {products} from "..Data/Products";
import { products } from "../Data/Products"; 

// function Cards ( ){
//     const Cardsstyle={
//             height: "fit-content",
//             display:"flex",
//             flexDirection:"coloumn",
//             padding:"1 rem 1rem 2rem",
//             background: "# f8f3e8",
//             boxshadow:"0 0 40px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0.2)",
//             borderRadius: "3px"
            
//     }
//     // const cardsContainer={}
//     function MappingProducts({value, index}){
        
//     return(
//         <>
//         <div styles={Cardsstyle}>
//             <div>
//                 <img src={value.img}/>
//             </div>
//             <div>
//             <h1>{value.title}</h1>
//             <p>{value.description}</p>
//             <strong>{value.price}</strong>
//             <p>Category:{value.category}</p>

//          </div>
//          </div>
//         </>
//     )
//     }
//     // return(
//     //     <>
//     //     <h1>This is card section</h1>
//     //     <div style={cardsContainer}>
//     //     {products.map(mappingProducts)}
//     //     </div>
//     //     </>
//     // )
//     export default Cards


function Card(){
    return (
        <>
        {products.map((e)=>{
            return (
            
                <div style={{border:'2px solid blue' }} key={e.id}>
                    <b>{e.id}</b>
                    <img src={e.image} style={{width:"200px" ,height:"300px"}} alt="" />
                    <p style={{width:"200px",overflow:"hidden",height:"200px",overflowY:"auto"}}>{e.description}</p>
                </div>
               
                
            )
        })}
        </>
    )

}
export default Card

import './comp.css'
 

const Jobs = ({infoJobs}) => {
      

    const {  imgUrl, tittle, comment, paragraph} = infoJobs

   

    return (

    
        <div className="productCard">
        <h2>hola</h2>
        <img src={imgUrl} width="150px" alt="" />
        <h3>{tittle}</h3>
        <p>{comment}</p>
        <p>{paragraph}</p>
        {/* Here on the function addtocart I´m sending data, and I have to use arrouw function otherwise it will run on the page load.  */}
        {/* context.addToCart(_id) */}
        {/* <button disabled={stock>0? false : true} onClick={()=>dispatch({type:'ADD', payload: item})}>Agregar al carrito</button> */}
        
        </div>
        
    
    )
}

export default Jobs
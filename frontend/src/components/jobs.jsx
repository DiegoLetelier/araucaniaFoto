
import './comp.css'
 

const Jobs = ({infoJobs}) => {
      

    const {  imgUrl, title, comment, paragraph} = infoJobs

   

    return (

    
        <div className="jobCard">
        
        <img src={imgUrl} width="350px" alt="" />
        <h2>{title}</h2>
        <p>{comment}</p>
        <p>{paragraph}</p>
        {/* Here on the function addtocart I´m sending data, and I have to use arrouw function otherwise it will run on the page load.  */}
        {/* context.addToCart(_id) */}
        {/* <button disabled={stock>0? false : true} onClick={()=>dispatch({type:'ADD', payload: item})}>Agregar al carrito</button> */}
        
        </div>
        
    
    )
}

export default Jobs
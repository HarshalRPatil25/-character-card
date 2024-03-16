import './card.css'
const card=({Name , Image , from , shortInfo})=>{
    return(

    <>
     <div >
        <div className='card'>
            <div className='imf'>
            <div className='data'>
                
            <div className='images'>
                <img src={Image}/>
            </div>
            <div className='Bio'>
                    <h1><b>Name : </b> {Name}</h1>
                </div>

            </div>

            <div className='Info'>
                <h1>From : {from}</h1>
                <p>{shortInfo}</p>
            </div>
           
         <div/>
        </div>
        </div>

     </div>
    
    </>
    )

}
export default card;
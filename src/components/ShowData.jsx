

function ShowData({heading,list}){

      
        return( 

            <>
                <h1>{heading}</h1>
                {console.log(list)}
                {list.map((e)=>( <List item={e}/>))}
                
            </>
        )
}


function List({item}){

        return(
            <div className="list">
                 <li>{item}</li>
            </div>
               
        )
}

export  default ShowData;
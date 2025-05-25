export default function  CheckOutPage(name,id,...props){

    return(
        <form>
            <label htmlFor="id">Name</label>
            <input id={id} {...props}/>
            
           
        </form>
    )
}
import "../css/Test08.css"
const Test08Header =() =>{
    return(
    <div classname="Test08Header"> 
    <h3>오늘은 📆</h3>
    <h1>{new Date().toISOString()}</h1>
    </div>
    );
}
export default Test08Header
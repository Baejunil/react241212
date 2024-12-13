// src/compnent/Body.js
function Body() {
    function handleOnClick(){
        alert("버튼을 클릭했구나")
    }
    return(
        <div classname="body">
            <button cnClick={handleOnClick}>클릭하소</button>
        </div>
    )
    
}
export default Body 
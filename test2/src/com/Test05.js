import {useState} from "react"
function Test05() {
     const [count,setCount]=useState(0)

    function onIncrease(){
        setCount(count+1)
        console.log(count)
    }
    function onIncrease2(){
        setCount(count-1)
        console.log(count)
    }
    return(
        <div>
            
            <button onClick={onIncrease}>증가</button>
            <h2>{count}</h2>
            <button onClick={onIncrease2}>감소</button>
        </div>
    )
    
}
export default Test05
// TestComp01js
import { useReducer } from "react"
function reducer(){}
function TestComp() {
    //useReducer를 호출하고 2개의 인수를 전달합니다 첫번째 인수는 함수 reduscer이고 두번째 인수는 Statedml
    // 초깃값입니다 useReducer 도 useState처럼 배열을 반환하는데 배열의 첫 번째 요소는 State변수이고 두번째 요소는 상태변화 요소입니다
    const [count, dispatch] = useReducer(reducer, 0);
    return(
        <div>
            <h4> 테스트 컴퍼넌트01</h4>
            <div>
                <h5><bold>{count}</bold></h5>
            </div>
            <button onClick={()=>dispatch({type:"INCREASE",data:1})}>+</button>
            <button onClick={()=>dispatch({type:"DECREASE",data:1})}>-</button>
        </div>
    )
}
export default TestComp
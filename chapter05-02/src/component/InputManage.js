//InputManage.js
// State로 사용자 입력 관리하기

import { useState } from "react"

// <input>태그로 텍스트 입력하기
// onChange에 이벤트 핸들러를 설정하면 됩니다

// <input>태그로 날짜 입력하기

function InputManage() {
    const[text,setTest]=useState("")
    const handleOnChange=(e)=>{
        console.log(e.target.value)
    }

    const [date,seteDate]=useState("")
    const dateonChange=(e)=>{
        console.log("변경된 값:",e.target.value)
        seteDate(e.target.value)
    }
    //드롭다운 상자로 여러 옵션 중에 하나로 선택하기
    // 드롭다운 입력 폼에서 옵션을 선택하면 e.target.value에는 현재 사용자가 선택한
    // 옵션의 key속성이 저장됩니다
    const selectHandle=(e)=>{
        console.log("select: ", e.target.value)
    }
    // 글상자로 여러 줄의 텍스트 입력하기
    const taHandle=(e)=>{
        console.log("textatea:",e.target.value)
    }
    return(
        <div>
            <select onChange={selectHandle}>
                <option key={"1번"}>1번</option>
                <option key={"2번"}>2번</option>
                <option key={"3번"}>3번</option>
            </select>
            <input type="date" onChange={dateonChange}
                value={date}
            />
            <h1>{text}</h1>
            <input onChange={handleOnChange}></input>
            <input onChange={handleOnChange}/>
        </div>
    )
    
}
export default InputManage
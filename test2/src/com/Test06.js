import { useState } from "react";

function Test06() {
    const [info,setInfo] = useState({});

    const handleOnChange = (e) => {
        setInfo({...info, [e.target.name] : e.target.value});
    }

    const handleOnClick = (e) => {
        e.preventDefault(); // 제출 방지
        console.log(info);
    }

    return (
        <div>
            <h1>회원 가입을 환영합니다</h1>
            <form>
                <fieldset>
                    <legend>사용자 정보</legend>
                    <ul>
                        <li><label>아이디<input onChange={handleOnChange} name = "id" placeholder="4자 ~ 10자 사이, 공백 없이"></input></label></li>
                        <li><label>이메일<input onChange={handleOnChange} name = "email"></input></label></li>
                        <li><label>비밀번호<input onChange={handleOnChange} name = "pw" placeholder="문자와 숫자, 특수 기호 포함"></input></label></li>
                        <li><label>비밀번호 확인<input onChange={handleOnChange} name = "pwcheck"></input></label></li>
                        <li><label>가입 경로
                            <select name = "path" onChange={handleOnChange}>
                                <option>블로그</option>
                                <option>검색</option>
                                <option>SNS</option>
                            </select>
                            </label></li>
                        <li><label>메모<textarea onChange={handleOnChange} name = "text" placeholder = "남길 말씀이 있다면 여기에"></textarea></label></li>
                    </ul>
                </fieldset>
                <fieldset>
                    <legend> 이벤트와 새로운 소식 </legend>
                    <input type="radio" name ="mail" onClick={handleOnChange}></input> 메일 수신
                    <input type="radio" name ="mail" onClick={handleOnChange}></input> 메일 수신 안함
                </fieldset>
                <button onClick={handleOnClick}>가입하기</button>
                <button onClick={handleOnClick}>취소</button>
            </form>
        </div>
    );
}

export default Test06;
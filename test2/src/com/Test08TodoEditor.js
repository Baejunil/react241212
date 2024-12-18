import { useRef, useState } from "react";
import "../css/Test08.css"
const Test08TodoEditor = ({onCreate})=>{
    const [content, setContent] = useState("");
    const inputRef =useRef();
    const onChangeContent = (e) =>{
        setContent(e.target.value);
    }
    const onSubmit = ()=>{
        if (!content)
     { inputRef.current.focus(); return; 
     }
        onCreate(content); 
        setContent("");
    };
    const onKeyDown=(e) =>
 { if (e.keyCode === 13) { onSubmit(); 
 }
};
return <div className="Test08TodoEditor">
    <h4>새로운 Todo 작성하기✏ </h4>
     <div className="editor_wrapper">
     <input
      ref={inputRef}  
      value={content}
      onChange={onChangeContent} 
      onKeyDown={onKeyDown}
      placeholder="새로운 Todo..."/>
     <button onClick={onSubmit}>추가</button>
    </div>
</div>;
};
export default Test08TodoEditor;

import Test08Header from './com/Test08Header';
import Test08TodoEditor from './com/Test08TodoEditor';
import Test08TodoList from './com/Test08TodoList';
import { useState,useRef} from "react";
import './css/Test08.css';
const mockTodo = [{
  id:0,
  isDone: false,
  content:"Reack 공부하기",
  createdDate: new Date().getTime(),
},
{
id:1,
isDone: false,
content:"빨래 넣기",
createdDate: new Date().getTime(),
},
{ 
id:2,
isDone: false,
content:"노래 연습하기",
createdDate: new Date().getTime(),
}];
function App1() {
  const [todo, setTodo] = useState([mockTodo]);
  const idRef = useRef(3);
  const onCreate = (content) =>{
    const newItem ={
      id: idRef.current,content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem,...todo]);
    idRef.current +=1;
  }
  const onUpdate = (targetId) => {
   setTodo (
     todo.map( (it) => {
     if (it.id === targetId) { 
    return { ...it,
       isDone: !it.isDone,};
      }
      else{ 
        return it;}}))}
  return (
    <div className="App">
    <Test08Header />
    <Test08TodoEditor  onCreate={onCreate}/>
    <Test08TodoList todo={todo} onUpdate={onUpdate}/>

    </div>
  );
}

export default App1;

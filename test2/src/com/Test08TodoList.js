import "../css/Test08.css"
import Tset08TodoItem from "./Tset08TodoItem"
import { useState } from 'react'
const Test08TodoList = ({todo}) => {
    const [search, setSearch] =useState(""); 
     const onChangeSearch= (e) => { 
     setSearch(e.target.value);
    };
    const getSearchResult = () => { 
    return search === ""
    ? todo 
    : todo.filter((it) => 
    it.content.toLowerCase().includes (search.toLowerCase)); 
};
    return( <div className="Test08TodoList">
        <h4>Todo List🍀</h4>
        <input 
        value={search}
        onChange={onChangeSearch}
        className="searchbar" 
        placeholder="검색어를 입력하세요"/>
        <div className="list_wrapper">
        
        {getSearchResult().map((it)=>(
            <Tset08TodoItem key={it.id}{ ...it}/>
        ))}
        </div>
    </div>);
};
export default Test08TodoList;
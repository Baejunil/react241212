const Viewer = ({ count }) => {
    return (
      <div>
        <div>현재 카운트:</div>
        <h1>{count}</h1>  {/* 전달받은 count 값 표시 */}
      </div>
    );
  };
  
  export default Viewer;
  
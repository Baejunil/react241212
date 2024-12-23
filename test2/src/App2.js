import React, { useState, useCallback } from 'react';

// 색상 박스 컴포넌트
const ColorBox = React.memo(({ color, onRemove }) => {
  console.log(`Rendering color: ${color}`); // 최적화 확인용 로그
  return (
    <div
      style={{
        backgroundColor: color,
        width: '100px',
        height: '100px',
        margin: '10px',
        display: 'inline-block',
        cursor: 'pointer',
        borderRadius: '8px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
      }}
      onClick={() => onRemove(color)}
    />
  );
});

function App2() {
  // 색상 상태 관리
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState('#000000');

  // 색상 추가 함수
  const addColor = useCallback(() => {
    setColors((prevColors) => [...prevColors, selectedColor]);
  }, [selectedColor]);

  // 색상 삭제 함수
  const removeColor = useCallback((color) => {
    setColors((prevColors) => prevColors.filter((c) => c !== color));
  }, []);

  // 색상 선택 처리 함수
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
      <h1>색 저장소</h1>
      <div>
        <input
          type="color"
          value={selectedColor}
          onChange={handleColorChange}
        />
        <button onClick={addColor}></button>
      </div>

      <div style={{ marginTop: '20px' }}>
        {colors.length > 0 ? (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {colors.map((color, index) => (
              <ColorBox key={index} color={color} onRemove={removeColor} />
            ))}
          </div>
        ) : (
          <p>저장된색이 없음</p>
        )}
      </div>
    </div>
  );
}

export default App2;

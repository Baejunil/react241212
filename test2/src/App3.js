import React, { useState, memo } from "react";
import { useColor } from "./ColorContext"; // ColorContext를 임포트

// 개별 색 카드 컴포넌트 (최적화 적용)
const ColorCard = memo(({ color }) => {
  console.log(`Rendering color: ${color.name}`);
  const { deleteColor } = useColor(); // Context에서 deleteColor 가져오기
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.code,
        width: "150px",
        height: "100px",
        margin: "10px",
        border: "1px solid black",
      }}
    >
      <span>{color.name}</span>
      <button onClick={() => deleteColor(color.id)}>삭제</button>
    </div>
  );
});

// 메인 앱 컴포넌트
const App3 = () => {
  const { colors, addColor } = useColor(); // Context에서 colors와 addColor 가져오기
  const [colorName, setColorName] = useState("");
  const [colorCode, setColorCode] = useState("");

  // 색상 추가
  const handleAddColor = () => {
    if (colorName && colorCode) {
      addColor(colorName, colorCode);
      setColorName("");
      setColorCode("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>색상 저장 앱</h1>
      <div>
        <input
          type="text"
          placeholder="색상 이름"
          value={colorName}
          onChange={(e) => setColorName(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="색상 코드 (예: #ff0000)"
          value={colorCode}
          onChange={(e) => setColorCode(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleAddColor}>추가</button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {colors.map((color) => (
          <ColorCard key={color.id} color={color} />
        ))}
      </div>
    </div>
  );
};

export default App3;

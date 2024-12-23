import React, { createContext, useState, useContext } from 'react';

// Context 생성
const ColorContext = createContext();

// Context 제공 컴포넌트
export const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState([]);
  
  // 색상 추가
  const addColor = (colorName, colorCode) => {
    setColors(prevColors => [
      ...prevColors,
      { id: Date.now(), name: colorName, code: colorCode },
    ]);
  };

  // 색상 삭제
  const deleteColor = (id) => {
    setColors(prevColors => prevColors.filter(color => color.id !== id));
  };

  return (
    <ColorContext.Provider value={{ colors, addColor, deleteColor }}>
      {children}
    </ColorContext.Provider>
  );
};

// Context를 사용하는 커스텀 훅
export const useColor = () => useContext(ColorContext);

import { View } from 'react-native';

export const Plus = ({ size = 24, color = 'white', bgColor= 'black' }) => {
    const thickness = size / 5; // thickness relative to size
    const borderThickness = thickness * 0.5; // so we have a dinamic border
    const limits = size * 0.8

  return (
    
    <View
      style={{
        width: size,
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bgColor,
        borderWidth: borderThickness + thickness,
        borderColor: bgColor,
        borderRadius: 2,
      }}
    >
      {/* Barra Vertical */}
      <View
        style={{
          position: 'absolute',
          width: thickness,
          height: limits,
          backgroundColor: color,
        }}
      />
      {/* Barra Horizontal */}
      <View
        style={{
          position: 'absolute',
          width: limits,
          height: thickness,
          backgroundColor: color,
        }}
      />
    </View>
  );
};
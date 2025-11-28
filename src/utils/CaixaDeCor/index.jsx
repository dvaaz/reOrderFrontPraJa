import { View } from 'react-native';

export const CaixaDeCor = ({ size = 24, color= 'black' }) => {
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
        backgroundColor: color,
        borderWidth: borderThickness + thickness,
        borderColor: '#050500',
        borderRadius: 2,
      }}
    ></View>

     )
    }
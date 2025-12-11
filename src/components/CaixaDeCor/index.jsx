// possuo esse componente
import { View } from 'react-native';

export const CaixaDeCor = ({ size = 24, color = 'black' }) => {


  return (
    <View
      style={{
        width: size,
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color,
        borderWidth: 1,
        borderColor: '#050500',
        borderRadius: 1,
      }}
    ></View>
  );
};

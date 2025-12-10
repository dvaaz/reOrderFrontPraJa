import { Image, StyleSheet } from 'react-native';
import { COLOR } from '@/constants/constantsStyles';

const imagemFundoSrc = require('../../assets/images/praja_gemini_generated.png');

// Camada suave de fundo com a imagem em baixa opacidade
export const ImagemFundo = () => {
  return (
    <Image
      source={imagemFundoSrc}
      style={styles.backgroundImage}
    />
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    opacity: 0.06,
    backgroundColor: COLOR.softPeach,
  },
});

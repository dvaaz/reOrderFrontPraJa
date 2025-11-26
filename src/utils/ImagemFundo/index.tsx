import { Image, StyleSheet } from 'react-native';

const imagemFundoSrc = require('../../assets/images/praja_gemini_generated.png');

// imagem 
export const ImagemFundo = () => {
    
    return (
        <>
        {/* Imagem de Fundo (Prato) - USANDO REQUIRE, buscar se há outra forma de referenciar fora deste index */}
        <Image
        source={imagemFundoSrc} // Usa o require()
        style= {styles.backgroundImage}
        />
        </>
    );
};

const styles = StyleSheet.create ({
    backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%', 
    resizeMode: 'contain',
    opacity: 0.075,
    backgroundColor: '#fef0e7ff'
  },
})
  
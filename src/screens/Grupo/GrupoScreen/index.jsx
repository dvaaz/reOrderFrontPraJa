import {
  FlatList,
  StyleSheet,
  View
} from "react-native";

import { PrimaryButton } from "@/components/PrimaryButton";
import { COLOR } from "@/constants/constantsStyles";
import { ImagemFundo } from "@/utils/ImagemFundo";
import { useRouter } from "expo-router";


const opcoes = [
  {
    id: "create",
    name: "Criar Nova Grupo",
    corDeFundo: COLOR.branco,
    corDeTexto: COLOR.preto
  },
  {
    id: "search",
    name: "Buscar Grupo",
    corDeFundo: COLOR.branco,
    corDeTexto: COLOR.preto
  },
];



export default function Grupo() {

  const router = useRouter();

  const handleCategoryPress = (categoria) => {
    console.log(`Categoria selecionada: ${categoria.name}`);
    // rota estática por id
    switch (categoria.id) {
      case "create":
        router.navigate("../grupoCriarScreen");
        break;
      case "search":
        router.navigate("../grupoBuscarScreen");
        break;
      default:
        console.warn("Rota não configurada para", categoria.id);
    }
  }

  return (
    <View style={styles.container}>
      <ImagemFundo />

      <FlatList style={styles.content}
        data={opcoes}
        keyExtractor={(opcao) => opcao.id}
        renderItem={({ item: opcao }) => (
          <PrimaryButton
            name={opcao.name}
            onPress={() => handleCategoryPress(opcao)}
            buttonColor={opcao.corDeFundo}
            textColor={opcao.corDeTexto}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFF5F5',
    height: '100%',
    width: '100%',

  },

  content: {
    flex: 1,
    paddingTop: "20%", // Empurra o conteúdo para baixo
    width: '100%',
  },
  listContainer: {
    alignItems: "center", // centraliza os itens da FlatList
    gap: 20,              // espaçamento entre botões
    paddingBottom: 20,
  },

})
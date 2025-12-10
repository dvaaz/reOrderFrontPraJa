import { Alert, FlatList, StyleSheet, Text, View } from "react-native";

import { PrimaryButton } from "@/components/PrimaryButton";
import { COLOR } from "@/constants/constantsStyles";
import { ImagemFundo } from "@/utils/ImagemFundo";
import { useRouter } from "expo-router";

const opcoes = [
  {
    id: "create",
    name: "Criar nova ficha técnica",
    corDeFundo: COLOR.primary,
    corDeTexto: COLOR.branco,
    icon: "document-text-outline",
  },
  {
    id: "search",
    name: "Buscar ficha técnica",
    corDeFundo: COLOR.card,
    corDeTexto: COLOR.preto,
    icon: "search-outline",
  },
];

export default function Ficha() {
  const router = useRouter();

  const handleCategoryPress = (categoria) => {
    switch (categoria.id) {
      case "create":
        router.push("/fichaCriar");
        break;
      case "search":
        Alert.alert("Em breve", "Tela de busca de ficha técnica ainda será implementada.");
        break;
      default:
        console.warn("Rota não configurada para", categoria.id);
    }
  };

  return (
    <View style={styles.container}>
      <ImagemFundo />

      <View style={styles.header}>
        <Text style={styles.title}>Fichas técnicas</Text>
        <Text style={styles.subtitle}>Organize e cadastre fichas com o novo visual em azul.</Text>
      </View>

      <FlatList
        style={styles.content}
        data={opcoes}
        keyExtractor={(opcao) => opcao.id}
        renderItem={({ item: opcao }) => (
          <PrimaryButton
            name={opcao.name}
            onPress={() => handleCategoryPress(opcao)}
            buttonColor={opcao.corDeFundo}
            textColor={opcao.corDeTexto}
            iconName={opcao.icon}
            isOutlined={opcao.corDeFundo === COLOR.card}
          />
        )}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR.background,
    height: "100%",
    width: "100%",
    paddingHorizontal: 18,
  },
  header: {
    width: "100%",
    gap: 6,
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: COLOR.preto,
  },
  subtitle: {
    fontSize: 14,
    color: COLOR.gray,
  },
  content: {
    flex: 1,
    width: "100%",
  },
  listContainer: {
    alignItems: "center",
    gap: 12,
    paddingBottom: 20,
  },
});

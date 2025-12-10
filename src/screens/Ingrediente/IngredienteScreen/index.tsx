import { PrimaryButton } from "@/components/PrimaryButton";
import { COLOR } from "@/constants/constantsStyles";
import { ImagemFundo } from "@/utils/ImagemFundo";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

type CategoryProps = {
  id: string;
  name: string;
  corDeFundo: string;
  corDeTexto: string;
  icon: string;
};

const opcoes: CategoryProps[] = [
  {
    id: "create",
    name: "Criar novo ingrediente",
    corDeFundo: COLOR.primary,
    corDeTexto: COLOR.branco,
    icon: "add-circle-outline",
  },
  {
    id: "search",
    name: "Buscar ingrediente",
    corDeFundo: COLOR.card,
    corDeTexto: COLOR.preto,
    icon: "search-outline",
  },
  {
    id: "list",
    name: "Listar ingredientes",
    corDeFundo: COLOR.card,
    corDeTexto: COLOR.preto,
    icon: "list-outline",
  },
];

export default function Ingrediente() {
  const router = useRouter();

  const handleCategoryPress = (categoria: CategoryProps) => {
    switch (categoria.id) {
      case "create":
        router.push("/ingredienteCriar");
        break;
      case "search":
        router.push("/ingredienteBuscar");
        break;
      case "list":
        router.push("/ingredienteListar");
        break;
      default:
        console.warn("Rota nao configurada para", categoria.id);
    }
  };

  return (
    <View style={styles.container}>
      <ImagemFundo />

      <View style={styles.header}>
        <Text style={styles.title}>Ingredientes</Text>
        <Text style={styles.subtitle}>
          Escolha a ação desejada. A interface agora usa um azul mais claro e botões com ícones.
        </Text>
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
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.background,
    paddingHorizontal: 18,
    paddingTop: 24,
  },
  header: {
    gap: 8,
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
    lineHeight: 20,
  },
  content: {
    flex: 1,
  },
  listContainer: {
    alignItems: "center",
    paddingBottom: 24,
  },
});

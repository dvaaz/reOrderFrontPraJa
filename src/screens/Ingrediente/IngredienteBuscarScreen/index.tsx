import { PrimaryButton } from "@/components/PrimaryButton";
import { COLOR } from "@/constants/constantsStyles";
import { ImagemFundo } from "@/utils/ImagemFundo";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function IngredienteBuscarScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImagemFundo />
      <View style={styles.card}>
        <Text style={styles.title}>Busca de ingredientes</Text>
        <Text style={styles.subtitle}>
          Esta área ainda será construída. Enquanto isso, use os atalhos para voltar ou cadastrar um item.
        </Text>
        <View style={styles.actions}>
          <PrimaryButton
            name="Cadastrar ingrediente"
            onPress={() => router.push("/ingredienteCriar")}
            buttonColor={COLOR.primary}
            textColor={COLOR.branco}
            iconName="add-circle-outline"
          />
          <PrimaryButton
            name="Voltar"
            onPress={() => router.back()}
            buttonColor={COLOR.card}
            textColor={COLOR.preto}
            iconName="arrow-back"
            isOutlined
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: COLOR.background,
  },
  card: {
    width: "100%",
    backgroundColor: COLOR.card,
    borderRadius: 16,
    padding: 20,
    gap: 10,
    borderWidth: 1,
    borderColor: COLOR.softtGray,
    shadowColor: COLOR.primaryDark,
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: COLOR.preto,
  },
  subtitle: {
    fontSize: 14,
    color: COLOR.gray,
    lineHeight: 20,
  },
  actions: {
    marginTop: 6,
    gap: 10,
    alignItems: "center",
  },
});

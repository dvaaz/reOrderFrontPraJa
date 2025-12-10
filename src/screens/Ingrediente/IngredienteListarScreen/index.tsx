import { PrimaryButton } from "@/components/PrimaryButton";
import { COLOR } from "@/constants/constantsStyles";
import { ImagemFundo } from "@/utils/ImagemFundo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

type StatusTipo = "disponivel" | "baixo" | "esgotado";

type IngredienteItem = {
  id: string;
  nome: string;
  grupo: string;
  unidadeMedida: string;
  estoque: string;
  status: StatusTipo;
};

const ingredientes: IngredienteItem[] = [
  {
    id: "1",
    nome: "Tomate Italiano",
    grupo: "Hortifruti",
    unidadeMedida: "kg",
    estoque: "24 kg",
    status: "disponivel",
  },
  {
    id: "2",
    nome: "Peito de Frango",
    grupo: "Carnes",
    unidadeMedida: "kg",
    estoque: "18 kg",
    status: "disponivel",
  },
  {
    id: "3",
    nome: "Arroz Agulhinha",
    grupo: "Graos",
    unidadeMedida: "kg",
    estoque: "32 kg",
    status: "disponivel",
  },
  {
    id: "4",
    nome: "Mussarela",
    grupo: "Laticinios",
    unidadeMedida: "kg",
    estoque: "6 kg",
    status: "baixo",
  },
  {
    id: "5",
    nome: "Manteiga",
    grupo: "Laticinios",
    unidadeMedida: "kg",
    estoque: "2 kg",
    status: "esgotado",
  },
  {
    id: "6",
    nome: "Alho",
    grupo: "Temperos",
    unidadeMedida: "kg",
    estoque: "8 kg",
    status: "disponivel",
  },
  {
    id: "7",
    nome: "Azeite Extra Virgem",
    grupo: "Secos",
    unidadeMedida: "L",
    estoque: "12 L",
    status: "disponivel",
  },
  {
    id: "8",
    nome: "Pimenta-do-Reino",
    grupo: "Temperos",
    unidadeMedida: "kg",
    estoque: "3 kg",
    status: "baixo",
  },
];

const statusInfo: Record<StatusTipo, { label: string; cor: string; corTexto: string; icon: string }> = {
  disponivel: { label: "Disponível", cor: COLOR.verde, corTexto: COLOR.branco, icon: "checkmark-circle" },
  baixo: { label: "Reposição", cor: COLOR.warn, corTexto: COLOR.branco, icon: "alert-circle" },
  esgotado: { label: "Esgotado", cor: COLOR.danger, corTexto: COLOR.branco, icon: "close-circle" },
};

const LinhaInfo = ({ label, value, icon }: { label: string; value: string; icon: string }) => (
  <View style={styles.infoRow}>
    <View style={styles.infoLeft}>
      <Ionicons name={icon as any} size={16} color={COLOR.gray} />
      <Text style={styles.infoLabel}>{label}</Text>
    </View>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const StatusBadge = ({ status }: { status: StatusTipo }) => {
  const info = statusInfo[status];
  return (
    <View style={[styles.statusBadge, { backgroundColor: info.cor }]}>
      <Ionicons name={info.icon as any} size={14} color={info.corTexto} />
      <Text style={[styles.statusText, { color: info.corTexto }]}>{info.label}</Text>
    </View>
  );
};

export default function IngredienteListarScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImagemFundo />

      <View style={styles.header}>
        <View style={styles.headerBadge}>
          <Ionicons name="nutrition-outline" size={16} color={COLOR.primaryDark} />
          <Text style={styles.headerBadgeText}>Estoque saudável</Text>
        </View>
        <Text style={styles.title}>Ingredientes</Text>
        <Text style={styles.subtitle}>Acompanhe o estoque, grupos e status de reposição.</Text>
      </View>

      <FlatList
        style={styles.list}
        data={ingredientes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.cardTitleWrap}>
                <Ionicons name="leaf-outline" size={16} color={COLOR.primaryDark} />
                <Text style={styles.cardTitle}>{item.nome}</Text>
              </View>
              <StatusBadge status={item.status} />
            </View>
            <LinhaInfo label="Grupo" value={item.grupo} icon="pricetags-outline" />
            <LinhaInfo label="Unidade" value={item.unidadeMedida} icon="cube-outline" />
            <LinhaInfo label="Disponível" value={item.estoque} icon="bar-chart-outline" />
          </View>
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.actions}>
        <View style={styles.actionButton}>
          <PrimaryButton
            name="Cadastrar novo"
            onPress={() => router.push("/ingredienteCriar")}
            buttonColor={COLOR.primary}
            textColor={COLOR.branco}
            iconName="add-circle-outline"
          />
        </View>
        <View style={styles.actionButton}>
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
    backgroundColor: COLOR.background,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  header: {
    marginBottom: 12,
    gap: 6,
  },
  headerBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    alignSelf: "flex-start",
    backgroundColor: COLOR.primarySoft,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  headerBadgeText: {
    color: COLOR.primaryDark,
    fontWeight: "700",
    fontSize: 12,
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
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 24,
    gap: 12,
  },
  card: {
    backgroundColor: COLOR.card,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: COLOR.softtGray,
    shadowColor: COLOR.primaryDark,
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  cardTitleWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
    paddingRight: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: COLOR.preto,
    flex: 1,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  infoLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  infoLabel: {
    fontSize: 13,
    color: COLOR.gray,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: "600",
    color: COLOR.preto,
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "700",
  },
  actions: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 12,
  },
  actionButton: {
    flex: 1,
  },
});

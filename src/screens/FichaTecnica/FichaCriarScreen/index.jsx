import { PrimaryButton } from "@/components/PrimaryButton";
import { COLOR, FONT_SIZE } from "@/constants/constantsStyles";
import { Plus } from "@/utils/PlusIcon";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator, Alert, FlatList, Modal,
  Pressable, ScrollView, Text, TextInput,
  View
} from "react-native";
import { Tooltip } from "react-native-paper";
import { styles } from "./styles";

// --- MOCKS ---
// Grupo de Fichas Técnicas
const MOCK_GRUPOS_FICHA = [
  { id: 1, nome: "Sobremesas", cor: "#FFB6C1" },
  { id: 2, nome: "Massas", cor: "#e3a11bff" },
  { id: 3, nome: "Carnes", cor: "#CD5C5C" },
  { id: 4, nome: "Bebidas", cor: "#c3ea14ff" }
];

// Grupo de Ingredientes
const MOCK_GRUPOS_INGREDIENTES = [
  { id: 10, nome: "Frutas", cor: "#32CD32" },
  { id: 11, nome: "Laticínios", cor: "#87CEEB" },
  { id: 12, nome: "Temperos", cor: "#FFA500" },
  {id: 13, nome: "Sorvetes", cor: "#D2B48C" }
];

// Ingredientes
const MOCK_INGREDIENTES = [
  { id: 100, nome: "Morango", grupo: 10 },
  { id: 101, nome: "Banana", grupo: 10 },
  { id: 102, nome: "Leite", grupo: 11 },
  { id: 103, nome: "Queijo", grupo: 11 },
  { id: 104, nome: "Sal", grupo: 12 },
  { id: 105, nome: "Pimenta", grupo: 12 },
  { id: 106, nome: "Sorvete de Baunilha", grupo: 13 },
  { id: 107, nome: "Sorvete de Chocolate", grupo: 13 },
  { id: 108, nome: "Sorvete de Creme", grupo: 13 },
];

export default function FichaCriarScreen() {
  // Hooks de formulário
  const [nomeFicha, setNomeFicha] = useState("");
  const [descricaoFicha, setDescricaoFicha] = useState(" ");
  const [grupoFicha, setGrupoFicha] = useState("");

  // Dados mockados
  const [gruposFicha, setGruposFicha] = useState([]);
  const [gruposIngredientes, setGruposIngredientes] = useState([]);
  const [ingredientes, setIngredientes] = useState([]);

  // Estados de UI
  const [grupoIngredientesSelecionado, setGrupoIngredientesSelecionado] = useState("");
  const [ingredienteSelecionado, setIngredienteSelecionado] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula carregamento de dados mockados
    setGruposFicha(MOCK_GRUPOS_FICHA);
    setGruposIngredientes(MOCK_GRUPOS_INGREDIENTES);
    setIngredientes(MOCK_INGREDIENTES);
    setLoading(false);
  }, []);

  // Computa ingredientes disponíveis com base no grupo selecionado e exclui os já selecionados
  const ingredientesDisponiveis = useMemo(() => {
    return ingredientes.filter((i) => {
      const matchesGroup = grupoIngredientesSelecionado ? String(i.grupo) === String(grupoIngredientesSelecionado) : true;
      const notSelected = !ingredienteSelecionado.some((s) => String(s.id) === String(i.id));
      return matchesGroup && notSelected;
    });
  }, [ingredientes, grupoIngredientesSelecionado, ingredienteSelecionado]);

  const adicionarIngrediente = (item) => {
    setIngredienteSelecionado((prev) => [...prev, item]);
  };

  const removerIngrediente = (id) => {
    setIngredienteSelecionado((prev) => prev.filter((i) => String(i.id) !== String(id)));
  };

  const handleSalvar = () => {
    const payload = {
      nome: nomeFicha,
      descricao: descricaoFicha,
      listaIngredientes: ingredienteSelecionado,
      grupo: grupoFicha
    };

    console.log("Payload para criar ficha:", payload);
    Alert.alert("Ação", "Payload preparado. Verifique o console para ver os dados.");
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator size="large" color={COLOR.blue || "#000"} />
        <Text style={{ marginTop: 10 }}>Carregando dados...</Text>
      </View>
    );
  }

  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={styles.container}>
        <View style={styles.header}>
                  <Text style={styles.title}>Cadastrar Ficha Tecnica de um Prato</Text>
                  <Text style={styles.subtitle}>
                      Preencha os detalhes abaixo.
                  </Text>
                </View>
        <View style={styles.field}>
          <Text style={styles.label}>Nome da Ficha Tecnica:</Text>
          <TextInput
            style={styles.input}
            value={nomeFicha}
            onChangeText={setNomeFicha}
            placeholder="Digite o nome da Ficha Tecnica"
          />
        </View>

        <View style={styles.addDescriptionField}>
          <Tooltip title={"Você também pode adicionar uma descrição após ficha estar pronta"}>
            <Text style={styles.label}> Adicionar descrição à Ficha Tecnica </Text>
          </Tooltip>

          <Pressable
            style={styles.label}
            onPress={() => setModalVisible(true)}
          >
            <Plus size={FONT_SIZE.md} color={COLOR.branco} bgColor={COLOR.blue} />

            <Modal
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
              animationType="fade"
              transparent={true}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Descrição da Ficha Tecnica:</Text>
                  <TextInput
                    value={descricaoFicha}
                    onChangeText={setDescricaoFicha}
                    placeholder="Digite a descrição da Ficha Tecnica"
                    style={[styles.input, styles.multiline]}
                    multiline
                    numberOfLines={3}
                  />
                  <View style={styles.footerPressables}>
                    <PrimaryButton
                      name="Cancelar"
                      onPress={() => setModalVisible(false)}
                      buttonColor={COLOR.danger}
                      textColor={COLOR.branco}
                    />
                    <PrimaryButton
                      name="Confirmar"
                      onPress={() => setModalVisible(false)}
                      buttonColor={COLOR.info}
                      height={40}
                    />
                  </View>
                </View>
              </View>
            </Modal>
          </Pressable>
        </View>

        {/* Seleção de Grupo da Ficha Técnica */}
        <View style={styles.field}>
          <Text style={styles.label}>Selecione o grupo para a Ficha Tecnica:</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={grupoFicha}
              onValueChange={(value) => setGrupoFicha(value)}
              style={styles.picker}
            >
              <Picker.Item label="Escolha um grupo" value="" />
              {gruposFicha.map((g) => (
                <Picker.Item key={String(g.id)} label={g.nome} value={String(g.id)} color={g.cor} />
              ))}
            </Picker>
          </View>
        </View>

        {/* Seleção de Grupo de Ingredientes e Lista de Ingredientes */}
        <View style={styles.field}>
          <Text style={styles.label}>Selecione os ingredientes para a Ficha Técnica:</Text>

          <View style={styles.centeredView}>
            <Picker
              selectedValue={grupoIngredientesSelecionado}
              onValueChange={(value) => setGrupoIngredientesSelecionado(value)}
              style={[styles.picker, { width: "95%" }]}
            >
              <Picker.Item label="Grupo de Ingredientes" value="" />
              {gruposIngredientes.map((g) => (
                <Picker.Item key={String(g.id)} label={g.nome} value={String(g.id)} color={g.cor} />
              ))}
            </Picker>

            <View style={styles.box}>
              <FlatList
                data={ingredientesDisponiveis}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() => adicionarIngrediente(item)}
                    style={styles.listItem}
                  >
                    <Text>{item.nome}</Text>
                  </Pressable>
                )}
                ListEmptyComponent={<Text style={styles.helperText}>Nenhum ingrediente disponível.</Text>}
              />
            </View>

            <Text style={styles.info}>Selecionados</Text>
            <View style={styles.box}>
              <FlatList
                data={ingredienteSelecionado}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                  <Pressable onPress={() => removerIngrediente(item.id)} style={styles.listItem}>
                    <Text>{item.nome} (remover)</Text>
                  </Pressable>
                )}
                ListEmptyComponent={<Text style={styles.helperText}>Nenhum ingrediente selecionado.</Text>}
              />
            </View>
          </View>
        </View>

              {/* Botoes de ação */}
        <View style={styles.actions}>
          <View style={styles.actionItem}>
            <PrimaryButton
              name="Voltar"
              onPress={() => Alert.alert("Voltar", "Ação de voltar")}
              buttonColor={COLOR.card}
              textColor={COLOR.preto}
              iconName="arrow-back"
              isOutlined
            />
          </View>
          <View style={styles.actionItem}>
            <PrimaryButton
              name="Limpar"
              onPress={() => {
                setNomeFicha("");
                setDescricaoFicha("");
                setGrupoFicha("");
                setGrupoIngredientesSelecionado("");
                setIngredienteSelecionado([]);
              }}
              buttonColor={COLOR.warn}
              textColor={COLOR.preto}
              iconName="refresh"
            />
          </View>
          <View style={styles.actionItem}>
            <PrimaryButton
              name="Salvar"
              onPress={handleSalvar}
              buttonColor={COLOR.primary}
              textColor={COLOR.branco}
              iconName="checkmark-circle"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
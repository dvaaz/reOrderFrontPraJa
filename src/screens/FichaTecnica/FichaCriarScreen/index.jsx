import { PrimaryButton } from "@/components/PrimaryButton";
import { COLOR, FONT_SIZE } from "@/constants/constantsStyles";
import { Plus } from "@/utils/PlusIcon";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator, Alert, FlatList, Modal,
  Pressable, ScrollView, Text, TextInput,
  TouchableOpacity,
  View
} from "react-native";

import { Tooltip } from "react-native-paper";
import { styles } from "./styles";

// --- CONFIGURAÇÃO DA API ---
// SE ESTIVER NO EMULADOR ANDROID: Use "http://10.0.2.2:8408/api"
// SE ESTIVER NO CELULAR FÍSICO/IPHONE: Use o IP do seu PC, ex: "http://192.168.1.15:8408/api"
const API_URL = "http://academico3.rj.senac.br/praja";

export default function FichaCriarScreen() {
  // Hooks de formulário
  const [nomeFicha, setNomeFicha] = useState("");
  const [descricaoFicha, setDescricaoFicha] = useState(" ");
  const [grupoFicha, setGrupoFicha] = useState("");

  // Dados vindos da API
  const [gruposFicha, setGruposFicha] = useState([]);
  const [gruposIngredientes, setGruposIngredientes] = useState([]);
  const [ingredientes, setIngredientes] = useState([]);

  // Estados de UI
  const [grupoIngredientesSelecionado, setGrupoIngredientesSelecionado] = useState("");
  const [ingredienteSelecionado, setIngredienteSelecionado] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      // Buscar os três endpoints em paralelo
      const [resGruposFicha, resIngredientes, resGruposIngredientes] = await Promise.all([
        fetch(`${API_URL}/grupos/fichatecnica/listar`),
        fetch(`${API_URL}/ingrediente/listar`),
        fetch(`${API_URL}/grupos/ingrediente/listar`)
      ]);

      if (!resGruposFicha.ok) throw new Error(`Erro grupos ficha: ${resGruposFicha.status}`);
      if (!resIngredientes.ok) throw new Error(`Erro ingredientes: ${resIngredientes.status}`);
      if (!resGruposIngredientes.ok) throw new Error(`Erro grupos ingredientes: ${resGruposIngredientes.status}`);

      const dataGruposFicha = await resGruposFicha.json();
      const dataIngredientes = await resIngredientes.json();
      const dataGruposIngredientes = await resGruposIngredientes.json();

      // Normaliza cor (adiciona # se necessário) e garante tipos coerentes
      const formatCor = (item) => ({
        ...item,
        cor: item.cor ? (item.cor.startsWith("#") ? item.cor : `#${item.cor}`) : undefined
      });

      setGruposFicha(Array.isArray(dataGruposFicha) ? dataGruposFicha.map(formatCor) : []);
      setIngredientes(Array.isArray(dataIngredientes) ? dataIngredientes : []);
      setGruposIngredientes(Array.isArray(dataGruposIngredientes) ? dataGruposIngredientes.map(formatCor) : []);

    } catch (err) {
      console.error("Erro ao carregar dados:", err);
      Alert.alert("Erro", "Falha ao carregar dados. Verifique o backend e a conexão.");
    } finally {
      setLoading(false);
    }
  };

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
    // Monta o payload conforme solicitado: nome, descricao, unidade (aqui não havia unidade no mock original da ficha),
    // e grupo da ficha (grupoFicha). Ajuste conforme seu backend.
    const payload = {
      nome: nomeFicha,
      descricao: descricaoFicha,
      listaIngredientes: ingredienteSelecionado,
      grupo: grupoFicha
    };

    // Por enquanto apenas logamos; substitua por fetch/axios para enviar ao endpoint real de criação de ficha
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
            onPressOut={() => { }}
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
                <Picker.Item key={String(g.id)} label={g.nome ?? g.name ?? String(g.id)} value={String(g.id)} color={g.cor} />
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
                <Picker.Item key={String(g.id)} label={g.nome ?? g.name ?? String(g.id)} value={String(g.id)} color={g.cor} />
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
                    <Text>{item.nome ?? item.name}</Text>
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
                    <Text>{item.nome ?? item.name} (remover)</Text>
                  </Pressable>
                )}
                ListEmptyComponent={<Text style={styles.helperText}>Nenhum ingrediente selecionado.</Text>}
              />
            </View>
          </View>
        </View>

        <View style={styles.clearButton}>
          <TouchableOpacity
            style={[styles.actionButton, styles.cancelButton]}
            name="Limpar"
            onPress={() => {
              setNomeFicha("");
              setDescricaoFicha(" ");
              setGrupoFicha("");
              setGrupoIngredientesSelecionado("");
              setIngredienteSelecionado([]);
            }}
            buttonColor={COLOR.danger}
            textColor={COLOR.preto}
          />
          <TouchableOpacity
            name="Confirmar"
            style={[styles.actionButton, styles.okButton]}
            textColor={COLOR.branco}

            onPress={handleSalvar}
          />
        </View>
      </View>
    </ScrollView>
  );
}

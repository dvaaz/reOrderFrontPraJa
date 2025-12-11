import { PrimaryButton } from "@/components/PrimaryButton";
import { COLOR } from "@/constants/constantsStyles";
import { ImagemFundo } from "@/utils/ImagemFundo";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { styles } from "./styles";

// --- CONFIGURAÇÃO DA API ---
const API_URL = "http://academico3.rj.senac.br/praja";

export default function IngredienteCriarScreen() {
  const router = useRouter();

  // Constantes locais
  const unMedida = [
    { id: "UN", nome: "Unidade", cod: 0 },
    { id: "g", nome: "Gramas", cod: 1 },
    { id: "ml", nome: "Mililitros", cod: 2 }
  ];
  const exemplos = ["Arroz Branco", "Feijão Fradinho", "Tomate", "Fermento", "Sal", "Ovo Batido", "Leite Integral", "Açúcar", "Farinha de Trigo"];

  // --- STATES ---
  const [nomeIngrediente, setNomeIngrediente] = useState("");
  const [descricaoIngrediente, setDescricaoIngrediente] = useState("");
  const [unidadeMedida, setUnidadeMedida] = useState(unMedida[0].id);
  const [grupoIngrediente, setGrupoIngrediente] = useState("");

  const [grupos, setGrupos] = useState([]); 
  const [loadingGrupos, setLoadingGrupos] = useState(true);
  const [exemploHolder, setExemploHolder] = useState("");

  // --- EFEITOS ---
  useEffect(() => {
    fetchGrupos();
  }, []);

  useEffect(() => {
    const trocarExemplo = () => {
      const exemploAleatorio = exemplos[Math.floor(Math.random() * exemplos.length)];
      setExemploHolder(`Ex: ${exemploAleatorio}`);
    };

    if (nomeIngrediente === "") {
      trocarExemplo();
    }

    const interval = setInterval(() => {
      trocarExemplo();
    }, 5000);

    return () => clearInterval(interval);
  }, [nomeIngrediente]);

  const fetchGrupos = async () => {
    try {
      setLoadingGrupos(true);
      const response = await fetch(`${API_URL}/api/grupos/ingrediente/listar`);
      if (response.ok) {
        const data = await response.json();
        const gruposFormatados = data.map((item) => ({
          ...item,
          cor: item.cor.startsWith('#') ? item.cor : `#${item.cor}` 
        }));
        setGrupos(gruposFormatados);
      } else {
        Alert.alert("Erro", "O servidor respondeu com erro: " + response.status);
      }
    } catch (error) {
      Alert.alert("Erro de Conexão", "Verifique se o backend está rodando e se o IP está correto.");
    } finally {
      setLoadingGrupos(false);
    }
  };

  // --- FUNÇÃO DE SALVAR ---
  const handleSalvar = async () => {
    if (!nomeIngrediente || grupoIngrediente === null) {
      Alert.alert("Campos obrigatórios", "Por favor, preencha o nome e escolha um grupo.");
      return;
    }

    const payload = {
      nome: nomeIngrediente,
      descricao: descricaoIngrediente,
      unidadeMedida: unMedida.find(u => u.id === unidadeMedida)?.cod || 0,
      grupo: grupoIngrediente
    };

    try {
      const response = await fetch(`${API_URL}/api/ingrediente/criar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        Alert.alert("Sucesso", "Ingrediente criado!", [{ text: "OK", onPress: () => router.back() }]);
      } else {
        const errorText = await response.text();
        Alert.alert("Erro ao salvar", errorText || "Ocorreu um erro no servidor.");
      }
    } catch (error) {
      Alert.alert("Erro", "Falha ao enviar dados.");
    }
  };

  return (
    <View style={styles.screen}>
      <ImagemFundo />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Cadastrar ingrediente</Text>
          <Text style={styles.subtitle}>
            Layout renovado com tons de azul e campos mais leves. Preencha os detalhes abaixo.
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.field}>
            <Text style={styles.label}>Nome do ingrediente</Text>
            <TextInput
              value={nomeIngrediente}
              onChangeText={setNomeIngrediente}
              placeholder={exemploHolder}
              style={styles.input}
              placeholderTextColor={COLOR.gray}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Descrição</Text>
            <TextInput
              value={descricaoIngrediente}
              onChangeText={setDescricaoIngrediente}
              placeholder="Informações detalhadas sobre o ingrediente, se necessário."
              style={[styles.input, styles.multiline]}
              multiline
              numberOfLines={3}
              placeholderTextColor={COLOR.gray}
            />
          </View>

          <Text style={styles.label}>Unidade de medida</Text>
          <View style={styles.fieldButton}>
            <View style={styles.unitsRow}>
              {unMedida.map((u) => {
                const selected = unidadeMedida === u.id;
                return (
                  <TouchableOpacity
                    key={u.id}
                    activeOpacity={0.7}
                    onPress={() => setUnidadeMedida(u.id)}
                    style={[
                      styles.unitButton,
                      selected && styles.unitButtonSelected,
                    ]}
                  >
                    <Text
                      style={[
                        styles.unitText,
                        selected && styles.unitTextSelected,
                      ]}
                    >
                      {u.id}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <Text style={styles.helperText}>
              Unidade selecionada:{" "}
              <Text style={{ fontWeight: "700" }}>
                {unMedida.find((x) => x.id === unidadeMedida)?.nome ?? ""}
              </Text>
            </Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Grupo do ingrediente</Text>
            <View style={styles.pickerWrapper}>
              {loadingGrupos ? (
                <View style={styles.loadingContainer}>
                  <ActivityIndicator size="small" color={COLOR.primary} />
                  <Text style={styles.loadingText}>Carregando grupos...</Text>
                </View>
              ) : (
                <Picker
                  selectedValue={grupoIngrediente}
                  onValueChange={(itemValue) => setGrupoIngrediente(itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item label="Selecione um grupo..." value={null} />
                  {grupos.map((grupo) => (
                    <Picker.Item 
                      key={grupo.id} 
                      label={grupo.nome}
                      value={grupo.id}
                    />
                  ))}
                </Picker>
              )}
            </View>
            <Text style={styles.helperText}>
              {grupos.length === 0 && !loadingGrupos ? "Nenhum grupo encontrado." : ""}
            </Text>
          </View>
        </View>

 {/* Botoes do footer */}
        <View style={styles.actions}>
          <View style={styles.actionItem}>
            <PrimaryButton
              name="Voltar"
              onPress={() => router.back()}
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
                setNomeIngrediente("");
                setDescricaoIngrediente("");
                setGrupoIngrediente("");
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
      </ScrollView>
    </View>
  );
}

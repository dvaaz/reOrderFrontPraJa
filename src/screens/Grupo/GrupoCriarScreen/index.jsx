import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { styles } from "./styles";

// --- CONFIGURAÇÃO DA API ---
const API_URL = "http://localhost:8408"; 

export default function GrupoCriarScreen() {
  const router = useRouter();

  // Constantes locais
  const consTipoGrupo = [
    { id: "i", nome: "Ingredientes", cod: 1 },
    { id: "f", nome: "Fichas Tecnicas", cod: 2 },
  ];
// Serão adicionados o # antes das opções de cores no picker
  const opcaoCores = [
    { id: "vermelho", nome: "Vermelho", cod: "#FF0000" },
    { id: "verde", nome: "Verde", cod: "#00FF00" },
    { id: "azul", nome: "Azul", cod: "#0000FF" },
    { id: "amarelo", nome: "Amarelo", cod: "#FFFF00" },
    { id: "laranja", nome: "Laranja", cod: "FFA500" },
    { id: "roxo", nome: "Roxo", cod: "f509f5de" },
  ]

  const exemplos = ["Farinhas", "Temperos", "Legumes", "Carnes", "Aves", "Ovos", "Outros"];

  // --- STATES ---
  const [nomeGrupo, setNomeGrupo] = useState("");
  const [corGrupo, setCorGrupo] = useState("");
  const [tipoGrupo, setTipoGrupo] = useState("");
  const [exemploHolder, setExemploHolder] = useState("");

  // --- EFEITO PARA EXEMPLO DINÂMICO ---


  // --- EFEITOS ---
  useEffect(() => {
    fetchGrupos();
  }, []);
  useEffect(() => {

  // --- Função que escolhe um exemplo aleatório ---
  const trocarExemplo = () => {
    const exemploAleatorio = exemplos[Math.floor(Math.random() * exemplos.length)];
    setExemploHolder(`Ex: ${exemploAleatorio}`);
  };

  // --- Sempre que o usuário APAGAR O TEXTO, trocar o placeholder ---
  if (nomeGrupo === "") {
    trocarExemplo();
  }

  // --- Timer para trocar automaticamente a cada 2s ---
  const interval = setInterval(() => {
    trocarExemplo();
  }, 3000);

  // --- Cleanup do timer ---
  return () => clearInterval(interval);

}, [nomeGrupo]);
    // --- Função para buscar os grupos da API ---

  // --- FUNÇÃO DE SALVAR ---
  const handleSalvar = async () => {
    if (!nomeGrupo || grupoIngrediente === null) {
      Alert.alert("Campos obrigatórios", "Por favor, preencha o nome e escolha um grupo.");
      return;
    }

    const payload = {
      nome: nomeGrupo,
      cor: corGrupo,
      tipo: consTipoGrupo.find(u => u.id === tipoGrupo)?.cod || 0,
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
      console.error("Erro no POST:", error);
      Alert.alert("Erro", "Falha ao enviar dados.");
    }
  };

  // --- RENDERIZAÇÃO ---
  return (
    <View style={styles.container}>
      
      {/* Campo Nome */}
      <View style={styles.field}>
        <Text style={styles.label}>Nome do Grupo:</Text>
        <TextInput
          value={nomeGrupo}
          onChangeText={setNomeGrupo}
          placeholder={exemploHolder}
          style={styles.input}
        />
      </View>

      {/* Campo Tipo de Grupo */}
      <Text style={styles.label}>Tipo de Grupo:</Text>
      <View style={styles.fieldButton}>
        <View style={styles.unitsRow}>
          {consTipoGrupo.map((u) => {
            const selected = tipoGrupo === u.id;
            return (
              <TouchableOpacity
                key={u.id}
                activeOpacity={0.85}
                onPress={() => {
                  setUnidadeMedida(u.id);
                  console.log("Unidade selecionada:", u.id);
                }}
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
      </View>

      {/* Campo Grupo */}
      <View style={styles.field}>
        <Text style={styles.label}>Grupo do Ingrediente:</Text>
        <View style={styles.pickerWrapper}>
          {loadingGrupos ? (
            <View style={styles.loadingContainer}>
               <ActivityIndicator size="small" color="#000" />
               <Text style={{marginLeft: 10}}>Carregando grupos...</Text>
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
                  value={grupo.id} // aqui guardamos o ID
                />
              ))}
            </Picker>
          )}
        </View>
        <Text style={styles.helperText}>
          {grupos.length === 0 && !loadingGrupos ? "Nenhum grupo encontrado." : ""}
        </Text>
      </View>

      {/* Botões */}
      <View style={styles.clearButton}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <FontAwesome size={28} name='arrow-left' color="#333" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.cancelButton]}
          onPress={() => {
             setNomeGrupo("");
             setDescricaoIngrediente("");
             setGrupoIngrediente("");
          }}
        >
          <Text style={styles.cancelText}>Limpar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.okButton]}
          onPress={handleSalvar}
        >
          <Text style={styles.okText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

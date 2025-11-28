import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { styles } from "./styles";

// --- CONFIGURAÇÃO DA API ---
const API_URL = "http://academico3.rj.senac.br/praja";

export default function GrupoCriarScreen() {
  const router = useRouter();

  // Constantes locais
  const consTipoGrupo = [
    { id: "i", nome: "Ingredientes", cod: 1 },
    { id: "f", nome: "Fichas Tecnicas", cod: 2 },
  ];
// Serão adicionados o # antes das opções de cores no picker
  const opcaoCores = [
    { id: "vermelho", nome: "Vermelho", cod: "FF0000" },
    { id: "verde", nome: "Verde", cod: "00FF00" },
    { id: "azul", nome: "Azul", cod: "0000FF" },
    { id: "amarelo", nome: "Amarelo", cod: "FFFF00" },
    { id: "laranja", nome: "Laranja", cod: "FFA500" },
    { id: "roxo", nome: "Roxo", cod: "f509f5de" },
  ]
  
  // --- EFEITO PARA EXEMPLO DINÂMICO ---
  const exemplos = ["Farinhas", "Temperos", "Legumes", "Carnes", "Aves", "Ovos", "Outros"];

  // --- STATES ---
  const [nomeGrupo, setNomeGrupo] = useState("");
  const [corGrupo, setCorGrupo] = useState("");
  const [tipoGrupo, setTipoGrupo] = useState("");
  const [exemploHolder, setExemploHolder] = useState("");
  const [mostrarGaveteiro, setMostrarGaveteiro] = useState(false);

  // Descobre o objeto da cor selecionada (para mostrar o nome)
  const corSelecionada = opcaoCores.find(c => c.id === corGrupo);


  // --- EFEITOS ---
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
    if (!nomeGrupo || tipoGrupo === null) {
      Alert.alert("Campos obrigatórios", "Por favor, preencha o nome o tipo.");
      return;
    }

    const payload = {
      nome: nomeGrupo,
      cor: corGrupo,
      tipo: consTipoGrupo.find(u => u.id === tipoGrupo)?.cod || 0,
    };

    try {
      const response = await fetch(`${API_URL}/api/grupos/criar`, {
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
      <colorBox
        size={30}
        color={opcaoCores[0]}
        
      />
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
                  setTipoGrupo(u.id);
                  console.log("Tipo selecionado:", u.nome);
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

      {/* Escolha de cores */}
      <View style={styles.field}>
        <Text style={styles.label}>Grupo do Ingrediente:</Text>

{/* Falso Picker */}
<TouchableOpacity
  style={styles.fakePicker}
  activeOpacity={0.8}
  onPress={() => setMostrarGaveteiro(!mostrarGaveteiro)}
>
  <Text style={styles.fakePickerText}>
    {corSelecionada ? corSelecionada.nome : "Escolha uma cor"}
  </Text>

  {/* Quadradinho da cor selecionada */}
  {corSelecionada && (
    <colorBox size={20} color={"#" + corSelecionada.cod} />
  )}
</TouchableOpacity>

{/* Gaveteiro (Dropdown) */}
{mostrarGaveteiro && (
  <View style={styles.gaveteiro}>
    {opcaoCores.map((cor) => (
      <TouchableOpacity
        key={cor.id}
        style={styles.itemGaveteiro}
        onPress={() => {
          setCorGrupo(cor.id);
          setMostrarGaveteiro(false);
        }}
      >
        <colorBox size={30} color={"#" + cor.cod} />
        <Text style={{ marginLeft: 8 }}>{cor.nome}</Text>
      </TouchableOpacity>
    ))}
  </View>
)}
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
             setTipoGrupo("");
             setCorGrupo("");
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

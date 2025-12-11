import { CaixaDeCor } from "@/components/CaixaDeCor";
import { PrimaryButton } from "@/components/PrimaryButton";
import { COLOR as c } from '@/constants/constantsStyles';
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
// --- CONFIGURAÇÃO DA API ---
const API_URL = "http://academico3.rj.senac.br/praja";

export default function GrupoCriarScreen() {
  const router = useRouter();

  // Constantes locais
  const consTipoGrupo = [
    { id: "1", nome: "Ingredientes", cod: 1 },
    { id: "2", nome: "Fichas Tecnicas", cod: 2 },
  ];
  // Serão adicionados o # antes das opções de cores no picker
  const opcaoCores = [
    { id: "vermelho", nome: "Vermelho", cod: "FF0000" },
    { id: "verde", nome: "Verde", cod: "00FF00" },
    { id: "azul", nome: "Azul", cod: "0000FF" },
    { id: "amarelo", nome: "Amarelo", cod: "FFFF00" },
    { id: "laranja", nome: "Laranja", cod: "FFA500" },
    { id: "ciano", nome: "Ciano", cod: "00FFFF" },
    { id: "rosa", nome: "Rosa", cod: "FFC0CB" },
    { id: "magenta", nome: "Magenta", cod: "FF00FF" },
  ]
  // -

  // --- EFEITO PARA EXEMPLO DINÂMICO ---
  const exemplos = ["Farinhas", "Temperos", "Legumes", "Carnes", "Aves", "Ovos", "Outros"];

  // --- STATES ---
  const [nomeGrupo, setNomeGrupo] = useState("");
  const [corGrupo, setCorGrupo] = useState("");
  const [tipoGrupo, setTipoGrupo] = useState("");
  const [exemploHolder, setExemploHolder] = useState("");

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
    }, 5000);

    // --- Cleanup do timer ---
    return () => clearInterval(interval);

  }, [nomeGrupo]);


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
    console.log("Payload a ser enviado:", payload);

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
              <View style={styles.header}>
                  <Text style={styles.title}>Cadastro de Grupo</Text>
                  <Text style={styles.subtitle}>
                      Com os Grupos voce facilitará a busca por Ingredientes e Fichas Técnicas.
                  </Text>
                </View>
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
                  {u.nome}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Escolha de cores */}
      <View style={styles.field}>
        <Text style={styles.label}>Cor do Grupo:</Text>

        {/* Carrossel Horizontal de Cores */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginVertical: 10 }}
        >
          {opcaoCores.map((cor) => {
            const selecionada = corGrupo === cor.id;

            return (
              <TouchableOpacity
                key={cor.id}
                style={{
                  marginRight: 12,
                  padding: 4,
                  borderRadius: 10,
                  borderWidth: selecionada ? 3 : 1,
                  borderColor: selecionada ? "#2962FF" : "#ccc",
                }}
                onPress={() => setCorGrupo(cor.cod)}
              >
                <CaixaDeCor size={45} color={`#${cor.cod}`} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>


        {/* Mostrar nome da cor selecionada (não está aparecendo) */}
        {corSelecionada && (
          <Text style={styles.helperText}>
            Cor selecionada: <Text style={{ fontWeight: "600" }}>{corSelecionada.nome}</Text>
          </Text>
        )}

      </View>

      {/* Botões */}
      {/* Botoes de ação */}
      <View style={styles.actions}>
        <View style={styles.actionItem}>
          <PrimaryButton
            name="Voltar"
            onPress={() => router.back()}
            buttonColor={c.card}
            textColor={c.preto}
            iconName="arrow-back"
            isOutlined
          />
        </View>
        <View style={styles.actionItem}>
          <PrimaryButton
            name="Limpar"
            onPress={() => {
              setNomeGrupo("");
              setCorGrupo("");
            }}
            buttonColor={c.warn}
            textColor={c.preto}
            iconName="refresh"
          />
        </View>
        <View style={styles.actionItem}>
          <PrimaryButton
            name="Salvar"
            onPress={handleSalvar}
            buttonColor={c.primary}
            textColor={c.branco}
            iconName="checkmark-circle"
          />
        </View>
      </View>
    </View>
  );
}




export const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    padding: 20, backgroundColor: c.background,
    justifyContent: "center"
  },
        header: {
    gap: 6,
    marginBottom: 20
  },
  title: { 
    fontSize: 24, 
    fontWeight: "800", 
    color: c.preto,
  },
  subtitle: { 
    fontSize: 14, 
    color: c.gray,
    lineHeight: 20,
  },
  field:
  {
    marginBottom: 20

  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: c.gray,
    borderRadius: 8,
    padding: 10,
    fontSize: 16
  },
  multiline: {
    height: 80,
    textAlignVertical: 'top'
  },
  unitsRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  fieldButton: {
    marginBottom: 20,
    marginHorizontal: 'auto',
    width: '80%',
  },
  unitButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: c.softGray,
    borderRadius: 180,
    minWidth: 120,
    alignItems: 'center',
  },
  unitButtonSelected: {
    backgroundColor: c.info,
    borderColor: c.blue,
  },
  unitText: {
    color: c.preto,
  },
  unitTextSelected: {
    color: c.branco,
    fontWeight: 'bold'
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: c.gray,
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'center'
  },
  picker: {
    height: 55,
    width: '100%'
  },
  helperText: {
    fontSize: 12,
    color: c.info,
    marginTop: 5
  },
  clearButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40
  },
  backButton: {
    padding: 10
  },
  actionButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8
  },
  cancelButton: {
    backgroundColor: '#ccc'
  },
  cancelText: {
    color: '#333',
    fontWeight: 'bold'
  },
  okButton: {
    backgroundColor: c.verde,
  },
  okText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  actions: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
    marginBottom: 10,
  },
  actionItem: {
    flex: 1,
  },

});
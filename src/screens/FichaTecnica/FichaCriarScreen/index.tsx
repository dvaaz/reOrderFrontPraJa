import { Picker } from "@react-native-picker/picker";
import React from "react";
import {
    FlatList,
    Modal,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View
} from "react-native";
// self-made
import { PrimaryButton } from "@/components/PrimaryButton";
import { COLOR, FONT_SIZE } from "@/constants/constantsStyles";
import { Plus } from "@/utils/PlusIcon";
import { Tooltip } from 'react-native-paper';
import { styles } from "./styles";

export default function fichaCriar() {
    type IngredienteProps = {
        id: string;
        name: string;
        grupo: string;
    };

    const gruposMock = [
        { id: "cereal", name: "Vegetarianos" },
        { id: "frango", name: "Aves" },
        { id: "bovino", name: "Carnes" },
        { id: "legumes", name: "Sobremesas" }
    ];

    const grupoIngredientesMock = [
        { id: "1", name: "farinaceos" },
        { id: "2", name: "laticinios" },
        { id: "3", name: "ovos" },
        { id: "4", name: "temperos" },
        { id: "5", name: "outros" },
    ];
    const ingredienteMock: IngredienteProps[] = [
        { id: "1", name: "Sal", grupo: "5" },
        { id: "2", name: "Açúcar", grupo: "5" },
        { id: "3", name: "Farinha", grupo: "1" },
        { id: "4", name: "Ovo", grupo: "3" },
        { id: "5", name: "Leite", grupo: "2" },
        { id: "6", name: "Manteiga", grupo: "2" },
        { id: "7", name: "Fermento", grupo: "5" },
        { id: "8", name: "Baunilha", grupo: "4" },
        { id: "9", name: "Oregano", grupo: "4" },
        { id: "10", name: "Gemas", grupo: "3" },
        { id: "11", name: "Claras", grupo: "3" },
        { id: "12", name: "Canela", grupo: "4" },
    ]

    // Hooks
    const [nomeFicha, setNomeFicha] = React.useState("");               // Nome da Ficha
    const [descricaoFicha, setDescricaoFicha] = React.useState(" ");     // Descricao da Ficha(não obrigatorio)
    const [grupoFicha, setGrupoFicha] = React.useState("");             // Grupo de Ficha
    // lista de ingredientes disponíveis (inicialmente todos)
    const [listaIngredientes, setListaIngredientes] = React.useState<IngredienteProps[]>(ingredienteMock);
    // ingredientes selecionados para a ficha
    const [ingredienteSelecionado, setIngredienteSelecionado] = React.useState<IngredienteProps[]>([]);
    // grupo selecionado para filtrar ingredientes
    const [grupoIngredientesSelecionado, setGrupoIngredientesSelecionado] = React.useState<string>("");

    const [modalVisible, setModalVisible] = React.useState(false); // setup do Modal

    // Métodos
    // 

    // }

    return (
        <ScrollView
            nestedScrollEnabled={true}>
            <View style={styles.container}>
                <View style={styles.field}>
                    <Text style={styles.label}>Nome da Ficha Tecnica:</Text>
                    <TextInput
                        value={nomeFicha}
                        onChangeText={setNomeFicha}
                        placeholder="Digite o nome da Ficha Tecnica"
                        style={styles.input}
                    />
                </View>

                <View style={styles.addDescriptionField}>
                    <Tooltip title={"Você também pode adicionar uma descrição após ficha estar pronta"}>
                        <Text style={styles.label}> Adicionar descrição à Ficha Tecnica </Text>
                    </Tooltip>

                    <Pressable style={styles.label}
                        onPress={() => setModalVisible(true)}
                        onPressOut={() => setModalVisible(false)}
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
                {/* Seleção de Grupo */}
                <View style={styles.field}>
                    <Text style={styles.label}>Selecione o grupo para a Ficha Tecnica:</Text>
                    <View style={styles.pickerWrapper}>
                        <Picker
                            selectedValue={grupoFicha}
                            onValueChange={(value) => setGrupoFicha(value)}
                            style={styles.picker}
                        >
                            <Picker.Item label="Escolha um grupo" value="" />
                            {gruposMock.map((g) => (
                                <Picker.Item key={g.id} label={g.name} value={g.id} />
                            ))}
                        </Picker>
                    </View>
                </View>

                <View style={styles.field}>
                    <Text style={styles.label}>Selecione os ingredientes para a Ficha Técnica:</Text>
                    {/* será necessário calibrar uma caixa de tamanho fixo - done*/}

                    <View style={styles.centeredView}>

                        <Picker
                            selectedValue={grupoIngredientesSelecionado}
                            // alterar para se nenhum grupo selecionado, mostrar todos os ingredientes disponíveis (buscar lógica para isso)
                            onValueChange={(value) => {
                                setGrupoIngredientesSelecionado(value);
                                // Filtra somente os ingredientes deste grupo
                                // e exclui os já selecionados
                                // como fazer quando entrar o api?
                                const filtered = ingredienteMock.filter(
                                    (i) =>
                                        i.grupo === value &&
                                        !ingredienteSelecionado.some(sel => sel.id === i.id)
                                );

                                setListaIngredientes(filtered); // :-)
                            }}
                            style={[styles.picker, { width: '95%' }]}
                        >
                            <Picker.Item
                                // ocultar label quando picker estiver aberto

                                label="Grupo de Ingredientes" value="" />
                            {grupoIngredientesMock.map((g) => (
                                <Picker.Item key={g.id} label={g.name} value={g.id} />
                            ))}
                        </Picker>
                        <View style={styles.box}>

                            <FlatList
                                data={listaIngredientes}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => (
                                    <Pressable
                                        onPress={() => {
                                            // remove da lista de disponíveis
                                            setListaIngredientes(prev =>
                                                prev.filter(i => i.id !== item.id)
                                            );

                                            // adiciona na lista de selecionados
                                            setIngredienteSelecionado(prev => [...prev, item]);
                                        }}
                                    >
                                        <Text>{item.name}</Text>
                                    </Pressable>
                                )}
                            />
                        </View>

                        <Text style={styles.info}>Selecionados</Text>
                        <View style={styles.box}>

                            <FlatList
                                data={ingredienteSelecionado}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => <Text>{item.name}</Text>}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.clearButton}>

                    <PrimaryButton
                        name="Cancelar"
                        onPress={() => setModalVisible(false)}
                        buttonColor={COLOR.danger}
                        textColor={COLOR.branco}

                    />
                    <PrimaryButton
                        name="Confirmar"
                        style={[styles.actionButton, styles.okButton]}
                        onPress={() => {
                            // enviar dados para API. Necessario criar um endpoint para registrar a ficha e seus ingredientes sem medidas e descricoes
                            const payload = {
                                nome: nomeFicha,
                                descricao: descricaoFicha,
                                listaIngredientes: ingredienteSelecionado,
                                grupo: grupoFicha,
                            };
                            console.log("submit", payload);
                        }}
                    >
                    </PrimaryButton>

                </View>
            </View>

        </ScrollView>

    )

}
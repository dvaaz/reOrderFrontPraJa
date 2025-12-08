import { Text, View } from 'react-native';



export default function FichaIncluirIngredienteScreen() {
// constantes de estado obtidas pela API
  const [gruposIngredientes, setGruposIngredientes] = useState([]);
  const [ingredientes, setIngredientes] = useState([]);

// constantes importantes para salvar ingrediente na ficha tecnica
  const [unidadeFicha, setUnidadeFicha] = useState("");
  const [quantidadeFicha, setQuantidadeFicha] = useState("");
  const [descricaoIngrediente, setDescricaoIngrediente] = useState("");
  // constante de lista de ingredientes selecionados com suas quantidades e unidades
  const [ingredienteSelecionado, setIngredienteSelecionado] = useState([]);

// controle de modal
  const [modalIngredienteVisible, setModalIngredienteVisible] = useState(false);

    return (
        <View>
            <Text>Ficha Incluir Ingrediente Screen</Text>
        </View>
    );
};

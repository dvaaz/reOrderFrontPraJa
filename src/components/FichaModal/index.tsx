import apiClient from "@/api/apiClient";
import { UnidadeMedida } from "@/enums/unidadeMedidaEnum";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Modal,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { styles } from "./styles.js";

type IngredienteEMFichaTecnicaDTOResponse = {
  id: number;
  idIngrediente: number;
  nomeIngrediente: string;
  detalhe?: string | null;
  quantidade: number;
  unidadeMedida: number;
};

type FichaDetailDTO = {
  id: number;
  nome: string;
  descricao?: string | null;
  ingredientes: IngredienteEMFichaTecnicaDTOResponse[];
};

type Props = {
  visible: boolean;
  fichaId: number | null;
  onClose: () => void;
};


export default function FichaModal({ visible, fichaId, onClose }: Props) {
  const [loading, setLoading] = useState(false);
  const [ficha, setFicha] = useState<FichaDetailDTO | null>(null);

  useEffect(() => {
    if (visible && fichaId != null) {
      fetchFichaDetail(fichaId);
    } else {
      setFicha(null);
    }
  }, [visible, fichaId]);

  const fetchFichaDetail = async (id: number) => {
    setLoading(true);
    try {
      const res = await apiClient.get(`/api/ingredientefichatecnica/buscar/${id}`);
      setFicha(res.data);
    } catch (err) {
      console.error("Erro ao buscar ficha:", err);
      Alert.alert("Erro", "Não foi possível carregar os detalhes da ficha.");
      setFicha(null);
    } finally {
      setLoading(false);
    }
  };

  const renderIngrediente = ({ item }: { item: IngredienteEMFichaTecnicaDTOResponse }) => {
    const unidade = UnidadeMedida[item.unidadeMedida] ?? String(item.unidadeMedida);
    return (
      <View style={styles.ingredienteContainer}>
        <View style={styles.row}>
          <Text style={styles.nomeIngrediente}>{item.nomeIngrediente}</Text>
          <View style={styles.quantidadeWrapper}>
            <Text style={styles.quantidadeText}>
              {item.quantidade} {unidade}
            </Text>
          </View>
        </View>

        {item.detalhe ? (
          <Text style={styles.detalheText}>{item.detalhe}</Text>
        ) : (
          <Text style={styles.detalheTextPlaceholder}>Sem instruções adicionais</Text>
        )}
      </View>
    );
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
        <View style={styles.backdrop}>
          <View style={styles.modalBox}>
            {loading ? (
              <View style={styles.loadingBox}>
                <ActivityIndicator size="large" />
                <Text style={styles.loadingText}>Carregando...</Text>
              </View>
            ) : ficha ? (
              <>
                <Text style={styles.title} numberOfLines={2}>
                  {ficha.nome}
                </Text>

                {ficha.descricao ? (
                  <Text style={styles.description}>{ficha.descricao}</Text>
                ) : null}

                <FlatList
                  data={ficha.ingredientes}
                  keyExtractor={(it) => String(it.id)}
                  renderItem={renderIngrediente}
                  contentContainerStyle={styles.listContent}
                  ItemSeparatorComponent={() => <View style={styles.separator} />}
                />

                <View style={styles.footer}>
                  <TouchableOpacity style={styles.okButton} onPress={onClose}>
                    <Text style={styles.okButtonText}>OK</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <View style={styles.emptyBox}>
                <Text style={styles.emptyText}>Nenhum detalhe disponível.</Text>
                <TouchableOpacity style={styles.okButton} onPress={onClose}>
                  <Text style={styles.okButtonText}>OK</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
    </Modal>
  );
}
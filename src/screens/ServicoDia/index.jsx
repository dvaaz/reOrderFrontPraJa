import { GroupPlates } from "@/components/GroupPlates";
import { COLOR } from "@/constants/constantsStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";


const getRandomQuantity = () => Math.floor(Math.random() * 8) + 1;

export default function ServicoDia() {
 const API_URL = "http://academico3.rj.senac.br/praja";
 const buscarPratos = API_URL +"/api/grupos/listar/ativos";

// ------- STATES -------
 const [groups, setGroups] = useState([]);
 const [loading, setLoading] = useState(true);

// ------- EFEITOS -------

 useEffect(() =>{
  fetchDishes();
 },[]);

const fetchDishes = async () => {
  try {
    setLoading(true);
    const response = await fetch(buscarPratos);

    if (response.ok) {
      const data = await response.json();
      const gruposComPratos = data
      .filter(grupo => grupo.pratos && grupo.pratos.length > 0)
              .map(grupo => ({
          ...grupo,
          pratos: grupo.pratos.map(p => ({
            id: p.id,
            nome: p.nome,          // converte "nome" para "name"
            descricao: p.descricao,
            quantity: getRandomQuantity() // gera quantidade aleatória
          }))
              }));
      setGroups(gruposComPratos);
    }

  } catch (error) {
    console.error("Erro ao buscar pratos:", error);
  } finally {
    setLoading(false);
  }
}

  //mock da api
  // const groups = [
  //   {
  //     groupName: "Cortes Bovinos",
  //     groupColor: COLOR.primary,
  //     dishes: [
  //       { name: "Fraldinha ao Pomodoro", quantity: 23 },
  //       { name: "Bife Oswaldo Aranha", quantity: 27 },
  //       { name: "Filé Mignon na Manteiga", quantity: 31},
  //       { name: "Ossobuco ao Molho Madeira", quantity: 19 },
  //     ],
  //   },
  //   {
  //     groupName: "Massas",
  //     groupColor: "#4EA8FF",
  //     dishes: [],
  //   },
  //   {
  //     groupName: "Pratos Veganos",
  //     groupColor: "#3AC5A9",
  //     dishes: [],
  //   },
  //   {
  //     groupName: "Sobremesas",
  //     groupColor: "#6D8BFF",
  //     dishes: [
  //       { name: "Pudim de Cassis", quantity: 23 },
  //       { name: "Mousse de Maracujá", quantity: 27 },
  //       { name: "Torta de Abacaxi", quantity: 12},
  //       { name: "Romeu e Julieta", quantity: 19 },
  //       { name: "Torta de Limão", quantity: 7 },
  //       { name: "Cheesecake de Frutas Vermelhas", quantity: 4 },
  //     ],
  //   },
  // ];

  const totalPratos = groups.reduce((acc, g) => acc + g.pratos.length, 0);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <View style={styles.badge}>
          <Ionicons name="sparkles-outline" size={16} color={COLOR.primaryDark} />
          <Text style={styles.badgeText}>Serviço do dia</Text>
        </View>
        <Text style={styles.title}>Pratos em destaque</Text>
        <Text style={styles.subtitle}>
          Pratos disponíveis para o serviço do dia.
        </Text>
        <View style={styles.heroStats}>
          <View style={styles.statCard}>
            <Ionicons name="restaurant" size={18} color={COLOR.primaryDark} />
            <Text style={styles.statNumber}>{totalPratos}</Text>
            <Text style={styles.statLabel}>Pratos cadastrados</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="time-outline" size={18} color={COLOR.primaryDark} />
            <Text style={styles.statNumber}>Hoje</Text>
            <Text style={styles.statLabel}>Cardápio ativo</Text>
          </View>
        </View>
      </View>

      {groups.map((g, idx) => (
        <GroupPlates
          key={`${g.id}-${idx}`}
          groupName={g.nome}
          groupColor={g.cor.startsWith("#") ? g.cor : `#${g.cor}`}
          dishes={g.pratos}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.background,
  },
  content: {
    paddingHorizontal: 18,
    paddingBottom: 24,
    paddingTop: 10,
    gap: 12,
  },
  hero: {
    backgroundColor: COLOR.card,
    borderRadius: 18,
    padding: 18,
    gap: 10,
    shadowColor: COLOR.primaryDark,
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 14,
    elevation: 4,
    borderWidth: 1,
    borderColor: COLOR.softtGray,
  },
  badge: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: COLOR.primarySoft,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  badgeText: {
    color: COLOR.primaryDark,
    fontWeight: "700",
    fontSize: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: COLOR.preto,
  },
  subtitle: {
    fontSize: 14,
    color: COLOR.gray,
    lineHeight: 20,
  },
  heroStats: {
    flexDirection: "row",
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLOR.softPeach,
    padding: 12,
    borderRadius: 14,
    gap: 4,
    borderWidth: 1,
    borderColor: COLOR.background2,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "800",
    color: COLOR.primaryDark,
  },
  statLabel: {
    fontSize: 12,
    color: COLOR.gray,
  },
});

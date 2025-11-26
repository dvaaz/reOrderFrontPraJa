import { GroupPlates } from "@/components/GroupPlates";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ServicoDia() {
  //mock da api
  const groups = [
    {
      groupName: "Cortes Bovinos",
      groupColor: "#E57373", // vermelho
      dishes: [
        { name: "Fraldinha ao Pomodoro", quantity: 23 },
        { name: "Bife Oswaldo Aranha", quantity: 27 },
        { name: "Filé Mignon na Manteiga", quantity: 31},
        { name: "Ossobuco ao Molho Madeira", quantity: 19 },
      ],
    },
    {
      groupName: "Massas",
      groupColor: "#FFD54F", // amarelo
      dishes: [
        // aqui virao  os pratos da api
      ],
    },
    {
      groupName: "Pratos Veganos",
      groupColor: "#81C784", // verde
      dishes: [
        // aqui virao  os pratos da api
      ],
    },
    {
      groupName: "Sobremesas",
      groupColor: "#F48FB1", // rosa
      dishes: [
        { name: "Pudim de Cassis", quantity: 23 },
        { name: "Mousse de Maracujá", quantity: 27 },
        { name: "Torta de Abacaxi", quantity: 12},
        { name: "Romeu e Julieta", quantity: 19 },
        { name: "Torta de Limão", quantity: 7 },
        { name: "Cheesecake de Frutas Vermelhas", quantity: 4 },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pratos do Dia</Text>

      {groups.map((g, idx) => (
        <GroupPlates
          key={`${g.groupName}-${idx}`}
          groupName={g.groupName}
          groupColor={g.groupColor}
          dishes={g.dishes}
        />
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 16
  },
  title: { 
    fontSize: 22, 
    fontWeight: "700", 
    marginTop: 16, 
    marginBottom: 12, 
    color: "#333" 
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#e0e0e0",
    backgroundColor: "#fff",
  },
    navItem: { 
      alignItems: "center" },
    navText: { 
      fontSize: 12, 
      color: "#333", 
      marginTop: 4 },
});

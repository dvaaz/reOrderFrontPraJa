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
        { name: "Fraldinha ao Pomodoro", quantity: 23 , id: 10},
        { name: "Bife Oswaldo Aranha", quantity: 27 , id: 11},
        { name: "Filé Mignon na Manteiga", quantity: 31 , id: 12},
        { name: "Ossobuco ao Molho Madeira", quantity: 19 , id: 13},
      ],
    },
    {
      groupName: "Peixes e Frutos do Mar",
      groupColor: "#64B5F6", // azul
      dishes: [
        { name: "Bacalhau na Lagoa", quantity: 15 , id: 9},
        { name: "Salmão Grelhado", quantity: 15 , id: 14},
        { name: "Moqueca Baiana", quantity: 22 , id: 15},
        { name: "Camarão na Moranga", quantity: 9 , id: 16},
        { name: "Bacalhau à Brás", quantity: 14 , id: 17},
      ],
    }
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
        { name: "Pudim de Cassis", quantity: 23, id: 6 },
        { name: "Mousse de Maracujá", quantity: 27 , id: 18},
        { name: "Torta de Abacaxi", quantity: 12 , id: 19},
        { name: "Romeu e Julieta", quantity: 19 , id: 20},
        { name: "Torta de Limão", quantity: 7 , id: 21},
        { name: "Cheesecake de Frutas Vermelhas", quantity: 4 , id: 22},
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pratos do Dia</Text>

      {groups.map((g, idx) => (
        <GroupPlates
          onPress={() => {
            // abrir modal
          }}
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

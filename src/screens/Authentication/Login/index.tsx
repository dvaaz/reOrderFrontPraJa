import { PrimaryButton } from "@/components/PrimaryButton";
import { COLOR } from "@/constants/constantsStyles";
import { ImagemFundo } from "@/utils/ImagemFundo";
import { useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export default function Login() {
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [erroTelephone, setErroTelephone] = useState("");
  const [erroPassword, setErroPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <ImagemFundo />
        <Text style={styles.boxTitle}>Login</Text>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            value={telephone}
            keyboardType="phone-pad"
            maxLength={11}
            onChangeText={(value) => {
              setTelephone(value);
              if (value.length < 11) {
                setErroTelephone("Campos invÇ­lidos.");
              } else {
                setErroTelephone("");
              }
            }}
          />
          <Text>{erroTelephone}</Text>

          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            secureTextEntry
            onChangeText={(value) => {
              setPassword(value);
              if (value.length < 6) {
                setErroPassword("Campos invÇ­lidos.");
              } else {
                setErroPassword("");
              }
            }}
          />
          <Text>{erroPassword}</Text>
        </View>

        <View>
          <PrimaryButton
            name="Entrar"
            style={[styles.actionButton, styles.okButton]}
            textColor={COLOR.branco}
            width={80}
            onPress={() => {
              if (telephone === "" || password === "") {
                setError("Por favor, preencha todos os campos.");
                return;
              }
              // TODO: adicionar autenticaÇõÇœo real aqui
            }}
          />
        </View>

        {error !== "" && (
          <Text style={{ color: "red", marginTop: 10 }}>{error}</Text>
        )}

        <Text style={[styles.newAccountText, { color: COLOR.preto }]}>
          Caso nÇœo possua uma conta,
          <Text
            style={styles.newAccountText}
            onPress={() =>
              Alert.alert(
                "Em breve",
                "Fluxo de cadastro ainda não foi implementado."
              )
            }
          >
            {" "}
            clique aqui
          </Text>
        </Text>
      </View>
    </View>
  );
}

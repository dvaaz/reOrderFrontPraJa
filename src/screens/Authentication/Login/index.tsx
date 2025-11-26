import { PrimaryButton } from "@/components/PrimaryButton";
import { COLOR } from "@/constants/constantsStyles";
import { ImagemFundo } from "@/utils/ImagemFundo";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Text,
    TextInput,
    View
} from "react-native";
import { styles } from "./styles";

export default function Login() {
    const router = useRouter();
    // estados do componente
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
                <TextInput   style={styles.input} 
                placeholder="Telefone"
                    value={telephone}
                    keyboardType="phone-pad"
                    maxLength={11}
                                      onChangeText={() => {
                        if (telephone.length < 11 || telephone.length === 0) {
                            setErroTelephone("Campos inválidos.");
                        } else {setTelephone(telephone)}
                    }}
                />
                <Text>{erroTelephone}</Text>


                <TextInput style={styles.input}
                placeholder="Senha"
                    value={password}
                    secureTextEntry={true}                
                    onChangeText={() => {
                        if (password.length === 0 || password.length < 6) {
                            setErroPassword("Campos inválidos.");
                        } else { setPassword(password) }
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
                        // verifica se os campos não estão vazios
                        if (telephone === "" || password === "") {
                            setError("Por favor, preencha todos os campos.");
                            return;
                        }
                        // lógica de autenticação aqui
                        // se falhar, definir mensagem de erro
                        // setError("Credenciais inválidas. Tente novamente.");
                    

                    }}
                    />
                    </View>

                {error !== "" && (
                    <Text style={{ color: "red", marginTop: 10 }}>{error}</Text>
                )}

                <Text style={[styles.newAccountText, {color: COLOR.preto}]}>Caso não possua uma conta,
                <Text style={styles.newAccountText}
                onPress={() => {router.navigate("./registration")}}> clique aqui
                </Text>
                </Text>
                </View>
            </View>
        )
}


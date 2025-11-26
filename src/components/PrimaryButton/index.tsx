import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps
} from "react-native";
import { styles } from "./styles";

type PrimaryButtonProps = {
  name: string;
  buttonColor?: string;
  textColor?: string;
  fontSize?: number;
  height?: number;
  width?: number;
  

} & TouchableOpacityProps;

export const PrimaryButton = ({ name, buttonColor, ...rest }: PrimaryButtonProps) => {
    return (

        <TouchableOpacity
            style={[styles.categoryButton, { backgroundColor: buttonColor }]}
            {...rest}
        >
            <Text style={[styles.buttonText, {color: rest.textColor}, {fontSize: rest.fontSize} ]}>
            {name}</Text>
      </TouchableOpacity>

    );
};

import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    View
} from "react-native";
import { COLOR } from "@/constants/constantsStyles";
import { styles } from "./styles";

type PrimaryButtonProps = {
  name: string;
  buttonColor?: string;
  textColor?: string;
  fontSize?: number;
  height?: number;
  width?: number;
  iconName?: keyof typeof Ionicons.glyphMap | string;
  iconColor?: string;
  isOutlined?: boolean;
} & TouchableOpacityProps;

export const PrimaryButton = ({
  name,
  buttonColor,
  textColor,
  fontSize,
  height,
  width,
  iconName,
  iconColor,
  isOutlined = false,
  style,
  ...touchableProps
}: PrimaryButtonProps) => {
  const baseColor = buttonColor ?? COLOR.primary;
  const borderColor = isOutlined
    ? baseColor === COLOR.card
      ? COLOR.softtGray
      : baseColor
    : "transparent";
  const backgroundColor = isOutlined ? COLOR.card : baseColor;
  const resolvedTextColor = textColor ?? (isOutlined ? baseColor : COLOR.branco);

    return (
      <TouchableOpacity
        style={[
          styles.categoryButton,
          {
            backgroundColor,
            height: height ?? 52,
            width: width ?? "100%",
            borderColor: borderColor,
          },
          isOutlined && styles.outlined,
          style
        ]}
        activeOpacity={0.9}
        {...touchableProps}
      >
        <View style={styles.content}>
          {iconName ? (
            <Ionicons
              name={iconName as any}
              size={20}
              color={iconColor ?? resolvedTextColor}
              style={styles.icon}
            />
          ) : null}
          <Text
            style={[
              styles.buttonText,
              {
                color: resolvedTextColor,
                fontSize: fontSize ?? 15,
              },
            ]}
          >
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    );
};

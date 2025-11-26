import * as React from 'react';
import { IconButton, Tooltip } from 'react-native-paper';


type ToolTipProps = {
    message: string;
    img: string;
};

export const ToolTip = ({ message, img }: ToolTipProps) => {
    return (
        <Tooltip
            title={message}>
            <IconButton
                icon={img}
                size={16}
                onPress={() => {}}
                             
                // ajuste de posicionamento pode ser necessário dependendo do contexto
                style={{ marginTop: -4, marginLeft: 4 }}
            />
        </Tooltip>
    );
}
import { showMessage } from "react-native-flash-message"
import { Colors } from "../Colors"


export const ShowError = (message) => {
    showMessage({
        message: message,
        type: 'default',
        backgroundColor: Colors.warning,
        color: colors.white
    })
}

export const showSuccess = (message) => {
    showMessage({
        message: message,
        type: 'success',
        color: Colors.white
    })
}
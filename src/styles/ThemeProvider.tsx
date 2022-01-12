import { createTheme } from "@mui/material/styles";

const GroupUpTheme = createTheme({
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    padding: 24
                }
            }
        }
    },
    spacing: [
        8, 12, 16, 24, 32, 48, 64, 96
    ]
})

export default GroupUpTheme
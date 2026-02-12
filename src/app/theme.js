const { createTheme } = require("@mui/material");

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (color) => augmentColor({ color: { main: color }});

const theme = createTheme({
    palette: {
        mode: 'dark',
        github: createColor("#333333"),
        linkedin: createColor("#0A66C2"),
    }
});

module.exports = theme;
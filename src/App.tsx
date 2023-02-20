import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme.ts";
import Header from "./components/header/Header.tsx";
import Main from "./components/Main.tsx";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />

        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;

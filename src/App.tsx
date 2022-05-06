import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/globalStyles";
import dark from './style/themes/dark'
import light from './style/themes/light'
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";


function App() {

  return (
    <ThemeProvider theme={dark ? dark : light}>
      {/* <Header /> */}
      <Main />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

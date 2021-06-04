import GlobalStyle from "./config/globalStyles";
import Routes from "./config/routes";
import "antd/dist/antd.css";

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Routes />
  </>
);

export default App;
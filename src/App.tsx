import "./App.css";
import { Main } from "./components/main/Main";
import { FlowContextProvider } from "./components/context/FlowContext";

function App() {
  return (
    <FlowContextProvider>
      <Main />
    </FlowContextProvider>
  );
}

export default App;

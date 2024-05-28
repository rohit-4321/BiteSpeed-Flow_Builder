import "./App.css";
import { Main } from "./components/main/Main";
import { FlowContextProvider } from "./components/context/BuilderFlowContext";

function App() {
  return (
    <FlowContextProvider>
      <Main />
    </FlowContextProvider>
  );
}

export default App;

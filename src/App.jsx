import Header from "./components/Header/Header.jsx";
import { CoreConseptWrapper } from "./components/CoreConceptWrapper.jsx";
import { Example } from "./components/Example.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConseptWrapper />
        <Example />
      </main>
    </>
  );
}

export default App;

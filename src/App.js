import Title from "./components/Title";
import Setup1 from "./examples/1-first-request";
import Setup2 from "./examples/2-headers";
import Setup3 from "./examples/3-post-request";
import Setup4 from "./examples/4-global-instance";
import Setup5 from "./examples/5-custom-instance";
import Setup6 from "./examples/6-interceptors";

function App() {
  return (
    <main>
      <Title />
      <Setup4 />
    </main>
  );
}

export default App;

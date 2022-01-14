import Formularios from "./components/Formularios";
import AppRouter from "./routers/AppRouter";
import { obtener_LocalStorage } from "./utils";
let key = "fechas"

function App() {
  obtener_LocalStorage(key);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="px-4 py-5 my-5 text-cente">             
            <AppRouter />
            <hr/>
            <Formularios />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

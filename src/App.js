import "./App.css";
import CardComponent from "./Component/CardComponent";

import { Imagedata } from "./Component/ImageData";

function App() {
  return (
    <div>
      <CardComponent data={Imagedata} />
    </div>
  );
}

export default App;

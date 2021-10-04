import github from "./db.js";
import { useEffect , useState } from "react";
import query from "./Query.js";

function App() {

let [userName, setUserName] = useState('');



useEffect(() => {
   fetch(github.baseURL, {
     method: "POST",
     headers: github.headers,
     body: JSON.stringify(query),
   })
    .then(response => response.json())
    .then( (data) => {
      setUserName(data.data.viewer.name)
    console.log(data);
  })
    .catch((err) => {
    console.log(err);
  });
});

  return (
    <div className="App container mt-5">
      <h1 className="text-primary">
        <i className="bi bi-diagram-2-fill"></i>
         Repos
      </h1>
      <p>Hey there {userName}</p>
    </div>
  );
}

export default App;

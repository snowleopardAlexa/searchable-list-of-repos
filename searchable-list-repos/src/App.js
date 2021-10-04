import github from "./db.js";
import { useEffect , useState, useCallback } from "react";
import query from "./Query.js";
import RepoInfo from "./RepoInfo";

function App() {

let [userName, setUserName] = useState('');
let [repoList, setRepoList] = useState(null);
let [pageCount, setPageCount] = useState("slides");
let [queryString, setQueryString] = useState("slides");
let [totalCount, setTotalCount] = useState("slides");

const fetchData = useCallback( () => {
  fetch(github.baseURL, {
    method: "POST",
    headers: github.headers,
    body: JSON.stringify(query),
  })
   .then(response => response.json())
   .then( (data) => {
     const viewer = data.data.viewer;
     const repos = data.data.search.nodes;
     setUserName(viewer.name);
     setRepoList(repos);
 })
   .catch((err) => {
    console.log(err);
 });
}, []);

useEffect(() => {
  fetchData();
}, [fetchData]);

  return (
    <div className="App container mt-5">
      <h1 className="text-primary">
        <i className="bi bi-diagram-2-fill"></i>
         Repos
      </h1>
      <p>Hey there {userName}</p>

      {
        repoList && (
          <ul className="list-group list-group-flash">
            {
              repoList.map((repo) => (
                <RepoInfo key={repo.id} repo={repo} />
              ))}
          </ul>
        )}
    </div>
  );
}

export default App;

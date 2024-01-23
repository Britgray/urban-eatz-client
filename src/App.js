  import "./App.css";
  import Home from "./Home";
  import ClientsView from "./component/client/ClientsView";
  import NavBar from "./Common/NavBar";
  import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
  import AddClient from "./component/client/AddClient";
  import EditClient from "./component/client/EditClient";
  import ClientProfile from "./component/client/ClientProfile";
  
  function App() {
    return (
      <main className="container mt-5">
        <Router>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={<Home />}></Route>
            <Route
              exact
              path="/view-clients"
              element={<ClientsView />}></Route>
            <Route
              exact
              path="/add-clients"
              element={<AddClient />}></Route>
            <Route
              exact
              path="/edit-client/:id"
              element={<EditClient />}></Route>
            <Route
              exact
              path="/client-profile/:id"
              element={<ClientProfile />}></Route>
          </Routes>
        </Router>
      </main>
    );
  }
  
  export default App;




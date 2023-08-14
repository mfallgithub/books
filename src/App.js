import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AddBooks from "./containers/AddBooks";
import SearchBooks from "./containers/SearchBooks";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" Component={ AddBooks } />
        <Route exact path="/search" Component={ SearchBooks } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

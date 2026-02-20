import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Toaster } from "react-hot-toast";
import UserProvider from "./context/userContext";

function App() {
  return (
    <>
      <UserProvider>
      <Header />
        <main>
          <Outlet />
        </main>
      <Footer />
      </UserProvider>
      <Toaster />
    </>
  );
}

export default App;

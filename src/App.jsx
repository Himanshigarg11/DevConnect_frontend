import { Provider } from "react-redux";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Home from "./components/Home";
import Settings from "./components/Settings";
import PasswordChange from "./components/PasswordChange";
import Signup from "./components/Signup";
import Connections from "./components/Connections";
import Request from "./components/Request";
function App() {
  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Home />} />
             <Route path="/feed" element={<Feed/>} />
              <Route path="settings" element={<Settings />} />
               <Route path="password-change" element={<PasswordChange />} />
            <Route path="login" element={<Login />} />
              <Route path="profile" element={<Profile />} />
            <Route path="signup" element={<Signup />} />
            <Route path="connections" element={<Connections />} />
            <Route path="request" element={<Request />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

import React, { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { RoutesEnum } from "./routes";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "@/lib/theme/theme";
import CustomizedSwitch from "./components/Switch";
import Dropdown from "./components/LngDropdown";

const Home = React.lazy(() => import("./pages/home"));
const Login = React.lazy(() => import("./pages/login"));
const Profile = React.lazy(() => import("./pages/profile"));

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CustomizedSwitch onChange={handleThemeToggle} />
      <Dropdown />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={RoutesEnum.Home} element={<Home />} />
          <Route path={RoutesEnum.Login} element={<Login />} />
          <Route path={RoutesEnum.Profile} element={<Profile />} />

          {/* 404 */}
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;

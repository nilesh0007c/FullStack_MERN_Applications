import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MyContextProvider } from "./MyContext.jsx";
import ChatWindow from "./ChatWindow.jsx";
import UpgradePlan from "./UpgradePlan.jsx";
import Settings from "./Settings.jsx";
import Help from "./Help.jsx";
import NotFound from "./NotFound.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MyContextProvider>
      <Routes>
        <Route path="/" element={<ChatWindow />} />
        <Route path="/upgrade-plan" element={<UpgradePlan />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MyContextProvider>
  </BrowserRouter>
);

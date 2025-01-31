import { RouterProvider } from "react-router-dom";
import router from "./router";
import { HeroUIProvider } from "@heroui/system"; // Pastikan HeroUIProvider diimpor dengan benar

function App() {
  return (
    // Bungkus RouterProvider dengan HeroUIProvider
    <HeroUIProvider>
      <RouterProvider router={router} />
    </HeroUIProvider>
  );
}

export default App;

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Messages from "./pages/Messages";
import Firstapp from "./pages/subpages/Firstapp";
import Secondapp from "./pages/subpages/Secondapp";
import Thirdapp from "./pages/subpages/Thirdapp";
import Fourthapp from "./pages/subpages/Fourthapp";
import Fifthapp from "./pages/subpages/Fifthapp";
import Sixapp from "./pages/subpages/Sixapp";
import Sevenapp from "./pages/subpages/Sevenapp";
import Eightapp from "./pages/subpages/Eightapp";
import Nineapp from "./pages/subpages/Nineapp";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="works" element={<Works />} />
            <Route path="experience" element={<Experience />} />
            <Route path="contact" element={<Contact />} />

            <Route path="project/1" element={<Firstapp />} />
            <Route path="project/2" element={<Secondapp />} />
            <Route path="project/3" element={<Thirdapp />} />
            <Route path="project/4" element={<Fourthapp />} />
            <Route path="project/5" element={<Fifthapp />} />
            <Route path="project/6" element={<Sixapp />} />
            <Route path="project/7" element={<Sevenapp />} />
            <Route path="project/8" element={<Eightapp />} />
            <Route path="project/9" element={<Nineapp />} />
          </Route>
          <Route path="abror/messages/1517/1504" element={<Messages />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
export default App;

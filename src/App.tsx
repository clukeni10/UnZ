import  { Stack } from "@chakra-ui/react";
import Login from "./app/ui/screens";
import  { Routes, Route } from "react-router-dom";



function App() {
  return (
    <Stack bg="#F4F5F7">
      <Routes>
        <Route path="/" element={<Login/>}></Route>
      </Routes>
    </Stack>
  );
}

export default App;

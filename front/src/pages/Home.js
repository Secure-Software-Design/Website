import Navbar from "../components/NavBar/Navbar";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import {getAuth, onAuthStateChanged} from "firebase/auth";

import { Box, Text } from "@chakra-ui/react";

function useFetch() {
  const navigate = useNavigate();
  const [data, setData] = useState("");

  // async function fetchUrl() {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setData(user.refreshToken);
  //     } else {
  //       navigate("/error");
  //     }
  //   });
  // }

  useEffect(() => {
    // fetchUrl();
  }, []);
  return [data];
}

export { useFetch };

export default function Home() {
  const [data] = useFetch();

  return (
    <Box>
      <Navbar />
    </Box>
  );
}

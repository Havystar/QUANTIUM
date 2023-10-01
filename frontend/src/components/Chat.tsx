import { useState } from "react";
import {
  Button,
  Box,
  OutlinedInput,
  Stack,
  FormControl,
  InputLabel,
  Typography,
  LinearProgress,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useMutation } from "@tanstack/react-query";
import { ImageFallback } from "./ImageFallback";

export const Chat = () => {
  const [inputText, setInputText] = useState("");
  const [image, setImage] = useState<any>("");

  const { mutate, isLoading } = useMutation({
    mutationFn: (query: string) =>
      fetch(
        `https://images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg?fm=png&fl=png8`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setImage(data);
        }),
  });

  const handleInputChange = (e: any) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;
    setImage("test");
    mutate(inputText);
    setInputText("");
  };

  return (
    <Box pb={12}>
      <Box
        sx={{
          boxSizing: "border-box",
          mt: 12,
          p: 2,
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          background: "#eee",
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.4)",
          borderTop: "1px solid #a3a3a3",
          ".MuiInputBase-root": {
            backgroundColor: "#fff",
          },
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: !!image ? "space-between" : "center",
        }}
      >
        {!isLoading &&
          <LinearProgress />
        }
        {!image ? (
          <Stack gap={2} mb={4}>
            <Typography variant="h2" textAlign="center">
              Quantum Vortex Art
            </Typography>
            <Typography textAlign="center">
              Use your imagination to create a unique piece of art.
              <br />
              Combine your creativity with the power of quantum computing to create a unique piece of art.
            </Typography>
          </Stack>
        ) :
          <ImageFallback isLoading={true} image={"https://images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg?fm=png&fl=png8"} />
        }
        < FormControl sx={{ width: !image ? "100%" : "50%" }}>
          <InputLabel htmlFor="outlined-adornment">
            What do you want to create?
          </InputLabel>
          <OutlinedInput
            label="What do you want to create?"
            placeholder="vortex, art, space, ..."
            fullWidth
            value={inputText}
            onChange={handleInputChange}
            endAdornment={
              <Button
                variant="contained"
                color="primary"
                endIcon={<SendIcon />}
                onClick={handleSendMessage}
              >
                Send
              </Button>
            }
          />
        </FormControl>
      </Box>
    </Box >
  );
};

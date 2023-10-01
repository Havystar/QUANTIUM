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
  const [image, setImage] = useState<string>("");

  const { mutate, isLoading } = useMutation({
    mutationFn: async (query: string) => {
      const res = await fetch(
        `https://dev.grzegorzkoperwas.site/quantum_image?prompt=${query}`,
        {
          method: "POST",
        }
      )

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setImage(url);
    }
  });

  const handleInputChange = (e: any) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;
    setImage("test");
    mutate(inputText);
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
          background: "black",
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
            <Typography variant="h2" textAlign="center" color="#eee">
              Quantum Vortex Art
            </Typography>
            <Typography textAlign="center" color="#eee">
              Use your imagination to create a unique piece of art.
              <br />
              Combine your creativity with the power of quantum computing to create a unique piece of art.
            </Typography>
          </Stack>
        ) :
          <ImageFallback isLoading={isLoading} image={image} key={image} />
        }
        < FormControl sx={{ width: !image ? "100%" : "50%" }}>
          <InputLabel htmlFor="outlined-adornment" color="primary">
            What do you want to create?
          </InputLabel>
          <OutlinedInput
            label="What do you want to create?"
            placeholder="vortex, art, space, ..."
            value={inputText}
            sx={{
              ['.root']: {
                backgroundColor: 'black'
              }
            }}
            onChange={handleInputChange}
            endAdornment={
              <Button
                variant="contained"
                color="primary"
                endIcon={<SendIcon />}
                onClick={handleSendMessage}
                disabled={isLoading}
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

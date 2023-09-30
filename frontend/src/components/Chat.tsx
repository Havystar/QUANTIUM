import { useState } from "react";
import {
  Paper,
  Button,
  Box,
  OutlinedInput,
  Stack,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { UserMessage } from "./UserMessage";
import { BotMessage } from "./BotMessage";
import { useMutation } from "@tanstack/react-query";
import { BotMessageLoader } from "./BotMessageLoader";

export const Chat = () => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<any[]>([]);

  const { mutate, isLoading } = useMutation({
    mutationFn: (query: string) =>
      fetch(
        `https://dev.grzegorzkoperwas.site/documents/find_datasources?query=${query}`,
        {
          method: "POST",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setMessages([...messages, data]);
        }),
  });

  const handleInputChange = (e: any) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    setMessages([...messages, inputText]);
    mutate(inputText);
    setInputText("");
  };

  return (
    <Box pb={12}>
      <Paper elevation={0} style={{ padding: "16px", overflowY: "auto" }}>
        <Stack spacing={4}>
          {messages.map((message, index) =>
            index % 2 === 0 ? (
              <UserMessage key={index} message={message} />
            ) : (
              <BotMessage key={index} message={message} />
            )
          )}
          {isLoading && <BotMessageLoader />}
        </Stack>
      </Paper>
      <Box
        sx={{
          boxSizing: "border-box",
          mt: 4,
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
          height: messages.length ? "auto" : "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {!messages.length && (
          <Stack gap={2} mb={4}>
            <Typography variant="h2" textAlign="center">
              Lorem ipsum dolor sit.
            </Typography>
            <Typography textAlign="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              sapiente incidunt repellat aperiam optio autem nobis eaque fugit
              vero deserunt.
            </Typography>
          </Stack>
        )}
        <FormControl sx={{ width: messages.length ? "100%" : "50%" }}>
          <InputLabel htmlFor="outlined-adornment">
            Type a message...
          </InputLabel>
          <OutlinedInput
            label="Type a message..."
            placeholder="Type a message..."
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
    </Box>
  );
};

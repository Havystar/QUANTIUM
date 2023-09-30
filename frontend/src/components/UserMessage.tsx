import { Avatar, Box, Typography } from "@mui/material";

export interface UserMessageProps {
  message: any;
}

export const UserMessage = ({ message }: UserMessageProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "end",
        flexDirection: "row",
      }}
    >
      <Avatar sx={{ width: 36, height: 36, mb: -1 }} />
      <Box
        sx={{
          background: "#e1e1e1",
          color: "#3b3b3b",
          fontWeight: 500,
          p: 2,
          borderRadius: 4,
          minWidth: 500,
        }}
      >
        <Typography sx={{ fontSize: 14, color: "#4b4b4b" }}>You</Typography>
        {message}
      </Box>
    </Box>
  );
};

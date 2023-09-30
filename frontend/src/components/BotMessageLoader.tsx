import { Avatar, Box } from "@mui/material";
import { PulseLoader } from "react-spinners";

export const BotMessageLoader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "end",
        flexDirection: "row-reverse",
      }}
    >
      <Avatar sx={{ width: 36, height: 36, mb: -1 }} />
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          background: "#ffccf8",
          color: "#3b3b3b",
          fontWeight: 500,
          p: 2,
          borderRadius: 4,
          minWidth: 100,
          maxWidth: 1200,
          "span span": {
            backgroundColor: "#474747 !important",
            width: "10px !important",
            height: "10px !important",
          },
        }}
      >
        <PulseLoader />
      </Box>
    </Box>
  );
};

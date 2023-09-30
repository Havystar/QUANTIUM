import {
  Avatar,
  Box,
  Chip,
  Divider,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { format } from "date-fns";

export interface BotMessageProps {
  message: any;
}

export const BotMessage = ({ message }: BotMessageProps) => {
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
          background: "#ffccf8",
          color: "#3b3b3b",
          fontWeight: 500,
          p: 2,
          borderRadius: 4,
          minWidth: 500,
          maxWidth: 1200,
        }}
      >
        <Typography sx={{ fontSize: 14, color: "#4b4b4b" }}>Bot</Typography>
        {message.response}
        <Stack spacing={2} mt={2}>
          {message.relatedDocuments.map(
            (relatedDocument: any, index: number) => {
              const parsedDocument = JSON.parse(relatedDocument);
              const { attributes, links } = parsedDocument.data;

              return (
                <Paper key={index} elevation={0} sx={{ p: 3, borderRadius: 2 }}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                      {attributes.title}
                      <Link href={links.self} sx={{ ml: 1 }}>
                        Click here to view
                      </Link>
                    </Typography>
                    <Typography
                      sx={{
                        color: "gray",
                        fontSize: 12,
                        textAlign: "end",
                      }}
                    >
                      {format(new Date(attributes.modified), "dd/mm/yyyy")}
                    </Typography>
                  </Box>
                  {attributes.categories.map((category: any) => (
                    <Chip
                      label={category.title}
                      key={category.id}
                      sx={{ mt: 1, mr: 1 }}
                    />
                  ))}
                  <Divider sx={{ mt: 2 }} />
                  <Typography sx={{ fontSize: 14, fontWeight: 600, mt: 2 }}>
                    Notes
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    dangerouslySetInnerHTML={{ __html: attributes.notes }}
                  />
                </Paper>
              );
            }
          )}
        </Stack>
      </Box>
    </Box>
  );
};

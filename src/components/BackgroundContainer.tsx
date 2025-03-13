import { ReactNode } from "react";
import { Paper, Box } from "@mantine/core";

interface BackgroundContainerProps {
  children: ReactNode;
}

export default function BackgroundContainer({
  children,
}: BackgroundContainerProps) {
  return (
    <Paper
      shadow="md"
      p={0}
      withBorder
      style={{ overflow: "hidden", position: "relative" }}
    >
      <Box p="md" style={{ position: "relative", zIndex: 2 }}>
        <Box
          bg="pink"
          p="md"
          style={{
            borderRadius: "0.25rem",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          {children}
        </Box>
      </Box>
    </Paper>
  );
}

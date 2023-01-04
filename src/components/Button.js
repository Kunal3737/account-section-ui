import * as React from "react";
import { Stack, Button } from "@mui/material";

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" size="small" color="success">
        Add New
      </Button>
    </Stack>
  );
}

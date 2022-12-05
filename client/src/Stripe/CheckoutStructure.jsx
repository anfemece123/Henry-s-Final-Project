import React from "react";
import Container from "@mui/material/Container";
import { TextField, Avatar, Stack } from "@mui/material";

export default function CheckoutStructure({
  first_name,
  address,
  phoneNumber,
  profileImage,
  last_name,
  email,
}) {
  return (
    <Container>
      <Stack spacing={2}>
        <Avatar alt={first_name} src={profileImage} />
        <TextField
          disabled
          id="filled-disabled"
          label="First Name"
          defaultValue={first_name}
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="Last Name"
          defaultValue={last_name}
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="Email"
          defaultValue={email}
          variant="filled"
        />

        <TextField
          disabled
          id="filled-disabled"
          label="Address"
          defaultValue={address}
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="Phone Number"
          defaultValue={phoneNumber}
          variant="filled"
        />
      </Stack>
    </Container>
  );
}

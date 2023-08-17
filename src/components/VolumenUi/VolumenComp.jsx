// import React from 'react'
import { Slider, Stack } from "@mui/material";
import { BsVolumeDown } from "react-icons/bs";

const VolumenComp = () => {
  return (
    <>
      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 0 }}
        alignItems="center"
        style={{ width: "150px" }}
        defaultValue={70}
      >
        <BsVolumeDown style={{ fontSize: "2rem" }} />
        <Slider aria-label="Volume" />
      </Stack>
    </>
  );
};

export default VolumenComp;

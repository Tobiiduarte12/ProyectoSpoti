// import React from 'react'
import { Slider, Stack } from "@mui/material";
import { BsVolumeDown, BsVolumeUp } from "react-icons/bs";

const VolumenComp = () => {
  return (
    <>
      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 1 }}
        alignItems="center"
        style={{ width: "200px" }}
        defaultValue={70}
      >
        <BsVolumeDown style={{ fontSize: "2rem" }} />
        <Slider aria-label="Volume" />
        <BsVolumeUp style={{ fontSize: "2rem" }} />
      </Stack>
      {/* <Slider disabled defaultValue={30} aria-label="Disabled slider" /> */}
    </>
  );
};

export default VolumenComp;

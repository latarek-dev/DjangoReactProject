import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";

export interface SectionTitleProps {
  name: string;
}

const StyledLine = styled("br")({
  width: "100%",
  border: "1px solid #7C7C7A",
});

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <>
      <Grid
        container
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item>
          <Typography>{props.name}</Typography>
        </Grid>
      </Grid>
      <StyledLine />
    </>
  );
}

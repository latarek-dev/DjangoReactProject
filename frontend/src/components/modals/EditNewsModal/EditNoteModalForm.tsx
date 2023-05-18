import { Grid, TextField, Typography } from "@mui/material";
import { News } from "../../../pages/newspage/NewsPage";

type EditNewsModalFormProps = {
  data: News;
  onSuccess?: () => void;
};

export default function EditNewsModalForm({ data }: EditNewsModalFormProps) {
  return (
    <form>
      <Grid container spacing={2} alignItems="center" marginTop={2}>
        <Grid item xs={12}>
          <Typography>Title</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth size="small" defaultValue={data.title} />
        </Grid>
        <Grid item xs={12}>
          <Typography>Location</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth size="small" defaultValue={data.location} />
        </Grid>
        <Grid item xs={12}>
          <Typography>Text value</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth multiline defaultValue={data.value} />
        </Grid>
      </Grid>
    </form>
  );
}

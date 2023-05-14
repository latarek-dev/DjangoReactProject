import { Dialog, DialogTitle, Grid, styled } from "@mui/material";
import { Note } from "../../../pages/notespage/NotesPage";

type AddEditNoteModalProps = {
  selectedNote: Note | null;
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
};

export const AddEditNoteModal = ({
  open,
  onClose,
  onSuccess,
  selectedNote,
}: AddEditNoteModalProps) => {
  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <StyledDialogTitle>
        {selectedNote ? "Edit Note" : "Add Note"}
      </StyledDialogTitle>
      <Grid container>
        <Grid item xs={12}></Grid>
      </Grid>
    </Dialog>
  );
};

export const StyledDialogTitle = styled(DialogTitle)({
  display: "flex",
  alignItems: "center",
  position: "relative",
  height: 48,
});

import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";

export type ModalProps = {
  open: boolean;
  children?: React.ReactNode;
  title?: string;
  onSave?: () => void;
  onClose: () => void;
};

export const Modal = ({
  open,
  onClose,
  onSave,
  title,
  children,
}: ModalProps) => {
  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogTitle sx={{ display: "flex", flexDirection: "row" }}>
        <IconButton size="small" type="button" onClick={onClose}>
          <CloseIcon />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button
          size="large"
          variant="outlined"
          color="secondary"
          onClick={onClose}
        >
          <Typography>Cancel</Typography>
        </Button>
        <Button
          size="large"
          type="submit"
          variant="contained"
          color="secondary"
          onClick={onSave}
        >
          <Typography>Save</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

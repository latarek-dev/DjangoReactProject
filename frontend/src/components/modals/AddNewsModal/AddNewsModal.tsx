import { Grid } from "@mui/material";
import { Modal, ModalProps } from "../Modal/Modal";
import { useAddNewsForm } from "../../../hooks/forms/useAddNewsForm";

type AddEditExamModalProps = ModalProps & {
  onSuccess?: () => void;
};

export const AddNewsModal = ({
  open,
  onClose,
  onSuccess,
}: AddEditExamModalProps) => {
  const { register, control, errors, onSubmit, reset } = useAddNewsForm({
    onSuccess,
  });

  const handleClose = () => {
    onClose();
    reset();
  };

  return (
    <Modal
      open={open}
      title={"Add news"}
      onClose={handleClose}
      onSave={onSubmit}
    >
      <Grid>Add</Grid>
    </Modal>
  );
};

import { Typography } from "@mui/material";
import { Modal, ModalProps } from "../Modal/Modal";
import { useDeleteNewsMutation } from "../../../query-hooks/useDeleteNewsMutation";

type DeleteExamModalProps = Pick<ModalProps, "onClose"> & {
  newsId: string | null;
  onSuccess?: () => void;
};

export const DeleteNewsModal = ({
  newsId,
  onClose,
  onSuccess,
}: DeleteExamModalProps) => {
  const { mutate } = useDeleteNewsMutation({
    onSuccess,
  });

  const handleSave = () => {
    newsId && mutate(newsId);
  };

  return (
    <Modal open={!!newsId} onClose={onClose} onSave={handleSave}>
      <Typography sx={{ fontSize: "1.5em" }}>Delete news?</Typography>
    </Modal>
  );
};

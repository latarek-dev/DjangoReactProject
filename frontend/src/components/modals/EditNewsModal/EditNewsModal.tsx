import { News } from "../../../pages/newspage/NewsPage";
import { Modal } from "../Modal/Modal";
import AddEditNoteModalForm from "./EditNoteModalForm";

type EditNewsModalProps = {
  selectedNews: News;
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
};

export const EditNewsModal = ({
  open,
  onClose,
  onSuccess,
  selectedNews,
}: EditNewsModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={selectedNews ? "EDIT NEWS" : "ADD NEWS"}
    >
      <AddEditNoteModalForm data={selectedNews} onSuccess={onSuccess} />
    </Modal>
  );
};

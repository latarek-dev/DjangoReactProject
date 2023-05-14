import { Note } from "../../../pages/notespage/NotesPage";
import { Modal } from "../Modal/Modal";
import AddEditNoteModalForm from "./EditNoteModalForm";

type EditNoteModalProps = {
  selectedNote: Note;
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
};

export const EditNoteModal = ({
  open,
  onClose,
  onSuccess,
  selectedNote,
}: EditNoteModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={selectedNote ? "EDIT NOTE" : "ADD NOTE"}
    >
      <AddEditNoteModalForm data={selectedNote} onSuccess={onSuccess} />
    </Modal>
  );
};

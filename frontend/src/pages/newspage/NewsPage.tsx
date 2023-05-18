import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { EditNewsModal } from "../../components/modals/EditNewsModal/EditNewsModal";
import { useState } from "react";
import { DeleteNewsModal } from "../../components/modals/DeleteNewsModal/DeleteNewsModal";
import ActionButton from "../../components/shared/ActionButton";
import { AddNewsModal } from "../../components/modals/AddNewsModal/AddNewsModal";

export type News = {
  id: number;
  title: string;
  value: string;
  date: string;
  location: string;
};

const notes = [
  {
    id: 1,
    title: "New note",
    value:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tempore at nemo. Magnam, consectetur? Voluptate quod aliquam explicabo, quam quibusdam ea quaerat facere nesciunt ab possimus repellendus nobis, asperiores cum.",
    date: "10/05/2023",
    location: "Warsaw, Poland",
  },
  {
    id: 2,
    title: "Data",
    value:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tempore at nemo. Magnam, consectetur? Voluptate quod aliquam explicabo, quam quibusdam ea quaerat facere nesciunt ab possimus repellendus nobis, asperiores cum.",
    date: "09/05/2023",
    location: "Warsaw, Poland",
  },
  {
    id: 3,
    title: "Project deadline",
    value:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tempore at nemo. Magnam, consectetur? Voluptate quod aliquam explicabo, quam quibusdam ea quaerat facere nesciunt ab possimus repellendus nobis, asperiores cum.",
    date: "09/05/2023",
    location: "Kuala Lumpur, Malaysia",
  },
  {
    id: 4,
    title: "New note",
    value:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tempore at nemo. Magnam, consectetur? Voluptate quod aliquam explicabo, quam quibusdam ea quaerat facere nesciunt ab possimus repellendus nobis, asperiores cum.",
    date: "08/05/2023",
    location: "Bangkok, Thailand",
  },
];

export default function NewsPage() {
  const [newsData, setNewsData] = useState<News | null>();
  const [addNewsOpen, setAddNewsOpen] = useState(false);
  const [deleteNewsId, setDeleteNewsId] = useState<string | null>(null);

  return (
    <Box>
      <ActionButton
        actionText="Add news"
        variant="contained"
        sx={{ margin: "1rem" }}
        onClick={() => setAddNewsOpen(true)}
      />
      <Stack direction="column">
        {notes.map((note, index) => (
          <Card key={index} sx={{ margin: "1rem" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Note added: {note.date}
              </Typography>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography variant="h5" component="div">
                  {note.title}
                </Typography>
                <Stack direction={"row"} sx={{ mr: "2rem" }}>
                  <IconButton onClick={() => setNewsData(notes[note.id])}>
                    <Edit />
                  </IconButton>
                  <IconButton
                    onClick={() => setDeleteNewsId(notes[note.id].toString())}
                  >
                    <Delete />
                  </IconButton>
                </Stack>
              </Stack>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {note.location}
              </Typography>
              <Typography>{note.value}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
      {addNewsOpen && (
        <AddNewsModal
          open={addNewsOpen}
          onClose={() => setAddNewsOpen(false)}
        />
      )}
      {newsData && (
        <EditNewsModal
          onClose={() => setNewsData(null)}
          open={!!newsData}
          selectedNews={newsData}
        />
      )}
      <DeleteNewsModal
        newsId={deleteNewsId}
        onClose={() => setDeleteNewsId(null)}
        onSuccess={() => {
          setDeleteNewsId(null);
          // TODO refetch() - ADD WHEN ENDPOINT CREATED
        }}
      />
    </Box>
  );
}

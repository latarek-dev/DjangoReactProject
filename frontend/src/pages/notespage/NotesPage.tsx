import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

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

export default function NotesPage() {
  return (
    <Box>
      <Stack direction="column">
        {notes.map((note) => (
          <Card sx={{ margin: "1rem" }}>
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
                  <IconButton>
                    <Edit />
                  </IconButton>
                  <IconButton>
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
    </Box>
  );
}

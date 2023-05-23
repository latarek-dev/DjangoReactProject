import {
  Alert,
  Box,
  Card,
  CardContent,
  Divider,
  LinearProgress,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useGetNewsQuery } from "../../query-hooks/useGetNewsQuery";
import { AccountCircleRounded } from "@mui/icons-material";
import ActionButton from "../../components/shared/ActionButton";
import { categoryOptions, countryOptions } from ".";

export default function NewsPage() {
  const [countryId, setCountryId] = useState("us");
  const [categoryId, setCategoryId] = useState("sports");

  const {
    data: newsPosts,
    isLoading,
    refetch,
  } = useGetNewsQuery({
    countryId,
    categoryId,
  });

  return (
    <Box>
      <Stack direction="row">
        <Select
          value={countryId}
          label="Country ID"
          onChange={(event) => {
            setCountryId(event.target.value), refetch();
          }}
          sx={{ margin: "1rem" }}
        >
          {countryOptions.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        <Select
          value={categoryId}
          label="Category ID"
          onChange={(event) => {
            setCategoryId(event.target.value), refetch();
          }}
          sx={{ margin: "1rem" }}
        >
          {categoryOptions.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </Stack>
      {isLoading && (
        <Alert severity="info" variant="filled" sx={{ margin: "1rem" }}>
          <Typography>Loading data..</Typography>
          <LinearProgress color="secondary" />
        </Alert>
      )}
      <Stack direction="column">
        {newsPosts?.articles.map(
          (
            {
              author,
              publishedAt,
              source,
              title,
              url,
              urlToImage,
              description,
            },
            index
          ) => (
            <Card key={index} sx={{ margin: "1rem" }}>
              <CardContent>
                <Stack
                  direction="row"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Stack direction="column" sx={{ width: "60rem" }}>
                    <Stack
                      direction="row"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        margin: "6px 0",
                      }}
                    >
                      <AccountCircleRounded />
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "#148cf5",
                          fontWeight: "550",
                        }}
                      >
                        {author ? author : source.name}
                      </Typography>
                    </Stack>
                    <h2 style={{ margin: "2px 0" }}>{title}</h2>
                    <Typography sx={{ fontSize: "16px", fontWeigth: "550" }}>
                      {description}
                    </Typography>
                    <Stack
                      direction="row"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        margin: "10px 0",
                        color: "text.secondary",
                        "& svg": {
                          m: 1.5,
                        },
                        "& hr": {
                          mx: 0.5,
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "#838383",
                          fontWeight: "550",
                        }}
                      >
                        {source.name}
                      </Typography>
                      <Divider orientation="vertical" flexItem />
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "#838383",
                          fontWeight: "550",
                        }}
                      >
                        {publishedAt.slice(0, 10)}
                      </Typography>
                    </Stack>
                    <ActionButton
                      actionText={"See article"}
                      variant="contained"
                      sx={{ width: "180px", margin: "6px 0" }}
                      size="small"
                      onClick={() => (window.location.href = url)}
                    />
                  </Stack>
                  <img
                    src={urlToImage}
                    style={{ width: "350px", borderRadius: "10px" }}
                    alt="Image"
                  />
                </Stack>
              </CardContent>
            </Card>
          )
        )}
      </Stack>
    </Box>
  );
}

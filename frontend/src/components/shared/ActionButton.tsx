import { Button, ButtonProps, Typography } from "@mui/material";

export interface ActionButtonProps extends ButtonProps {
  actionText: string;
  onClickAction?: () => void;
}
export default function ActionButton({
  actionText,
  onClickAction,
  ...rest
}: ActionButtonProps) {
  return (
    <Button
      size="large"
      type="submit"
      color="secondary"
      onClick={onClickAction}
      {...rest}
    >
      <Typography>{actionText}</Typography>
    </Button>
  );
}

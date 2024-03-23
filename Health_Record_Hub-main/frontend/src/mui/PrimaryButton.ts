import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material/styles";

export const PrimaryButton = styled(LoadingButton)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  padding: "8px 28px",
  border: "2px solid transparent",
  boxShadow: theme.shadows[18],
  "& > span > span": {
    height: "36px !important",
    width: "36px !important",
  },
  "& svg": {
    fontSize: "26px",
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  [theme.breakpoints.down("lg")]: {
    borderRadius: "7px",
    gap: "4px",
    padding: "9px 28px",
    "& svg": {
      fontSize: "24px",
    },
    "& > span > span": {
      height: "34px !important",
      width: "34px !important",
    },
  },
  [theme.breakpoints.down("md")]: {
    borderRadius: "6px",
    gap: "3px",
    padding: "8px 26px",
    "& svg": {
      fontSize: "22px",
    },
    "& > span > span": {
      height: "30px !important",
      width: "30px !important",
    },
  },
  [theme.breakpoints.down("sm")]: {
    borderRadius: "5px",
    padding: "7px 24px",
    "& svg": {
      fontSize: "20px",
    },
    "& > span > span": {
      height: "28px !important",
      width: "28px !important",
    },
  },
  [theme.breakpoints.down("xs")]: {
    borderRadius: "4px",
    gap: "2px",
    padding: "6px 20px",
    "& svg": {
      fontSize: "18px",
    },
    "& > span > span": {
      height: "26px !important",
      width: "26px !important",
    },
  },
}));

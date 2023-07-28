import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  dialog: {
    minWidth: 500,
    background: "#f0f0f0",
    padding: 20,
  },
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Align the content in the center horizontally
  },
  dialogActions: {
    justifyContent: "space-between",
    marginTop: 20,
  },
  inputBox: {
    marginBottom: 20,
    marginTop: 20,
    minWidth: 400,
  },
});

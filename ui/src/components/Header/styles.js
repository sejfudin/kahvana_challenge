import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "3px",
  },
  links: {
    color: "#00e5ff !important" ,
    textDecoration: "none !important",    
    fontSize: '18px',
    '&:hover': {
      cursor: "pointer",
      color: "#545d8e !important"
    },
  },
  modal: {
    "& .MuiPaper-root": { minWidth: 250 },
    '&anchorOrigin':{
      horizontal: "right",
      vertical: "bottom",
    },
    '&transformOrigin':{
      horizontal: 'right',
      vertical: 'top',
    }
  }
});
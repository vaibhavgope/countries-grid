import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    marginLeft: 50,
    position: "relative",
  },
  image: {
    maxWidth: "85%",
    margin: "auto",
  },
  btn: { padding: 0, margin: 5, position: 'relative', bottom: -5 },
  neighbours: {
    position: 'relative',
    bottom: 5,
    marginTop: 30, 
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  }
}));

export default useStyles
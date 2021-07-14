import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        textAlign: 'left',
        color: theme.palette.text.primary,
        marginTop: 30,
        minHeight: '100%',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '5px'
    },
    flag: {
        minWidth: '100%',
        maxWidth: '100%',
        objectFit: 'cover',
        maxHeight: '180px',
        padding: 0,
        margin: 0,
        borderRadius: '5px 5px 0 0'
    },
    info: {
        margin: 5
    },
    text: { fontWeight: "bold" }
}));

export default useStyles
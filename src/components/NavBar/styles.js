import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        fontWeight: 'bold',
        color: theme.palette.text.primary,
    },
    bar: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        display: 'flex',
        justifyContent: 'space-between'
    },
    btn: {
        fontWeight: 'bold',
        marginLeft: 0,
        color: 'inherit'
    }
}))

export default useStyles
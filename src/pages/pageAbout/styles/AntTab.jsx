import {Tab} from '@mui/material'
import { styled } from '@mui/material/styles';

const AntTab = styled(props => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        [theme.breakpoints.up("sm")]: {
            minWidth: 0
        },
        fontFamily: 'Quicksand',
        fontWeight: 600,
        color: "rgba(0, 0, 0, 0.85)",
        "&:hover": {
            color: "#f0f0f0",
            opacity: 1
        },
        "&.Mui-selected": {
            color: "#f0f0f0",
            fontWeight: 700
        },
    })
)

export default AntTab
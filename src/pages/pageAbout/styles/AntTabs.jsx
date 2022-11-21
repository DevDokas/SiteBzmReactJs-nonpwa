import {TabList} from '@mui/lab'
import { styled } from '@mui/material/styles';

const AntTabs = styled(TabList)({
    '& .MuiTabs-indicator': {
        backgroundColor: '#000000',
    },
});

export default AntTabs
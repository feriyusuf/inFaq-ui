import { BottomNavigationAction, BottomNavigation, Paper } from '@mui/material'
import { Home, CardMembershipRounded, Person2Rounded, ReceiptLongRounded } from '@mui/icons-material';

export default ({ showLabels, value, onChange }) => (
    <Paper sx={{ position: 'fixed', bottom: 10, left: 5, right: 5, zIndex:100, borderRadius: 50}} elevation={10}>
        <BottomNavigation showLabels={showLabels}
            value={value}
            style={{padding: 10}}
            onChange={onChange}>

            <BottomNavigationAction label="Beranda" icon={<Home />} />
            <BottomNavigationAction label="Cash Flow" icon={<ReceiptLongRounded />} />
            <BottomNavigationAction label="Bulanan" icon={<CardMembershipRounded />} />
            
        </BottomNavigation>
    </Paper>
)
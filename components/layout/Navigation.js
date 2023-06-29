import { BottomNavigationAction, BottomNavigation, Paper } from '@mui/material'
import { Home, QrCode2Rounded, Person2Rounded, ReceiptLongRounded, FamilyRestroomRounded } from '@mui/icons-material';

export default ({ showLabels, value, onChange }) => (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation showLabels={showLabels}
            value={value}
            onChange={onChange}>

            <BottomNavigationAction label="Beranda" icon={<Home />} />
            <BottomNavigationAction label="Transaksi" icon={<ReceiptLongRounded />} />
            <BottomNavigationAction label="Scan" icon={<QrCode2Rounded />} />
            <BottomNavigationAction label="KK" icon={<FamilyRestroomRounded />} />
            <BottomNavigationAction label="Profil" icon={<Person2Rounded />} />
            
        </BottomNavigation>
    </Paper>
)
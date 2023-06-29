import { logout } from '../../utils/auths'
import CommonHeader from '../navigation/CommonHeader'
import { BottomNavigationAction, BottomNavigation, Paper } from '@mui/material'
import { Home, QrCode2Rounded, Person2Rounded, ReceiptLongRounded, FamilyRestroomRounded } from '@mui/icons-material';

export const HeaderLayout = props => (
    <div className='common_header'>
        <CommonHeader hideLogout={props.hideLogout} logout={props.logout || logout}>
            {props.children}
        </CommonHeader>
    </div>
)

export const CommonLayout = props => (
    <div className={props.className ? props.className : 'common_layout'}>
        {props.children}
    </div>
)

export const Navigation = ({ showLabels, value, onChange }) => (
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

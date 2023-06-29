import { DownloadRounded, UploadRounded } from "@mui/icons-material"
import { Card, CardActions, CardContent, Chip, Typography } from "@mui/material"
import theme from "../../src/theme"

export default (props) => {
    return <Card sx={{ minWidth: 275 }}
        elevation={0} 
        style={{ background : `linear-gradient(to right bottom, #430089, #82ffa1)`}}>
        <CardContent>
            <Typography color="text.card">
                Total Saldo:
            </Typography>
            <Typography color="text.card" variant="h5">
                Rp. 100.123.890
            </Typography>
        </CardContent>
        <CardActions sx={{
            justifyContent: "flex-end",
        }}>
            <Chip icon={<DownloadRounded />} color="primary" label="Rp. 5.000.000" />
            <Chip icon={<UploadRounded />} color="error" label="Rp. 4.000.000" />
        </CardActions>
    </Card>
}
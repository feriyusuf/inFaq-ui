import { DownloadRounded, UploadRounded } from "@mui/icons-material"
import { Card, CardActions, CardContent, Chip, Typography } from "@mui/material"

export default (props) => {
    return <Card sx={{ minWidth: 275 }} elevation={0}>
        <CardContent>
            <Typography color="text.primary">
                Total Saldo:
            </Typography>
            <Typography color="text.primary" variant="h5">
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
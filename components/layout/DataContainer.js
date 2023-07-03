import { Card } from "@mui/material"

export default (props) => {
    return <Card style={{ width: '100%', borderRadius: 0 }} elevation={1}>
        {props.children}
    </Card>
}
import { Grid, Paper } from "@mui/material"
import TransactionSummary from "../../pages/home/TransactionSummary"
import React from "react"

export default (props) => {
    return (
        <Grid container rowSpacing={{ xs: 1}}>
            <Grid item xs={12}>
                <TransactionSummary />
            </Grid>
            <Grid item xs={12}>
                <TransactionSummary />
            </Grid>
        </Grid>
    )
}
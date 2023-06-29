import { Grid, Paper } from "@mui/material"
import TransactionSummary from "./TransactionSummary"
import React from "react"
import TransactionChart from "./TransactionChart"

export default (props) => {
    return (
        <Grid container rowSpacing={{ xs: 1}}>
            <Grid item xs={12}>
                <TransactionSummary />
            </Grid>
            <Grid item xs={12}>
                <TransactionChart />
            </Grid>
        </Grid>
    )
}
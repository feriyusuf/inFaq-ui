import { Box, Card, Chip, CssBaseline, Grid, List, ListItem, ListItemText, Paper } from "@mui/material"
import { DownloadForOfflineRounded, ReceiptRounded } from "@mui/icons-material"
import React from "react"
import CurrencyFormat from "../../functions/text/CurrencyFormat"
import DataContainer from "../layout/DataContainer"

export default (props) => {
  const data = [
    { type: 'in', amount: 5000000, caption: "Infaq Bulanan Mei 2023", date: '20 Mei 2023', id: 1 },
    { type: 'out', amount: 2500000, caption: "Pembelian Karpet", date: '30 Mei 2023', id: 2 },
    { type: 'out', amount: 45000, caption: "Pembayaran Listrik Bulan Mei 2023", date: '01 Mei 2023', id: 3 },
    { type: 'in', amount: 250000, caption: "Infaq Hamba Alloh", date: '02 Mei 2023', id: 4 },
    { type: 'out', amount: 45000, caption: "Konsumsi Lomba Hadroh", date: '08 Mei 2023', id: 5 },
    { type: 'in', amount: 5000000, caption: "Infaq Bulanan Mei 2023", date: '20 Mei 2023', id: 1 },
    { type: 'out', amount: 2500000, caption: "Pembelian Karpet", date: '30 Mei 2023', id: 2 },
    { type: 'out', amount: 45000, caption: "Pembayaran Listrik Bulan Mei 2023", date: '01 Mei 2023', id: 3 },
    { type: 'in', amount: 250000, caption: "Infaq Hamba Alloh", date: '02 Mei 2023', id: 4 },
    { type: 'out', amount: 45000, caption: "Konsumsi Lomba Hadroh", date: '08 Mei 2023', id: 5 },
    { type: 'in', amount: 5000000, caption: "Infaq Bulanan Mei 2023", date: '20 Mei 2023', id: 1 },
    { type: 'out', amount: 2500000, caption: "Pembelian Karpet", date: '30 Mei 2023', id: 2 },
    { type: 'out', amount: 45000, caption: "Pembayaran Listrik Bulan Mei 2023", date: '01 Mei 2023', id: 3 },
    { type: 'in', amount: 250000, caption: "Infaq Hamba Alloh", date: '02 Mei 2023', id: 4 },
    { type: 'out', amount: 45000, caption: "Konsumsi Lomba Hadroh", date: '08 Mei 2023', id: 5 },
    { type: 'in', amount: 5000000, caption: "Infaq Bulanan Mei 2023", date: '20 Mei 2023', id: 1 },
    { type: 'out', amount: 2500000, caption: "Pembelian Karpet", date: '30 Mei 2023', id: 2 },
    { type: 'out', amount: 45000, caption: "Pembayaran Listrik Bulan Mei 2023", date: '01 Mei 2023', id: 3 },
    { type: 'in', amount: 250000, caption: "Infaq Hamba Alloh", date: '02 Mei 2023', id: 4 },
    { type: 'out', amount: 45000, caption: "Konsumsi Lomba Hadroh", date: '08 Mei 2023', id: 5 },
    { type: 'in', amount: 5000000, caption: "Infaq Bulanan Mei 2023", date: '20 Mei 2023', id: 1 },
    { type: 'out', amount: 2500000, caption: "Pembelian Karpet", date: '30 Mei 2023', id: 2 },
    { type: 'out', amount: 45000, caption: "Pembayaran Listrik Bulan Mei 2023", date: '01 Mei 2023', id: 3 },
    { type: 'in', amount: 250000, caption: "Infaq Hamba Alloh", date: '02 Mei 2023', id: 4 },
    { type: 'out', amount: 45000, caption: "Konsumsi Lomba Hadroh", date: '08 Mei 2023', id: 5 },
    { type: 'in', amount: 5000000, caption: "Infaq Bulanan Mei 2023", date: '20 Mei 2023', id: 1 },
    { type: 'out', amount: 2500000, caption: "Pembelian Karpet", date: '30 Mei 2023', id: 2 },
    { type: 'out', amount: 45000, caption: "Pembayaran Listrik Bulan Mei 2023", date: '01 Mei 2023', id: 3 },
    { type: 'in', amount: 250000, caption: "Infaq Hamba Alloh", date: '02 Mei 2023', id: 4 },
    { type: 'out', amount: 45000, caption: "Konsumsi Lomba Hadroh", date: '08 Mei 2023', id: 5 },
    { type: 'in', amount: 5000000, caption: "Infaq Bulanan Mei 2023", date: '20 Mei 2023', id: 1 },
    { type: 'out', amount: 2500000, caption: "Pembelian Karpet", date: '30 Mei 2023', id: 2 },
    { type: 'out', amount: 45000, caption: "Pembayaran Listrik Bulan Mei 2023", date: '01 Mei 2023', id: 3 },
    { type: 'in', amount: 250000, caption: "Infaq Hamba Alloh", date: '02 Mei 2023', id: 4 },
    { type: 'out', amount: 45000, caption: "Konsumsi Lomba Hadroh", date: '08 Mei 2023', id: 5 },
    { type: 'in', amount: 5000000, caption: "Infaq Bulanan Mei 2023", date: '20 Mei 2023', id: 1 },
    { type: 'out', amount: 2500000, caption: "Pembelian Karpet", date: '30 Mei 2023', id: 2 },
    { type: 'out', amount: 45000, caption: "Pembayaran Listrik Bulan Mei 2023", date: '01 Mei 2023', id: 3 },
    { type: 'in', amount: 250000, caption: "Infaq Hamba Alloh", date: '02 Mei 2023', id: 4 },
    { type: 'out', amount: 45000, caption: "Konsumsi Lomba Hadroh", date: '08 Mei 2023', id: 5 },
  ]

  const transactionIcon = {
    in: <DownloadForOfflineRounded style={{ width: '100%', height: '100%' }} color={"success"} />,
    out: <ReceiptRounded style={{ width: '100%', height: '100%' }} color={"warning"} />
  }

  const listItem = data.map(({ type, amount, caption, date, id }) => {
    return (<ListItem key={id} style={{ width: '100%', padding: 0 }}>
      <DataContainer>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            {transactionIcon[type]}
          </Grid>
          <Grid item xs={10}>
            <ListItemText primary={date} secondary={caption} />
            <Box sx={{ textAlign: 'end', marginRight: '5px', marginBottom: '5px' }}>
              <Chip label={CurrencyFormat(amount)} style={{ fontSize: 12 }} color="info" />
            </Box>
          </Grid>
        </Grid>
      </DataContainer>
    </ListItem>)
  })

  return (
    <List style={{ width: '100%' }}>
      {listItem}
    </List>

  )
}
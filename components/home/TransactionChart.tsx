import { ArgumentAxis, Chart, ValueAxis, LineSeries, Title, Legend } from "@devexpress/dx-react-chart-material-ui";
import { styled } from '@mui/material/styles';
import { Paper, Typography } from "@mui/material"
import { ArgumentScale } from "@devexpress/dx-react-chart";
import { scalePoint } from 'd3-scale';
import {
    curveCatmullRom,
    line,
} from 'd3-shape';
import theme from "../../src/theme";


export default (props) => {
    const transactions = [
        {
            month: "03/23",
            in: 2000,
            out: 0
        },
        {
            month: "02/23",
            in: 1000,
            out: 3500
        },
        {
            month: "01/23",
            in: 1500,
            out: 400
        },
        {
            month: "12/22",
            in: 3000,
            out: 250
        }
    ]

    const PREFIX = 'Demo';

    const classes = {
        title: `${PREFIX}-title`,
        chart: `${PREFIX}-chart`,
    };

    const StyledChart = styled(Chart)(() => ({
        [`&.${classes.chart}`]: {
            paddingRight: '30px',
        },
    }));

    const Line = props => (
        <LineSeries.Path
            {...props}
            path={line()
                .x(({ arg }) => arg)
                .y(({ val }) => val)
                .curve(curveCatmullRom)}
        />
    );

    const StyledDiv = styled('div')(() => ({
        [`&.${classes.title}`]: {
            textAlign: 'center',
            width: '100%',
            marginBottom: '10px',
        },
    }));

    const Text = ({ text }) => {
        const [mainText, subText] = text.split('\\n');
        return (
            <StyledDiv className={classes.title}>
                <Typography component="h5" variant="h6">
                    {mainText}
                </Typography>
                <Typography variant="subtitle1">{subText}</Typography>
            </StyledDiv>
        );
    };

    const Root = props => (
        <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
      );
      const Label = props => (
        <Legend.Label {...props} sx={{ mb: 1, whiteSpace: 'nowrap' }} />
      );
      const Item = props => (
        <Legend.Item {...props} sx={{ flexDirection: 'column-reverse' }} />
      );


    return <Paper elevation={0} style={{backgroundColor: 'none'}}>
        <StyledChart data={transactions}>
            <ArgumentScale factory={scalePoint} />
            <ArgumentAxis />
            <ValueAxis />

            <LineSeries
                name="Pemasukan"
                valueField="in"
                argumentField="month"
                seriesComponent={Line}
            />
            <LineSeries
                name="Pengeluaran"
                valueField="out"
                argumentField="month"
                seriesComponent={Line}
            />
            <Legend position="top" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
        </StyledChart>
    </Paper>
}
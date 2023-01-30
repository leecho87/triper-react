import { Box, Grid, Typography } from "@mui/material";
import { Home, Search, Paid, RequestPage, Timeline, Person } from "@mui/icons-material";

const Nav = () => {
    return (
        <Box>
            <Grid container>
                <Grid xs>
                    <Home color="primary" />
                    <Typography>홈</Typography>
                </Grid>
                <Grid xs>
                    <Search color="disabled" />
                    <Typography>검색</Typography>
                </Grid>
                <Grid xs>
                    <Paid color="disabled" />
                    <Typography>가계부</Typography>
                </Grid>
                <Grid xs>
                    <Timeline color="disabled" />
                    <Typography>내코스</Typography>
                </Grid>
                <Grid xs>
                    <Person color="disabled" />
                    <Typography>내정보</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Nav;
import styled from "@emotion/styled";
import { NavLink as RouterLink } from "react-router-dom";
import { Box, Grid as MuiGrid, Typography } from "@mui/material";
import { Home, Search, Paid, Timeline, Person } from "@mui/icons-material";

const GridItem = ({children}: any) => {
    const Grid = styled(MuiGrid)`
        height:64px;
        text-align:center;
        border-top:1px solid #ebebeb;
        &:not(:first-of-type) {
            border-left:1px solid #ebebeb;
        }
    `;

    return (
        <Grid item xs alignItems={"center"}>
            {children}
        </Grid>
    )
}

interface ILinkProps {
    to: string;
    children: any;
    end?: boolean;
}

const Link = ({to, children, end}: ILinkProps) => {
    const NavLink = styled(RouterLink)`
        display:block;
        height:100%;
        padding:8px 0 0;
        text-decoration:none;
        font-size:15px;
        color:#000;
        
        &.active {
            font-weight:bold;
            color: red;
        }
    `;

    return (
        <NavLink
            to={to}
            end={end}
            className={({isActive}) => isActive ? "active" : undefined}
        >
            {children}
        </NavLink>
    )
}

const Nav = () => {
    return (
        <Box>
            <MuiGrid container>
                <GridItem>
                    <Link to="/" end>
                        <Home fontSize="small" color="primary" />
                        <Typography>홈</Typography>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to="/search">
                        <Search fontSize="small" color="disabled" />
                        <Typography>검색</Typography>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to="/cashbook">
                        <Paid fontSize="small" color="disabled" />
                        <Typography>가계부</Typography>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to="/course">
                        <Timeline fontSize="small" color="disabled" />
                        <Typography>내코스</Typography>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to="/info">
                        <Person fontSize="small" color="disabled" />
                        <Typography>내정보</Typography>
                    </Link>
                </GridItem>
            </MuiGrid>
        </Box>
    )
}

export default Nav;
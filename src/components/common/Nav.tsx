import styled from "@emotion/styled";
import { NavLink as RouterLink } from "react-router-dom";
import { Box, Grid as MuiGrid } from "@mui/material";
import { Home, Search, Tour, Person } from "@mui/icons-material";

interface ILinkProps {
    to: string;
    children: any;
    end?: boolean;
}

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

const Link = ({to, children, end}: ILinkProps) => {
    const NavLink = styled(RouterLink)`
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        height:100%;
        p {
            margin-top:4px;
            font-size:14px;
            color:#999;
        }
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
        <Box style={{ background: "#fff" }}>
            <MuiGrid container>
                <GridItem>
                    <Link to="/" end>
                        <Home fontSize="small" color="primary" />
                        <p>홈</p>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to="/search">
                        <Search fontSize="small" color="disabled" />
                        <p>검색</p>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to="/myTour">
                        <Tour fontSize="small" color="disabled" />
                        <p>내여행</p>
                    </Link>
                </GridItem>
                <GridItem>
                    <Link to="/info">
                        <Person fontSize="small" color="disabled" />
                        <p>내정보</p>
                    </Link>
                </GridItem>
            </MuiGrid>
        </Box>
    )
}

export default Nav;
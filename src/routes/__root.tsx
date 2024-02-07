import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import AppBar from "../components/AppBar";
import styled from "@emotion/styled";

export const Route = createRootRoute({
    component: () => (
        <>
            <AppBarContainer>
                <AppBar />
            </AppBarContainer>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
});

const AppBarContainer = styled.div`
    margin-bottom: 20px;
`;

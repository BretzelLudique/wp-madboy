import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: "rgba(0, 0, 0, 0.87)",
        boxShadow: theme.shadows[1],
        maxWidth: "none",
    },
}));

// adapted from https://stackoverflow.com/a/70165465
interface AppBarItemProps {
    title: string;
    menus?: Array<{
        action?: () => void;
        name: string;
    }>;
}
const AppBarItem = ({ menus, title }: AppBarItemProps) =>
    menus ? (
        <LightTooltip
            color="inherit"
            title={
                <MenuList>
                    {menus.map((item) => (
                        <MenuItem onClick={item.action}>{item.name}</MenuItem>
                    ))}
                </MenuList>
            }
            style={{ marginRight: 16 }}
        >
            <Button>{title}</Button>
        </LightTooltip>
    ) : (
        <Button color="inherit" style={{ marginRight: 16 }}>
            {title}
        </Button>
    );

// LOGO LA SOURCE BAIN JAPONAIS PRIVATIF PRESTATIONS L’INVITATION BOUTIQUE
export default function MenuAppBar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <AppBarItem
                            title="La source"
                            menus={[
                                { name: "BIENVENUE" },
                                { name: "PRÉPARER SA VENUE" },
                            ]}
                        />
                        <AppBarItem
                            title="Bain japonais privatif"
                            menus={[
                                { name: "L'ESPACE SENTŌ" },
                                { name: "LE CYCLE THERMAL & RITUELS DE SAUNA" },
                                { name: "FORMULES & SOINS EXCLUSIFS" },
                                { name: "PRÉPARER VOTRE SÉANCE" },
                            ]}
                        />
                        <AppBarItem
                            title="Prestations"
                            menus={[
                                { name: "MASSAGES" },
                                { name: "KOBIDO & SOINS PRESTIGES JAPONAIS" },
                                { name: "SOINS ÉNERGÉTIQUES & VIBRATOIRES" },
                                { name: "SOINS PURE ALTITUDE" },
                                { name: "ÉPILATIONS" },
                            ]}
                        />
                        <AppBarItem title="L'invitation" />
                        <AppBarItem title="Boutique" />
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

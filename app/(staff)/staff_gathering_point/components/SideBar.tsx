import * as React from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import EggIcon from '@mui/icons-material/Egg';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import ColorSchemeToggle from './ColorSchemeToggle';
import { closeSidebar } from '../utils';

import {
    userSlice,
    useSelector,
    useDispatch,
    selectUser,
    getUserInfoAsync,
    getDeliveredParcelsInfoAsync,
    getReceivedParcelsInfoAsync,
    getAllParcelsInfoAsync,
} from '@/lib/redux'

function Toggler({
    defaultExpanded = false,
    renderToggle,
    children,
}: {
    defaultExpanded?: boolean;
    children: React.ReactNode;
    renderToggle: (params: {
        open: boolean;
        setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }) => React.ReactNode;
}) {
    const [open, setOpen] = React.useState(defaultExpanded);
    return (
        <React.Fragment>
            {renderToggle({ open, setOpen })}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateRows: open ? '1fr' : '0fr',
                    transition: '0.2s ease',
                    '& > *': {
                        overflow: 'hidden',
                    },
                }}
            >
                <Typography
                    level="body-xs"
                >
                    {children}
                </Typography>
            </Box>
        </React.Fragment>
    );
}

type SideBarProps = {
    status: string;
    onStatusChange?: (status: string) => void;
};

export default function Sidebar(props: SideBarProps) {
    // Home, Staff, Reports, Settings
    const dispatch = useDispatch();
    const userInfo = useSelector(selectUser);

    React.useEffect(() => {
        dispatch(getUserInfoAsync())
        dispatch(getAllParcelsInfoAsync())
    }, []);


    return (
        <Sheet
            className="Sidebar"
            sx={{
                position: { xs: 'fixed', md: 'sticky' },
                transform: {
                    xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
                    md: 'none',
                },
                transition: 'transform 0.4s, width 0.4s',
                zIndex: 2,
                height: '100dvh',
                width: 'var(--Sidebar-width)',
                top: 0,
                p: 2,
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRight: '1px solid',
                borderColor: 'divider',
            }}
        >
            <GlobalStyles
                styles={(theme) => ({
                    ':root': {
                        '--Sidebar-width': '220px',
                        [theme.breakpoints.up('lg')]: {
                            '--Sidebar-width': '240px',
                        },
                    },
                })}
            />
            <Box
                className="Sidebar-overlay"
                sx={{
                    position: 'fixed',
                    zIndex: 9998,
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    opacity: 'var(--SideNavigation-slideIn)',
                    backgroundColor: 'var(--joy-palette-background-backdrop)',
                    transition: 'opacity 0.4s',
                    transform: {
                        xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
                        lg: 'translateX(-100%)',
                    },
                }}
                onClick={() => closeSidebar()}
            />
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <IconButton variant="soft" color="primary" size="sm">
                    <EggIcon />
                </IconButton>
                <Typography level="title-lg">MagicPost</Typography>
                <ColorSchemeToggle sx={{ ml: 'auto' }} />
            </Box>
            <Box
                sx={{
                    minHeight: 0,
                    overflow: 'hidden auto',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    [`& .${listItemButtonClasses.root}`]: {
                        gap: 1.5,
                    },
                }}
            >
                <List
                    size="sm"
                    sx={{
                        gap: 1,
                        '--List-nestedInsetStart': '30px',
                        '--ListItem-radius': (theme) => theme.vars.radius.sm,
                    }}
                >

                    <ListItem nested>
                        <Toggler
                            renderToggle={({ open, setOpen }) => (
                                <ListItemButton onClick={() => setOpen(!open)}>
                                    <AssignmentRoundedIcon />
                                    <ListItemContent>
                                        <Typography level="title-sm">Parcels</Typography>
                                    </ListItemContent>
                                    <KeyboardArrowDownIcon
                                        sx={{ transform: open ? 'rotate(180deg)' : 'none' }}
                                    />
                                </ListItemButton>
                            )}
                        >
                            <List   >
                                <ListItem sx={{ mt: 0.5 }}>
                                    <ListItemButton
                                        onClick={() => props.onStatusChange && props.onStatusChange('pending')}
                                        selected={props.status === 'pending'}
                                    >
                                        Pending Confirmation
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton
                                        onClick={() => props.onStatusChange && props.onStatusChange('confirmed')}
                                        selected={props.status === 'confirmed'}
                                    >
                                        View Parcels
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Toggler>
                    </ListItem>
                    <ListItem nested>
                        <Toggler
                            renderToggle={({ open, setOpen }) => (
                                <ListItemButton onClick={() => setOpen(!open)}>
                                    <AssignmentRoundedIcon />
                                    <ListItemContent>
                                        <Typography level="title-sm">Received</Typography>
                                    </ListItemContent>
                                    <KeyboardArrowDownIcon
                                        sx={{ transform: open ? 'rotate(180deg)' : 'none' }}
                                    />
                                </ListItemButton>
                            )}
                        >
                            <List   >
                                <ListItem sx={{ mt: 0.5 }}>
                                    <ListItemButton
                                        onClick={() => props.onStatusChange && props.onStatusChange('pending_receipt')}
                                        selected={props.status === 'pending_receipt'}
                                    >
                                        Pending
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton
                                        onClick={() => props.onStatusChange && props.onStatusChange('confirmed_receipt')}
                                        selected={props.status === 'confirmed_receipt'}
                                    >
                                        Confirmed
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Toggler>
                    </ListItem>
                </List>

                <List
                    size="sm"
                    sx={{
                        mt: 'auto',
                        flexGrow: 0,
                        '--ListItem-radius': (theme) => theme.vars.radius.sm,
                        '--List-gap': '8px',
                        mb: 2,
                    }}
                >
                </List>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <Avatar src={userInfo?.avatar_url!} />
                <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Typography level="title-sm">{userInfo?.full_name}</Typography>
                    <Typography level="body-xs" style={{ wordWrap: 'break-word' }}>{userInfo?.email}</Typography>
                </Box>
                <form action="/auth/logout" method="POST">
                    <IconButton type='submit' size="sm" variant="plain" color="neutral">
                        <LogoutRoundedIcon />
                    </IconButton>
                </form>
            </Box>
        </Sheet>
    );
}
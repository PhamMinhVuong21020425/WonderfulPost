import * as React from 'react';
import Box from '@mui/joy/Box';

import StaffTable from './StaffTable';
import Button from '@mui/joy/Button';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/joy/Typography';
import Modal from '@mui/joy/Modal';

import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import Stack from '@mui/joy/Stack';
import FormLabel from '@mui/joy/FormLabel';
import Divider from '@mui/joy/Divider';

import CountrySelector from './CountrySelector';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import StaffList from './StaffList';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import IconButton from '@mui/joy/IconButton';
import Sheet from '@mui/joy/Sheet';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';

export default function Staff() {
    const [openAddStaff, setOpenAddStaff] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const renderAddStaffModal = () => {
        return (
            <Modal
                open={openAddStaff}
                onClose={() => setOpenAddStaff(false)}
                // title="Add Staff"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Card
                    style={{
                        width: '100%',
                        maxWidth: 600,
                        // borderRadius: 12,
                        // overflow: 'hidden',
                    }}
                >
                    <Box sx={{ mb: 1 }}>
                        <Typography level="title-md">Personal Information</Typography>
                        <Typography level="body-sm">
                            Customize how your profile information will apper to the networks.
                        </Typography>
                    </Box>
                    <Divider />
                    <Stack
                        direction="row"
                    >
                        <Stack direction="column" spacing={1}>

                        </Stack>
                        <Stack spacing={2} sx={{ flexGrow: 1 }}>
                            <Stack spacing={1}>
                                <FormLabel>Name</FormLabel>
                                <FormControl
                                >
                                    <Input size="sm" placeholder="Your name" />
                                </FormControl>
                                <FormLabel>Phone</FormLabel>
                                <FormControl
                                >
                                    <Input size="sm" placeholder="Phone" />
                                </FormControl>

                            </Stack>
                            <Stack direction="row" spacing={2}>
                                <FormControl sx={{ flexGrow: 1 }}>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        size="sm"
                                        type="email"
                                        startDecorator={<EmailRoundedIcon />}
                                        placeholder="@magic-post.com"
                                        sx={{ flexGrow: 1 }}
                                    />
                                </FormControl>
                            </Stack>
                            <div>
                                <CountrySelector />
                            </div>
                        </Stack>
                    </Stack>
                    <CardOverflow >
                        <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                            <Button size="sm" variant="outlined" color="neutral" onClick={() => setOpenAddStaff(false)}>
                                Cancel
                            </Button>
                            <Button size="sm" variant="outlined" color="primary">
                                Save
                            </Button>
                        </CardActions>
                    </CardOverflow>
                </Card>

            </Modal>
        );
    };

    const renderFilters = () => (
        <React.Fragment>
            <FormControl size="sm" >
                <FormLabel style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>Status</FormLabel>
                <Select
                    size="sm"
                    placeholder="Filter by position"
                    slotProps={{ button: { sx: { whiteSpace: 'nowrap' } } }}
                    style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}
                >
                    <Option value="gathering">
                        <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>Gathering</Typography>
                    </Option>
                    <Option value="transaction">
                        <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>Transaction</Typography>
                    </Option>
                    <Option value="all">
                        <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>All</Typography>
                    </Option>
                </Select>
            </FormControl>

        </React.Fragment>
    );

    return (
        <div>
            <Box
                component="main"
                className="MainContent"
                sx={{
                    px: { xs: 2, md: 6 },
                    pt: {
                        xs: 'calc(12px + var(--Header-height))',
                        sm: 'calc(12px + var(--Header-height))',
                        md: 3,
                    },
                    pb: { xs: 2, sm: 2, md: 3 },
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: 0,
                    height: '100dvh',
                    gap: 1,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        mb: 1,
                        gap: 1,
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: { xs: 'start', sm: 'center' },
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography level="h2" component="h1">
                        Staffs
                    </Typography>
                    <Button
                        color="primary"
                        startDecorator={<AddCircleOutlineIcon />}
                        size="sm"
                        variant="outlined"
                        onClick={() => setOpenAddStaff(true)}
                    >
                        Add Staff
                    </Button>
                </Box>
                <Box
                    className="SearchAndFilters-tabletUp"
                    sx={{
                        borderRadius: 'sm',
                        py: 2,
                        display: { xs: 'none', sm: 'flex' },
                        flexWrap: 'wrap',
                        gap: 1.5,
                        '& > *': {
                            minWidth: { xs: '120px', md: '160px' },
                        },
                    }}
                >
                    <FormControl sx={{ flex: 1 }} size="sm">
                        <FormLabel >Search for staff</FormLabel>
                        <Input size="sm" placeholder="Search" startDecorator={<SearchIcon />} style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }} />
                    </FormControl>
                </Box>
                <Sheet
                    className="SearchAndFilters-mobile"
                    sx={{
                        display: { xs: 'flex', sm: 'none' },
                        my: 1,
                        gap: 1,
                    }}
                >
                    <Input
                        size="sm"
                        placeholder="Search"
                        startDecorator={<SearchIcon />}
                        sx={{ flexGrow: 1 }}
                    />
                    <IconButton
                        size="sm"
                        variant="outlined"
                        color="neutral"
                        onClick={() => setOpen(true)}
                    >
                        <FilterAltIcon />
                    </IconButton>
                    <Modal open={open} onClose={() => setOpen(false)}>
                        <ModalDialog aria-labelledby="filter-modal" layout="fullscreen">
                            <ModalClose />
                            <Typography id="filter-modal" level="h2">
                                Filters
                            </Typography>
                            <Divider sx={{ my: 2 }} />
                            <Sheet sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                {renderFilters()}
                                <Button color="primary" onClick={() => setOpen(false)} variant='outlined'>
                                    Submit
                                </Button>
                            </Sheet>
                        </ModalDialog>
                    </Modal>
                </Sheet>
                <StaffTable />
                <StaffList />
            </Box>
            {renderAddStaffModal()}
        </div>
    );
}
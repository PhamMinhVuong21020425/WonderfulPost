import * as React from 'react';
import Box from '@mui/joy/Box';
import OfficeTable from './OfficeTable';
import OfficeList from './OfficeList';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import SearchIcon from '@mui/icons-material/Search';
import AddStaffModal from './AddStaffModal';
import Sheet from '@mui/joy/Sheet';
import IconButton from '@mui/joy/IconButton';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import Divider from '@mui/material/Divider';

export default function Office() {
    const [open, setOpen] = React.useState(false);

    const [openAddStaff, setOpenAddStaff] = React.useState(false);

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
                        Offices
                    </Typography>

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
                <OfficeTable />
                <OfficeList />
            </Box>
            <AddStaffModal openAddStaff={openAddStaff} setOpenAddStaff={setOpenAddStaff} />
        </div >
    );
}
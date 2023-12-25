import * as React from 'react';
import Box from '@mui/joy/Box';

import StaffTable from './StaffTable';
import Button from '@mui/joy/Button';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/joy/Typography';

import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import { Chip } from '@mui/joy';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import SearchIcon from '@mui/icons-material/Search';
import AddStaffModal from './AddStaffModal';


export default function Staff() {
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
                    <Typography level="h2" component="h1" style={{ color: 'var(--joy-palette-text-secondary)', fontWeight: "600" }}>
                        Staffs
                    </Typography>

                    <Box>
                        <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                            <Chip
                                size="sm"
                                color="warning"
                                sx={{ minWidth: 100, minHeight: 5 }}
                            />
                            <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>
                                Gathering
                            </Typography>

                        </Box>
                        <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                            <Chip
                                size="sm"
                                color="success"
                                sx={{ minWidth: 100, minHeight: 5 }}
                            />
                            <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>
                                Transaction
                            </Typography>

                        </Box>
                    </Box>


                    <Button
                        color="primary"
                        startDecorator={<AddIcon />}
                        size="sm"
                        variant="outlined"
                        onClick={() => setOpenAddStaff(true)}
                        style={{ fontWeight: "600" }}
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
                        <FormLabel >Search for Staff</FormLabel>
                        <Input size="sm" placeholder="Search" startDecorator={<SearchIcon />} style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }} />
                    </FormControl>
                    <FormControl sx={{ flex: 1 }} size="sm">
                        <FormLabel >Search for Office</FormLabel>
                        <Input size="sm" placeholder="Search" startDecorator={<SearchIcon />} style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }} />
                    </FormControl>
                    {renderFilters()}
                </Box>

                <StaffTable />
            </Box>
            <AddStaffModal openAddStaff={openAddStaff} setOpenAddStaff={setOpenAddStaff} />
        </div >
    );
}
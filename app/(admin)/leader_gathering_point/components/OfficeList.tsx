import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import Link from '@mui/joy/Link';
import IconButton, { iconButtonClasses } from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import Stack from '@mui/material/Stack';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import CountrySelector from './CountrySelector';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import ListDivider from '@mui/joy/ListDivider';

import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import { PaginationLaptop, PaginationMobile } from '@/app/components/Pagination';

// Icons
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import User from '@/app/types/UserType';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
    useSelector,
    useDispatch,
    selectOffice,
    getAllOfficesInfoAsync,
    getSubOfficesInfoAsync,
} from '@/lib/redux';
import Office from '@/app/types/OfficeType';

function initialName(name: string) {
    if (!name) return '';
    return name.split(' ').map((word) => word[0]).join('');
}

export default function OfficeList() {
    const [openEditModalIndex, setOpenEditModalIndex] = React.useState<number | null>(null);
    const [openDeleteModalIndex, setOpenDeleteModalIndex] = React.useState<number | null>(null);
    const [openViewModalIndex, setOpenViewModalIndex] = React.useState<number | null>(null);

    const offices = useSelector(selectOffice);

    const renderEditModal = (index: number) => {
        return (
            <Modal
                open={openEditModalIndex == index}
                onClose={() => setOpenEditModalIndex(null)}
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
                                <FormControl>
                                    <FormLabel>Role</FormLabel>
                                    <Select
                                        size="sm"
                                        defaultValue="1"
                                    >
                                        <Option value="1">
                                            <Typography>
                                                GATHERING
                                            </Typography>
                                        </Option>
                                        <Option value="2">
                                            <Typography level='body-sm'>
                                                TRANSACTION
                                            </Typography>
                                        </Option>
                                    </Select>
                                </FormControl>
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
                            <Button size="sm" variant="outlined" color="neutral" onClick={() => setOpenEditModalIndex(null)}>
                                Cancel
                            </Button>
                            <Button size="sm" variant="outlined" color="primary" onClick={() => setOpenEditModalIndex(null)}>
                                Save
                            </Button>
                        </CardActions>
                    </CardOverflow>
                </Card>

            </Modal>
        );
    }

    const renderDeleteModal = (index: number) => {
        return (
            <Modal
                open={openDeleteModalIndex == index}
                onClose={() => setOpenDeleteModalIndex(null)}
            >
                <ModalDialog variant="outlined" role="alertdialog">
                    <DialogTitle>
                        <WarningRoundedIcon />
                        Confirmation
                    </DialogTitle>
                    <Divider />
                    <DialogContent>
                        Are you sure you want to delete this STAFF?
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" color="danger" onClick={() => setOpenDeleteModalIndex(null)}>
                            Discard notes
                        </Button>
                        <Button variant="outlined" color="neutral" onClick={() => setOpenDeleteModalIndex(null)}>
                            Cancel
                        </Button>
                    </DialogActions>
                </ModalDialog>
            </Modal>
        );
    }

    const renderViewModal = (office: Office, index: number) => {
        return (
            <Modal
                open={openViewModalIndex == index}
                onClose={() => setOpenViewModalIndex(null)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <ModalDialog
                    style={{
                        width: '80%', // Adjust the width as needed
                        maxWidth: 600, // Maximum width to maintain readability
                        padding: '20px', // Padding for content
                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                        <Typography level='title-lg'>Information</Typography>

                    </Box>

                </ModalDialog>
            </Modal>
        )
    }

    // Table Pagination
    const rowPerPage = 5;
    const totalRows = offices.length;

    const [currentPage, setCurrentPage] = React.useState(1);

    // Calculate the index range for the current page
    const indexOfLastRow = currentPage * rowPerPage;
    const indexOfFirstRow = indexOfLastRow - rowPerPage;
    const currentRows = offices.slice(indexOfFirstRow, indexOfLastRow);

    // Function to change page
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }

    return (
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            {
                currentRows.map((office, index) => (
                    <List
                        key={office.id}
                        size="sm"
                        sx={{
                            '--ListItem-paddingX': 0,
                        }}
                    >
                        <ListItem
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'start',
                            }}
                        >
                            <ListItemContent sx={{ display: 'flex', gap: 2, alignItems: 'start' }}>
                                <ListItemDecorator>
                                    <Avatar
                                        size="sm"
                                        color={(office.type === 'GATHERING') ? 'success' : 'warning'}

                                        style={{ fontSize: '0.75rem' }}
                                    >
                                        {initialName(office.name ?? 'Anonymous Office')}
                                    </Avatar>
                                </ListItemDecorator>
                                <div>
                                    <Typography fontWeight={600} gutterBottom>
                                        {office.name}
                                    </Typography>
                                    {/* <Typography level="body-xs" gutterBottom>
                                        {staff.position}
                                    </Typography> */}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            gap: 0.5,
                                            mb: 1,
                                        }}
                                    >
                                        <Typography level="body-xs">{office.city}</Typography>
                                        <Typography level="body-xs">&bull;</Typography>
                                        <Typography level="body-xs">{office.phone}</Typography>
                                    </Box>
                                    {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                        <Link level="body-sm" component="button">
                                            Download
                                        </Link>
                                    </Box> */}
                                </div>
                            </ListItemContent>
                            <IconButton variant="soft" size="sm">
                                <Dropdown>
                                    <MenuButton
                                        slots={{ root: IconButton }}
                                        slotProps={{ root: { variant: 'plain', color: 'neutral', size: 'sm' } }}
                                    >
                                        <MoreHorizRoundedIcon />
                                    </MenuButton>
                                    <Menu size="sm" sx={{ minWidth: 140 }}>
                                        <MenuItem onClick={() => setOpenEditModalIndex(index)}>
                                            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                                                <EditRoundedIcon />
                                                <Typography
                                                    style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}
                                                    color='neutral'
                                                >
                                                    Edit
                                                </Typography>
                                            </Box>
                                        </MenuItem>
                                        {
                                            office.type == 'GATHERING' &&
                                            <MenuItem onClick={() => setOpenViewModalIndex(index)}>
                                                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                                                    <VisibilityIcon />
                                                    <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>View</Typography>
                                                </Box>
                                            </MenuItem>
                                        }
                                        <MenuItem onClick={() => setOpenDeleteModalIndex(index)}>
                                            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                                                <DeleteRoundedIcon />
                                                <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>Delete</Typography>
                                            </Box>
                                        </MenuItem>

                                    </Menu>
                                    {renderEditModal(index)}
                                    {renderDeleteModal(index)}
                                    {renderViewModal(office, index)}
                                </Dropdown >
                            </IconButton>
                        </ListItem>
                        <ListDivider />
                    </List>
                ))
            }
            <PaginationMobile
                rowPerPage={rowPerPage}
                currentPage={currentPage}
                totalRows={totalRows}
                indexOfLastRow={indexOfLastRow}
                indexOfFirstRow={indexOfFirstRow}
                setCurrentPage={setCurrentPage}
                handlePageChange={handlePageChange}
            />
        </Box>
    )
}
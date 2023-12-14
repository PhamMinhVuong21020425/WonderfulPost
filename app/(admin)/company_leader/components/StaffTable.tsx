import * as React from 'react';
import { ColorPaletteProp } from '@mui/joy/styles';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import Checkbox from '@mui/joy/Checkbox';
import IconButton, { iconButtonClasses } from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import CountrySelector from './CountrySelector';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';

// Icons
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import BlockIcon from '@mui/icons-material/Block';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { CardHeader } from '@mui/material';
import Staff from '../../../types/StaffType';


const staffs: Staff[] = [
    {
        id: 'STAFF-0001',
        name: 'Alice Johnson',
        office: 'Cau Giay, Ha Noi',
        email: 'alice.johnson@magic-post.com',
        phone: '123-456-7890',
        position: "TRANSACTION",
        status: 'ACTIVE',
    },
    {
        id: 'STAFF-0002',
        name: 'Bob Smith',
        office: 'Da Nang',
        email: 'bob.smith@magic-post.com',
        phone: '234-567-8901',
        position: "GATHERING",
        status: 'ACTIVE',
    },
    {
        id: 'STAFF-0003',
        name: 'Elena Rodriguez',
        office: 'Ho Chi Minh',
        email: 'elena.rodriguez@magic-post.com',
        phone: '345-678-9012',
        position: 'TRANSACTION',
        status: 'INACTIVE',
    },
    {
        id: 'STAFF-0004',
        name: 'Michael Chang',
        office: 'Cau Giay, Ha Noi',
        email: 'michael.chang@magic-post.com',
        phone: '456-789-0123',
        position: 'GATHERING',
        status: 'ACTIVE',
    },
    {
        id: 'STAFF-0005',
        name: 'Sophie Williams',
        office: 'Da Nang',
        email: 'sophie.williams@magic-post.com',
        phone: '567-890-1234',
        position: 'TRANSACTION',
        status: 'ACTIVE',
    },
    {
        id: 'STAFF-0006',
        name: 'Daniel Brown',
        office: 'Ho Chi Minh',
        email: 'daniel.brown@magic-post.com',
        phone: '678-901-2345',
        position: 'TRANSACTION',
        status: 'INACTIVE',
    },
    {
        id: 'STAFF-0007',
        name: 'Emily Davis',
        office: 'Cau Giay, Ha Noi',
        email: 'emily.davis@magic-post.com',
        phone: '789-012-3456',
        position: 'TRANSACTION',
        status: 'ACTIVE',
    },
    {
        id: 'STAFF-0008',
        name: 'Oliver Martinez',
        office: 'Da Nang',
        email: 'oliver.martinez@magic-post.com',
        phone: '890-123-4567',
        position: 'GATHERING',
        status: 'ACTIVE',
    },
    {
        id: 'STAFF-0009',
        name: 'Ava Taylor',
        office: 'Ho Chi Minh',
        email: 'ava.taylor@magic-post.com',
        phone: '901-234-5678',
        position: 'GATHERING',
        status: 'INACTIVE',
    },
    {
        id: 'STAFF-0010',
        name: 'Liam Garcia',
        office: 'Cau Giay, Ha Noi',
        email: 'liam.garcia@magic-post.com',
        phone: '012-345-6789',
        position: 'TRANSACTION',
        status: 'ACTIVE',
    },
    {
        id: 'STAFF-0011',
        name: 'Mia Lopez',
        office: 'Da Nang',
        email: 'mia.lopez@magic-post.com',
        phone: '123-456-7890',
        position: 'GATHERING',
        status: 'ACTIVE',
    },
    {
        id: 'STAFF-0012',
        name: 'Noah Perez',
        office: 'Ho Chi Minh',
        email: 'noah.perez@magic-post.com',
        phone: '234-567-8901',
        position: 'TRANSACTION',
        status: 'INACTIVE',
    },
    {
        id: 'STAFF-0013',
        name: 'Emma Nguyen',
        office: 'Cau Giay, Ha Noi',
        email: 'emma.nguyen@magic-post.com',
        phone: '345-678-9012',
        position: 'GATHERING',
        status: 'ACTIVE',
    },
    {
        id: 'STAFF-0014',
        name: 'William Kim',
        office: 'Da Nang',
        email: 'william.kim@magic-post.com',
        phone: '456-789-0123',
        position: 'TRANSACTION',
        status: 'ACTIVE',
    },
    {
        id: 'STAFF-0015',
        name: 'Sofia Lee',
        office: 'Ho Chi Minh',
        email: 'sofia.lee@magic-post.com',
        phone: '567-890-1234',
        position: 'GATHERING',
        status: 'INACTIVE',
    },
    {
        id: 'STAFF-0016',
        name: 'James Robinson',
        office: 'Cau Giay, Ha Noi',
        email: 'james.robinson@magic-post.com',
        phone: '678-901-2345',
        position: 'TRANSACTION',
        status: 'ACTIVE',
    },
    {
        id: 'STAFF-0017',
        name: 'Charlotte Garcia',
        office: 'Da Nang',
        email: 'charlotte.garcia@magic-post.com',
        phone: '789-012-3456',
        position: 'GATHERING',
        status: 'ACTIVE',
    },
    {
        id: 'STAFF-0018',
        name: 'Benjamin Miller',
        office: 'Ho Chi Minh',
        email: 'benjamin.miller@magic-post.com',
        phone: '890-123-4567',
        position: 'TRANSACTION',
        status: 'INACTIVE',
    },
    {
        id: 'STAFF-0019',
        name: 'Amelia Brown',
        office: 'Cau Giay, Ha Noi',
        email: 'amelia.brown@magic-post.com',
        phone: '901-234-5678',
        position: 'GATHERING',
        status: 'ACTIVE',
    },
    {
        id: 'STAFF-0020',
        name: 'Elijah Martinez',
        office: 'Da Nang',
        email: 'elijah.martinez@magic-post.com',
        phone: '012-345-6789',
        position: 'TRANSACTION',
        status: 'ACTIVE',
    },
];

function initialName(name: string) {
    return name.split(' ').map((word) => word[0]).join('');
}


function RowMenu() {
    const [openEditModal, setOpenEditModal] = React.useState(false);
    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

    const renderEditModal = () => {
        return (
            <Modal
                open={openEditModal}
                onClose={() => setOpenEditModal(false)}
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
                                            <Typography level='body-sm'>
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
                            <Button size="sm" variant="outlined" color="neutral" onClick={() => setOpenEditModal(false)}>
                                Cancel
                            </Button>
                            <Button size="sm" variant="outlined" color="primary" onClick={() => setOpenEditModal(false)}>
                                Save
                            </Button>
                        </CardActions>
                    </CardOverflow>
                </Card>

            </Modal>
        );
    }

    const renderDeleteModal = () => {
        return (
            <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
                <ModalDialog variant="outlined" role="alertdialog">
                    <DialogTitle>
                        <WarningRoundedIcon />
                        Confirmation
                    </DialogTitle>
                    <Divider />
                    <DialogContent>
                        Are you sure you want to delete this staff?
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" color="danger" onClick={() => setOpenDeleteModal(false)}>
                            Discard notes
                        </Button>
                        <Button variant="outlined" color="neutral" onClick={() => setOpenDeleteModal(false)}>
                            Cancel
                        </Button>
                    </DialogActions>
                </ModalDialog>
            </Modal>
        );
    }
    return (
        <Dropdown>
            <MenuButton
                slots={{ root: IconButton }}
                slotProps={{ root: { variant: 'plain', color: 'neutral', size: 'sm' } }}
            >
                <MoreHorizRoundedIcon />
            </MenuButton>
            <Menu size="sm" sx={{ minWidth: 140 }}>
                <MenuItem onClick={() => setOpenEditModal(true)}>
                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                        <EditRoundedIcon />
                        <Typography
                            level="body-xs"
                            color='neutral'
                        >
                            Edit
                        </Typography>
                    </Box>
                </MenuItem>
                <MenuItem color="danger" onClick={() => setOpenDeleteModal(true)}>
                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                        <DeleteRoundedIcon />
                        <Typography level="body-xs" color='danger'>Delete</Typography>
                    </Box>
                </MenuItem>
            </Menu>
            {renderEditModal()}
            {renderDeleteModal()}
        </Dropdown >
    );
}

export default function StaffTable() {

    return (
        <React.Fragment>
            <Sheet
                className="StaffTableContainer"
                variant="outlined"
                sx={{
                    display: { xs: 'none', sm: 'initial' },
                    width: '100%',
                    borderRadius: 'sm',
                    flexShrink: 1,
                    overflow: 'auto',
                    minHeight: 0,
                }}

            >
                <Table
                    aria-labelledby="tableTitle"
                    stickyHeader
                    hoverRow
                    sx={{
                        '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
                        '--Table-headerUnderlineThickness': '1px',
                        '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)',
                        '--TableCell-paddingY': '4px',
                        '--TableCell-paddingX': '8px',
                    }}
                >
                    <thead>
                        <tr>
                            <th style={{ width: '12%', padding: "6px 12px" }}>Staff ID</th>
                            <th style={{ width: '30%', padding: "6px 12px" }}>Staff</th>
                            <th style={{ width: '20%', padding: "6px 12px" }}>Office</th>

                            <th style={{ width: '20%', padding: "6px 12px" }}>Phone</th>
                            <th style={{ width: '18%', textAlign: 'center' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {staffs.map((staff) => (
                            <tr key={staff.id}>
                                <td style={{ width: '20%', padding: "6px 12px" }}>
                                    <Typography
                                        level="body-xs"
                                    >{staff.id}</Typography>
                                </td>
                                <td style={{ width: '20%', padding: "6px 12px" }}>
                                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                        <Avatar
                                            size="sm"
                                            color={
                                                {
                                                    TRANSACTION: 'success',
                                                    GATHERING: 'warning',
                                                }[staff.position] as ColorPaletteProp
                                            }
                                            style={{ fontSize: '0.75rem' }}
                                        >
                                            {initialName(staff.name)}
                                        </Avatar>
                                        <div>
                                            <Typography level="body-xs">{staff.name}</Typography>
                                            <Typography
                                                style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}
                                            >{staff.email}</Typography>
                                        </div>
                                    </Box>
                                </td>
                                <td style={{ width: '20%', padding: "6px 12px" }}>
                                    <Typography level="body-xs">{staff.office}</Typography>
                                </td>

                                <td style={{ width: '20%', padding: "6px 12px" }}>
                                    <Typography level="body-xs">{staff.phone}</Typography>
                                </td>

                                <td style={{ width: '10%', textAlign: 'center' }}>
                                    <IconButton variant="soft" size="sm">
                                        <RowMenu />
                                    </IconButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Sheet>
            <Box
                className="Pagination-laptopUp"
                sx={{
                    pt: 2,
                    gap: 1,
                    [`& .${iconButtonClasses.root}`]: { borderRadius: '50%' },
                    display: {
                        xs: 'none',
                        md: 'flex',
                    },
                }}
            >
                <Button
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    startDecorator={<KeyboardArrowLeftIcon />}
                >
                    Previous
                </Button>

                <Box sx={{ flex: 1 }} />
                {['1', '2', '3', '…', '8', '9', '10'].map((page) => (
                    <IconButton
                        key={page}
                        size="sm"
                        variant={Number(page) ? 'outlined' : 'plain'}
                        color="neutral"
                    >
                        {page}
                    </IconButton>
                ))}
                <Box sx={{ flex: 1 }} />

                <Button
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    endDecorator={<KeyboardArrowRightIcon />}
                >
                    Next
                </Button>
            </Box>
        </React.Fragment >
    )

}
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
import { styled } from '@mui/system';
import {
    TablePagination,
    tablePaginationClasses as classes,
} from '@mui/base/TablePagination';

// Icons
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import User from '@/app/types/UserType';
import Office from '@/app/types/OfficeType';
import {
    useSelector, 
    useDispatch, 
    selectLeader,
    getAllLeadersInfoAsync,
    getSubOfficesInfoAsync,
} from '@/lib/redux';

function initialName(name: string) {
    if (!name) return '';
    return name.split(' ').map((word) => word[0]).join('');
}

export default function LeaderTable() {
    const [openEditModalIndex, setOpenEditModalIndex] = React.useState<number | null>(null);
    const [openDeleteModalIndex, setOpenDeleteModalIndex] = React.useState<number | null>(null);
    const [openViewModalIndex, setOpenViewModalIndex] = React.useState<number | null>(null);

    const dispatch = useDispatch();
    const LEADERs = useSelector(selectLeader);

    React.useEffect(() => {
        dispatch(getAllLeadersInfoAsync());
    }, []);

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
                        Are you sure you want to delete this LEADER?
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

    const renderViewModal = (leader: User, index: number) => {
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
                    <Sheet
                        style={{ paddingBottom: '10px', maxHeight: '500px', overflowY: 'auto' }}
                    >
                        <Table
                            aria-labelledby="tableTitle"
                            stickyHeader
                            borderAxis="both"
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
                                    <th style={{ width: '30%', padding: "6px 12px", fontSize: "0.75rem" }}>Office Id</th>
                                    <th style={{ width: '40%', padding: "6px 12px", fontSize: "0.75rem" }}>Address</th>
                                    <th style={{ width: '30%', padding: "6px 12px", fontSize: "0.75rem" }}>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    leader.office?.branches.map((sub_office: Office) => (
                                        <tr key={sub_office.id}>
                                            <td style={{ width: '30%', padding: "6px 12px", fontSize: "0.7rem" }}>
                                                <Typography
                                                // level="body-xs"
                                                >
                                                    {sub_office.id}
                                                </Typography>
                                            </td>
                                            <td style={{ width: '40%', padding: "6px 12px", fontSize: "0.7rem" }}>
                                                <Typography
                                                // level="body-xs"
                                                >
                                                    {sub_office.address}
                                                </Typography>
                                            </td>
                                            <td style={{ width: '30%', padding: "6px 12px", fontSize: "0.7rem" }}>
                                                <Typography
                                                // level="body-xs"
                                                >
                                                    {sub_office.phone}
                                                </Typography>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Sheet>

                </ModalDialog>
            </Modal>
        )
    }

    // Table Pagination
    const rowPerPage = 5;
    const totalRows = LEADERs.length;

    const [currentPage, setCurrentPage] = React.useState(1);

    // Calculate the index range for the current page
    const indexOfLastRow = currentPage * rowPerPage;
    const indexOfFirstRow = indexOfLastRow - rowPerPage;
    const currentRows = LEADERs.slice(indexOfFirstRow, indexOfLastRow);

    // Function to change page
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }

    return (
        <React.Fragment>
            <Sheet
                className="LEADERTableContainer"
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
                            <th style={{ width: '15%', padding: "6px 12px" }}>Phone</th>
                            <th style={{ width: '8%', padding: "6px 12px", textAlign: 'center' }}>Sent</th>
                            <th style={{ width: '9%', padding: "6px 12px", textAlign: 'center' }}>Received</th>
                            <th style={{ width: '6%', padding: "6px 12px", textAlign: 'center' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (
                                currentRows
                            ).map((LEADER, index) => (
                                // <Row key={LEADER.id} row={LEADER} />
                                <React.Fragment>
                                    <tr key={LEADER.id}>
                                        <td style={{ width: '12%', padding: "6px 12px" }}>
                                            <Typography
                                                style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}
                                            >{LEADER.id}</Typography>
                                        </td>
                                        <td style={{ width: '30%', padding: "6px 12px" }}>
                                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                                <Avatar
                                                    size="sm"
                                                    src={LEADER.avatar_url ?? ''}
                                                    color={LEADER.position.includes('LEADER') ? LEADER.position.includes('TRANSACTION') ? 'success' : 'warning' : 'neutral'}
                                                    style={{ fontSize: '0.75rem' }}
                                                >
                                                    {initialName(LEADER.full_name ?? 'Anonymous User')}
                                                </Avatar>
                                                <div>
                                                    <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>{LEADER.full_name}</Typography>
                                                    <Typography
                                                        style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}
                                                    >{LEADER.email}</Typography>
                                                </div>
                                            </Box>
                                        </td>
                                        <td style={{ width: '20%', padding: "6px 12px" }}>
                                            <Box
                                                sx={{ display: 'flex', gap: 2, alignItems: 'center' }}
                                            >

                                                <Typography
                                                    style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}
                                                >{LEADER.office?.address}</Typography>

                                            </Box>
                                        </td>

                                        <td style={{ width: '15%', padding: "6px 12px" }}>
                                            <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>{LEADER.phone}</Typography>
                                        </td>

                                        <td style={{ width: '8%', padding: "6px 12px", textAlign: 'center' }}>
                                            <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>11</Typography>
                                        </td>
                                        <td style={{ width: '9%', padding: "6px 12px", textAlign: 'center' }}>
                                            <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>11</Typography>
                                        </td>

                                        <td style={{ width: '6%', textAlign: 'center' }}>
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
                                                            LEADER.position == 'LEADER GATHERING' &&
                                                            <MenuItem onClick={() => {
                                                                    if (LEADER.branch_id) {
                                                                        dispatch(getSubOfficesInfoAsync(LEADER.branch_id))
                                                                    } 
                                                                    setOpenViewModalIndex(index);
                                                                }}
                                                            >
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
                                                    {renderViewModal(LEADER, index)}
                                                </Dropdown >
                                            </IconButton>
                                        </td>

                                    </tr>

                                </React.Fragment>
                            ))
                        }
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
                    onClick={() => handlePageChange(currentPage - 1)}
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    startDecorator={<KeyboardArrowLeftIcon />}
                    disabled={currentPage === 1}
                >
                    Previous
                </Button>

                <Box sx={{ flex: 1 }} />
                {Array.from({ length: Math.ceil(totalRows / rowPerPage) }, (_, i) => {
                        if(currentPage > i + 10 || currentPage < i - 9)return null;
                        return (
                            <IconButton
                                key={i + 1}
                                size="sm"
                                variant={currentPage === i + 1 ? 'outlined' : 'plain'}
                                color="neutral"
                                onClick={() => handlePageChange(i + 1)}
                            >
                                {i + 1}
                            </IconButton>
                        );
                    })
                }
                <Box sx={{ flex: 1 }} />


                <Button
                    onClick={() => handlePageChange(currentPage + 1)}
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    endDecorator={<KeyboardArrowRightIcon />}
                    disabled={indexOfLastRow >= totalRows}
                >
                    Next
                </Button>
            </Box>
        </React.Fragment >
    )

}
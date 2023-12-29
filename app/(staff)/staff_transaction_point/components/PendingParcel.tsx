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
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import { ModalDialogProps } from '@mui/joy/ModalDialog';
import ModalOverflow from '@mui/joy/ModalOverflow';
import { makeStyles } from '@mui/material';

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
import { CardHeader, Icon } from '@mui/material';
import User from '@/app/types/UserType';
import Office from '@/app/types/OfficeType';
import RemoveIcon from '@mui/icons-material/Remove';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import PdfParcel from './PdfParcel';

import Parcel from "@/app/types/ParcelType"
import initParcel from '@/utils/init/initParcel';
import PendingParcelList from './PendingParcelList';
import { PaginationLaptop } from '@/app/components/Pagination';
import {
    getReceivedParcelsInfoAsync,
    getDeliveredParcelsInfoAsync,
    selectOffice,
    selectParcel,
    selectUser,
    useDispatch,
    useSelector,
    getAllOfficesInfoAsync,
    addParcelAsync,
} from '@/lib/redux';


let officeFilters: Office[] = [];
let districts = ['-- Select District --'];
let officeNames = ['-- Select Office --'];

export default function PendingParcel() {
    const [openModalIndex, setOpenModalIndex] = React.useState<number | null>(null);
    const [dataParcel, setDataParcel] = React.useState<Parcel>(initParcel);

    //filter data with status pending
    const userInfo = useSelector(selectUser);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getDeliveredParcelsInfoAsync(userInfo?.branch_id!))
        dispatch(getReceivedParcelsInfoAsync(userInfo?.branch_id!))
        dispatch(getAllOfficesInfoAsync())
    }, []);

    const data1 = useSelector(selectParcel).deliveredParcels ?? []
    const data = data1.filter((item) => item.status == 'ON_PENDING') ?? []

    const [city, setCity] = React.useState<string>('-- Select City --');
    const [district, setDistrict] = React.useState<string>('-- Select District --');
    const [officeName, setOfficeName] = React.useState<string>('-- Select Office --');
    const [postalCode, setPostalCode] = React.useState<string>('');

    const offices: Office[] = useSelector(selectOffice);
    const citiesSet = new Set<string>();

    offices.forEach((item) => {
        if (item.city) {
            citiesSet.add(item.city);
        }
    });

    const cities = ['-- Select City --', ...citiesSet].sort((a: string, b: string) => a.localeCompare(b));

    const districtsSet = new Set<string>();
    const officeNamesSet = new Set<string>();
    officeFilters = offices.filter((item) => {
        if (item.district && item.city === city) {
            districtsSet.add(item.district);
            return true;
        }
        return false;
    });

    districts = [...districtsSet].sort((a: string, b: string) => a.localeCompare(b));
    districts = ['-- Select District --', ...districts];

    officeFilters = officeFilters.filter((item) => {
        if (item.name && item.city === city && item.district === district) {
            officeNamesSet.add(item.name);
            return true;
        }
        return false;
    });

    officeNames = [...officeNamesSet].sort((a: string, b: string) => a.localeCompare(b));
    officeNames = ['-- Select Office --', ...officeNames];

    const handleDataChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>): void => {
        let key = event.target.name;
        setDataParcel((prevState: Parcel) => ({ ...prevState, [key]: event.target.value }));
    }

    const handleOfficeNameChange = (value: string | null) => {
        if (value) {
            const officeFinal = officeFilters.find((item) => item.name === value);
            setPostalCode(officeFinal?.id!);
            setOfficeName(value);
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData: object = {
            ...dataParcel,
            from_branch_id: userInfo?.branch_id!,
            to_branch_id: postalCode,
            status: 'ON_GOING',
        }
        setLayout(undefined);
        dispatch(addParcelAsync(formData));
    }

    const renderModal = (item: any, index: any) => {
        return (
            <Modal
                open={openModalIndex === index}
                onClose={() => setOpenModalIndex(null)}
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
                        <Typography level='title-lg'>Parcel Details</Typography>
                        <Typography level='title-lg'>
                            <PdfParcel />
                        </Typography>
                    </Box>
                    <Sheet
                        style={{ padding: '10px' }}
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
                                    <th style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>Length</th>
                                    <th style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>Price</th>
                                    <th style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>Height</th>
                                    <th style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>Weight</th>
                                    <th style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>Width</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr key={item.parcel.id}>
                                    <td style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>
                                        <Typography
                                            level="body-xs"
                                        >
                                            {item.parcel.length}
                                        </Typography>
                                    </td>
                                    <td style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>
                                        <Typography
                                            level="body-xs"
                                        >
                                            {item.parcel.price}
                                        </Typography>
                                    </td>
                                    <td style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>
                                        <Typography
                                            level="body-xs"
                                        >
                                            {item.parcel.height}
                                        </Typography>
                                    </td>

                                    <td style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>
                                        <Typography
                                            level="body-xs"
                                        >
                                            {item.parcel.weight}
                                        </Typography>

                                    </td>
                                    <td style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>
                                        <Typography
                                            level="body-xs"
                                        >
                                            {item.parcel.width}
                                        </Typography>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Sheet>
                    <Box
                        sx={{
                            display: { xs: 'block', sm: 'flex' },
                            justifyContent: { xs: 'initial', sm: 'space-between' },
                        }}
                    >
                        <Sheet
                            style={{ padding: '10px' }}
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
                                        <th style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }} colSpan={2}>Recipient Information</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr key={item.parcel.id}>

                                        <td style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem" }} colSpan={1}>
                                            <Typography
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Name
                                            </Typography>
                                        </td>
                                        <td style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem" }} colSpan={1}>
                                            <Typography
                                                level="body-xs"
                                            >
                                                {item.parcel.recipient_name}
                                            </Typography>
                                        </td>
                                    </tr>
                                    <tr key={item.parcel.id}>
                                        <td style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem" }} colSpan={1}>
                                            <Typography
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Contact
                                            </Typography>
                                        </td>
                                        <td style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem" }} colSpan={1}>
                                            <Typography
                                                level="body-xs"
                                            >
                                                {item.parcel.recipient_contact}
                                            </Typography>
                                        </td>
                                    </tr>
                                    <tr key={item.parcel.id}>
                                        <td style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem" }} colSpan={1}>
                                            <Typography
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Address
                                            </Typography>
                                        </td>
                                        <td style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem" }} colSpan={1}>
                                            <Typography
                                                level="body-xs"
                                            >
                                                {item.parcel.recipient_address}
                                            </Typography>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Sheet>
                        <Sheet
                            style={{ padding: '10px' }}
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
                                        <th style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }} colSpan={2}>Sender Information</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr key={item.parcel.id}>

                                        <td style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem" }} colSpan={1}>
                                            <Typography
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Name
                                            </Typography>
                                        </td>
                                        <td style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem" }} colSpan={1}>
                                            <Typography
                                                level="body-xs"
                                            >
                                                {item.parcel.sender_name}
                                            </Typography>
                                        </td>
                                    </tr>
                                    <tr key={item.id}>
                                        <td style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem" }} colSpan={1}>
                                            <Typography
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Contact
                                            </Typography>
                                        </td>
                                        <td style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem" }} colSpan={1}>
                                            <Typography
                                                level="body-xs"
                                            >
                                                {item.parcel.sender_contact}
                                            </Typography>
                                        </td>
                                    </tr>
                                    <tr key={item.id}>
                                        <td style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem" }} colSpan={1}>
                                            <Typography
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Address
                                            </Typography>
                                        </td>
                                        <td style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem" }} colSpan={1}>
                                            <Typography
                                                level="body-xs"
                                            >
                                                {item.parcel.sender_address}
                                            </Typography>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Sheet>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'block', sm: 'flex' },
                            justifyContent: { xs: 'initial', sm: 'space-between' },
                        }}
                        style={{ padding: '10px' }}
                    >
                        <Button
                            variant="outlined"
                            color="danger"
                            size="sm"
                            onClick={() => setOpenModalIndex(null)}
                        >
                            Cancel
                        </Button>
                        <Button
                            type='submit'
                            variant="outlined"
                            color="success"
                            size="sm"
                            onClick={() => setOpenModalIndex(null)}
                        >
                            Confirm
                        </Button>
                    </Box>
                </ModalDialog>
            </Modal>
        );
    };

    const [layout, setLayout] = React.useState<ModalDialogProps['layout'] | undefined>(
        undefined,
    );

    // Type of layout: undefined, 'fullscreen', 'responsive', 'fixed'

    const renderAddParcelModal = () => {
        return (
            <Modal
                open={!!layout}
                onClose={() => {
                    setLayout(undefined);
                }}
            >
                <form onSubmit={handleSubmit}>
                    <ModalOverflow>
                        <ModalDialog
                            aria-labelledby="modal-dialog-overflow"
                            layout={layout}
                        >
                            <ModalClose />


                            <Box
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '20px',

                                }}
                            >
                                <Box>
                                    <Typography level="h4">
                                        Sender Information
                                    </Typography>
                                    {/* Form */}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            marginTop: '20px',
                                            gap: 2,
                                            '& > *': {
                                                minWidth: { xs: '120px', md: '160px' },
                                            },
                                        }}
                                    >
                                        <FormControl >
                                            <FormLabel>
                                                <Typography level="title-sm">
                                                    Name <span style={{ color: 'red' }}>*</span>
                                                </Typography>
                                            </FormLabel>
                                            <Input
                                                name='sender_name'
                                                onChange={handleDataChange}
                                                value={dataParcel.sender_name}
                                                placeholder="Nguyen Van A"
                                                style={{ fontSize: '0.8rem' }}
                                                variant='soft'
                                            />
                                        </FormControl>
                                        <FormControl >
                                            <FormLabel>
                                                <Typography level="title-sm">
                                                    Contact <span style={{ color: 'red' }}>*</span>
                                                </Typography>
                                            </FormLabel>
                                            <Input
                                                name='sender_contact'
                                                onChange={handleDataChange}
                                                value={dataParcel.sender_contact}
                                                placeholder="0123456789"
                                                style={{ fontSize: '0.8rem' }}
                                                variant='soft'
                                            />

                                        </FormControl>
                                        <FormControl >
                                            <FormLabel>
                                                <Typography level="title-sm">
                                                    Address <span style={{ color: 'red' }}>*</span>
                                                </Typography>
                                            </FormLabel>
                                            <Input
                                                name='sender_address'
                                                placeholder="UET"
                                                onChange={handleDataChange}
                                                value={dataParcel.sender_address}
                                                style={{ fontSize: '0.8rem' }}
                                                variant='soft' />
                                        </FormControl>
                                        <FormControl >
                                            <FormLabel>
                                                <Typography level="title-sm">
                                                    Province/City <span style={{ color: 'red' }}>*</span>
                                                </Typography>
                                            </FormLabel>
                                            <Input
                                                value={userInfo?.office?.city!}
                                                style={{ fontSize: '0.8rem' }}
                                                variant='soft' />
                                        </FormControl>
                                        <FormControl >
                                            <FormLabel>
                                                <Typography level="title-sm">
                                                    District <span style={{ color: 'red' }}>*</span>
                                                </Typography>
                                            </FormLabel>
                                            <Input
                                                value={userInfo?.office?.district!}
                                                style={{ fontSize: '0.8rem' }}
                                                variant='soft' />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>
                                                <Typography level="title-sm">
                                                    Office Name <span style={{ color: 'red' }}>*</span>
                                                </Typography>
                                            </FormLabel>
                                            <Input
                                                value={userInfo?.office?.name!}
                                                style={{ fontSize: '0.8rem' }}
                                                variant='soft' />
                                        </FormControl>

                                        <FormControl sx={{ flexGrow: 1 }} style={{ display: "none" }}>
                                            <FormLabel>Postal Code</FormLabel>
                                            <Input
                                                size="sm"
                                                type="text"
                                                name='from_branch_id'
                                                value={userInfo?.office?.id!}
                                                style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.8rem', fontWeight: "600" }}
                                                sx={{ flexGrow: 1 }}
                                            />
                                        </FormControl>
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography level="h4">
                                        Recipient Information
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            marginTop: '20px',
                                            gap: 2,
                                            '& > *': {
                                                minWidth: { xs: '120px', md: '160px' },
                                            },
                                        }}
                                    >
                                        <FormControl >
                                            <FormLabel>
                                                <Typography level="title-sm">
                                                    Name <span style={{ color: 'red' }}>*</span>
                                                </Typography>
                                            </FormLabel>
                                            <Input
                                                name='recipient_name'
                                                onChange={handleDataChange}
                                                value={dataParcel.recipient_name}
                                                placeholder="Nguyen Van A"
                                                style={{ fontSize: '0.8rem' }}
                                                variant='soft'
                                            />
                                        </FormControl>
                                        <FormControl >
                                            <FormLabel>
                                                <Typography level="title-sm">
                                                    Contact <span style={{ color: 'red' }}>*</span>
                                                </Typography>
                                            </FormLabel>
                                            <Input
                                                name='recipient_contact'
                                                onChange={handleDataChange}
                                                value={dataParcel.recipient_contact}
                                                placeholder="0123456789"
                                                style={{ fontSize: '0.8rem' }}
                                                variant='soft'
                                            />

                                        </FormControl>
                                        <FormControl >
                                            <FormLabel>
                                                <Typography level="title-sm">
                                                    Address <span style={{ color: 'red' }}>*</span>
                                                </Typography>
                                            </FormLabel>
                                            <Input
                                                name="recipient_address"
                                                placeholder="UET"
                                                onChange={handleDataChange}
                                                value={dataParcel.recipient_address}
                                                style={{ fontSize: '0.8rem' }}
                                                variant='soft' />
                                        </FormControl>
                                        <FormControl >
                                            <FormLabel>
                                                <Typography level="title-sm">
                                                    Province/City <span style={{ color: 'red' }}>*</span>
                                                </Typography>
                                            </FormLabel>
                                            {/* <Input
                                            placeholder="Ha Noi"
                                            style={{ fontSize: '0.8rem' }}
                                            variant='soft' /> */}
                                            <Select
                                                size="sm"
                                                style={{
                                                    color: 'var(--joy-palette-text-secondary)', fontSize: '0.8rem', fontWeight: "600"
                                                }}
                                                variant='soft'
                                                name="city"
                                                value={city}
                                                onChange={(event: any, value: string | null) => setCity(value!)}
                                            >
                                                {cities.map((item) => {
                                                    return (
                                                        <Option key={item} value={item}>
                                                            <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.8rem', fontWeight: "600" }}>
                                                                {item}
                                                            </Typography>
                                                        </Option>
                                                    );
                                                })}
                                            </Select>
                                        </FormControl>
                                        <FormControl >
                                            <FormLabel>
                                                <Typography level="title-sm">
                                                    District <span style={{ color: 'red' }}>*</span>
                                                </Typography>
                                            </FormLabel>
                                            {/* <Input
                                            placeholder="Cau Giay"
                                            style={{ fontSize: '0.8rem' }}
                                            variant='soft' /> */}
                                            <Select
                                                size="sm"
                                                style={{
                                                    color: 'var(--joy-palette-text-secondary)', fontSize: '0.8rem', fontWeight: "600"
                                                }}
                                                variant='soft'
                                                name='district'
                                                value={district}
                                                onChange={(event: any, value: string | null) => setDistrict(value!)}
                                            >
                                                {districts.map((item) => {
                                                    return (
                                                        <Option key={item} value={item}>
                                                            <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.8rem', fontWeight: "600" }}>
                                                                {item}
                                                            </Typography>
                                                        </Option>
                                                    );
                                                })}
                                            </Select>
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>
                                                <Typography level="title-sm">
                                                    Office Name <span style={{ color: 'red' }}>*</span>
                                                </Typography>
                                            </FormLabel>
                                            {/* <Input
                                            placeholder="Xuan Thuy"
                                            style={{ fontSize: '0.8rem' }}
                                            variant='soft' /> */}

                                            <Select
                                                size="sm"
                                                style={{
                                                    color: 'var(--joy-palette-text-secondary)', fontSize: '0.8rem', fontWeight: "600"
                                                }}
                                                variant='soft'
                                                name='officeName'
                                                value={officeName}
                                                onChange={(event: any, value: string | null) => handleOfficeNameChange(value)}
                                            >
                                                {officeNames.map((item) => {
                                                    return (
                                                        <Option key={item} value={item}>
                                                            <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.8rem', fontWeight: "600" }}>
                                                                {item}
                                                            </Typography>
                                                        </Option>
                                                    );
                                                })}
                                            </Select>
                                        </FormControl>


                                        <FormControl sx={{ flexGrow: 1 }} style={{ display: "none" }}>
                                            <FormLabel>Postal Code</FormLabel>
                                            <Input
                                                size="sm"
                                                type="text"
                                                name='to_branch_id'
                                                value={postalCode}
                                                style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.8rem', fontWeight: "600" }}
                                                sx={{ flexGrow: 1 }}
                                            />
                                        </FormControl>

                                    </Box>

                                </Box>
                                <Box>
                                    <Typography level="h4">
                                        Parcel Information
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            marginTop: '20px',
                                            gap: 2,
                                            '& > *': {
                                                minWidth: { xs: '120px', md: '160px' },
                                            },
                                        }}
                                    >
                                        <FormControl >
                                            <FormLabel>
                                                <Typography level="title-sm">
                                                    Length (cm)
                                                </Typography>
                                            </FormLabel>
                                            <Input
                                                name="length"
                                                placeholder="30"
                                                onChange={handleDataChange}
                                                value={dataParcel.length!}
                                                style={{ fontSize: '0.8rem' }}
                                                variant='soft'
                                            />
                                        </FormControl>
                                        <FormControl >
                                            <FormLabel>
                                                <Typography level="title-sm">
                                                    Height (cm)
                                                </Typography>
                                            </FormLabel>
                                            <Input
                                                name="height"
                                                placeholder="20"
                                                onChange={handleDataChange}
                                                value={dataParcel.height!}
                                                style={{ fontSize: '0.8rem' }}
                                                variant='soft'
                                            />

                                        </FormControl>
                                        <FormControl >
                                            <FormLabel>
                                                <Typography level="title-sm">
                                                    Width (cm)
                                                </Typography>
                                            </FormLabel>
                                            <Input
                                                name="width"
                                                onChange={handleDataChange}
                                                value={dataParcel.width!}
                                                placeholder="10"
                                                style={{ fontSize: '0.8rem' }}
                                                variant='soft' />
                                        </FormControl>
                                        <FormControl >
                                            <FormLabel>
                                                <Typography level="title-sm">
                                                    Weight (gram)
                                                </Typography>
                                            </FormLabel>
                                            <Input
                                                name="weight"
                                                placeholder="200"
                                                onChange={handleDataChange}
                                                value={dataParcel.weight!}
                                                style={{ fontSize: '0.8rem' }}
                                                variant='soft'
                                                type='float'
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>
                                                <Typography level="title-sm">
                                                    Parcel Type
                                                </Typography>
                                            </FormLabel>
                                            <Box sx={{ display: 'flex', marginTop: '10px', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Checkbox label="Documents" size='sm' variant='soft' defaultChecked />
                                                <Checkbox label="Goods" size='sm' variant='soft' />
                                            </Box>
                                        </FormControl>
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography level="h4">
                                        Postage
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            marginTop: '20px',
                                            gap: 2,
                                            '& > *': {
                                                minWidth: { xs: '120px', md: '160px' },
                                            },
                                        }}
                                    >
                                        <FormControl >
                                            <FormLabel>
                                                <Typography level="title-sm">
                                                    COD money <span style={{ color: 'red' }}>*</span>
                                                </Typography>
                                            </FormLabel>
                                            <Input
                                                name="cod_money"
                                                placeholder="VND"
                                                style={{ fontSize: '0.8rem' }}
                                                variant='soft'
                                                type='float'
                                            />
                                        </FormControl>
                                        <FormControl >
                                            <FormLabel>
                                                <Typography level="title-sm">
                                                    Main Fee <span style={{ color: 'red' }}>*</span>
                                                </Typography>
                                            </FormLabel>
                                            <Input
                                                name='main_fee'
                                                placeholder="VND"
                                                style={{ fontSize: '0.8rem' }}
                                                variant='soft'
                                            />

                                        </FormControl>
                                        <FormControl >
                                            <FormLabel>
                                                <Typography level="title-sm">
                                                    Extra Fee <span style={{ color: 'red' }}>*</span>
                                                </Typography>
                                            </FormLabel>
                                            <Input
                                                name='extra_fee'
                                                placeholder="VND"
                                                style={{ fontSize: '0.8rem' }}
                                                variant='soft' />
                                        </FormControl>
                                        <FormControl >
                                            <FormLabel>
                                                <Typography level="title-sm">
                                                    VAT Fee <span style={{ color: 'red' }}>*</span>
                                                </Typography>
                                            </FormLabel>
                                            <Input
                                                name='vat_fee'
                                                placeholder="VND"
                                                style={{ fontSize: '0.8rem' }}
                                                variant='soft' />
                                        </FormControl>
                                        <FormControl >
                                            <FormLabel>
                                                <Typography level="title-sm">
                                                    Total VAT Fee <span style={{ color: 'red' }}>*</span>
                                                </Typography>
                                            </FormLabel>
                                            <Input
                                                name='total_vat_fee'
                                                placeholder="VND"
                                                style={{ fontSize: '0.8rem' }}
                                                variant='soft' />
                                        </FormControl>
                                        {/* Total Fee */}
                                        <FormControl >
                                            <FormLabel>
                                                <Typography level="title-sm">
                                                    Total Fee
                                                </Typography>
                                            </FormLabel>
                                            <Input
                                                name='price'
                                                value={dataParcel.price}
                                                onChange={handleDataChange}
                                                placeholder="VND"
                                                style={{ fontSize: '0.8rem' }}
                                                variant='soft' />

                                            <Typography level="title-sm" color='success'>
                                                + {dataParcel.price} VND
                                            </Typography>
                                        </FormControl>
                                    </Box>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '10px',
                                }}
                            >
                                <Button
                                    style={{
                                        backgroundColor: 'none',
                                    }}
                                >

                                </Button>
                                <Button
                                    type='submit'
                                    variant="outlined"
                                    color="success"
                                    size="sm"
                                >
                                    Confirm
                                </Button>
                            </Box>
                        </ModalDialog>
                    </ModalOverflow>
                </form>
            </Modal >
        );
    }

    // Table Pagination
    const rowPerPage = 5;
    const totalRows = data.length;

    const [currentPage, setCurrentPage] = React.useState(1);

    // Calculate the index range for the current page
    const indexOfLastRow = currentPage * rowPerPage;
    const indexOfFirstRow = indexOfLastRow - rowPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

    // Function to change page
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }


    return (
        <React.Fragment>
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
                        Parcels
                    </Typography>
                    <Button
                        color="primary"
                        startDecorator={<AddCircleOutlineIcon />}
                        size="sm"
                        onClick={() => setLayout('fullscreen')}
                        variant="outlined"
                        style={{ fontWeight: "600" }}
                    >
                        Add Parcel
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
                        <FormLabel >Search for parcel</FormLabel>
                        <Input size="sm" placeholder="Search" startDecorator={<SearchIcon />} style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.8rem', fontWeight: "600" }} />
                    </FormControl>
                </Box>
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
                                <th style={{ width: '16%', padding: "6px 12px" }}>Parcel ID</th>
                                <th style={{ width: '16%', padding: "6px 12px" }}>Sender</th>
                                <th style={{ width: '16%', padding: "6px 12px" }}>Recipient</th>
                                <th style={{ width: '16%', padding: "6px 12px" }}>Recipient Address</th>
                                <th style={{ width: '16%', padding: "6px 12px" }}>Contact</th>
                                <th style={{ width: '14%', padding: "6px 12px" }}>Status</th>
                                <th style={{ width: '6%', padding: "6px 12px" }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentRows.map((row, index) => (
                                    <React.Fragment key={index}>
                                        <tr key={row.parcel?.id}>
                                            <td style={{ width: '16%', padding: "6px 12px" }}>
                                                <Typography
                                                    level="body-xs"
                                                >
                                                    {row.parcel?.id}
                                                </Typography>
                                            </td>
                                            <td style={{ width: '16%', padding: "6px 12px" }}>
                                                <Typography
                                                    level="body-xs"
                                                >
                                                    {row.parcel?.sender_name}
                                                </Typography>
                                            </td>
                                            <td style={{ width: '16%', padding: "6px 12px" }}>
                                                <Typography
                                                    level="body-xs"
                                                >
                                                    {row.parcel?.recipient_name}
                                                </Typography>
                                            </td>

                                            <td style={{ width: '16%', padding: "6px 12px" }}>
                                                <Typography
                                                    level="body-xs"
                                                >
                                                    {row.parcel?.recipient_address}
                                                </Typography>

                                            </td>
                                            <td style={{ width: '16%', padding: "6px 12px" }}>
                                                <Typography
                                                    level="body-xs"
                                                >
                                                    {row.parcel?.recipient_contact}
                                                </Typography>
                                            </td>
                                            <td style={{ width: '14%', padding: "6px 12px" }}>
                                                <Typography
                                                    level="body-xs"
                                                >

                                                    <Chip
                                                        variant="soft"
                                                        size="sm"
                                                        color={'warning'}
                                                        style={{ padding: "0px 10px" }}
                                                    >
                                                        Pending
                                                    </Chip>

                                                </Typography>
                                            </td>
                                            <td style={{ width: '6%', padding: "6px 12px" }}>
                                                <IconButton variant="soft" size="sm" onClick={() => setOpenModalIndex(index)}>
                                                    <VisibilityIcon />
                                                </IconButton>
                                            </td>
                                        </tr>
                                        {renderModal(row, index)}
                                    </React.Fragment>
                                ))
                            }
                        </tbody>
                    </Table>
                    {renderAddParcelModal()}
                </Sheet>
                <PaginationLaptop
                    rowPerPage={rowPerPage}
                    currentPage={currentPage}
                    totalRows={totalRows}
                    indexOfLastRow={indexOfLastRow}
                    indexOfFirstRow={indexOfFirstRow}
                    setCurrentPage={setCurrentPage}
                    handlePageChange={handlePageChange}
                />
                <PendingParcelList />
            </Box>
        </React.Fragment >
    )
}
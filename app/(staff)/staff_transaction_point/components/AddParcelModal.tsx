import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Checkbox from '@mui/joy/Checkbox';
import Typography from '@mui/joy/Typography';
import { ModalDialogProps } from '@mui/joy/ModalDialog';
import ModalOverflow from '@mui/joy/ModalOverflow';
import crypto from 'crypto';

import Office from '@/app/types/OfficeType';
import Parcel from "@/app/types/ParcelType"
import initParcel from '@/utils/init/initParcel';

import {
    selectOffice,
    selectParcel,
    selectUser,
    useDispatch,
    useSelector,
    addParcelAsync,
} from '@/lib/redux';

type Props = {
    layout: ModalDialogProps['layout'];
    setLayout: React.Dispatch<React.SetStateAction<ModalDialogProps['layout']>>;
}

function generateReferenceNumber(length: number) {
    return "MGP-" + crypto
        .randomBytes(Math.ceil(length / 2))
        .toString("hex")
        .slice(0, length);
}

function formatPrice(price: any) {
    return price ? price.replace(/\B(?=(\d{3})+(?!\d))/g, ".") : null;
}

let officeFilters: Office[] = [];
let districts = ['-- Select District --'];
let officeNames = ['-- Select Office --'];

const AddParcelModal = ({ layout, setLayout }: Props ) => {
    const [dataParcel, setDataParcel] = React.useState<Parcel>(initParcel);

    const [city, setCity] = React.useState<string>('-- Select City --');
    const [district, setDistrict] = React.useState<string>('-- Select District --');
    const [officeName, setOfficeName] = React.useState<string>('-- Select Office --');
    const [postalCode, setPostalCode] = React.useState<string>('');
    const dispatch = useDispatch();

    const userInfo = useSelector(selectUser);
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
            reference_number: generateReferenceNumber(10),
            from_branch_id: userInfo?.branch_id!,
            to_branch_id: postalCode,
            status: 'ON_PENDING',
        }
        setLayout(undefined);
        dispatch(addParcelAsync(formData));
    }

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
                                    <FormControl>
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
                                                Parcel Name
                                            </Typography>
                                        </FormLabel>
                                        <Input
                                            name="name"
                                            placeholder="Parcel Name"
                                            onChange={handleDataChange}
                                            value={dataParcel.name!}
                                            style={{ fontSize: '0.8rem' }}
                                            variant='soft'
                                        />
                                    </FormControl>
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
                                            + {formatPrice(dataParcel.price)} VND
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
                                variant="outlined"
                                color="danger"
                                size="sm"
                                onClick={() => setLayout(undefined)}
                            >
                                Back
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

export default AddParcelModal;
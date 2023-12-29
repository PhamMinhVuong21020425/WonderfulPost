import React, { useState } from 'react';
import { Input, Button } from '@mui/joy'; // Assuming Button component from MUI is used
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/joy/Box';
import Stepper from '@mui/joy/Stepper';
import Step, { stepClasses } from '@mui/joy/Step';
import Typography, { typographyClasses } from '@mui/joy/Typography';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import DoneIcon from '@mui/icons-material/Done';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CircularProgress from '@mui/joy/CircularProgress';



const data = [
    {
        "id": "1",
        "trackingNumber": "1",
        "tracking_path": [
            // {
            //     "time": "2021-10-01T00:00:00.000Z",
            //     "address": "Xuan Thuy, Cau Giay, Ha Noi",
            //     "type": "HOME",
            //     "status": "DELIVERED"
            // },
            {
                "time": "2021-10-03T00:00:00.000Z",
                "address": "Cau Giay, Ha Noi",
                "type": "TRANSACTION",
                "status": "DELIVERED"
            },
            {
                "time": "2021-10-04T00:00:00.000Z",
                "address": "Ha Noi",
                "type": "GATHERING",
                "status": "DELIVERED"
            },
            {
                "time": "2021-10-05T00:00:00.000Z",
                "address": "Hai Phong",
                "type": "GATHERING",
                "status": "ON_GOING"
            },
            {
                "time": "2021-10-06T00:00:00.000Z",
                "address": "Gia Vien, Hai Phong",
                "type": "TRANSACTION",
                "status": "WAITING"
            },
            // {
            //     "time": "2021-10-07T00:00:00.000Z",
            //     "address": "Ngo 25, Gia Vien, Hai Phong",
            //     "type": "HOME",
            //     "status": "WAITING"
            // }
        ]
    },
    {
        "id": "2",
        "trackingNumber": "2",
        "tracking_path": [
            {
                "time": "2022-01-15T00:00:00.000Z",
                "address": "Binh Thanh, Ho Chi Minh City",
                "type": "HOME",
                "status": "DELIVERED"
            },
            {
                "time": "2022-01-20T00:00:00.000Z",
                "address": "Tan Son Nhat, Ho Chi Minh City",
                "type": "GATHERING",
                "status": "ON_GOING"
            },
            {
                "time": "2022-01-22T00:00:00.000Z",
                "address": "Vung Tau",
                "type": "GATHERING",
                "status": "WAITING"
            },
            {
                "time": "2022-01-27T00:00:00.000Z",
                "address": "Ba Ria, Vung Tau",
                "type": "HOME",
                "status": "WAITING"
            }
        ]
    },
    {
        "id": "3",
        "trackingNumber": "3",
        "tracking_path": [
            {
                "time": "2022-03-10T00:00:00.000Z",
                "address": "Hai Chau, Da Nang",
                "type": "HOME",
                "status": "DELIVERED"
            },
            {
                "time": "2022-03-12T00:00:00.000Z",
                "address": "Son Tra, Da Nang",
                "type": "TRANSACTION",
                "status": "DELIVERED"
            },
            {
                "time": "2022-03-15T00:00:00.000Z",
                "address": "Hoi An, Quang Nam",
                "type": "GATHERING",
                "status": "DELIVERED"
            },
            {
                "time": "2022-03-18T00:00:00.000Z",
                "address": "Tam Ky, Quang Nam",
                "type": "GATHERING",
                "status": "ON_GOING"
            },
            {
                "time": "2022-03-20T00:00:00.000Z",
                "address": "Thanh My, Quang Nam",
                "type": "TRANSACTION",
                "status": "ON_GOING"
            },
            {
                "time": "2022-03-22T00:00:00.000Z",
                "address": "Dien Ban, Quang Nam",
                "type": "HOME",
                "status": "WAITING"
            }
        ]
    },
    {
        "id": "4",
        "trackingNumber": "4",
        "tracking_path": [
            {
                "time": "2022-05-05T00:00:00.000Z",
                "address": "Bac Lieu",
                "type": "HOME",
                "status": "DELIVERED"
            },
            {
                "time": "2022-05-08T00:00:00.000Z",
                "address": "Ca Mau",
                "type": "TRANSACTION",
                "status": "DELIVERED"
            },
            {
                "time": "2022-05-10T00:00:00.000Z",
                "address": "Dam Doi, Ca Mau",
                "type": "GATHERING",
                "status": "DELIVERED"
            },
            {
                "time": "2022-05-12T00:00:00.000Z",
                "address": "Nam Can, Ca Mau",
                "type": "GATHERING",
                "status": "ON_GOING"
            },
            {
                "time": "2022-05-15T00:00:00.000Z",
                "address": "Phu Tan, Ca Mau",
                "type": "TRANSACTION",
                "status": "ON_GOING"
            },
            {
                "time": "2022-05-17T00:00:00.000Z",
                "address": "Cai Nuoc, Ca Mau",
                "type": "HOME",
                "status": "WAITING"
            }
        ]
    }
]

const Search = () => {
    // Tracking ID state allows us to store the tracking ID entered by the user
    // Search result state allows us to store the search result
    const [trackingId, setTrackingId] = useState('');
    const [searchResult, setSearchResult] = useState<any>(null);

    const handleSearch = () => {
        // Simulate API call to fetch tracking information
        // Replace this with your actual API call to retrieve parcel information

        setSearchResult('Loading...');

        // Simulate delay with setTimeout
        setTimeout(() => {
            const parcel = data.find((item) => item.trackingNumber === trackingId);
            if (parcel) {
                setSearchResult(parcel);
            }

            else {
                setSearchResult('Parcel not found');
            }
        }, 3000);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setTrackingId(inputValue);

        // Clear search result if input value is empty
        if (inputValue === '') {
            setSearchResult(null);
        }
    };

    const renderSearchResult = () => {
        if (searchResult === 'Loading...') {
            return (
                <div className="mt-10 text-center">
                    <CircularProgress size='sm' color='success' />
                </div>
            );
        }

        if (searchResult === 'Parcel not found') {
            return (
                <div className="mt-10 text-center">
                    <p className="text-sm mt-4">Parcel not found</p>
                </div>
            );
        }

        if (!searchResult) {
            return null;
        }

        const { tracking_path } = searchResult;


        return (
            <div className="mt-10">

                <Stepper
                    orientation="vertical"
                >
                    {tracking_path.map((item: any, index: any) => (
                        <Step
                            indicator={
                                <StepIndicator className={`border-gray-200 border-2 bg-gray-100`}>
                                    {
                                        // item.status === 'DELIVERED' ? <DoneIcon className='text-green-400 text-sm' /> : <div className='text-xs font-bold text-gray-400'>
                                        //     {index + 1}
                                        // </div>
                                        // Switch case
                                        (() => {
                                            switch (item.status) {
                                                case 'DELIVERED':
                                                    return <DoneIcon className='text-green-400 text-sm' />;
                                                case 'ON_GOING':
                                                    return <LocalShippingIcon className='text-sm' />;

                                                case 'WAITING':
                                                    return <div className='text-xs font-bold text-gray-400'>

                                                    </div>;
                                                default:
                                                    return <div className='text-xs font-bold text-gray-400'>

                                                    </div>;
                                            }
                                        })()
                                    }
                                </StepIndicator>

                            }
                            completed
                        >
                            <div className='ml-3 flex items-center justify-between md:block'>
                                <div className='text-xs text-gray-600 font-poppins'>
                                    {item.address}
                                </div>
                                <div className='text-xs text-gray-600 font-poppins'>
                                    {new Date(item.time).toLocaleDateString()}
                                </div>
                            </div>
                        </Step>
                    ))}
                </Stepper>
            </div>
        );
    };

    return (
        <div className="p-8 text-gray-600">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-center">Express Delivery With <span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>MagicPost</span></h1>
                <p className="text-sm mb-4 text-center">
                    As a leading shipping company in Vietnam, we provide a comprehensive range of delivery services nationwide.
                </p>
                {/* Search */}
                <div className="flex items-center justify-center mt-10">
                    <Input
                        size="lg"
                        placeholder="Enter your tracking number"
                        startDecorator={<SearchIcon />}
                        className='w-full rounded-[40px] text-sm'
                        value={trackingId}
                        onChange={handleChange}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                    />

                </div>
                {searchResult && (
                    <div className="mt-10">
                        {renderSearchResult()}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;

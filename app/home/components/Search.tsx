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

const data = [
    {
        "time": "2021-10-01T00:00:00.000Z",
        "address": "Xuan Thuy, Cau Giay, Ha Noi",
        "type": "HOME",
        "status": "DELIVERED"
    },
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
    {
        "time": "2021-10-07T00:00:00.000Z",
        "address": "Ngo 25, Gia Vien, Hai Phong",
        "type": "HOME",
        "status": "WAITING"
    }
]

const Search = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [searchResult, setSearchResult] = useState('');

    const handleSearch = () => {
        // Simulate API call to fetch tracking information
        // Replace this with your actual API call to retrieve parcel information
        // For this example, we'll just set a placeholder result
        const fakeApiResponse = `Tracking number ${trackingNumber}: In transit`;

        setSearchResult(fakeApiResponse);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTrackingNumber(event.target.value);
    };

    const renderSearchResult = () => {
        return (
            <div className="mt-10">

                <Stepper
                    orientation="vertical"
                >
                    {data.map((item, index) => (
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
                        value={trackingNumber}
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

import React from 'react';
import Box from '@mui/joy/Box';
import Stepper from '@mui/joy/Stepper';
import Step, { stepClasses } from '@mui/joy/Step';
import Typography, { typographyClasses } from '@mui/joy/Typography';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';


const AboutUs = () => {
    return (
        <div className="p-8 text-gray-600">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-center ">
                    <div className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>
                        MagicPost
                    </div>
                </h1>
                <p className="text-md mb-4">
                    <span className='font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>MagicPost</span> is a leading delivery service company operating nationwide. We specialize in providing efficient and reliable delivery solutions.
                </p>
                <p className="text-md mb-4">
                    Our extensive network of transaction and consolidation points ensures seamless handling and delivery of items across the country.
                </p>
                <p className="text-md mb-4">
                    At <span className='font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>MagicPost</span>, we prioritize customer satisfaction and aim to deliver packages swiftly and securely to their destinations.
                </p>
                <h2 className="text-2xl font-bold mt-6 mb-4">Our Services</h2>

                <Stepper
                    orientation="vertical"
                >
                    <Step
                        indicator={
                            <StepIndicator className='border-gray-200 border-2 bg-gray-100'>
                                <div className='text-xs font-bold text-gray-400'>
                                    1
                                </div>
                            </StepIndicator>
                        }
                        completed
                    >
                        <div className='text-sm text-gray-600 font-poppins'>
                            Management of transaction and consolidation points
                        </div>
                    </Step>
                    <Step
                        indicator={
                            <StepIndicator className='border-gray-200 border-2 bg-gray-100'>
                                <div className='text-xs font-bold text-gray-400'>
                                    2
                                </div>
                            </StepIndicator>
                        }
                    >
                        <div className='text-sm text-gray-600 font-poppins'>
                            Efficient handling of outbound and inbound items
                        </div>
                    </Step>
                    <Step
                        indicator={
                            <StepIndicator className='border-gray-200 border-2 bg-gray-100'>
                                <div className='text-xs font-bold text-gray-400'>
                                    3
                                </div>
                            </StepIndicator>
                        }
                    >
                        <div className='text-sm text-gray-600 font-poppins'>
                            Real-time tracking and status updates for customers
                        </div>
                    </Step>
                    <Step
                        indicator={
                            <StepIndicator className='border-gray-200 border-2 bg-gray-100'>
                                <div className='text-xs font-bold text-gray-400'>
                                    4
                                </div>
                            </StepIndicator>
                        }
                    >
                        <div className='text-sm text-gray-600 font-poppins'>
                            Dedicated personnel for smooth delivery processes
                        </div>
                    </Step>
                </Stepper>
                <p className="text-md mt-6">
                    For more information or queries, please contact our support team.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;

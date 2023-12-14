'use client';
import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';

import palette from '@/app/styles/palette';
import Sidebar from './SideBar';
import Header from './Header';
import Staff from './Staff';
// import Office from './Office';




export default function CompanyLeader() {

    return (
        <CssVarsProvider disableTransitionOnChange theme={palette}>
            <CssBaseline />
            <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
                <Header />
                <Sidebar />
                {/* <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default' }}>
                    <Staff />
                    <Office />

                </Box> */}
                <Staff />
            </Box>
        </CssVarsProvider>
    );
}
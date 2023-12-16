'use client';
import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';

import palette from '@/app/styles/palette';
import SideBar from './SideBar';
import Header from './Header';
import Staff from './Staff';




export default function CompanyLeader() {

    return (
        <CssVarsProvider disableTransitionOnChange theme={palette}>
            <CssBaseline />
            <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
                <Header />
                <SideBar />
                {/* <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default' }}>
                    <Staff />
                    <Office />

                </Box> */}
                <Staff />
            </Box>
        </CssVarsProvider>
    );
}
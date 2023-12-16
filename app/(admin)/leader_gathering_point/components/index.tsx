'use client';
import React from 'react';
import SideBar from './SideBar';
import Header from './Header';
import palette from '@/app/styles/palette';

import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Staff from './Staff';

export default function LeaderGatheringPoint() {
    return (
        <CssVarsProvider disableTransitionOnChange theme={palette}>
            <CssBaseline />
            <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
                <Header />
                <SideBar />
                <Staff />
            </Box>
        </CssVarsProvider>
    )
}
import { Button } from "@mui/joy";
import Box from "@mui/joy/Box";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";
import React, { useState } from "react";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListDivider from "@mui/joy/ListDivider";
import ListItemContent from "@mui/joy/ListItemContent";
import ReactECharts from 'echarts-for-react';
// Income Bar Chart
const option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['Profit', 'Expenses', 'Income']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'value'
        }
    ],
    yAxis: [
        {
            type: 'category',
            axisTick: {
                show: false
            },
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
    ],
    series: [
        {
            name: 'Profit',
            type: 'bar',
            label: {
                show: true,
                position: 'inside'
            },
            emphasis: {
                focus: 'series'
            },
            data: [200, 170, 240, 244, 200, 220, 210]
        },
        {
            name: 'Income',
            type: 'bar',
            stack: 'Total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [320, 302, 341, 374, 390, 450, 420]
        },
        {
            name: 'Expenses',
            type: 'bar',
            stack: 'Total',
            label: {
                show: true,
                position: 'left'
            },
            emphasis: {
                focus: 'series'
            },
            data: [-120, -132, -101, -134, -190, -230, -210]
        }
    ]
};

// Other
const colors = ['#5470C6', '#91CC75', '#EE6666'];
const statistic = {
    color: colors,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '20%'
    },
    toolbox: {
        feature: {
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    legend: {
        data: ['Income', 'Parcel', 'Profit']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            // prettier-ignore
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'Income',
            position: 'right',
            alignTicks: true,
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value}(B)'
            }
        },
        {
            type: 'value',
            name: 'Profit',
            position: 'right',
            alignTicks: true,
            offset: 80,
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value}(B)'
            }
        },
        {
            type: 'value',
            name: 'Parcel',
            position: 'left',
            alignTicks: true,
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[2]
                }
            },
            axisLabel: {
                formatter: '{value}(M)  '
            }
        }
    ],
    series: [
        {
            name: 'Income',
            type: 'bar',
            data: [
                2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
            ]
        },
        {
            name: 'Profit',
            type: 'bar',
            yAxisIndex: 1,
            data: [
                2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
            ]
        },
        {
            name: 'Parcel',
            type: 'line',
            yAxisIndex: 2,
            data: [2, 2, 3, 4, 6, 10, 20, 23, 23, 16, 12, 6]
        }
    ]
};

// Pie Chart
const pie = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        left: 'center'
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 1048, name: 'Going' },
                { value: 735, name: 'Success' },
                { value: 580, name: 'Pending' },
                { value: 100, name: 'Cancel' },
            ]
        }
    ]
};

// This is a component that displays the dashboard.
export default function Dashboard() {
    return (
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
            <Typography level="h2" component="h1">
                Dashboard
            </Typography>
            <Box
                sx={{
                    width: { xs: '200%', sm: '100%' },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    margin: {
                        // xs: 'auto',
                        // sm: 'auto',
                    },
                    gap: 1,
                }}

            >
                <Box
                    style={{
                        width: '100%',
                        display: 'flex',
                    }}
                >
                    <Box
                        style={{
                            width: '50%',
                        }}
                    >
                        <ReactECharts
                            option={pie}
                        />
                    </Box>
                    <Box
                        style={{
                            width: '50%',
                        }}
                    >
                        <ReactECharts
                            option={option}
                        />
                    </Box>
                </Box>
                <ReactECharts
                    option={statistic}
                />
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
                </Table>
            </Sheet>

        </Box>
    );
}

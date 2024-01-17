import React from 'react';
import { BarChart } from '@mui/x-charts';
import ReactECharts from 'echarts-for-react';



const ContactUs = () => {
    const option = {
        title: {
            text: '堆叠区域图'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['邮件营销', '联盟广告', '视频广告']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                areaStyle: { normal: {} },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                areaStyle: { normal: {} },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                areaStyle: { normal: {} },
                data: [150, 232, 201, 154, 190, 330, 410]
            }
        ]
    };
    return (
        <div className="p-8 text-gray-600">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-center ">
                    Contact Us

                </h1>
                <div className="text-md mb-4">
                    At <span className='bg-gradient-to-r font-bold from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>MagicPost</span>, where speed, reliability, and customer satisfaction 
                    are our top priorities.
                </div>
                <div className="text-md mb-4">
                    We're dedicated to ensuring your parcels reach their destination swiftly and securely. If you have any inquiries, require assistance, or wish to provide feedback, we're here to help.
                </div>
                <div className="text-md mb-4">
                    Thank you for choosing <span className='bg-gradient-to-r font-bold from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'> MagicPost</span>
                    &nbsp;for your delivery needs. We look forward to serving you!
                </div>
                <div className="text-md mb-4">
                    Sincerely,
                </div>
                <div className="text-md mb-4">
                    <span className='bg-gradient-to-r font-bold from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'> MagicPost</span> 
                    &nbsp;Team
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

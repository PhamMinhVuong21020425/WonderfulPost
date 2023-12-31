import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { useReactToPrint } from 'react-to-print';
import IconButton from '@mui/joy/IconButton';
import PrintIcon from '@mui/icons-material/Print';
import { IoMdCheckboxOutline } from 'react-icons/io';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';

// Create styles
const styles = StyleSheet.create({
    Page: {
        fontFamily: 'Roboto',
        display: 'flex',
        flexDirection: 'row',
        border: '2px',
        borderColor: 'black',
        borderStyle: 'solid',
        margin: '24px',
    },
    Section: {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '10px',
    },

    TextBold: {
        fontSize: '16px',
        fontWeight: 'bold',
    },

    TH: {
        padding: '3px 0',
        fontSize: '15px',
        fontWeight: 'bold',
        borderBottom: '1px solid black',
        height: '100%',
        borderRight: '1px solid black',
    },

    TH2: {
        fontSize: '15px',
        fontWeight: 400,
        borderRight: '1px solid black',
        padding: '3px 0',
    },
});

Font.register({
    family: 'Roboto',
    fonts: [
        {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
            fontWeight: 300,
        },
        {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf',
            fontWeight: 400,
        },
        {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf',
            fontWeight: 500,
        },
        {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf',
            fontWeight: 600,
        },
    ],
});

// Create Document Component
export default function PdfParcel() {
    const componentRef = React.useRef<any>(null);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Parcel Details',
        onAfterPrint: () => console.log('Printed PDF successfully!'),
    });

    return (
        <div>
            <div style={{ display: "none" }}>
                <Document ref={componentRef} >
                    <Page size="A4" orientation="landscape" style={styles.Page}>
                        <View style={styles.Section}>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderBottom: '2px solid black',
                                    padding: '5px',
                                }}
                            >
                                <Text style={styles.TextBold}>1. Họ tên địa chỉ người gửi:</Text>
                                <Text style={{ fontSize: '15px', marginTop: '5px' }}>Van Anh</Text>
                                <Text style={{ fontSize: '15px', marginTop: '5px' }}>Hai Duong</Text>
                                <View
                                    style={{ display: 'flex', flexDirection: 'row', marginTop: '25px', alignItems: 'center' }}
                                >
                                    <Text style={styles.TextBold}>Số điện thoại:</Text>
                                    <Text style={{ fontSize: '15px', marginLeft: '5px' }}>Sender Phone</Text>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', marginTop: '5px' }}>
                                    <Text style={{ fontSize: '16px', fontWeight: 'bold', flex: '1' }}>Mã khách hàng:</Text>
                                    <Text style={{ fontSize: '16px', fontWeight: 'bold', flex: '1' }}>Mã bưu chính: 421650</Text>
                                </View>
                            </View>

                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderBottom: '2px solid black',
                                }}
                            >
                                <Text style={{ marginLeft: '5px', marginTop: '5px', fontSize: '16px', fontWeight: 'bold' }}>
                                    3. Loại hàng hóa gửi:
                                </Text>
                                <View style={{ display: 'flex', flexDirection: 'row', marginTop: '5px' }}>
                                    <View
                                        style={{
                                            flex: '1',
                                            marginLeft: '40px',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <IoMdCheckboxOutline style={{ width: '25px', height: '25px', marginRight: '5px' }} />
                                        <Text style={{ fontSize: '15px' }}>Tài liệu</Text>
                                    </View>
                                    <View
                                        style={{
                                            flex: '1',
                                            marginLeft: '40px',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <MdOutlineCheckBoxOutlineBlank
                                            style={{ width: '25px', marginRight: '5px', height: '25px' }}
                                        />
                                        <Text style={{ fontSize: '15px' }}>Hàng hóa</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '10px', marginLeft: '5px' }}>
                                    4. Nội dung trị giá bưu gửi:
                                </Text>
                                <View>
                                    <table
                                        style={{
                                            borderCollapse: 'collapse',
                                            marginTop: '5px',
                                            borderTop: '2px solid black',
                                            width: '100%',
                                        }}
                                    >
                                        <tr>
                                            <th style={styles.TH}>Nội dung</th>
                                            <th style={styles.TH}>Số lượng</th>
                                            <th style={styles.TH}>Trị giá</th>
                                            <th
                                                style={{
                                                    padding: '3px 0',
                                                    fontSize: '15px',
                                                    fontWeight: 'bold',
                                                    borderBottom: '1px solid black',
                                                    height: '100%',
                                                }}
                                            >
                                                Giấy tờ đi kèm
                                            </th>
                                        </tr>

                                        <tr>
                                            <th style={styles.TH2}>Tổng cộng</th>
                                            <th style={styles.TH2}>1</th>
                                            <th style={styles.TH2}></th>
                                            <th
                                                style={{
                                                    fontSize: '15px',
                                                    fontWeight: '400',
                                                    padding: '3px 0',
                                                }}
                                            ></th>
                                        </tr>
                                    </table>
                                </View>
                            </View>

                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderBottom: '2px solid black',
                                    padding: '10px 5px 2px 5px',
                                }}
                            >
                                <Text style={styles.TextBold}>5. Dịch vụ đặc biệt/Cộng thêm:</Text>
                                <Text style={{ fontSize: '16px', marginTop: '8px', fontWeight: 'bold' }}>
                                    ..............................................................................................................
                                </Text>
                                <Text style={{ fontSize: '16px', marginTop: '8px', fontWeight: 'bold' }}>
                                    ..............................................................................................................
                                </Text>

                                <Text style={{ fontSize: '15px', marginTop: '5px' }}>Mã hợp đồng EMSC/PPA</Text>
                            </View>

                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderBottom: '2px solid black',
                                    padding: '5px',
                                }}
                            >
                                <Text style={styles.TextBold}>6. Chỉ dẫn của người gửi khi không phát được bưu gửi:</Text>
                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        marginTop: '15px',
                                    }}
                                >
                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginLeft: '10px',
                                        }}
                                    >
                                        <MdOutlineCheckBoxOutlineBlank
                                            style={{ width: '25px', height: '25px', marginRight: '5px' }}
                                        />
                                        <Text style={{ fontSize: '14px' }}>Chuyển hoàn ngay</Text>
                                    </View>

                                    <View
                                        style={{
                                            flex: '1',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <MdOutlineCheckBoxOutlineBlank
                                            style={{ width: '25px', height: '25px', marginRight: '5px' }}
                                        />
                                        <Text style={{ fontSize: '14px' }}>Gọi điện cho người gửi</Text>
                                    </View>

                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginRight: '10px',
                                        }}
                                    >
                                        <MdOutlineCheckBoxOutlineBlank
                                            style={{ width: '25px', height: '25px', marginRight: '5px' }}
                                        />
                                        <Text style={{ fontSize: '14px' }}>Hủy</Text>
                                    </View>
                                </View>

                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        marginTop: '15px',
                                    }}
                                >
                                    <View
                                        style={{
                                            flex: '4',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginLeft: '10px',
                                        }}
                                    >
                                        <MdOutlineCheckBoxOutlineBlank
                                            style={{ width: '25px', height: '25px', marginRight: '5px' }}
                                        />
                                        <Text style={{ fontSize: '14px' }}>Chuyển hoàn trước ngày</Text>
                                    </View>

                                    <View
                                        style={{
                                            flex: '6',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <MdOutlineCheckBoxOutlineBlank
                                            style={{ width: '25px', height: '25px', marginRight: '5px' }}
                                        />
                                        <Text style={{ fontSize: '14px' }}>Chuyển hoàn khi hết thời gian lưu trữ</Text>
                                    </View>
                                </View>
                            </View>

                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: '5px',
                                }}
                            >
                                <Text style={styles.TextBold}>7. Cam kết của người gửi:</Text>
                                <Text style={{ fontSize: '15px', marginTop: '5px' }}>
                                    Tôi chấp nhận các điều khoản tại mặt sau phiếu gửi và cam đoan bưu gửi này không chứa những
                                    mặt hàng nguy hiểm, cấm gửi. Trường hợp không phát được hãy thực hiện chi dẫn ở mục 6, tôi
                                    sẽ trả cước chuyển hoàn.
                                </Text>
                                <View style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                                    <Text style={{ fontSize: '16px', fontWeight: 'bold', flex: '1' }}>8. Ngày giờ gửi:</Text>
                                    <Text style={{ fontSize: '16px', fontWeight: 'bold', flex: '1' }}>Chữ ký người gửi</Text>
                                </View>
                                <Text style={{ fontSize: '15px', marginTop: '15px' }}>07h52/18/10/2023</Text>
                            </View>
                        </View>

                        <View
                            style={{
                                flex: '1',
                                display: 'flex',
                                flexDirection: 'column',
                                borderLeft: '2px solid black',
                            }}
                        >
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderBottom: '2px solid black',
                                    padding: '5px',
                                }}
                            >
                                <Text style={styles.TextBold}>2. Họ tên địa chỉ người nhận:</Text>
                                <Text style={{ fontSize: '15px', marginTop: '5px' }}>Phuc Nguyen</Text>
                                <Text style={{ fontSize: '15px', marginTop: '5px' }}>Quang Ninh</Text>
                                <Text
                                    style={{ fontSize: '16px', marginTop: '25px', fontWeight: 'bold' }}
                                >{`Mã ĐH: UET`}</Text>
                                <View style={{ display: 'flex', flexDirection: 'row', marginTop: '5px' }}>
                                    <View
                                        style={{
                                            flex: '1',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Text style={styles.TextBold}>Số điện thoại:</Text>
                                        <Text style={{ fontSize: '15px', marginLeft: '5px' }}>7777777</Text>
                                    </View>
                                    <Text style={{ fontSize: '16px', fontWeight: 'bold', flex: '1' }}>Mã bưu chính: 0400VN</Text>
                                </View>
                            </View>

                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <View
                                    style={{
                                        flex: '6',
                                    }}
                                >
                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            borderBottom: '2px solid black',
                                            padding: '5px',
                                        }}
                                    >
                                        <Text style={styles.TextBold}>9. Cước phí:</Text>
                                        <View
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                marginTop: '10px',
                                            }}
                                        >
                                            <Text style={{ fontSize: '15px' }}>a. Cước chính:</Text>
                                            <Text style={{ fontSize: '15px' }}>52</Text>
                                        </View>

                                        <View
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                marginTop: '10px',
                                            }}
                                        >
                                            <Text style={{ fontSize: '15px' }}>b. Phụ phí:</Text>
                                            <Text style={{ fontSize: '15px' }}>20000đ</Text>
                                        </View>

                                        <View
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                marginTop: '10px',
                                            }}
                                        >
                                            <Text style={{ fontSize: '15px' }}>c. Cước GTGT:</Text>
                                            <Text style={{ fontSize: '15px' }}>5%</Text>
                                        </View>

                                        <View
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                marginTop: '10px',
                                            }}
                                        >
                                            <Text style={{ fontSize: '15px' }}>d. Tổng cước (gồm VAT):</Text>
                                            <Text style={{ fontSize: '15px' }}> 10%</Text>
                                        </View>

                                        <View
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                marginTop: '10px',
                                            }}
                                        >
                                            <Text style={{ fontSize: '15px' }}>e. Thu khác:</Text>
                                            <Text style={{ fontSize: '15px' }}>0</Text>
                                        </View>

                                        <View
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                marginTop: '10px',
                                            }}
                                        >
                                            <Text style={styles.TextBold}>Tổng thu:</Text>
                                            <Text style={{ fontSize: '15px' }}>100.000đ</Text>
                                        </View>
                                    </View>

                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            borderBottom: '2px solid black',
                                            padding: '5px',
                                        }}
                                    >
                                        <Text style={styles.TextBold}>11. Thu của người nhận:</Text>
                                        <View
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                marginTop: '10px',
                                            }}
                                        >
                                            <Text style={{ fontSize: '15px' }}>COD:</Text>
                                            <Text style={{ fontSize: '15px' }}>123456</Text>
                                        </View>
                                        <View
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                marginTop: '10px',
                                            }}
                                        >
                                            <Text style={{ fontSize: '15px' }}>Thu khác:</Text>
                                            <Text style={{ fontSize: '15px' }}>0</Text>
                                        </View>
                                        <View
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                marginTop: '10px',
                                            }}
                                        >
                                            <Text style={styles.TextBold}>Tổng thu:</Text>
                                            <Text style={{ fontSize: '15px' }}>0</Text>
                                        </View>
                                    </View>

                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            padding: '5px',
                                            alignItems: 'flex-start',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Text style={styles.TextBold}>13. Bưu cục chấp nhận:</Text>
                                        <Text style={{ fontSize: '15px', marginTop: '5px' }}>Chữ ký GDV nhận</Text>
                                    </View>
                                </View>

                                <View
                                    style={{
                                        flex: '4',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderLeft: '2px solid black',
                                    }}
                                >
                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            borderBottom: '2px solid black',
                                            padding: '5px',
                                        }}
                                    >
                                        <Text style={styles.TextBold}>10. Khối lượng (kg):</Text>
                                        <View
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                marginTop: '10px',
                                            }}
                                        >
                                            <Text style={{ fontSize: '15px' }}>Khối lượng thực tế:</Text>
                                            <Text style={{ fontSize: '15px' }}>20</Text>
                                        </View>
                                        <View
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                marginTop: '10px',
                                            }}
                                        >
                                            <Text style={{ fontSize: '15px' }}>Khối lượng quy đổi:</Text>
                                            <Text style={{ fontSize: '15px' }}>10</Text>
                                        </View>
                                    </View>

                                    <View
                                        style={{
                                            height: '229px',
                                            borderBottom: '2px solid black',
                                            padding: '5px',
                                        }}
                                    >
                                        <Text style={styles.TextBold}>12. Chú dẫn nghiệp vụ:</Text>
                                    </View>

                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'flex-start',
                                            height: '265px',
                                            padding: '5px',
                                        }}
                                    >
                                        <Text style={styles.TextBold}>14. Ngày giờ nhận:</Text>
                                        <Text style={styles.TextBold}>...h...../...../....../20.....</Text>
                                        <Text style={{ fontSize: '15px', marginTop: '5px', textAlign: 'center' }}>
                                            Người nhận/Người được ủy quyền nhận
                                        </Text>
                                        <Text style={{ fontSize: '15px', marginTop: '5px', textAlign: 'center' }}>(Ký, ghi rõ họ tên)</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Page>
                </Document>
            </div>
            <IconButton onClick={handlePrint} variant="soft" size="sm">
                <PrintIcon />
            </IconButton>
        </div>
    );
}
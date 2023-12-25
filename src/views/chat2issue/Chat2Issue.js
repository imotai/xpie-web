import React from 'react';
import classNames from 'classnames';
import { DocsExample } from 'src/components';

import {
    CAvatar,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CProgress,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CContainer,
    CListGroup,
    CListGroupItem,
    CFormCheck,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CFormTextarea,
    CInputGroup,
    CInputGroupText,
    CCallout
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {
    cibCcAmex,
    cibCcApplePay,
    cibCcMastercard,
    cibCcPaypal,
    cibCcStripe,
    cibCcVisa,
    cibGoogle,
    cibFacebook,
    cibLinkedin,
    cifBr,
    cifEs,
    cifFr,
    cifIn,
    cifPl,
    cifUs,
    cibTwitter,
    cilCloudDownload,
    cilPeople,
    cilUser,
    cilUserFemale,
    cibProbot,
} from '@coreui/icons';

const Chat2Issue = () => {
    return (
        <>
            <CContainer>
                <CRow>
                    <CCol xs={4}>
                        <CListGroup>
                            <CListGroupItem component="a" active>
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">List group item heading</h5>
                                    <small>3 days ago</small>
                                </div>
                                <p className="mb-1">
                                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus
                                    varius blandit.
                                </p>
                                <small>Donec id elit non mi porta.</small>
                            </CListGroupItem>
                            <CListGroupItem component="a">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">List group item heading</h5>
                                    <small className="text-medium-emphasis">3 days ago</small>
                                </div>
                                <p className="mb-1">
                                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus
                                    varius blandit.
                                </p>
                                <small className="text-medium-emphasis">Donec id elit non mi porta.</small>
                            </CListGroupItem>
                            <CListGroupItem component="a">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">List group item heading</h5>
                                    <small className="text-medium-emphasis">3 days ago</small>
                                </div>
                                <p className="mb-1">
                                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus
                                    varius blandit.
                                </p>
                                <small className="text-medium-emphasis">Donec id elit non mi porta.</small>
                            </CListGroupItem>
                        </CListGroup>
                    </CCol>
                    <CCol xs={8}>
                        <CCard className="mb-4">
                            <CCardHeader>
                                <strong>List group item heading</strong>
                            </CCardHeader>
                            <CCardBody>
                                <CContainer>
                                    <CRow>
                                        <CCol xs={1}>
                                            <CAvatar color="secondary" size="lg">X</CAvatar>
                                        </CCol>
                                        <CCol xs={11}>
<CCallout color="light">
          New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,
          terminology, guidelines, and code snippets.
        </CCallout>
        </CCol>
                                    </CRow>
                                </CContainer>
                            </CCardBody>
                            <CCardFooter>
                                <CInputGroup className="mb-3">
                                    <CFormInput
                                        placeholder="generate the code"
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                    />
                                    <CButton type="button" color="primary" variant="outline">
                                        Send
                                    </CButton>
                                </CInputGroup>
                            </CCardFooter>
                        </CCard>
                    </CCol>
                </CRow>
            </CContainer>
        </>
    );
};
export default Chat2Issue;

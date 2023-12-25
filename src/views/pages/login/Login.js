import React from 'react';
import { Link } from 'react-router-dom';
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cibGitlab, cibProbot, cibGithub, cilLockLocked, cilUser } from '@coreui/icons';

const Login = () => {
    return (
        <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={6}>
                        <CCardGroup>
                            <CCard className="py-5" style={{ width: '44%' }}>
                                <CCardBody className="text-center">
                                    <div>
                                        <h2>Login to your account</h2>
                                        <CButton color="primary" shape="rounded-pill" variant="outline">
                                            <CIcon icon={cibGithub} size="lg" /> Login With Github
                                        </CButton>
                                        <CButton color="primary" variant="outline" shape="rounded-pill">
                                            <CIcon icon={cibGitlab} size="lg" /> Login With Gitlab
                                        </CButton>
                                    </div>
                                </CCardBody>
                            </CCard>
                        </CCardGroup>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    );
};
export default Login;

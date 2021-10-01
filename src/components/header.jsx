import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Nav, Container, Navbar } from 'react-bootstrap';
import LogoBlue from '../assets/images/tex-manager-blue.svg';
import { Layout, Input, Avatar, Row, Col, Space } from 'antd';

import { UserOutlined } from '@ant-design/icons';

import '../components/header.css'
import Btn from './btn';

const { Header } = Layout;

function HeaderTop() {

    const { Search } = Input;

    const onSearch = value => console.log(value);

    return (

    <React.Fragment>
        <Navbar className="header fixed" variant="dark">
            <Container fluid>
                <Btn>
                <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M7.94317 -2.97384e-06C8.02676 0.0436761 8.10885 0.0941323 8.19545 0.131034C9.03359 0.486491 9.51404 1.35405 9.34761 2.21633C9.26346 2.64285 9.03481 3.02731 8.70022 3.30487C8.36563 3.58243 7.94557 3.73611 7.51086 3.74C7.07616 3.7439 6.65341 3.59776 6.3139 3.32624C5.9744 3.05471 5.7389 2.67442 5.64713 2.24947C5.45887 1.37965 5.94157 0.48875 6.79327 0.128774C6.88062 0.0918731 6.9627 0.0421685 7.04705 -0.00151062L7.94317 -2.97384e-06Z" fill="#00AFFA"/>
<path d="M13.5632 8.70611e-07C13.6588 0.0481985 13.7522 0.10242 13.8501 0.145346C14.6626 0.500804 15.1303 1.36836 14.9676 2.21558C14.8852 2.64376 14.6572 3.03025 14.3223 3.30952C13.9875 3.58878 13.5663 3.74362 13.1303 3.74779C12.6943 3.75196 12.2703 3.60519 11.9302 3.33238C11.59 3.05957 11.3547 2.67751 11.2641 2.25098C11.0796 1.39472 11.5495 0.505322 12.3764 0.142333C12.4743 0.0994073 12.5684 0.0459393 12.664 -0.0022583L13.5632 8.70611e-07Z" fill="#00AFFA"/>
<path d="M-0.000757217 7.04815C0.250761 6.46526 0.584363 5.96145 1.21843 5.72874C1.56224 5.60181 1.93563 5.57799 2.29278 5.66022C2.64993 5.74244 2.97531 5.92712 3.22902 6.19161C3.48273 6.4561 3.65373 6.7889 3.72104 7.14918C3.78835 7.50945 3.74904 7.88154 3.60794 8.2198C3.46684 8.55806 3.23008 8.84778 2.92671 9.05342C2.62334 9.25905 2.26654 9.37166 1.90009 9.37744C1.53365 9.38321 1.17348 9.2819 0.863784 9.08592C0.554084 8.88994 0.308316 8.60783 0.15663 8.27418C0.106929 8.16574 0.0527101 8.0588 -3.43223e-06 7.95186L-0.000757217 7.04815Z" fill="#00AFFA"/>
<path d="M-0.000757217 12.6715C0.250761 12.0886 0.584363 11.5848 1.21843 11.3528C1.56239 11.2256 1.93602 11.2016 2.29343 11.2838C2.65083 11.3659 2.97646 11.5507 3.2303 11.8154C3.48414 12.0801 3.65515 12.4132 3.72232 12.7738C3.78949 13.1343 3.7499 13.5066 3.60841 13.845C3.46691 14.1833 3.22968 14.473 2.92585 14.6784C2.62202 14.8838 2.26482 14.996 1.89812 15.0011C1.53142 15.0063 1.17119 14.9043 0.861683 14.7075C0.552175 14.5108 0.306862 14.2279 0.155876 13.8937C0.106175 13.7853 0.0519563 13.6791 -0.000757217 13.5714V12.6715Z" fill="#00AFFA"/>
<path d="M2.32317 7.62939e-06C2.39847 0.0384151 2.46549 0.0843533 2.5408 0.11523C3.38271 0.463156 3.85035 1.25314 3.73815 2.13877C3.63649 2.93931 2.93766 3.63817 2.13792 3.73984C1.25308 3.8528 0.463135 3.38438 0.115226 2.54318C0.083598 2.46787 0.0399212 2.39708 9.53674e-06 2.32403V1.42485C0.11546 1.09583 0.30337 0.796964 0.549852 0.55034C0.796334 0.303715 1.09509 0.115638 1.42403 7.62939e-06H2.32317Z" fill="#00AFFA"/>
<path d="M1.42337 7.62939e-06C1.09429 0.115542 0.795391 0.303577 0.548773 0.550207C0.302156 0.796837 0.114131 1.09575 -0.00139809 1.42485V7.62939e-06H1.42337Z" fill="#00AFFA"/>
<path d="M5.62074 7.49097C5.62268 7.12067 5.73434 6.75926 5.9416 6.4524C6.14887 6.14555 6.44244 5.90702 6.78521 5.76697C7.12799 5.62691 7.50459 5.59162 7.86741 5.66554C8.23024 5.73946 8.56302 5.91928 8.82369 6.18227C9.08436 6.44527 9.26122 6.77964 9.33193 7.14312C9.40264 7.50661 9.36401 7.8829 9.22094 8.22444C9.07787 8.56598 8.83677 8.85745 8.52811 9.062C8.21945 9.26656 7.85708 9.37502 7.4868 9.37368C7.23963 9.37625 6.99447 9.32918 6.76582 9.23526C6.53717 9.14134 6.3297 9.00249 6.15569 8.82693C5.98168 8.65136 5.84467 8.44266 5.75278 8.21318C5.66089 7.9837 5.61599 7.73811 5.62074 7.49097V7.49097Z" fill="#00AFFA"/>
<path d="M11.2407 7.5015C11.2401 7.13107 11.3494 6.76879 11.5547 6.46045C11.76 6.15212 12.0521 5.91159 12.3941 5.76929C12.7361 5.62698 13.1126 5.58929 13.476 5.66097C13.8394 5.73265 14.1734 5.91049 14.4357 6.172C14.6981 6.43352 14.877 6.76695 14.9498 7.13015C15.0227 7.49334 14.9862 7.86999 14.845 8.21245C14.7038 8.55491 14.4642 8.8478 14.1565 9.0541C13.8489 9.26039 13.487 9.37082 13.1166 9.37142C12.8697 9.37526 12.6245 9.32956 12.3956 9.23703C12.1667 9.14449 11.9586 9.007 11.7837 8.83267C11.6088 8.65834 11.4707 8.45072 11.3774 8.22208C11.2842 7.99344 11.2377 7.74842 11.2407 7.5015V7.5015Z" fill="#00AFFA"/>
<path d="M7.49208 11.2474C7.86298 11.2468 8.22572 11.3562 8.53439 11.5619C8.84305 11.7676 9.08376 12.0602 9.22604 12.4027C9.36832 12.7453 9.40578 13.1223 9.33368 13.4862C9.26158 13.85 9.08315 14.1843 8.82099 14.4467C8.55883 14.7091 8.22471 14.8878 7.86095 14.9602C7.49718 15.0326 7.12011 14.9954 6.77747 14.8534C6.43483 14.7114 6.14202 14.4709 5.93612 14.1624C5.73021 13.8539 5.62045 13.4912 5.62075 13.1203C5.61803 12.8737 5.66457 12.6291 5.75763 12.4007C5.85069 12.1723 5.98841 11.9649 6.1627 11.7904C6.33699 11.616 6.54436 11.4781 6.77263 11.3848C7.00091 11.2916 7.24551 11.2448 7.49208 11.2474Z" fill="#00AFFA"/>
<path d="M11.2408 13.112C11.2427 12.7416 11.3545 12.38 11.5619 12.0731C11.7693 11.7662 12.063 11.5277 12.406 11.3877C12.7489 11.2478 13.1257 11.2126 13.4886 11.2868C13.8515 11.361 14.1843 11.5411 14.4448 11.8044C14.7054 12.0677 14.882 12.4023 14.9523 12.766C15.0227 13.1297 14.9837 13.5061 14.8401 13.8476C14.6966 14.1891 14.455 14.4803 14.146 14.6845C13.8369 14.8887 13.4743 14.9967 13.1038 14.9947C12.857 14.9968 12.6122 14.9493 12.3839 14.8552C12.1557 14.7611 11.9486 14.6222 11.7749 14.4467C11.6013 14.2711 11.4645 14.0626 11.3728 13.8334C11.281 13.6042 11.2362 13.3589 11.2408 13.112Z" fill="#00AFFA"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="15" height="15" fill="white"/>
</clipPath>
</defs>
</svg>

                </Btn>

            <Navbar.Brand>
                <Link to="/">
                    <Image src={LogoBlue} fluid  width="128" height="auto"/>
                </Link>
            </Navbar.Brand>
            <Nav className="me-auto">
            <Link className="navigation-link-header" to="/">Visão Geral</Link>
            <Link className="navigation-link-header" to="/sales">Pedidos</Link>
            <Link className="navigation-link-header" to="/products">Catálogo</Link>
            <Link className="navigation-link-header" to="/customers">Clientes</Link>
            <Link className="navigation-link-header" to="/reports">Relatórios</Link>
            <Link className="navigation-link-header" to="/settings">Configuraçöes</Link>
            </Nav>
            <Nav>
            <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
            <Btn><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M8.00012 1C3.58137 1 0.000120881 3.90937 0.000120881 7.5C0.000120881 8.9875 0.621996 10.35 1.65325 11.4469C1.18762 12.6781 0.218871 13.7219 0.203246 13.7344C-0.00300412 13.9531 -0.0592541 14.2719 0.0594959 14.5469C0.178246 14.8219 0.450121 15 0.750121 15C2.672 15 4.18762 14.1969 5.097 13.5531C6.00012 13.8375 6.97512 14 8.00012 14C12.4189 14 16.0001 11.0906 16.0001 7.5C16.0001 3.90937 12.4189 1 8.00012 1ZM8.00012 12.5C7.16575 12.5 6.34075 12.3719 5.55012 12.1219L4.84075 11.8969L4.23137 12.3281C3.7845 12.6438 3.172 12.9969 2.4345 13.2344C2.66262 12.8562 2.8845 12.4312 3.05637 11.9781L3.38762 11.1L2.74387 10.4187C2.17825 9.81563 1.50012 8.81875 1.50012 7.5C1.50012 4.74375 4.41575 2.5 8.00012 2.5C11.5845 2.5 14.5001 4.74375 14.5001 7.5C14.5001 10.2563 11.5845 12.5 8.00012 12.5Z" fill="#00AFFA"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
</Btn>
            <Btn><svg width="16" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7309 11.3216C13.1272 10.6728 11.9975 9.69687 11.9975 6.5C11.9975 4.07188 10.295 2.12812 7.99939 1.65125V1C7.99939 0.447812 7.55189 0 7.00001 0C6.44814 0 6.00064 0.447812 6.00064 1V1.65125C3.70502 2.12812 2.00252 4.07188 2.00252 6.5C2.00252 9.69687 0.872833 10.6728 0.269084 11.3216C0.081584 11.5231 -0.00154089 11.7641 2.16059e-05 12C0.0034591 12.5125 0.405646 13 1.00315 13H12.9969C13.5944 13 13.9969 12.5125 14 12C14.0016 11.7641 13.9184 11.5228 13.7309 11.3216ZM2.11033 11.5C2.77346 10.6259 3.49846 9.17719 3.50189 6.51813C3.50189 6.51188 3.50002 6.50625 3.50002 6.5C3.50002 4.56687 5.06689 3 7.00001 3C8.93314 3 10.5 4.56687 10.5 6.5C10.5 6.50625 10.4981 6.51188 10.4981 6.51813C10.5016 9.1775 11.2266 10.6263 11.8897 11.5H2.11033ZM7.00001 16C8.10376 16 8.99907 15.1047 8.99907 14H5.00095C5.00095 15.1047 5.89627 16 7.00001 16Z" fill="#00AFFA"/>
</svg>
</Btn>
            <Btn link="#"><svg width="16" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.8 9.5C8.90312 9.5 8.47188 10 7 10C5.52812 10 5.1 9.5 4.2 9.5C1.88125 9.5 0 11.3813 0 13.7V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V13.7C14 11.3813 12.1187 9.5 9.8 9.5ZM12.5 14.5H1.5V13.7C1.5 12.2125 2.7125 11 4.2 11C4.65625 11 5.39687 11.5 7 11.5C8.61563 11.5 9.34062 11 9.8 11C11.2875 11 12.5 12.2125 12.5 13.7V14.5ZM7 9C9.48438 9 11.5 6.98438 11.5 4.5C11.5 2.01562 9.48438 0 7 0C4.51562 0 2.5 2.01562 2.5 4.5C2.5 6.98438 4.51562 9 7 9ZM7 1.5C8.65312 1.5 10 2.84687 10 4.5C10 6.15312 8.65312 7.5 7 7.5C5.34688 7.5 4 6.15312 4 4.5C4 2.84687 5.34688 1.5 7 1.5Z" fill="#00AFFA"/>
</svg>
</Btn>
            </Nav>
            </Container>
        </Navbar>
        
    </React.Fragment>

    )
};

export default HeaderTop;
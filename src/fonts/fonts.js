import { createGlobalStyle } from 'styled-components';

import RobotoRegularWoff from './roboto-regular.woff';
import RobotoRegularWoff2 from './roboto-regular.woff2';

import RobotoBoldWoff from './roboto-700.woff';
import RobotoBoldWoff2 from './roboto-700.woff2';


export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('Roboto'),
        url(${RobotoRegularWoff2}) format('woff2'),
        url(${RobotoRegularWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('Roboto'),
        url(${RobotoBoldWoff2}) format('woff2'),
        url(${RobotoBoldWoff}) format('woff');
        font-weight: 700;
        font-style: normal;
    }
`;
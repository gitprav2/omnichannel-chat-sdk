import {join} from 'path';

const fetchTestPageUrl = (): string => {
    const testPage = "https://ppeeautocshbhagconctrl02.crm10.dynamics.com";//join('file:', __dirname, '..', 'public', 'index.html');
    return  process.env?.testServer || testPage;
}

export default fetchTestPageUrl;
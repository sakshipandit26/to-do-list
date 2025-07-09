import { toast } from 'react-toastify';

export const notify = (message, type) => {
    toast[type](message);
};

export const API_URL= 'https://to-do-list-api-bice-nu.vercel.app'

import axios from 'axios';

// Create an Axios instance with base URL and headers
const apis = axios.create({
    baseURL: 'https://image-gallery-backend-oh9e.onrender.com', // Ensure this is the correct URL for your backend
    headers: {
        'Content-Type': 'application/json',
    },
});

// Define the API calls using the Axios instance
export const getImages = () => apis.get('/api/images');
export const getImage = (id) => apis.get(`/api/images/${id}`);
export const createImage = (image) => apis.post('/api/images', image);
export const deleteImage = (id) => apis.delete(`/api/images/${id}`);

export default apis;

import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID tOos0gefJhmP08c7AXBRJMy1tmShMTLaQMlOm4Laxl4'
  }
});

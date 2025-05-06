
import axios from 'axios';

export const addProduct = async (product) => {
  try {
    const response = await axios.post('http://localhost:5000/products', product);
    console.log('✅ Product sent to backend:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Error while sending product:', error);
    throw error;
  }
};

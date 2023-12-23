import axios from '@/lib/axios';

export const fetchIdentityCount = async (
  amount = 1
): Promise<{ data: number }> => {
  const response = await axios.post('/api/identity-count', JSON.stringify({ amount }), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  
  return response
}

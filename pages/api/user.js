import axios from 'axios';
import { parseCookies } from 'nookies';

export default async function user(req, res) {
  const { sessionId } = parseCookies({ req });
  const response = await axios.get(`https://milsonn.com/api/login/${sessionId}`);
  if (response.status === 200 && response.data.user) {
    res.json(response.data.user);
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
}
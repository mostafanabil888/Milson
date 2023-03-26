export default async function handler(req, res) {
  const { email, password } = req.body;
  // Check if user email and password are valid
  if (email === 'user@example.com' && password === 'password123') {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false, message: 'Invalid email or password' });
  }
}
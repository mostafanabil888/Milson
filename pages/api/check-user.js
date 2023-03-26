export default async function handler(req, res) {
  const { email } = req.body;

  // Validate the email
  if (!email) {
    res.status(400).json({ message: 'Email is required' });
    return;
  }

  // Check if the user has registered
  const user = await getUserByEmail(email);
  if (!user) {
    res.status(401).json({ message: 'User not found' });
    return;
  }

  // Generate a session ID and return it
  const sessionId = generateSessionId();
  await saveSessionId(sessionId, user.id);
  res.json({ hasRegistered: true, sessionId });
}
import bcrypt from 'bcrypt';

const user = {
  username: process.env.ADMIN_EMAIL,
  passwordHash: bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10)
};

export const getLoginPage = (req, res) => {
  if(req.session.user) {
    return res.redirect('/welfare-board/api/upload');
  }
  res.render('login', { error: null });
};

export const login = (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && bcrypt.compareSync(password, user.passwordHash)) {
    req.session.user = username;
    res.redirect('/welfare-board/api/upload');
  } else {
    res.render('login', { error: 'Invalid credentials' });
  }
};

export const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/welfare-board/api/image/login');
  });
};

export const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
// next();
   res.redirect('/welfare-board/api/image/login');
  }
};

// Add a default export that aggregates the named exports
export default {
  getLoginPage,
  login,
  logout,
  isAuthenticated,
};

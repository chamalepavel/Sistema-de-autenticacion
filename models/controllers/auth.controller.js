const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Login
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Usuario no encontrado' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: 'Contraseña incorrecta' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Error al hacer login' });
  }
};

// Registro (abierto)
exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existe = await User.findOne({ username });
    if (existe) return res.status(400).json({ message: 'Usuario ya existe' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });

    await newUser.save();

    res.status(201).json({ message: 'Usuario creado correctamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al registrar' });
  }
};

// Ruta protegida: ver info de usuario
exports.me = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'No se pudo obtener información' });
  }
};

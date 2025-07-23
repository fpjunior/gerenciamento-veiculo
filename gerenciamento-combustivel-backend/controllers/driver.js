let drivers = [];
let nextId = 1;

exports.list = (req, res) => {
  res.json(drivers);
};

exports.create = (req, res) => {
  const driver = { id: nextId++, ...req.body };
  drivers.push(driver);
  res.status(201).json(driver);
};

exports.get = (req, res) => {
  const driver = drivers.find(d => d.id == req.params.id);
  if (!driver) return res.status(404).json({ error: 'Motorista não encontrado' });
  res.json(driver);
};

exports.update = (req, res) => {
  const idx = drivers.findIndex(d => d.id == req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Motorista não encontrado' });
  drivers[idx] = { ...drivers[idx], ...req.body };
  res.json(drivers[idx]);
};

exports.remove = (req, res) => {
  const idx = drivers.findIndex(d => d.id == req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Motorista não encontrado' });
  drivers.splice(idx, 1);
  res.status(204).end();
};

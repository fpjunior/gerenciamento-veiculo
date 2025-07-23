let trips = [];
let nextId = 1;

exports.list = (req, res) => {
  res.json(trips);
};

exports.create = (req, res) => {
  const trip = { id: nextId++, ...req.body };
  trips.push(trip);
  res.status(201).json(trip);
};

exports.get = (req, res) => {
  const trip = trips.find(t => t.id == req.params.id);
  if (!trip) return res.status(404).json({ error: 'Viagem não encontrada' });
  res.json(trip);
};

exports.update = (req, res) => {
  const idx = trips.findIndex(t => t.id == req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Viagem não encontrada' });
  trips[idx] = { ...trips[idx], ...req.body };
  res.json(trips[idx]);
};

exports.remove = (req, res) => {
  const idx = trips.findIndex(t => t.id == req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Viagem não encontrada' });
  trips.splice(idx, 1);
  res.status(204).end();
};

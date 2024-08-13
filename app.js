const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

const dataFilePath = path.resolve('data.json');

app.get('/jobs', (req, res) => {
  if (fs.existsSync(dataFilePath)) {
    const fileContent = fs.readFileSync(dataFilePath, 'utf-8');
    res.json(JSON.parse(fileContent));
  } else {
    res.json([]);
  }
});

app.post('/jobs', (req, res) => {
  const formData = req.body;

  if (!formData || !formData.title || !formData.location || !formData.salary) {
    return res.status(400).send('Fill fields');
  }

  let existingData = [];

  if (fs.existsSync(dataFilePath)) {
    const fileContent = fs.readFileSync(dataFilePath, 'utf-8');
    existingData = JSON.parse(fileContent) || [];
  }

  existingData.push(formData);

  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));
    res.status(200).send('Data saved successfully!');
  } catch (error) {
    res.status(500).send('Error saving data');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

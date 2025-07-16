const fs = require('fs');
const path = require('path');

exports.getAllJobs = (req, res) => {
  const filePath = path.join(__dirname, '../data/jobs.json');

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error('Error reading jobs.json:', err);
      return res.status(500).json({ message: 'Error loading jobs!' });
    }
    res.status(200).json(JSON.parse(data));
  });
};

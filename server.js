import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static assets with support for .html extension
app.use(express.static(__dirname, {
  extensions: ['html', 'htm'],
  index: ['index.html']
}));

// Route for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for file storage vault
app.get(['/file-storage', '/cloud-storage', '/storage'], (req, res) => {
  res.sendFile(path.join(__dirname, 'file-storage.html'));
});

// Fallback: 404 for missing static assets, index.html for page navigations
app.use((req, res) => {
  if (path.extname(req.path)) {
    res.status(404).send('Not Found');
    return;
  }
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});

const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// In-memory data store
let forms = [];
let responses = {};

// Create form
router.post('/create', (req, res) => {
  const form = {
    id: uuidv4(),
    fields: req.body
  };
  forms.push(form);
  responses[form.id] = [];
  res.status(201).json(form);
});

// Submit form response
router.post('/submit/:formId', (req, res) => {
  const { formId } = req.params;
  const form = forms.find(f => f.id === formId);
  if (!form) return res.status(404).json({ error: 'Form not found' });

  responses[formId].push(req.body);
  res.status(200).json({ message: 'Response submitted successfully' });
});

// Get all forms
router.get('/', (req, res) => {
  res.status(200).json(forms);
});

// Get all responses for a form
router.get('/responses/:formId', (req, res) => {
  const { formId } = req.params;
  if (!responses[formId]) return res.status(404).json({ error: 'Form not found' });

  res.status(200).json(responses[formId]);
});

module.exports = router;

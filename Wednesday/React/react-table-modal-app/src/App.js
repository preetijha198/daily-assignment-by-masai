// src/App.js
import React, { useState } from 'react';
import DataTable from './components/DataTable';
import ConfirmModal from './components/ConfirmModal';

const dummyData = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  age: 20 + (i % 30)
}));

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' }
];

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <h1>Paginated DataTable with Confirm Modal</h1>
      <DataTable data={dummyData} columns={columns} />

      <button onClick={() => setShowModal(true)}>Show Confirm Modal</button>

      {showModal && (
        <ConfirmModal
          title="Delete Item"
          message="Are you sure you want to delete this item?"
          onConfirm={() => {
            alert("Confirmed!");
            setShowModal(false);
          }}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default App;

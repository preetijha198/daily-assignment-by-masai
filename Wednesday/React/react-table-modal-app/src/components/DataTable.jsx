// src/components/DataTable.jsx
import React, { useState } from 'react';
import './DataTable.css';

export default function DataTable({ data, columns }) {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;
    if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const paginatedData = sortedData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const totalPages = Math.ceil(data.length / pageSize);

  const changeSort = (key) => {
    setSortConfig((prev) =>
      prev.key === key
        ? { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' }
        : { key, direction: 'asc' }
    );
  };

  return (
    <div>
      <label>Page Size: </label>
      <select value={pageSize} onChange={(e) => {
        setPageSize(Number(e.target.value));
        setCurrentPage(1);
      }}>
        {[10, 25, 50].map(size => (
          <option key={size} value={size}>{size}</option>
        ))}
      </select>

      <table>
        <thead>
          <tr>
            {columns.map(col => (
              <th key={col.key} onClick={() => changeSort(col.key)}>
                {col.label}
                {sortConfig.key === col.key ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, index) => (
            <tr key={index}>
              {columns.map(col => (
                <td key={col.key}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>Prev</button>
        <span> Page {currentPage} of {totalPages} </span>
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}>Next</button>
      </div>
    </div>
  );
}

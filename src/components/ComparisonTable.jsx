import React from 'react';
import '../assets/styles/ComparisonTable.css';

const ComparisonTable = () => {
  return (
    <div className="table-container">
      <h2 className="table-title">HOW WE STACK UP</h2>
      <table className="comparison-table">
        <thead>
          <tr>
            <th></th> {/* Empty header for the first column */}
            <th className="highlighted-header">HELLA GOODS</th>
            <th>OTHER HOT SAUCES</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Certified B Corp</td>
            <td className="highlighted">✓</td>
            <td>✕</td>
          </tr>
          <tr>
            <td>Locally sourced ingredients</td>
            <td className="highlighted">✓</td>
            <td>✕</td>
          </tr>
          <tr>
            <td>Out of control flavours</td>
            <td className="highlighted">✓</td>
            <td>✕</td>
          </tr>
          <tr>
            <td>Will make you a better chef</td>
            <td className="highlighted">✓</td>
            <td>✕</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;

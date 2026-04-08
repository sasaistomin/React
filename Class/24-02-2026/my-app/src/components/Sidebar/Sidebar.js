import React from 'react';

export const Sidebar = ({ sections }) => {
  return (
    <aside className="sidebar">
      <h3>Боковая панель</h3>
      <ul>
        {sections.map((s, i) => (
          <li key={i} style={{ marginBottom: '8px' }}>
            <a href={s.href}>{s.label}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
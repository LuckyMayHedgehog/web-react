import { useState, useMemo } from 'react'
import { useFetchEmployees } from '../hooks/useFetchEmployees.js'
import EmployeeCard from '../components/EmployeeCard.jsx'

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

export default function About() {
  const { data, loading, error } = useFetchEmployees(ENDPOINT)
  const [q, setQ] = useState('')

  const list = useMemo(() => {
    const items = Array.isArray(data) ? data : []
    if (!q) return items

    const n = q.toLowerCase()
    return items.filter(
      (u) =>
        u.name.toLowerCase().includes(n) ||
        (u.company?.name || '').toLowerCase().includes(n)
    )
  }, [data, q])

  return (
    <div>
      <h2>Про нас</h2>
      <p style={{ color: 'var(--fg-muted, #6b7280)' }}>
        Наша команда нижче. Спробуйте пошук за ім'ям або компанією:
      </p>

      <div style={{ marginBottom: '1.5rem' }}>
        <input
          type="text"
          placeholder="Пошук за ім'ям або компанією..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          style={{
            padding: '0.6rem 1rem',
            width: '100%',
            maxWidth: '360px',
            borderRadius: '0.375rem',
            border: '1px solid var(--border)',
            background: 'inherit',
            color: 'inherit',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {loading && <p>Завантаження...</p>}
      {error && <p style={{ color: '#ef4444' }}>Помилка завантаження: {error}</p>}

      {!loading && !error && (
        <div className="cards">
          {list.map((user) => (
            <EmployeeCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  )
}
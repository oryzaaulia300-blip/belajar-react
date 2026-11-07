import { useState } from 'react'

function Counter({ step = 1 }) {
  const [count, setCount] = useState(0)

  return (
    <div className="counter-card">
      <span className="eyebrow">KOMPONEN + STATE + EVENT</span>
      <h2>Counter Interaktif</h2>
      <p className="counter-number" aria-live="polite">{count}</p>
      <div className="buttons">
        <button onClick={() => setCount((prev) => prev - step)}>
          - Kurang
        </button>
        <button className="primary" onClick={() => setCount((prev) => prev + step)}>
          + Tambah
        </button>
        <button onClick={() => setCount(0)}>↺ Reset</button>
      </div>
      <p className="helper">Nilai berubah tanpa memuat ulang halaman.</p>
    </div>
  )
}

export default Counter
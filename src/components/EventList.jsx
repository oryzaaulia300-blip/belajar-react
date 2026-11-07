import { useState } from 'react'

export default function EventList({ events, onDelete, onUpdate }) {
  const [editingId, setEditingId] = useState(null)
  const [editFormData, setEditFormData] = useState({
    name: '',
    date: '',
    location: '',
    description: '',
  })

  function handleEditClick(event) {
    setEditingId(event.id)
    setEditFormData(event)
  }

  function handleEditChange(e) {
    const { name, value } = e.target
    setEditFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSave(e) {
    e.preventDefault()
    onUpdate(editFormData)
    setEditingId(null)
  }

  function handleCancel() {
    setEditingId(null)
  }

  if (events.length === 0) {
    return (
      <section className="panel">
        <h2>Daftar Acara</h2>
        <p>Belum ada acara. Tambahkan melalui form di samping.</p>
      </section>
    )
  }

  return (
    <section className="panel">
      <h2>Daftar Acara</h2>
      <div className="event-list">
        {events.map((event) => (
          <article className="event-card" key={event.id}>
            {editingId === event.id ? (
              <form onSubmit={handleSave} className="edit-form">
                <input
                  type="text"
                  name="name"
                  value={editFormData.name}
                  onChange={handleEditChange}
                  required
                />
                <input
                  type="date"
                  name="date"
                  value={editFormData.date}
                  onChange={handleEditChange}
                  required
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Lokasi"
                  value={editFormData.location || ''}
                  onChange={handleEditChange}
                />
                <textarea
                  name="description"
                  placeholder="Deskripsi"
                  value={editFormData.description || ''}
                  onChange={handleEditChange}
                />
                <div className="button-group">
                  <button type="submit" className="primary">Simpan</button>
                  <button type="button" onClick={handleCancel}>Batal</button>
                </div>
              </form>
            ) : (
              <>
                <h3>{event.name}</h3>
                <p>🗓️ {event.date}</p>
                {event.location && <p>📍 {event.location}</p>}
                {event.description && <p>{event.description}</p>}
                <div className="button-group">
                  <button
                    type="button"
                    className="secondary"
                    onClick={() => handleEditClick(event)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="danger"
                    onClick={() => onDelete(event.id)}
                  >
                    Hapus
                  </button>
                </div>
              </>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
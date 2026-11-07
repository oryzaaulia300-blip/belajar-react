function Hello({ name }) {
  return (
    <div className="hello-card">
      <span className="eyebrow">KOMPONEN + PROPS</span>
      <h2>Halo, {name || 'Mahasiswa'}! 👏</h2>
      <p>Ini komponen Hello yang menerima data nama dari App.</p>
    </div>
  )
}

export default Hello

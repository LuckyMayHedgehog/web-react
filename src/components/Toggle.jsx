export default function Toggle({
  pressed,
  onToggle,
  onLabel = 'Compact: ON',
  offLabel = 'Compact: OFF',
}) {
  return (
    <div className="toggle">
      <span>{pressed ? onLabel : offLabel}</span>
      <button
        type="button"
        className="toggle_btn"
        onClick={() => onToggle(!pressed)}
      >
        Перемкнути
      </button>
    </div>
  )
}
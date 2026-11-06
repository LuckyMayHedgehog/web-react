export default function EmployeeCard({ user }) {
  return (
    <article className="employee-card card">
      <img
        className="employee-card__photo card__media"
        src={`https://i.pravatar.cc/320?u=${user.id}`}
        alt=""
        loading="lazy"
      />
      <div className="employee-card__body card__body">
        <h3 className="employee-card__name card__title">{user.name}</h3>
        <p className="employee-card__role card_excerpt">
          {user.company?.name || '—'} • {user.company?.catchPhrase || ''}
        </p>
      </div>
      <div className="employee-card__meta card_meta">
        <span>{user.email}</span>
        <a href={`tel:${user.phone}`}>Подзвонити</a>
      </div>
    </article>
  );
}
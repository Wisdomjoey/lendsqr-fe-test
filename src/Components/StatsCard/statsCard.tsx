import styles from "./styles.module.scss";

export type Stats = {
  icon: string;
  title: string;
  stats: number;
}

function StatsCard({icon, title, stats}: Stats) {
  return (
    <div className={styles['stats__container']}>
      <img src={icon} alt={title} />

      <p>{title}</p>

      <span>{stats}</span>
    </div>
  )
}

export default StatsCard;
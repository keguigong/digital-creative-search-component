import styles from "./result.module.scss"

type Props = {
  data: {
    title: string
    description: string
    image: string
    url: string
    category: string
  }
}

export function Result({ data }: Props) {
  return (
    <li className={styles.result}>
      <a className={styles.link} href={data.url} target="_blank" rel="noreferrer">
        <picture>
          <img className={styles.image} src={data.image} alt={data.title} />
        </picture>
        <div className={styles.textContainer}>
          <p className={styles.title}>{data.title}</p>
          <p className={styles.description}>{data.description}</p>
        </div>
      </a>
    </li>
  )
}

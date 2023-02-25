import styles from "./loading.module.scss"

export function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <picture>
        <img className={styles.image} src="icons/loading.svg" alt="loading.svg" />
      </picture>
    </div>
  )
}

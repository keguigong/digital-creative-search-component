import { forwardRef, Ref } from "react"
import styles from "./loading.module.scss"

export const Loading = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className={styles.loadingContainer}>
      <picture>
        <img className={styles.image} src="icons/loading.svg" alt="loading.svg" />
      </picture>
    </div>
  )
})

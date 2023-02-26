import { forwardRef, Ref } from "react"
import styles from "./loading.module.scss"

// Read more: https://stackoverflow.com/questions/71633713/error-component-definition-is-missing-display-name-react-display-name-with-reac
export const Loading = forwardRef<HTMLDivElement, {}>(function LoadingRaw(props, ref) {
  return (
    <div ref={ref} className={styles.loadingContainer}>
      <picture>
        <img className={styles.image} src="icons/loading.svg" alt="loading.svg" />
      </picture>
    </div>
  )
})

import { useMemo } from "react"
import { CSSTransition } from "react-transition-group"

import styles from "./result-list.module.scss"
import { Result } from "./result"
import { Loading } from "./loading"
import results from "./results.json"

type Props = {
  list?: any[]
  error?: boolean
  loading?: boolean
}

export function ResultList({ list = results, error, loading = true }: Props) {
  const len = useMemo(() => (list instanceof Array ? list.length : 0), [list])

  return (
    <div className={styles.listWrap}>
      {len && !error ? (
        <ul className={styles.listContainer}>
          {list?.map((result) => (
            <Result key={result.title} data={result}></Result>
          ))}
        </ul>
      ) : (
        ""
      )}
      {!len && !error && (
        <div className={styles.imgContainer}>
          <picture>
            <img src="images/empty-placeholder.svg" alt="empty-placeholder.svg" />
          </picture>
        </div>
      )}
      {error && (
        <div className={styles.imgContainer}>
          <picture>
            <img src="images/error-placeholder.svg" alt="error-placeholder.svg" />
          </picture>
        </div>
      )}
      <CSSTransition
        in={loading}
        classNames={{
          enter: styles["loading-enter"],
          enterActive: styles["loading-enter-active"],
          enterDone: styles["loading-enter-done"],
          exit: styles["loading-exit"],
          exitActive: styles["loading-exit-active"],
          exitDone: styles["loading-exit-done"]
        }}
        appear
        unmountOnExit={true}
        timeout={250}
      >
        <Loading></Loading>
      </CSSTransition>
    </div>
  )
}

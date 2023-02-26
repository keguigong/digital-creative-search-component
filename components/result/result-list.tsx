import { useEffect, useMemo, useRef, useState } from "react"
import { CSSTransition, SwitchTransition, TransitionGroup } from "react-transition-group"

import styles from "./result-list.module.scss"
import { Result } from "./result"
import { Loading } from "./loading"
import results from "./results.json"

type Props = {
  list?: any[]
  error?: boolean
  loading?: boolean
}

const transClassNames = {
  enter: styles["loading-enter"],
  enterActive: styles["loading-enter-active"],
  enterDone: styles["loading-enter-done"],
  exit: styles["loading-exit"],
  exitActive: styles["loading-exit-active"],
  exitDone: styles["loading-exit-done"]
}

export function ResultList({ list = results, error, loading }: Props) {
  // Read moew: https://github.com/reactjs/react-transition-group/issues/668#issuecomment-695162879
  const nodeRef = useRef(null)
  const switchRef = useRef(null)
  const [height, setHeight] = useState(350)

  const tranState = useMemo(() => {
    if (error) return "error"
    else if (
      (!error && !(list instanceof Array)) ||
      (!error && list instanceof Array && list.length === 0)
    )
      return "empty-list"
    else return "show-list"
  }, [list, error])

  useEffect(() => {
    if (!switchRef.current) return
    // @ts-ignore
    switchRef.current.clientHeight !== height ? setHeight(switchRef.current.clientHeight) : null
  })

  return (
    <div className={styles.listWrap} style={{ height: `${height}px` }}>
      <div className={styles.mask}>
        {tranState === "show-list" ? (
          <ul ref={switchRef} className={styles.listContainer}>
            {list?.map((result) => (
              <Result key={result.title} data={result}></Result>
            ))}
          </ul>
        ) : (
          <></>
        )}

        {tranState === "error" ? (
          <div ref={switchRef} className={styles.imgContainer}>
            <picture>
              <img src="images/error-placeholder.svg" alt="error-placeholder.svg" />
            </picture>
          </div>
        ) : (
          <></>
        )}

        {tranState === "empty-list" ? (
          <div ref={switchRef} className={styles.imgContainer}>
            <picture>
              <img src="images/empty-placeholder.svg" alt="empty-placeholder.svg" />
            </picture>
          </div>
        ) : (
          <></>
        )}

        <CSSTransition
          in={loading}
          nodeRef={nodeRef}
          classNames={transClassNames}
          appear
          unmountOnExit={true}
          timeout={500}
        >
          <Loading ref={nodeRef}></Loading>
        </CSSTransition>
      </div>
    </div>
  )
}

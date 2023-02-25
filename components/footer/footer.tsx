import cn from "classnames"
import styles from "./footer.module.scss"

type Props = {
  text?: string
  error?: boolean
  loading?: boolean
  len?: number
}

export function Footer({ text, error, loading, len }: Props) {
  return (
    <div className={cn(styles.footer, error && styles.error)}>
      {error
        ? "Something wrong happened but this is not your fault : )"
        : loading
        ? "Searching..."
        : len
        ? `${len} results`
        : "No result"}
    </div>
  )
}

import cn from "classnames"
import { useEffect, useState } from "react"
import styles from "./search.module.scss"

type Props = {
  value?: string
  error?: boolean
  onChange?: (e: string) => void
  onSearch?: (e: string) => void
}

const palceholder = "Search what technologies we are using at DC..."

export function Search({ value, onChange, onSearch, error }: Props) {
  const [text, setText] = useState("")

  useEffect(() => {
    if (typeof value === "undefined") return
    setText(value)
  }, [value])

  return (
    <div className={styles.search}>
      <input
        value={text}
        className={cn(styles.input, error && styles.error)}
        type="text"
        placeholder={palceholder}
        onChange={(e) => onChange?.call(null, e.target.value)}
        onSubmit={(e) => onSearch?.call(null, text)}
      />
    </div>
  )
}

import { Tag } from "./tag"
import styles from "./tag-list.module.scss"

const tagNames = ["Language", "Build", "Design", "Cloud"]

type Props = {
  activeTag?: string
  onClick?: (e: string) => void
}

export function TagList({ activeTag, onClick }: Props) {
  return (
    <ul className={styles.ul}>
      {tagNames.map((name) => (
        <Tag
          key={name}
          tagname={name}
          active={activeTag === name}
          onClick={(e) => onClick?.call(null, name)}
        ></Tag>
      ))}
    </ul>
  )
}

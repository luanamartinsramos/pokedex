import styles from "./styles.module.scss";

interface Props {
  content: string;
  backgroundSelected: string;
}

export function Title({ content, backgroundSelected }: Props) {
  return (
    <span className={styles.title} style={{ color: backgroundSelected }}>
      {content}
    </span>
  );
}

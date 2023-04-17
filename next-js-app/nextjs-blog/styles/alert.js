import styles from './alert.module.css';
import { clsx } from 'clex';

export default function Alert({ children, type }) {
  return (
    <div 
      className={clsx({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
}
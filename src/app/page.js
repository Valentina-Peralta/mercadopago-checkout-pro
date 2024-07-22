import CheckoutButton from "./components/CheckoutButton";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <CheckoutButton />
    </main>
  );
}

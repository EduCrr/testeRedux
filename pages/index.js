import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSelector } from "react-redux";

export default function Home() {
  let user = useSelector((state) => state.user);

  return (
    <div className={styles.container}>
      <h1>{user.name}</h1>
    </div>
  );
}

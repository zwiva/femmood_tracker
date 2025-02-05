// export default function Home() {
//   return (
//     <div>
//       <h1>Home</h1>
//       <p>Bienvenido a la página de inicio.</p>
//     </div>
//   );
// }


import styles from "./Home.module.css";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Bienvenido</h1>
      <Button text="Haz clic aquí" onClick={() => alert("¡Hola!")} />
    </div>
  );
};

export default Home;
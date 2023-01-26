import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import './notFound.css';

export default function NotFound() {
  return (
    <div>
      <div className="container">
        <div className="container__error">
          <Header />
          <h1> 404 </h1>
          <h3> Oups ! La page que vous demandez n'existe pas. </h3>
          <p><a href="/"> Retourner sur la page d’accueil </a></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
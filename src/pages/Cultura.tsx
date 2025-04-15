import AdornosIndigenas from "@/assets/adornos-indigenas.jpg";
import AlimentacaoIndigena from "@/assets/alimentacao-indigena.jpg";
import CartazLinguasIndigenas from "@/assets/cartaz-linguas-indigenas.png";
import CestariaIndigena from "@/assets/cestaria-indigena.webp";
import CocarTradicionalIndigena from "@/assets/cocar-tradicional-indigena.jpg";
import EspiritualidadeIndigena from "@/assets/espiritualidade-indigena.jpg";
import Mandioca from "@/assets/mandioca.jpg";
import PinturaIndigenaUrucum from "@/assets/pintura-indigena-urucum.jpg";
import RepresentacaoLinguasIndigenas from "@/assets/representacao-linguas-indigenas.jpg";
import RitualTradicionalIndigena from "@/assets/ritual-tradicional-indigena.webp";
import styles from "@/styles/cultura.module.css";

import { Col, Container, Row } from "react-bootstrap";

const Cultura = () => {
  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center" style={{ color: "#040938" }}>
        Cultura dos Povos Indígenas
      </h1>

      <p>
        A cultura dos povos indígenas brasileiros é extremamente rica, diversa e
        ancestral. Com mais de 300 etnias e cerca de 270 línguas diferentes, o
        Brasil é um dos países com maior diversidade cultural indígena do mundo.
        Cada povo possui sua própria cosmologia, sistema de organização social,
        língua, práticas espirituais e modos de viver em harmonia com a
        natureza.
      </p>

      <h2 className="mt-4" style={{ color: "#040938" }}>
        🍽️ Alimentação
      </h2>
      <p>
        A alimentação indígena é baseada em produtos naturais e técnicas de
        preparo tradicionais. Alimentos como mandioca, milho, peixes, frutas da
        floresta, castanhas e raízes fazem parte do cotidiano alimentar. A
        mandioca, por exemplo, é transformada em farinha, beiju, tapioca e cauim
        (uma bebida fermentada ancestral).
      </p>
      <Row className="my-4">
        <Col md={6}>
          <img
            src={AlimentacaoIndigena}
            alt="Alimentação indígena"
            className={styles.culturaImagem}
          />
        </Col>
        <Col md={6}>
          <img
            src={Mandioca}
            alt="Mandioca utilizada na culinária indígena"
            className={styles.culturaImagem}
          />
        </Col>
      </Row>

      <h2 className="mt-4" style={{ color: "#040938" }}>
        🎨 Arte e Pintura Corporal
      </h2>
      <p>
        A arte indígena é uma forma de expressão espiritual e identidade étnica.
        Utilizam-se pigmentos naturais como o urucum (vermelho) e o jenipapo
        (preto) para pintura corporal com significados ritualísticos, sociais ou
        estéticos. As cerâmicas, cestos, trançados, instrumentos musicais e
        adornos são produzidos com técnicas ancestrais e possuem grande valor
        simbólico.
      </p>
      <Row className="my-4">
        <Col md={6}>
          <img
            src={PinturaIndigenaUrucum}
            alt="Pintura indígena com urucum"
            className={styles.culturaImagem}
          />
        </Col>
        <Col md={6}>
          <img
            src={CestariaIndigena}
            alt="Cestaria artesanal indígena"
            className={styles.culturaImagem}
          />
        </Col>
      </Row>

      <h2 className="mt-4" style={{ color: "#040938" }}>
        🌀 Rituais e Espiritualidade
      </h2>
      <p>
        Os rituais indígenas estão profundamente conectados com a natureza e os
        ciclos da vida. Festas de colheita, ritos de passagem, celebrações
        espirituais e cerimônias xamânicas são comuns em diversas etnias. Muitas
        tribos acreditam em espíritos protetores, em seres da floresta e na
        interligação entre todos os elementos do universo.
      </p>
      <Row className="my-4">
        <Col md={6}>
          <img
            src={RitualTradicionalIndigena}
            alt="Ritual tradicional indígena com dança"
            className={styles.culturaImagem}
          />
        </Col>
        <Col md={6}>
          <img
            src={EspiritualidadeIndigena}
            alt="Espiritualidade nos povos indígenas"
            className={styles.culturaImagem}
          />
        </Col>
      </Row>

      <h2 className="mt-4" style={{ color: "#040938" }}>
        🗣️ Línguas Indígenas
      </h2>
      <p>
        No Brasil, são faladas mais de 270 línguas indígenas, pertencentes a
        diversas famílias linguísticas como Tupi, Macro-Jê, Karib, Pano e Aruak.
        Essas línguas carregam saberes milenares e formas únicas de compreender
        o mundo, muitas vezes sem correspondência direta com o português.
      </p>
      <Row className="my-4">
        <Col md={6}>
          <img
            src={RepresentacaoLinguasIndigenas}
            alt="Representação de línguas indígenas"
            className={styles.culturaImagem}
          />
        </Col>
        <Col md={6}>
          <img
            src={CartazLinguasIndigenas}
            alt="Cartaz da década das línguas indígenas"
            className={styles.culturaImagem}
          />
        </Col>
      </Row>

      <h2 className="mt-4" style={{ color: "#040938" }}>
        👕 Vestimentas e Adornos
      </h2>
      <p>
        As vestimentas indígenas variam conforme a etnia, o clima e os rituais.
        Muitos povos utilizam adornos como colares, cocares, pulseiras e brincos
        feitos com sementes, penas, ossos e fibras naturais. A vestimenta é uma
        extensão da identidade cultural e do vínculo com a natureza.
      </p>
      <Row className="my-4">
        <Col md={6}>
          <img
            src={CocarTradicionalIndigena}
            alt="Indígena com cocar tradicional"
            className={styles.culturaImagem}
          />
        </Col>
        <Col md={6}>
          <img
            src={AdornosIndigenas}
            alt="Adornos indígenas feitos à mão"
            className={styles.culturaImagem}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Cultura;

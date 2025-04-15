import styles from "@/styles/home.module.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaSpotify, FaYoutube } from "react-icons/fa";

import gavetaImage from "@/assets/gaveta-guitarra.jpg";
import sepulturaImage from "@/assets/sepultura.jpg";

const Home = () => {
  return (
    <Container className="py-5">
      <div className={styles.banner}>
        <div className={styles.bannerTitleContainer}>
          <h1 className={styles.bannerText}>Dia dos Povos Indígenas</h1>
          <p className={styles.bannerText}>
            Uma celebração da diversidade, da sabedoria e da resistência dos
            povos originários do Brasil.
          </p>
        </div>
      </div>

      <p className={styles.paragraph}>
        O Dia dos Povos Indígenas, comemorado em 19 de abril, é uma data para
        reconhecer a importância dos povos originários na formação cultural,
        social e espiritual do Brasil. É também um momento para reforçar a luta
        por seus direitos e preservar suas línguas, conhecimentos e modos de
        vida.
      </p>

      <p className={styles.paragraph}>
        Da culinária à medicina natural, das histórias aos rituais, da música à
        arte — a influência indígena se espalha por todo o nosso país e merece
        ser celebrada com orgulho e respeito.
      </p>

      <h2 className={styles.sectionTitle}>A Importância dos Povos Indígenas</h2>
      <p className={`${styles.paragraph} ${styles.fadeIn}`}>
        Os povos indígenas desempenham um papel crucial na preservação do meio
        ambiente. Suas práticas sustentáveis e seu profundo conhecimento da
        floresta, rios e fauna são exemplos de equilíbrio com a natureza. Ao
        protegerem suas terras, estão protegendo também a biodiversidade
        brasileira.
      </p>
      <p
        className={`${styles.paragraph} ${styles.fadeIn}`}
        style={{ animationDelay: "0.3s" }}
      >
        Segundo o IBGE, existem mais de 300 etnias indígenas no Brasil, cada uma
        com sua própria língua, tradição e visão de mundo. Essa diversidade é um
        patrimônio imensurável do nosso país.
      </p>

      <h2 className={styles.sectionTitle}>Frases e Sabedoria Ancestral</h2>
      <ul
        className={`${styles.phraseList} ${styles.fadeIn}`}
        style={{ animationDelay: "0.6s" }}
      >
        <li>“A terra não pertence ao homem, o homem pertence à terra.”</li>
        <li>“Enquanto a grama cresce, o cavalo passa fome.”</li>
        <li>“Ouvir é mais importante do que falar.”</li>
      </ul>

      <h2 className={styles.sectionTitle}>
        Cultura Indígena na Música e na Mídia
      </h2>

      <Row>
        <Col md={6} className="mb-4">
          <Card className="h-100">
            <Card.Img
              variant="top"
              src={sepulturaImage}
              className={styles.cardImage}
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Sepultura & a influência indígena</Card.Title>
              <Card.Text>
                O álbum <strong>Roots</strong> (1996) da banda brasileira
                Sepultura é um marco na fusão entre o metal e os sons indígenas.
                Eles colaboraram com a tribo Xavante e incorporaram ritmos,
                cantos e instrumentos da cultura ancestral brasileira. Essa
                mistura tornou o som único e ajudou a propagar a importância da
                preservação das raízes culturais.
              </Card.Text>

              <div className="d-flex gap-2 mt-3 flex-column flex-md-row">
                <Button
                  href="https://open.spotify.com/intl-pt/album/5JjnPCfpp6redrkKpXZAs8?si=2wvfbEnlRkaVFzJnALMD1g"
                  target="_blank"
                  style={{ flex: 1 }}
                  className={`${styles.spotifyButton} d-flex align-items-center justify-content-center gap-2`}
                >
                  <FaSpotify size={20} />
                  Ouvir no Spotify
                </Button>
                <Button
                  variant="danger"
                  href="https://www.youtube.com/watch?v=iBF1VmGAvgc&t=6s"
                  target="_blank"
                  style={{ flex: 1 }}
                  className="d-flex align-items-center justify-content-center gap-2"
                >
                  <FaYoutube size={20} />
                  Assistir Documentário
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card className="h-100">
            <Card.Img
              variant="top"
              src={gavetaImage}
              className={styles.cardImage}
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>A guitarra indígena de Gaveta</Card.Title>
              <Card.Text className="flex-grow-1">
                O youtuber <strong>Gaveta</strong> criou a “guitarra perfeita”
                inspirada na arte indígena brasileira, com pintura personalizada
                baseada em grafismos, além de abordar a importância do respeito
                cultural. O projeto foi feito em colaboração com artistas
                indígenas e virou um símbolo de criatividade e valorização dos
                povos nativos.
              </Card.Text>
              <Button
                variant="danger"
                href="https://www.youtube.com/watch?v=wXkq3eUk-m4&t=1500s"
                target="_blank"
                className="d-flex align-items-center justify-content-center gap-2"
              >
                <FaYoutube size={20} />
                Assistir Vídeo
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

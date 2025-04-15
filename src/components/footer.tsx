import { Container } from "react-bootstrap";

import { FaGithub, FaUniversity } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#040938", color: "white" }}>
      <Container className="py-3 text-center">
        <div className="d-flex flex-column align-items-center gap-2 text-center">
          <p className="mb-0 d-flex flex-wrap justify-content-center align-items-center gap-2">
            © 2025 — Projeto educativo desenvolvido por
            <a
              href="https://github.com/brunodias0903"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center gap-1"
              style={{ color: "#ffffffcc", textDecoration: "underline" }}
            >
              <FaGithub size={16} />
              <strong>Bruno Dias</strong>
            </a>
          </p>

          <p className="mb-0 d-flex flex-wrap justify-content-center align-items-center gap-2">
            <FaUniversity size={16} />
            Todos os direitos reservados a<strong> Bruno Dias </strong> e à
            <strong> ESBAM - Escola Superior Batista do Amazonas</strong>
          </p>

          <a
            href="https://github.com/brunodias0903/dia-dos-povos-indigenas"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center gap-2"
            style={{ color: "#ffffffcc", textDecoration: "underline" }}
          >
            <FaGithub size={18} />
            Repositório no GitHub
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

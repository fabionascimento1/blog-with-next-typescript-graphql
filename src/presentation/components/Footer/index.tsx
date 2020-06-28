import { StyleFooter } from "./styles";

function Footer() {
  return (
    <>
      <StyleFooter>
        <footer>
          <div>
            Feito com ❤️ usando:{" "}
            <a target="_blank" href="https://nextjs.org/">
              Next.js
            </a>{" "}
            e{" "}
            <a target="_blank" href="https://strapi.io/">
              Strapi
            </a>
          </div>
          <div>
            © 2020{" "}
            <a href="https://github.com/fabionascimento1">Fábio Nascimento.</a>
          </div>
        </footer>
      </StyleFooter>
    </>
  );
}

export default Footer;

import Link from "next/link";

export default function Page404(props: any) {
  return (
    <body style={{ backgroundColor: "#2f3242" }}>
      <img
        src="https://rastrearpedidos.web.app/img/travolta_404.gif"
        alt="Travolta 404"
      />
      <div className="message-box">
        <h1>404</h1>
        <p>Página não encontrada</p>
        <div className="buttons-con">
          <div className="action-link-wrap">
            <Link href="/">
              <a className="link-button">Voltar pro início</a>
            </Link>
          </div>
        </div>
      </div>
    </body>
  );
}

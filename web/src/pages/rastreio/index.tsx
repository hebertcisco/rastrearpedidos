import { useEffect, useState } from "react";

import Nav from "../../components/Nav";
import Result from "../../components/Result";
import TopNav from "../../components/TopNav";
import axios from "axios";

export default function Rastreio(props: any) {
  const [social, setSocial] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.WEB_URI}/api/resource/v1?doc=social&collection=api`)
      .then((response: any) => {
        setSocial(response.data.social);
      });
  }, []);
  return (
    <main>
      <TopNav codigo={props.codigo} social={social} />
      <Nav />
      <Result codigo={props.codigo} />
    </main>
  );
}
Rastreio.getInitialProps = ({ query: { codigo } }) => {
  return { codigo };
};

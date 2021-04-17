import { GetStaticPaths, GetStaticProps } from "next";
import { ICode, IRastreios } from "../../utils/types";

import Result from "../../components/Result";
import axios from "axios";

interface IRastreiosProps {
  tracking: IRastreios[];
  code?: ICode;
}
export default function Rastreio({ tracking, code }: IRastreiosProps) {
  return (
    <main>
      <Result codigo={code} tracking={tracking} />
    </main>
  );
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { code } = params;

  if (code.length < 13) {
    return { props: { error: "Código precisa ter mais de 13 carácteres!" } };
  }

  try {
    const { data } = await axios.get<IRastreios[]>(
      `https://api.rastrearpedidos.com.br/api/rastreio/v1?codigo=${code}`
    );

    return {
      props: { tracking: data, code: code },
      revalidate: 60,
    };
  } catch (err) {
    return {
      props: { tracking: { error: err?.message }, code: code },
      revalidate: 60,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: "blocking",
    paths: [],
  };
};

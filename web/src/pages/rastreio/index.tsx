import Result from "../../components/Result";
export default function Rastreio(props: any) {
  return (
    <main>
      <Result codigo={props?.codigo} />
    </main>
  );
}
Rastreio.getInitialProps = ({ query: { codigo } }) => {
  return { codigo };
};

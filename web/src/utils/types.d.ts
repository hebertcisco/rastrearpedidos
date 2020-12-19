interface ISocial {
  name?: string;
  ref?: string;
  icon?: string;
}

interface ILink {
  icon?: string;
  text?: string;
  href?: string;
}
interface IProject {
  category?: string;
  title: string;
  parts?: string[];
  place?: string;
  date?: string;
  image: string;
  desc?: string;
  links?: ILink[];
}
interface IFooter {
  title?: string;
  desc?: string;
  social?: ISocial[];
  projects?: IProject[];
  help?: ISocial[];
}
interface ICode {
  codigo: string | string[];
}
interface IRastreio {
  cidade: string;
  data: string;
  dataHora: string;
  descricao: string;
  uf: string;
}
export { ISocial, ILink, IProject, IFooter, ICode, IRastreio };

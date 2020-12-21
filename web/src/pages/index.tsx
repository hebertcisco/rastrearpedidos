import Footer from "../components/Footer/index";
import Hero from "../components/Hero/index";
import Nav from "../components/Nav";

export default function Home(props: any) {
  return (
    <main>
      <Nav />
      <Hero />
      <Footer
        title={props.footer_data.title}
        desc={props.footer_data.desc}
        social={props.social_data.social}
        projects={props.all_projects.projects}
        help={props.footer_data.help}
      />
    </main>
  );
}
export async function getStaticProps() {
  const res_all_projects = await fetch(
    `https://hebertbarros.now.sh/api/v1/projects`
  );
  const all_projects = await res_all_projects.json();

  const res_footer_data = await fetch(
    `${process.env.WEB_URI}/api/resource/v1?doc=footer&collection=api`
  );
  const footer_data = await res_footer_data.json();

  const res_social_data = await fetch(
    `${process.env.WEB_URI}/api/resource/v1?doc=social&collection=api`
  );
  const social_data = await res_social_data.json();
  try {
    return {
      props: {
        all_projects,
        footer_data,
        social_data,
      },
      revalidate: 300, // In seconds
    };
  } catch (error) {
    return JSON.stringify(error);
  }
}

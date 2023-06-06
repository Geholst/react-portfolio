export default function Projects(){
    const projects = [
        {
          name: 'Fast Card',
          link: 'https://github.com/Geholst/Fast_Card',
        },
        {
          name: 'Password Generator',
          link: 'https://github.com/Geholst/Password-generator',
        },
        {
          name: 'Weather dashboard',
          link: 'https://github.com/Geholst/Weather-Dashboard',
        },
        {
          name: 'Team Profile Generator',
          link: 'https://github.com/Geholst/Team-Profile-Generator',
        },
        {
          name: 'Social Network API',
          link: 'https://github.com/Geholst/social-network-API',
        },
        {
          name: 'README generator',
          link: 'https://github.com/Geholst/README-Generator',
        },
      ];
      
    return(
    <section>
      <h1>My Projects</h1>
        <section id="projects">
            {projects.map((key, index)=>{
            return(
                <article key={index}>
                <a href={key.link} target='_blank'>
                {key.name}
                </a>
                </article>
            );
            })}
        </section>
    </section>
    );
}
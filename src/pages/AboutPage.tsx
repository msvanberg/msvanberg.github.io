const AboutPage = () => {
  return (
    <article>

      <div className="mt-5 space-y-4 text-base leading-7">
        <p>
          I am a PhD student at Chalmers University of Technology, working on understanding how societies decarbonize and what gets in the way. 
          My current focus is Swedish innovation policy for
          decarbonization by 2045, with special attention to heavy industry, which comprises roughly one third of the country's emissions.
        </p>
        <p>
          Prior to my PhD, I worked in the software industry on AI and other data-intensive
          systems. I now develop and apply computational methods to research questions in innovation and
          sustainability transitions.
        </p>

        <p>
         Together with a colleague, I represent the <a href="https://transitionsnest.wordpress.com/" className="underline underline-offset-2">Network for Early Career Researchers in Sustainability Transitions (NEST)</a> on the STRN steering group, and coordinate the network. 
        </p>
      </div>

      <h3 className="mt-8 font-serif text-xl font-semibold">Education</h3>
      <dl className="mt-4 space-y-5">
        <div>
          <dt className="font-semibold">PhD in Technology Management and Economics</dt>
          <dd className="text-sm text-muted-foreground">
            Chalmers University of Technology &mdash; <em>in progress</em>
          </dd>
        </div>
        <div>
          <dt className="font-semibold">MS in Technology and Policy</dt>
          <dd className="text-sm text-muted-foreground">Massachusetts Institute of Technology</dd>
          <dd className="text-sm">MIT Technology and Policy Thesis Prize recipient</dd>
        </div>
        <div>
          <dt className="font-semibold">BA in Computer Science, minor in Mathematics</dt>
          <dd className="text-sm text-muted-foreground">Wellesley College</dd>
          <dd className="text-sm">magna cum laude, honors in the major</dd>
        </div>
      </dl>
    </article>
  );
};

export default AboutPage;

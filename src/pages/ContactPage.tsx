const ContactPage = () => {
  return (
    <article>
      <p className="mt-4 text-base leading-7">
        Please reach out if we have overlapping interests. I am always happy to discuss research collaborations. 
        If you are a Chalmers student interested in data science and socio-technical change, I am also happy to discuss potential thesis projects. 
      </p>

      <dl className="mt-6 space-y-3 text-sm">
        <div className="flex gap-3">
          <dt className="w-28 flex-shrink-0 font-semibold">Email</dt>
          <dd>
            <a href="mailto:maja.svanberg@chalmers.se" className="underline underline-offset-2">
              maja.svanberg@chalmers.se
            </a>
          </dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-28 flex-shrink-0 font-semibold">Google Scholar</dt>
          <dd>
            <a
              href="https://scholar.google.com/citations?user=afEqzPMAAAAJ&hl"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              Publications and citations
            </a>
          </dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-28 flex-shrink-0 font-semibold">LinkedIn</dt>
          <dd>
            <a
              href="https://www.linkedin.com/in/majasvanberg/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              linkedin.com/in/majasvanberg
            </a>
          </dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-28 flex-shrink-0 font-semibold">CV</dt>
          <dd>
              Available upon request
          </dd>
        </div>
      </dl>

    </article>
  );
};

export default ContactPage;

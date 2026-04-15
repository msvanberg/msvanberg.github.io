const ResearchPage = () => {
  return (
    <article>
      <p className="mt-4 text-base leading-7">
        In the first part of my PhD, I have investigated the role computational methods have in transitions research,
         developed a method to analyze job postings at scale, and examined the patterns 
         through which new knowledge integrates into industries.
      </p>

      <p className="mt-4 text-base leading-7">
        I am now turning these tools toward questions of policy and industrial change.
        Empirically, I will focus on the emerging Swedish battery industry, and heavy industry.  
      </p>

      <h3 className="mt-8 font-serif text-xl font-semibold">Selected work</h3>
      <ol className="mt-4 list-decimal space-y-4 pl-5 text-sm">
        <li>
          Svanberg, M., Andersson, J., Hellsmark, H. (2026).{" "}
          <em>Exposing the application layer of technological change from skill demand to knowledge integration.</em>{" "}
          In preparation for submission.
        </li>

        <li>
          Svanberg, M., Andersson, J., Hellsmark, H. (2026).{" "}
          <em>
            Novel quantitative methods for data-driven sustainability transitions research.
          </em>{" "}
          Under review. 
        </li>
        <li>
          Svanberg, M., Li, W., Fleming, M., Goehring, B., Thompson, N. (2024).{" "}
          <em>
            Beyond AI exposure: which tasks are cost-effective to automate with computer
            vision?
          </em>{" "}
          <a
            href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4700751"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Manuscript, available at SSRN.
          </a>
        </li>
      </ol>
    </article>
  );
};

export default ResearchPage;

const ResearchPage = () => {
  return (
    <article>
      <p className="mt-4 text-base leading-7">
        My doctoral work so far has two strands: a study of how computational methods are used in transitions research, 
        and a method that analyzes the content of millions of job postings to characterize 
        how skills and knowledge restructure in industries as they evolve.
      </p>
      <p className="mt-4 text-base leading-7">
        I am now turning these tools toward questions of policy and industrial change, 
        with an empirical focus on the emerging Swedish battery industry and on heavy industry.  
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
          </a>{" "}
          Cited by Acemoglu (2025), Eloundou et al. (2024), Aghion & Bunel (2024), Autor & Thompson (2025), and the Council of Economic Advisers (2024) in their Economic Report of the President.
        </li>
      </ol>
    </article>
  );
};
export default ResearchPage;

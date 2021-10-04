const RepoInfo = ({repo}) => {
    return (
        <li className="list-group-item" key={repo.toString()}>
                  <a className="h5 mb-0 text-decoration-none" href={repo.url}>
                      {repo.name}
                  </a>
                  <p className="small">{repo.description}</p>
        </li>
    );
};

export default RepoInfo;


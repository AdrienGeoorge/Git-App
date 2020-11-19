import React from "react"
import {faCode, faStar, faCodeBranch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const RepoBlock = ({repo}) => (
    <a href={repo.html_url} target="_blank" rel="noreferrer" className="repoBlock">
        <p className="h5">{repo.name}</p>
        <p>{repo.description}</p>
        <div className="more">
            <span>{repo.language ? repo.language : 'None'} <FontAwesomeIcon icon={faCode} className="ml-2"/></span>
            <span>{repo.stargazers_count} <FontAwesomeIcon icon={faStar} className="ml-2"/></span>
            <span>{repo.forks} <FontAwesomeIcon icon={faCodeBranch} className="ml-2"/></span>
        </div>
    </a>
)

export default RepoBlock

import React from "react"
import RepoBlock from "./RepoBlock";

const UserRepos = ({data}) => (
    <div id="sticky">
        <h1>Projects</h1>
        <div id="repoGrid">
            {data.map(el => (
                <RepoBlock repo={el} key={el.id}/>
            ))}
        </div>
    </div>
)

export default UserRepos

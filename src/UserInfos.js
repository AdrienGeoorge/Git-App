import React from "react"
import {faBuilding, faMapPin, faLink} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const UserInfos = ({data}) => (
    <div className="wrapper infos text-center">
        <img src={data.avatar_url} alt="Avatar" id="avatar"/>
        <p className="h4 mt-3 m-0">{data.name}</p>
        <a href={data.html_url} target="_blank" rel="noreferrer" id="login">@{data.login}</a>
        <p className="h5 mt-3">{data.bio}</p>
        {
            data.company &&
            <p className="mt-5 m-0"><FontAwesomeIcon icon={faBuilding} className="mr-2"/>{data.company}</p>
        }
        {
            data.location &&
            <p className="m-0"><FontAwesomeIcon icon={faMapPin} className="mr-2"/>{data.location}</p>
        }
        {
            data.blog &&
            <a href={data.blog} className="text-decoration-none text-white" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLink} className="mr-2"/>{data.blog}
            </a>
        }
    </div>
)

export default UserInfos

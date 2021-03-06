import React, {Component} from "react";
import SearchForm from "./SearchForm";
import UserInfos from "./UserInfos";
import UserRepos from "./UserRepos";
import config from "./config"

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import logo from "./logo.png";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gitUsername: null,
            isLoading: false,
            userInfos: false,
            userRepos: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const data = new FormData(e.target)
        const gitUsername = data.get('gitUsername')
        const onlyOwner = data.get('onlyOwner')
        this.fetchData(gitUsername, onlyOwner)
    }

    async fetchData(gitUsername, onlyOwner) {
        this.setState({
            isLoading: true,
        })

        const userInfos = await this.fetchUserInfos(gitUsername)
        let userRepos = await this.fetchUserRepos(gitUsername)
        !userRepos.message && (userRepos = onlyOwner ? userRepos.filter(el => el.fork === false) : userRepos)

        this.setState({
            isLoading: false,
            gitUsername,
            userInfos,
            userRepos,
        })
    }

    async fetchUserInfos(gitUsername) {
        const req = await fetch(
            `${config.apiUrl.base}${config.apiUrl.users}${gitUsername}`
        );
        return await req.json()
    }

    async fetchUserRepos(gitUsername) {
        const req = await fetch(
            `${config.apiUrl.base}${config.apiUrl.users}${gitUsername}${config.apiUrl.repos}`
        );
        return await req.json()
    }

    render() {
        const {isLoading, gitUsername, userInfos, userRepos} = this.state
        return (
            <>
                {gitUsername && userInfos && userRepos && !userInfos.message ?
                    <div className="container-fluid" id="linear">
                        <div className="container-fluid row">
                            <div className="col-sm-4 position-relative">
                                <UserInfos data={userInfos}/>
                            </div>
                            <div className="col-sm-8">
                                <UserRepos data={userRepos}/>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="wrapper">
                        <img src={logo} alt="Logo" className="logo"/>
                        <SearchForm handleSubmit={this.handleSubmit} isLoading={isLoading} userInfos={userInfos}/>
                    </div>
                }
            </>
        )
    }
}

export default App;

import React from "react";
import {cutNumber} from "../../utils/cutNumber";
import Repositories from "../Repositories/Repositories";
import "./UserData.scss";

const UserData = ({userData, reposFirstPage}) => {
    const {avatar_url, name, html_url, login, followers, following, public_repos, repos_url} = userData;

    return (
        <div className="user-page__wrapper">
            <div className="user-page__main">
                <img className="user-page__avatar" src={avatar_url} alt="avatar"/>
                <div className="user-page__data">
                    <h2 className="user-page__name">{name || "(no name)"}</h2>
                    <a className="user-page__login" href={html_url} target="_blank">{login}</a>
                    <div className="user-page__follow">
                    <span className="user-page__followers">
                        {cutNumber(followers)} followers
                    </span>
                        <span className="user-page__following">
                        {cutNumber(following)} following
                    </span>
                    </div>
                </div>
            </div>
            <div className="user-page__repos">
                <Repositories
                    publicRepos={public_repos}
                    reposUrl={repos_url}
                    reposFirstPage={reposFirstPage}
                />
            </div>
        </div>
    );
}

export default UserData;
export interface GithubUserPreview {
  login: string;
  avatar_url: string;
  url: string;
  html_url: string;
  repos_url: string;
  organizations_url: string;
}

export class GithubUserPreview {
    constructor() {
        this.login = '';
        this.avatar_url = '';
        this.url = '';
        this.html_url = '';
        this.repos_url = '';
        this.organizations_url = '';
    }
    login: string;
    avatar_url: string;
    url: string;
    html_url: string;
    repos_url: string;
    organizations_url: string; 
}

export interface GithubUser extends GithubUserPreview {
  name: string;
  location: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

const githubQuery = (pageCount, queryString) => {
    return {
        query: `
        {
            viewer {
                name
            }
            search(query: "${queryString}user:snowleopardAlexa sort:updated-desc", type: REPOSITORY, last: ${pageCount}) {
               repositoryCount 
               nodes {
                    ... on Repository {
                        name
                        description
                        id
                        url
                        viewerSubscription
                        licenseInfo {
                            spdxId
                        }
                    }
                }
            }
        }
       `,
    }
};
    
export default githubQuery
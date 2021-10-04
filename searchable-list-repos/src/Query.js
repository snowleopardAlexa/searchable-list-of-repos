const githubQuery = {
    query: `
     {
         viewer {
             name
         }
         search(query: "user:snowleopardAlexa sort:updated-desc", type: REPOSITORY, last:10) {
             nodes {
                 ... on Repository {
                     name
                     description
                     id
                     url
                     viewerSubscription
                 }
             }
         }
     }
    `,
  };

  export default githubQuery
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
                 }
             }
         }
     }
    `,
  };

  export default githubQuery
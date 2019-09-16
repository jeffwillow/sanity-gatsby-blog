export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d7fd1c6f384909d03134f22',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-tytxvzrf',
                  apiId: '38a527f6-29c8-400e-82bb-5c04a47863d0'
                },
                {
                  buildHookId: '5d7fd1c686248791e00e358b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-whgoq72k',
                  apiId: 'e581152a-cd30-4c4e-a1aa-7a9e7bf1284c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeffwillow/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-whgoq72k.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

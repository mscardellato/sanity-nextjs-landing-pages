export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e161588bac481bfc71e406e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-o7e1qgd5',
                  apiId: '3ed065e2-d9b5-4f05-88a1-d83700f73436'
                },
                {
                  buildHookId: '5e161588d2b961f5ca3a825b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-v8ob5mdi',
                  apiId: '8106d5a0-c489-43d1-a593-debd1d843256'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mscardellato/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-v8ob5mdi.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

export default {
  widgets: [
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
                  buildHookId: '6104186b21f92200dda278c7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ggbwyod4',
                  apiId: '7e66f2a8-a444-4498-8e33-86b7b25b06cd'
                },
                {
                  buildHookId: '6104186b42e39300a7fc0b38',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9i23tnqj',
                  apiId: 'b3ac5fac-a2c7-4aa4-951b-b068bc5bcca8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dvanderbeek/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9i23tnqj.netlify.app', category: 'apps'}
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

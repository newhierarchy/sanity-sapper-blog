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
                  buildHookId: '5dfbfc36a4697c020010a8d0',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-gmkrjzob',
                  apiId: 'ca793d16-ef1e-42b4-877f-e0b9c8890a95'
                },
                {
                  buildHookId: '5dfbfc36295229017df51b05',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-3i4nmpxi',
                  apiId: '5a2ea36e-16bd-4891-9cb3-3070bfc13ddc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/newhierarchy/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-3i4nmpxi.netlify.com', category: 'apps'}
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

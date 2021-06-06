export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'frednoblena/sanity-angular-tailwindcss-website'
      }
    },
    { name: 'structure-menu' },
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
                  buildHookId: '60bc69320bf732f5145fcef3',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-tailwindcss-website-studio-xcpt3hj8',
                  apiId: 'b08d4b94-4452-4bb2-852d-15841e3ea616'
                },
                {
                  buildHookId: '60bc6933eecd7671885394dd',
                  title: 'Website',
                  name: 'sanity-angular-tailwindcss-website-web-eswsnxxr',
                  apiId: '3f58526e-5c17-49ce-af4f-3c1a6d326b1c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/frednoblena/sanity-angular-tailwindcss-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-tailwindcss-website-web-eswsnxxr.netlify.app', category: 'apps'}
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

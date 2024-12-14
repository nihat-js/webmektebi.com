export const categories = [
  {
    name: 'HTML',
    subcategories: [
      { name: 'Basic', lessons: ['Introduction', 'HTML Structure', 'Tags'] },
      { name: 'Medium', lessons: ['Forms', 'Events'] },
      { name: 'Advanced', lessons: ['HTML5 APIs', 'SVG'] },
    ],
  },
  {
    name: 'CSS',
    subcategories: [
      { name: 'Basic', lessons: ['Selectors', 'Box Model', 'Colors'] },
      { name: 'Medium', lessons: ['Flexbox', 'Grid Layout'] },
      { name: 'Advanced', lessons: ['CSS Variables', 'Animations'] },
    ],
  },
  {
    name: 'JavaScript',
    subcategories: [
      { name: 'Basic', lessons: ['Variables', 'Loops', 'Functions'] },
      { name: 'Medium', lessons: ['DOM Manipulation', 'APIs'] },
      { name: 'Advanced', lessons: ['Async Programming', 'Promises', 'Web Workers'] },
    ],
  },
  {
    name: 'React',
    subcategories: [
      {
        name: 'Giriş', lessons: ['React Nedir?', 'React Kurulumu', 'React İlk Uygulama'],
        name: 'Temel', lessons: ['Component', 'Props', 'State'],
        name: 'Orta', lessons: ['Event Handling', 'Conditional Rendering', 'List Rendering'],
        name: 'İleri', lessons: ['Hooks', 'Context API', 'Redux'],
        name: 'Uygulama', lessons: ['React Router', 'Axios', 'Form Handling'],
        name: 'Ekstra', lessons: ['React Lifecycle', 'React Fragment', 'React Portals'],
        name: 'Proje', lessons: ['Proje 1', 'Proje 2', 'Proje 3']
      }
    ]
  },
  {
    name: 'Node.JS',
    subcategories: [
      {
        name: 'Giriş', lessons: ['Node.JS Nedir?', 'Node.JS Kurulumu', 'Node.JS İlk Uygulama'],
        name: 'Temel', lessons: ['Module', 'File System', 'Events'],
        name: 'Orta', lessons: ['HTTP', 'URL', 'NPM'],
        name: 'İleri', lessons: ['Express', 'MongoDB', 'JWT'],
        name: 'Uygulama', lessons: ['RESTful API', 'GraphQL', 'Socket.IO'],
        name: 'Ekstra', lessons: ['Node.JS Security', 'Node.JS Performance', 'Node.JS Best Practices'],
        name: 'Proje', lessons: ['Proje 1', 'Proje 2', 'Proje 3']
      }
    ]
  },
  {
    name: 'PHP',
    subcategories: [
      {
        name: 'Giriş', lessons: ['PHP Nedir?', 'PHP Kurulumu', 'PHP İlk Uygulama'],
        name: 'Temel', lessons: ['Syntax', 'Variables', 'Strings'],
        name: 'Orta', lessons: ['Arrays', 'Loops', 'Functions'],
        name: 'İleri', lessons: ['OOP', 'Exceptions', 'Namespaces'],
        name: 'Uygulama', lessons: ['MySQL', 'MVC', 'Composer'],
        name: 'Ekstra', lessons: ['Laravel', 'Symfony', 'CodeIgniter'],
        name: 'Proje', lessons: ['Proje 1', 'Proje 2', 'Proje 3']
      }
    ]

  },

];
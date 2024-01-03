const config = {
  name: 'Snippet',
  description: 'Creates a Snippet file. Snippets are smart templates that will insert text for you, adapting it to their context.',
  priority: 110,
  versions: {
    '4.0.x': '',
  },
  prompts: [
    {
      name:    'snippet_file_name',
      message: 'What is the name of your new snippet file (snippet/snippet_file_name)?',
      type:    'input',
      default: '${config.package_name_pascal_case}',
    },
    {
      name:    'snippet_content',
      message: 'What is the content?',
      type:    'input',
      default: 'Hello World!',
    },
    {
      name:    'snippet_tab_trigger',
      message: 'What is the trigger? (The text the user must enter to match the snippet.)',
      type:    'input',
      default: 'hello_world',
    },
    {
      name:    'snippet_description',
      message: 'What is the description? (A single line description of the snippet.)',
      type:    'input',
      default: 'Say hello world!',
    },
    {
      name:    'snippet_scope',
      message: 'What is the scope? (The selector of the syntax the snippet should be enabled for.)',
      type:    'input',
      default: 'source.python',
    },
  ],
};
module.exports = config;
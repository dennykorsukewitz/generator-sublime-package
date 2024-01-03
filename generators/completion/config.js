const config = {
  name: 'Completion',
  description: 'Creates a completions file. Completion files are smart templates that will insert text for you, adapting it to their context.',
  priority: 40,
  versions: {
    '4.0.x': '',
  },
  prompts: [
    {
      name:    'completions_file_name',
      message: 'What is the name of your new completion file (completions/completion_file_name)?',
      type:    'input',
      default: '${config.package_name_pascal_case}',
    },
    {
      name:    'completions_contents',
      message: 'What is the content?',
      type:    'input',
      default: 'Hello World!',
    },
    {
      name:    'completions_trigger',
      message: 'What is the trigger? (The text the user must enter to match the completion.)',
      type:    'input',
      default: 'hello_world',
    },
    {
      name:    'completions_details',
      message: 'What is the description? (A single line description of the completion.)',
      type:    'input',
      default: 'Say hello world!',
    },
    {
      name:    'completions_annotation',
      message: 'What is the annotation? (Annotations are displayed on the right-hand edge of the completions popup, and may contain any information the author deems useful. )',
      type:    'input',
      default: 'Say hello world!',
    },
    {
      name:    'completions_scope',
      message: 'What is the scope? (The selector of the syntax the completion should be enabled for.)',
      type:    'input',
      default: 'source.python',
    },
    {
      name:    'completions_kind',
      message: 'What is the kind of your completion? (Completions may provide kind info to be presented with the completion trigger. )',
      type:    'input',
      default: 'snippet',
    },
  ],
};
module.exports = config;
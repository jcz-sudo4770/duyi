module.exports = {
    preset: 'conventionalcommits',
    // 自定义提交类型，这里添加了 docs、style、refactor 等类型
    types: [
      { type: 'feat', section: 'Features' },
      { type: 'fix', section: 'Bug Fixes' },
      { type: 'docs', section: 'Documentation' },
      { type: 'style', section: 'Styles' },
      { type: 'refactor', section: 'Code Refactoring' },
      { type: 'perf', section: 'Performance Improvements' },
      { type: 'test', section: 'Tests' },
      { type: 'build', section: 'Build System' },
      { type: 'ci', section: 'Continuous Integration' },
      { type: 'chore', section: 'Chores' },
      { type: 'revert', section: 'Reverts' },
    ],
  };
module.exports = {
    preset: 'conventionalcommits',
    // 自定义提交类型，这里添加了 docs、style、refactor 等类型
    types: [
        {type: 'feat', section: '✨ 新功能' },
        { type: 'fix', section: '🐛 修复 bug' },
        { type: 'docs', section: '📚 文档更新' },
        { type: 'style', section: '💄 代码风格调整' },
        { type: 'refactor', section: '♻️ 代码重构' },
        { type: 'perf', section: '⚡ 性能优化' },
        { type: 'test', section: '✅ 测试相关' },
        { type: 'chore', section: '🔧 构建过程或工具变动'},
        { type: 'revert', section: '⏪ 回滚操作' }
    ],
     // 自定义 commit 分组排序规则
    commitGroupsSort: 'title', 
    // 自定义 commit 排序规则
    commitsSort: ['scope', 'subject'], 
    // 自定义 header 解析规则
    headerPattern: /^(\w*)(?:\((.*)\))?: (.*)$/,
    headerCorrespondence: ['type', 'scope', 'subject'],
    // 自定义提交消息的脚注解析规则
    noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
    // 自定义提交消息的脚注处理逻辑
    notesSort: (note) => note.title === 'BREAKING CHANGE' ? -1 : 1
  };
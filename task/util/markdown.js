const path = require('path')
const { readFileSync } = require('fs')
const fg = require('fast-glob')
const Markdown = require('markdown-it')
const frontMatter = require('yaml-front-matter')

const loadMarkdown = () => {
  const markdownRenderer = new Markdown()
  const markdownGlob = path.resolve(__dirname, '../../src/data/**/*.md')
  const markdownPaths = fg.sync(markdownGlob)
  const rawMarkdownFiles = markdownPaths.map(filePath =>
    readFileSync(filePath, 'utf8'),
  )
  const parsedMarkdown = rawMarkdownFiles.map(rawFile =>
    frontMatter.loadFront(rawFile),
  )
  const parsedMarkdownWithContent = parsedMarkdown.map(parsedFile => ({
    ...parsedFile,
    content: markdownRenderer.render(parsedFile.__content),
  }))

  return parsedMarkdownWithContent.sort(
    (a, b) => new Date(b.from) - new Date(a.from),
  )
}

module.exports = {
  loadMarkdown,
}

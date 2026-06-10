# Phil Lin的Bar 博客模板

这是一个可直接发布到 GitHub Pages 的静态个人博客模板，结构参考了“GitHub Pages + Hexo 搭建博客”的常见流程。

## 预览

直接用浏览器打开 `index.html` 即可预览。

## 修改网站装饰

- 首页大图：替换 `assets/hero-workspace.png`
- 站点名称：全局搜索并替换 `Phil Lin的Bar`
- 颜色：修改 `assets/styles.css` 里的 `--accent`、`--paper`、`--ink`
- 导航：修改每个页面顶部的 `nav`
- 页脚：修改每个页面底部的 `footer`

## 发布文章

静态模板方式：

1. 复制 `_drafts/article-format-reference.html`
2. 改成新的文章文件名，例如 `article-my-first-post.html`
3. 修改文章标题、日期、标签和正文
4. 在 `posts.html` 里新增文章卡片，并链接到新文章

Hexo 方式：

```bash
npm install -g hexo-cli
hexo init my-blog
cd my-blog
npm install
hexo new "文章标题"
hexo server
```

文章会出现在 `source/_posts`，用 Markdown 编辑即可。

## 部署到 GitHub Pages

1. 创建 GitHub 仓库，例如 `username.github.io`
2. 上传本目录中的所有文件
3. 进入仓库 Settings -> Pages
4. 选择发布分支并保存
5. 等待部署完成后访问 `https://username.github.io`

如果使用 Hexo，可安装部署插件：

```bash
npm install hexo-deployer-git --save
```

在 Hexo 的 `_config.yml` 中配置：

```yaml
deploy:
  type: git
  repo: https://github.com/username/username.github.io.git
  branch: main
```

然后执行：

```bash
hexo clean
hexo deploy
```

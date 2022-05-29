# 娄豪杰的个人博客

这个网站是用[Docusaurus 2](https://docusaurus.io/), 一个现代静态网站生成器.

### 启动指南

```bash
$ pnpm install
$ pnpm run start
```

### 打包构建

```bash
$ pnpm run build
```

这个命令生成静态内容到“build”目录中，可以使用任何静态内容托管服务.

### 部署

使用 SSH:

```
$ USE_SSH=true yarn deploy
```

不适用 SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

如果你使用的是GitHub页面托管，这个命令是一个方便的方式来建立网站，并推到`gh-pages`分支。 

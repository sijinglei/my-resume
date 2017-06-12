# 一个会动的简历

> This is my resume

[预览](https://sijinglei.github.io/my-resume/dist/)

## 使用方法

``` bash
git clone git@github.com:sijinglei/my-resume.git
cd my-resume
npm install
npm run dev
```

## 部署方法


1. 编辑 config/index.js，修改第 10 行的 assetsPublicPath，值为 `项目名/dist`。如果你没有修改项目名 my-resume，则可跳过此步骤。

2. 编译、上传
    ``` bash
    npm run build
    git add --all
    git commit -m "update"
    git push
    ```

3. 开启 GitHub Pages 功能


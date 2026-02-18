# GitHub Pages 教程（Interfit 实战版）

最后更新：2026-02-18

## 1. 什么是 GitHub Pages

GitHub Pages 是 GitHub 提供的静态网站托管服务。你可以直接把仓库里的 HTML/CSS/JS 文件发布成公开网页。

它非常适合：

- 应用支持页（App Support）
- 隐私政策页（Privacy Policy）
- 产品说明文档、FAQ、更新日志

对 Interfit 这种需要在 App Store Connect 填写隐私政策 URL 的应用来说，GitHub Pages 是一个低成本、上线快、可版本管理的方案。

## 2. 开通前准备

在开始前，请确认：

1. 你有可用的 GitHub 账号。
2. 你已经创建了一个仓库（例如：`support`）。
3. 仓库中已有要发布的页面文件（例如：`index.html`、`privacy-policy.html`）。
4. 代码已经推送到远程分支（通常是 `main`）。

## 3. 创建并准备 support 仓库

如果你还没有仓库，可以用下面方式创建：

### 方式 A：GitHub 网页创建

1. 打开 GitHub，点击右上角 `+`。
2. 选择 `New repository`。
3. 仓库名填写 `support`（或你自己的名称）。
4. 选择 Public（上架资料通常建议公开可访问）。
5. 创建完成后，把本地文件推送上去。

### 方式 B：命令行创建（`gh`）

```bash
# 在本地 support 目录执行
git init
git add .
git commit -m "Initial support site"

# 创建远程仓库并关联
gh repo create support --public --source=. --remote=origin

# 推送 main 分支
git branch -M main
git push -u origin main
```

## 4. 开通 GitHub Pages（网页操作）

这是最常用方式：

1. 打开仓库主页，例如：`https://github.com/<username>/support`
2. 进入 `Settings`
3. 左侧选择 `Pages`
4. 在 `Build and deployment` 下设置：
5. `Source` 选 `Deploy from a branch`
6. `Branch` 选 `main`
7. `Folder` 选 `/ (root)`
8. 点击 `Save`

保存后，GitHub 会自动开始构建。通常 1 到 5 分钟内可访问。

## 5. 开通 GitHub Pages（命令行可选）

如果你更习惯 CLI，可以用 `gh api`：

```bash
gh api --method POST repos/<username>/support/pages \
  -f 'source[branch]=main' \
  -f 'source[path]=/'
```

查看状态：

```bash
gh api repos/<username>/support/pages
```

当返回里 `status` 是 `built`，说明发布完成。

## 6. Pages 地址规则

仓库级 Pages 的默认地址通常是：

```text
https://<username>.github.io/<repo-name>/
```

如果隐私政策文件名是 `privacy-policy.html`，那链接就是：

```text
https://<username>.github.io/<repo-name>/privacy-policy.html
```

Interfit 当前示例：

- 站点首页：`https://hayden-chang.github.io/support/`
- 隐私政策：`https://hayden-chang.github.io/support/privacy-policy.html`

## 7. 如何验证是否成功

可以用浏览器直接打开 URL，或用命令行检查状态码：

```bash
curl -I https://<username>.github.io/<repo-name>/privacy-policy.html
```

如果返回 `HTTP 200`，说明页面可访问。

## 8. 常见问题与排查

### 问题 1：页面 404

排查顺序：

1. 确认 `Settings > Pages` 已开启，且分支/目录正确。
2. 确认目标文件在仓库根目录（或你设置的目录）中存在。
3. 等待几分钟，Pages 首次构建有延迟。
4. 检查文件名大小写是否一致（如 `privacy-policy.html`）。

### 问题 2：推送失败（SSH 公钥问题）

若出现 `Permission denied (publickey)`，可改用 HTTPS 远程：

```bash
git remote set-url origin https://github.com/<username>/support.git
git push -u origin main
```

### 问题 3：改了文件但页面没更新

1. 确认改动已提交并推送到 Pages 对应分支。
2. 强制刷新浏览器缓存。
3. 用 `gh api repos/<username>/support/pages` 看最新状态。

## 9. App Store Connect 填写建议

在 App Store Connect 中：

1. 打开你的 App 记录。
2. 找到 `App Information`。
3. 在 `Privacy Policy URL` 填入可公开访问的隐私政策链接。

建议使用 `privacy-policy.html` 的固定 URL，避免后续路径变化。

## 10. 最小发布清单（可直接照做）

1. 准备 `index.html` 和 `privacy-policy.html`。
2. 提交并推送到 `main`。
3. 在 `Settings > Pages` 选择 `main / (root)` 并保存。
4. 等待构建完成，确认 `privacy-policy.html` 返回 200。
5. 把该链接填入 App Store Connect。

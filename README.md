# 洪旗阳个人主页与在线简历

这是一个基于 Vue 3、Vite、TypeScript 与 GSAP 的个人主页 / 在线简历项目。

## 访问地址

线上地址：

```text
https://hongqiyang.github.io/hongqiyang-jianli/
```

本地调试地址：

```text
http://127.0.0.1:5173/hongqiyang-jianli/
```

## 本地预览

```powershell
pnpm install
pnpm dev
```

访问：

```text
http://127.0.0.1:5173/hongqiyang-jianli/
```

## 构建

```powershell
pnpm build
```

构建结果会生成到 `dist/`，该目录不提交到源码仓库。

## GitHub Pages

仓库名预设为：

```text
hongqiyang-jianli
```

对应 Vite base：

```text
/hongqiyang-jianli/
```

如果仓库之后改名，需要同步修改 `vite.config.ts` 中的 `base`。

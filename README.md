<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

***

[Nest Docs](https://docs.nestjs.com/)

[Nest Github](https://github.com/nestjs/nest)

## 安裝&環境設定

```bash
# 安裝nestjs
npm i -g @nestjs/cli

# 安裝typescript
$ npm install -g typescript
```

## 新建專案

```bash
# 建立
nest new 專案名稱
*專案名稱例如: myAPP，在自動建立時會轉換為my_app*
```

## 修改launch.json以便debug

```bash
 "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Debug Nest Framework",
            "runtimeArgs": ["--nolazy", "-r", "ts-node/register"],
            "args": ["${workspaceFolder}/src/main.ts"],
            "autoAttachChildProcesses": true
        }
    ]
```

## 專案結構&主要功能
```bash

```

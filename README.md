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

## debug
修改launch.json
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

## 專案結構

```bash
# 基本結構
- src
  └ app.controller.ts
  └ app.module.ts
  └ app.service.ts
  └ main.ts
+ test
```

* main.ts 程式進入點   
  功能：設定啟動的module與設定port，預設為3000
* app.controller.ts   
  功能：對外接口，也可指定渲染頁面，如：mssr的swagger, router
* app.module.ts       
  功能：包裝controller與service供外部使用，若要重複使用可設定@Gloabl()
* app.service.ts      
  功能：演算法與邏輯運算、對DB做CRUD，如：mssr的api


## 轉換現有DB為model
使用套件 [typeorm-model-generator](https://www.npmjs.com/package/typeorm-model-generator)

### 安裝
```
npm i -g typeorm-model-generator
```
### 轉換
```bash
typeorm-model-generator -h localhost -d world -p 3306 -u root -x 1234 -e mysql -o .
```
### 轉換後的結構
以MySQL預設資料表'world'為例
```bash
- entities
  └ city.ts
  └ country.ts
  └ countrylanguage.ts
```

## 與DB建立連線
安裝typeorm，以MySQL為例，可參考 [官方文件](https://docs.nestjs.com/techniques/database)
```
npm install --save @nestjs/typeorm typeorm mysql
```
載入TypeORM模組

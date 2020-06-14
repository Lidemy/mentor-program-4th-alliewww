## 交作業流程
1. 點下GitHuba classroom連結
2. 登入github帳號
3. 複製中間那段網址
4. 打開Terminal
5. git clone +貼上剛剛複製的網址
-----------以上前置工作---------
6. cd 到那個資料夾的地方
7. 開分支 git branch branchName
8. 跳到辣個分支 git checkout branchName
9. 寫作業
10. 設定自動存檔萬事平安
11. 都寫完之後git status看一下現在什麼狀況
- 寫紅字代表還沒加入版控(not staged)
- 寫綠字代表已經加入版控
- git add .（全部加入）
- git add *.js(加入全部.js格式的檔案)
12. git commit
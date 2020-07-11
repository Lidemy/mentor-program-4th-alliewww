## 交作業流程
1. 點下 GitHuba classroom 連結
2. 登入 GitHub 帳號
3. 複製中間那段網址
4. 打開 Terminal
5. git clone +貼上剛剛複製的網址
-----------以上前置工作---------
6. cd 到那個資料夾的地方
7. 開分支 git branch branchName
8. 跳到辣個分支 git checkout branchName
9. 寫作業
10. 設定自動存檔萬事平安
11. 都寫完之後 git status 看一下現在什麼狀況
    - 寫綠字代表已經加入版控
    - 寫紅字代表還沒加入版控（not staged）
    - git add .（全部加入）
    - git add *.js （加入全部 .js 格式的檔案）
12. commit 檔案到本地庫
    - 可以先 add 加入後 commit -m "murmur"
    - 或是直接 git commit -am "murmur" (前提：必須是過去已經有com過的對象)
13.  如果都寫完了都 com 完了 就可以推到 GitHub 上 git push origin week1
14.  推完之後到 GitHub 上看看 沒問題的話就準備做 merge
- 點選 Compare & pull request 或是 New pull request 找你ㄉbranch
- 然後 Create pull request
15.  去 learning.lidemy 回報狀況
16.  助教 merge 完後 pull 回本地
17.  git branch -d 寫作業ㄉ那個分支
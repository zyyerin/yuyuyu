# Yuyuyu

### Build and Deploy 

#### 腾讯云
[YUYUYU](https://yuyuyu-0g2936zwf38dde25-1258568418.tcloudbaseapp.com)
```
npm run build
cd build
tcb hosting:deploy -e yuyuyu-0g2936zwf38dde25
```

#### github page
[YUYUYU](http://yuyuyu.design/#/)
```
npm run build
npm run deploy
```

#### how to fix 404
```
git checkout gh-pages
echo 'yuyuyu.design' > CNAME
git add CNAME
git commit -m "set cname"
git push origin gh-pages -f
git checkout main
```
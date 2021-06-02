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

#### How to fix 404
1. Go to `https://github.com/zyyerin/yuyuyu/tree/gh-pages`
2. Add file -> Create new file
3. Edit like below
<img width="700" alt="Screen Shot 2021-05-25 at 3 57 09 PM" src="https://user-images.githubusercontent.com/17645053/119461133-fdaf2480-bd71-11eb-8522-5cd2f64d7302.png">
4. Click the button 'Commit new file'


### How to add project page
1. index.js > `export { default as ` project name ` } from './pages/projects/` project name `';`
2. App.js >
    a) `import` project name
    b) `<Route path="/project/` project name `" component={` project name `} />`
3. Cards.js > `<Link to="/projects/` project name `"><Card ...></Link>`
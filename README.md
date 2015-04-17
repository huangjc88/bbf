#version 0.1.0
#进入0.1.X目录
  npm install
  grunt serve

#hj_server.js
   开发环境的路由配置,读hj目录下的静态资源

#hj_dist_server.js
   #dist环境的路由配置，读dist目录下的静态资源

#hj_dist_version_server.js
   dist/version/0.1.x环境的路由配置,读dist/version/0.1.x下的静态资源


#nginx 配置
        location /hj {
            root   html;
            index  index.html index.htm;
            proxy_pass  http://127.0.0.1:3088;
			proxy_http_version 1.1;
            proxy_redirect    off;
            proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;
            proxy_set_header  X-Real-IP  $remote_addr;
            proxy_set_header  Host $http_host;
        }

		location /dist {
            root   html;
            index  index.html index.htm;
            proxy_pass  http://127.0.0.1:3089;
			proxy_http_version 1.1;
            proxy_redirect    off;
            proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;
            proxy_set_header  X-Real-IP  $remote_addr;
            proxy_set_header  Host $http_host;
        }

		location /dist/version/0.1.0 {
            root   html;
            index  index.html index.htm;
            proxy_pass  http://127.0.0.1:3090;
			proxy_http_version 1.1;
            proxy_redirect    off;
            proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;
            proxy_set_header  X-Real-IP  $remote_addr;
            proxy_set_header  Host $http_host;
        }


#grunt serve 详解
   clean:server  清除 .tmp目录下内容（.tmp目录下内容来为 hj/styles 下sass的编译结果）
   concurrent:server 编译hj/styles 下的sass,再拷贝到.tmp目录下
   express:dev 启动hj_server.js
   express:dist 启动hj_dist_server.js
   express:version 启动hj_dist_version_server.js
   watch:express 监听express,对sass文件进行监听，一有变化，执行concurrent:server任务，执行完需要手动刷新浏览器


#grunt build 详解
   clean:dist 清除dist目录下内容（对version下的内容，不清旧版本的内容）
   useminPrepare
   concurrent:dist 编译hj/styles 下的sass,再拷贝到dist/styles目录下
   copy:dist 将静态资源拷贝到dist目录下
   autoprefixer
   requirejs 编译合并js
   cssmin 压缩css
   usemin
   htmlmin
   clean:app 清除dist/scripts/app目录
   copy:version 将dist/* 拷贝到version/0.1.x目录下

(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{291:function(s,a,t){s.exports=t.p+"assets/img/img_9.98b0761e.png"},292:function(s,a,t){s.exports=t.p+"assets/img/img_2.120ba07e.png"},293:function(s,a,t){s.exports=t.p+"assets/img/img_3.d8cadcc9.png"},294:function(s,a,t){s.exports=t.p+"assets/img/img_5.7a967ff9.png"},295:function(s,a,t){s.exports=t.p+"assets/img/img_4.6927ebc5.png"},296:function(s,a,t){s.exports=t.p+"assets/img/img_6.da6eb720.png"},297:function(s,a,t){s.exports=t.p+"assets/img/img_7.95730040.png"},298:function(s,a,t){s.exports=t.p+"assets/img/img_8.ae14445f.png"},299:function(s,a,t){s.exports=t.p+"assets/img/img_10.70e71492.png"},334:function(s,a,t){"use strict";t.r(a);var e=t(14),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux安装mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux安装mysql"}},[s._v("#")]),s._v(" Linux安装mysql")]),s._v(" "),a("h2",{attrs:{id:"查看glibc版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看glibc版本"}},[s._v("#")]),s._v(" 查看glibc版本")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-qa")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" glibc\n")])])]),a("p",[a("img",{attrs:{src:t(291),alt:"img_9.png"}})]),s._v(" "),a("h2",{attrs:{id:"下载安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载安装"}},[s._v("#")]),s._v(" 下载安装")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://dev.mysql.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载地址"),a("OutboundLink")],1),s._v(" "),a("img",{attrs:{src:t(292),alt:"img_2.png"}})]),s._v(" "),a("p",[a("img",{attrs:{src:t(293),alt:"img_3.png"}})]),s._v(" "),a("h2",{attrs:{id:"上传文件到linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传文件到linux"}},[s._v("#")]),s._v(" 上传文件到Linux")]),s._v(" "),a("p",[s._v("使用finalshell链接Linux服务器，通过上传功能将下载的文件上传到Linux")]),s._v(" "),a("p",[s._v("可以先创建一个 mysql 文件夹，将文件放入该文件夹")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" mysql\n")])])]),a("h2",{attrs:{id:"解压mysql压缩包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解压mysql压缩包"}},[s._v("#")]),s._v(" 解压MySQL压缩包")]),s._v(" "),a("p",[s._v("查看自己下载的文件名，执行类似以下命令")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xvJf mysql-8.2.0-linux-glibc2.17-x86_64.tar.xz\n")])])]),a("h2",{attrs:{id:"重命名解压后的mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重命名解压后的mysql"}},[s._v("#")]),s._v(" 重命名解压后的MySQL")]),s._v(" "),a("p",[s._v("解压之后的MySQL文件夹名称太长了，可以 mv “原文件名称” “新文件名称”，重命名一下，注意如果是在当前文件中重命名，新文件名中不能包含斜杆“/”")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" mysql-8.2.0-linux-glibc2.17-x86_64 mysql-8.2.0\n")])])]),a("p",[a("img",{attrs:{src:t(294),alt:"img_5.png"}})]),s._v(" "),a("h2",{attrs:{id:"进入mysql解压后根目录-创建data文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入mysql解压后根目录-创建data文件夹"}},[s._v("#")]),s._v(" 进入MySQL解压后根目录，创建data文件夹")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" mysql-8.2.0\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" data\n")])])]),a("p",[a("img",{attrs:{src:t(295),alt:"img_4.png"}})]),s._v(" "),a("h2",{attrs:{id:"创建mysql组和用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建mysql组和用户"}},[s._v("#")]),s._v(" 创建mysql组和用户")]),s._v(" "),a("h3",{attrs:{id:"创建mysql组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建mysql组"}},[s._v("#")]),s._v(" 创建mysql组")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" mysql\n")])])]),a("h3",{attrs:{id:"创建mysql用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建mysql用户"}},[s._v("#")]),s._v(" 创建mysql用户")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" mysql mysql\n")])])]),a("p",[s._v("证明一下创建成功了\n"),a("img",{attrs:{src:t(296),alt:"img_6.png"}})]),s._v(" "),a("h3",{attrs:{id:"将安装的mysql权限给mysql用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将安装的mysql权限给mysql用户"}},[s._v("#")]),s._v(" 将安装的MySQL权限给mysql用户")]),s._v(" "),a("p",[s._v("命令格式 chown -R “mysql组名”.“mysql用户名” “mysql安装根目录”")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" mysql.mysql /usr/local/mysql/mysql-8.2.0\n")])])]),a("p",[s._v("注意大小写\n"),a("img",{attrs:{src:t(297),alt:"img_7.png"}})]),s._v(" "),a("h2",{attrs:{id:"mysql初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql初始化"}},[s._v("#")]),s._v(" MySQL初始化")]),s._v(" "),a("p",[s._v("Linux中的MySQL默认是区分表名大小写的，如果你是安装的也是MySQL8，那么不区分大小写需要在数据库初始化时设置，不然初始化后，在配置文件在设置重启时是会报错的")]),s._v(" "),a("p",[s._v("进入mysql的bin文件夹")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" bin/\n\n./mysqld "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--basedir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mysql/mysql-8.2.0 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--datadir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mysql/mysql-8.2.0/data --lower-case-table-names"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--initialize")]),s._v("\n")])])]),a("p",[a("img",{attrs:{src:t(298),alt:"img_8.png"}})]),s._v(" "),a("p",[s._v("出现了以下问题，这是一个版本兼容性问题，我安装的mysql版本比当前的Linux系统依赖版本高。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./mysqld: /lib64/libstdc++.so.6: version `CXXABI_1.3.11' not found "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("required by ./mysqld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("不想对当前系统产生什么影响，决定下载适应当前系统的版本。按照之前的步骤再来一遍")]),s._v(" "),a("p",[s._v("这时再执行上面的命令出现")]),s._v(" "),a("p",[a("img",{attrs:{src:t(299),alt:"img_10.png"}})]),s._v(" "),a("h2",{attrs:{id:"启动mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动mysql"}},[s._v("#")]),s._v(" 启动Mysql")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql start\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql restart\n")])])]),a("h2",{attrs:{id:"mysql状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql状态"}},[s._v("#")]),s._v(" Mysql状态")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql status\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);
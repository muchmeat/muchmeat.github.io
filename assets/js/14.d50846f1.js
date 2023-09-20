(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{291:function(s,a,t){s.exports=t.p+"assets/img/img_1.39c5fbb7.png"},321:function(s,a,t){"use strict";t.r(a);var e=t(14),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ubuntu安装mysql8-0-26"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu安装mysql8-0-26"}},[s._v("#")]),s._v(" ubuntu安装mysql8.0.26")]),s._v(" "),a("p",[s._v("以下内容环境均来自于windows10，ubuntu20.04版本")]),s._v(" "),a("p",[s._v("参考 https://www.ngui.cc/el/2433772.html?action=onClick")]),s._v(" "),a("h2",{attrs:{id:"列出可用的软件版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列出可用的软件版本"}},[s._v("#")]),s._v(" 列出可用的软件版本")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-cache")]),s._v(" madison 软件名称\n")])])]),a("p",[s._v("如软件名称为 mysql-server")]),s._v(" "),a("h2",{attrs:{id:"指定版本安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指定版本安装"}},[s._v("#")]),s._v(" 指定版本安装")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" 软件名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("版本号\n")])])]),a("h2",{attrs:{id:"查看mysql版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看mysql版本"}},[s._v("#")]),s._v(" 查看MySQL版本")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mysqladmin "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("\n")])])]),a("h2",{attrs:{id:"验证是否安装mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证是否安装mysql"}},[s._v("#")]),s._v(" 验证是否安装mysql")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("dpkg "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mysql\n")])])]),a("h2",{attrs:{id:"初始化配置信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化配置信息"}},[s._v("#")]),s._v(" 初始化配置信息")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mysql_secure_installation\n")])])]),a("h2",{attrs:{id:"查看mysql服务启动状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看mysql服务启动状态"}},[s._v("#")]),s._v(" 查看MySQL服务启动状态")]),s._v(" "),a("p",[s._v("其中 mysql 是服务名")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql status\n")])])]),a("h2",{attrs:{id:"启动mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动mysql"}},[s._v("#")]),s._v(" 启动MySQL")]),s._v(" "),a("p",[s._v("其中 mysql 是服务名")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql start\n")])])]),a("h2",{attrs:{id:"登录mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录mysql"}},[s._v("#")]),s._v(" 登录mysql")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" root "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("\n")])])]),a("hr"),s._v(" "),a("p",[s._v("以下方式不太顺利，没有成功。最好使用root用户进行操作")]),s._v(" "),a("h2",{attrs:{id:"下载deb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载deb"}},[s._v("#")]),s._v(" 下载deb")]),s._v(" "),a("p",[s._v("https://downloads.mysql.com/archives/community/")]),s._v(" "),a("p",[s._v("选择对应的版本\n"),a("img",{attrs:{src:t(291),alt:"img_1.png"}})]),s._v(" "),a("h2",{attrs:{id:"解压deb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解压deb"}},[s._v("#")]),s._v(" 解压deb")]),s._v(" "),a("p",[s._v("将 tar文件 解压到 统计目录下 mysql文件夹")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xvf")]),s._v(" mysql-server_8.0.26-1ubuntu20.04_amd64.deb-bundle.tar "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" mysql\n")])])]),a("h2",{attrs:{id:"安装deb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装deb"}},[s._v("#")]),s._v(" 安装deb")]),s._v(" "),a("p",[s._v("以下内容按照顺序执行，可能会有偏差")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dpkg "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" libmysqlclient21_8.0.26-1ubuntu20.04_amd64.deb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libmecab2\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dpkg "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" libmysqlclient-dev_8.0.26-1ubuntu20.04_amd64.deb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dpkg "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" mysql-community-server-core_8.0.26-1ubuntu20.04_amd64.deb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dpkg "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" mysql-community-server-debug_8.0.26-1ubuntu20.04_amd64.deb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dpkg "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" mysql-community-server_8.0.26-1ubuntu20.04_amd64.deb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dpkg "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" mysql-community-client-core_8.0.26-1ubuntu20.04_amd64.deb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dpkg "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" mysql-community-client-plugins_8.0.26-1ubuntu20.04_amd64.deb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dpkg "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" mysql-community-client_8.0.26-1ubuntu20.04_amd64.deb\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);
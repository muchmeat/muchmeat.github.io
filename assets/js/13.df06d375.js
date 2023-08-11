(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{291:function(a,t,s){"use strict";s.r(t);var n=s(14),r=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"docker-镜像发布到阿里云"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-镜像发布到阿里云"}},[a._v("#")]),a._v(" docker 镜像发布到阿里云")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://baijiahao.baidu.com/s?id=1751699245331439817&wfr=spider&for=pc",target:"_blank",rel:"noopener noreferrer"}},[a._v("参考"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("登录阿里云账号")]),a._v(" "),t("h2",{attrs:{id:"创建命名空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建命名空间"}},[a._v("#")]),a._v(" 创建命名空间")]),a._v(" "),t("p",[a._v("在 容器镜像服务 内找到命名空间模块，创建命名空间")]),a._v(" "),t("p",[t("img",{attrs:{src:"img_10.png",alt:"img_10.png"}})]),a._v(" "),t("p",[a._v("可以将仓库设置为公共")]),a._v(" "),t("h2",{attrs:{id:"创建镜像仓库及上传镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建镜像仓库及上传镜像"}},[a._v("#")]),a._v(" 创建镜像仓库及上传镜像")]),a._v(" "),t("p",[a._v("按照需要，选择相应的 命名空间，填写仓库信息，然后下一步中代码源选择本地仓库，然后点击 创建镜像仓库")]),a._v(" "),t("p",[t("img",{attrs:{src:"img_11.png",alt:"img_11.png"}})]),a._v(" "),t("p",[a._v("然后就能看到仓库的基本信息了,参考里面的操作指南进行操作")]),a._v(" "),t("p",[a._v("主要是以下操作")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" images\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" login "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--username")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("账号 registry.cn-hangzhou.aliyuncs.com\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" tag "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("ImageId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" registry.cn-hangzhou.aliyuncs.com/命名空间/blog:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("镜像版本号"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" push registry.cn-hangzhou.aliyuncs.com/命名空间/blog:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("镜像版本号"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n")])])]),t("h2",{attrs:{id:"镜像版本管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像版本管理"}},[a._v("#")]),a._v(" 镜像版本管理")]),a._v(" "),t("p",[a._v("上传镜像完成后可以查看镜像版本")]),a._v(" "),t("p",[t("img",{attrs:{src:"img_12.png",alt:"img_12.png"}})]),a._v(" "),t("h2",{attrs:{id:"拉取镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拉取镜像"}},[a._v("#")]),a._v(" 拉取镜像")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull registry.cn-hangzhou.aliyuncs.com/命名空间/blog:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("镜像版本号"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h2",{attrs:{id:"启动镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动镜像"}},[a._v("#")]),a._v(" 启动镜像")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v(":80 registry.cn-hangzhou.aliyuncs.com/命名空间/blog:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("镜像版本号"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
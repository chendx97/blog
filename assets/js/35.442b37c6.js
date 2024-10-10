(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{315:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("git 限制上传文件大小在 100M 以内。在日常工作中，偶尔会遇到某次提交的文件总量过大或者某个文件过大，所以在此记录一下如何解决这个问题。")]),t._v(" "),s("h1",{attrs:{id:"分批次提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分批次提交"}},[t._v("#")]),t._v(" 分批次提交")]),t._v(" "),s("p",[t._v("如果是提交很多文件，但单文件都不大的时候，可以选择分批次提交。如果已经 commit 才发现文件总量过大，则需要撤销 commit 。以下是会用到的 git 命令。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog 查看所有操作的历史记录\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset HEAD^2 上上一个版本\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset @~ 撤销一次commit\n")])])]),s("p",[t._v("如果仅撤销上一次，则直接用第3条命令。"),s("br"),t._v("\n如果在尝试解决问题时进行了多次 commit，则可以通过第1条命令查询想要回退到的版本，然后通过第2条命令回退。")]),t._v(" "),s("h1",{attrs:{id:"lfs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lfs"}},[t._v("#")]),t._v(" LFS")]),t._v(" "),s("p",[t._v("首先，下载"),s("a",{attrs:{href:"https://git-lfs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("git LFS"),s("OutboundLink")],1),t._v("。"),s("br"),t._v("\n然后，关联需要用 LFS 上传的文件，比如下面的命令。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" lfs track "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xx.mp4'")]),t._v("\n")])])]),s("p",[t._v("最后，按照正常的提交流程进行提交。")]),t._v(" "),s("p",[t._v("以下是可能用到的命令")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关联某类型文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" lfs track "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*.mp4'")]),t._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查找大于 nM 的文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" ./ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-size")]),t._v(" +100M\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);
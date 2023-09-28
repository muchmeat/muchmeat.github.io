(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{330:function(t,e,n){"use strict";n.r(e);var a=n(14),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"oracle-数据库错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oracle-数据库错误"}},[t._v("#")]),t._v(" ORACLE 数据库错误")]),t._v(" "),e("h2",{attrs:{id:"ora-12505"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ora-12505"}},[t._v("#")]),t._v(" ORA-12505")]),t._v(" "),e("p",[t._v("数据库实例的监听程序无法识别到请求的服务")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("监听程序配置错误")])]),t._v(" "),e("li",[e("p",[t._v("数据库服务未启动")])]),t._v(" "),e("li",[e("p",[t._v("防火墙或网络问题")])]),t._v(" "),e("li",[e("p",[t._v("错误的连接信息")])]),t._v(" "),e("li",[e("p",[t._v("多个监听程序冲突")])])]),t._v(" "),e("h2",{attrs:{id:"ora-01841"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ora-01841"}},[t._v("#")]),t._v(" ORA-01841")]),t._v(" "),e("ul",[e("li",[t._v("日期字符串中包含了非法的字符")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("--1.创建异常记录表\ncreate table date_EXCEPTION\n(\n  id   INTEGER not null,\n  timestamp  VARCHAR2(50)\n);\n\n--2.执行数据筛查\nDECLARE\n  V_DATE_STRING date_timestamp_test.timestamp % TYPE;\n  TEMP          DATE;\nBEGIN\n  FOR REC IN (SELECT ID, timestamp FROM date_timestamp_test) LOOP\n    V_DATE_STRING := REC.timestamp;\n    BEGIN\n      SELECT TO_DATE('1970-01-01 08:00:00', 'YYYY-MM-DD HH24:MI:SS') +\n             V_DATE_STRING / 86400000\n        INTO TEMP\n        from dual;\n    exception\n      when others then\n        insert into date_EXCEPTION values (rec.id, V_DATE_STRING);\n    end;\n  end loop;\nend;\n\n--3.查看异常数据\nselect * from date_EXCEPTION;\n")])])]),e("p",[e("a",{attrs:{href:"https://www.python100.com/html/86594.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("可参考"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);
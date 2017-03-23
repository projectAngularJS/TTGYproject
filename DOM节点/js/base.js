//生成验证码的函数
function getCode(m) {
	var str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var code = "",
		n, len = str.length;
	for(var i = 0; i < m; i++) {
		n = parseInt(Math.random() * len);
		code += str.charAt(n);
	}
	return code;
}
//封装通过id找对象的函数
function $(id) {
	return document.getElementById(id);
}
//随机生成一个十六进制的颜色值

//删除空白节点
function delSpace(id) {
	var nodes = document.getElementById(id).childNodes;
	for(var i = 0; i < nodes.length; i++) {
		if(nodes[i].nodeType == 3) {
			nodes[i].parentNode.removeChild(nodes[i]);
		}
	}
	return nodes;
}

function deleleSpace(obj) {
	var nodes = obj.childNodes;
	for(var i = 0; i < nodes.length; i++) {
		if(nodes[i].nodeType == 3) {
			nodes[i].parentNode.removeChild(nodes[i]);
		}
	}
	return nodes;
}
//在。。。之后插入一个新节点 insertAfter
function insertAfter(newNode, targetNode) {
	var parent = targetNode.parentNode;
	if(targetNode == parent.lastChild) {
		parent.appendChild(newNode);
	} else {
		parent.insertBefore(newNode, targetNode.nextSibling);
	}
}
//获取内部样式表和外部样式表的方法
function getStyle(obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return window.getComputedStyle(obj, null)[attr];
	}
}
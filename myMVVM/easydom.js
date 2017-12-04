//选择器;
var $ = document.querySelector.call(document);
//######事件；
//事件绑定;
Element.prototype.on = Element.prototype.addEventListener;
//NodeList也顺便绑定一下; 
NodeList.prototype.on = function(event,fn){
	[]["forEach"].call(this,function(el){//伪数组转换成纯数组;
		el.on(event,fn) //逐个绑定;
	});
	return this;
}
//事件触发方法;
Element.prototype.trigger = function (type, data) {
　　　　var event = document.createEvent('HTMLEvents');
　　　　event.initEvent(type, true, true);
　　　　event.data = data || {};
　　　　event.eventName = type;
　　　　event.target = this;
　　　　this.dispatchEvent(event);
　　　　return this;
};
NodeList.prototype.trigger = function (event) {
　　[]['forEach'].call(this, function (el) {
　　　　　　el['trigger'](event);
　　});
　　return this;
};
module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/Notification"]},function(t,e){t.exports=flarum.core.compat["components/NotificationGrid"]},,function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(2),i=r.n(o);function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var u=r(1),a=r.n(u),c=function(t){function e(){return t.apply(this,arguments)||this}s(e,t);var r=e.prototype;return r.icon=function(){return"fas fa-edit"},r.href=function(){var t=this.props.notification;return app.route.discussion(t.subject())},r.content=function(){return app.translator.trans("fof-subscribed.forum.notifications.discussion_created_text",{user:this.props.notification.fromUser()})},e}(a.a),f=function(t){function e(){return t.apply(this,arguments)||this}s(e,t);var r=e.prototype;return r.icon=function(){return"fas fa-user-plus"},r.href=function(){var t=this.props.notification;return app.route.user(t.subject())},r.content=function(){return app.translator.trans("fof-subscribed.forum.notifications.user_created_text",{user:this.props.notification.fromUser()})},e}(a.a);app.initializers.add("fof-subscribed",function(t){t.notificationComponents.discussionCreated=c,t.notificationComponents.userCreated=f,Object(n.extend)(i.a.prototype,"notificationTypes",function(e){t.session.user&&(t.forum.attribute("subscribeDiscussionCreated")&&e.add("discussionCreated",{name:"discussionCreated",icon:"fas fa-pencil-alt",label:t.translator.trans("fof-subscribed.forum.settings.notify_discussion_created_label")},5),t.forum.attribute("subscribeUserCreated")&&e.add("userCreated",{name:"userCreated",icon:"fas fa-user-plus",label:t.translator.trans("fof-subscribed.forum.settings.notify_user_created_label")},-10))})})}]);
//# sourceMappingURL=forum.js.map
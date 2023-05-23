(function framework7ComponentLoader(e,a){void 0===a&&(a=!0);var t=e.$,r=e.utils,s=(e.getDevice,e.getSupport),l=(e.Class,e.Modal,e.ConstructorMethods,e.ModalMethods,r.bindMethods);const o={destroy(e){const a=t(e).closest(".page");a.length&&a[0].f7LazyDestroy&&a[0].f7LazyDestroy()},create(e){const a=this,r=getWindow(),l=s(),o=t(e).closest(".page").eq(0),n=o.find(".lazy");if(0===n.length&&!o.hasClass("lazy"))return;const d=a.params.lazy.placeholder;!1!==d&&n.each((e=>{t(e).attr("data-src")&&!t(e).attr("src")&&t(e).attr("src",d)}));const i=[];let y=!1;function c(e){i.indexOf(e)>=0&&i.splice(i.indexOf(e),1),y=!1,a.params.lazy.sequential&&i.length>0&&(y=!0,a.lazy.loadImage(i[0],c))}if(a.params.lazy.observer&&l.intersectionObserver){let e=o[0].f7LazyObserver;return e||(e=new r.IntersectionObserver((function(e,t){e.forEach((e=>{if(e.isIntersecting){if(a.params.lazy.sequential&&y)return void(i.indexOf(e.target)<0&&i.push(e.target));y=!0,a.lazy.loadImage(e.target,c),t.unobserve(e.target)}}))}),{root:o[0]})),n.each((a=>{a.f7LazyObserverAdded||(a.f7LazyObserverAdded=!0,e.observe(a))})),void(o[0].f7LazyDestroy||(o[0].f7LazyDestroy=()=>{e.disconnect(),delete o[0].f7LazyDestroy,delete o[0].f7LazyObserver}))}function z(){a.lazy.load(o,(e=>{a.params.lazy.sequential&&y?i.indexOf(e)<0&&i.push(e):(y=!0,a.lazy.loadImage(e,c))}))}o[0].f7LazyDestroy||(o[0].f7LazyDestroy=function(){o[0].f7LazyAttached=!1,delete o[0].f7LazyAttached,o.off("lazy",z),o.off("scroll",z,!0),o.find(".tab").off("tab:mounted tab:show",z),a.off("resize",z)}),o[0].f7LazyAttached||(o[0].f7LazyAttached=!0,o.on("lazy",z),o.on("scroll",z,!0),o.find(".tab").on("tab:mounted tab:show",z),a.on("resize",z)),z()},isInViewport(e){const a=this,t=e.getBoundingClientRect(),r=a.params.lazy.threshold||0;return t.top>=0-r&&t.left>=0-r&&t.top<=a.height+r&&t.left<=a.width+r},loadImage(e,a){const r=this,s=getWindow(),l=t(e),o=l.attr("data-background"),n=o||l.attr("data-src");function d(){l.removeClass("lazy").addClass("lazy-loaded"),o?l.css("background-image",`url(${n})`):n&&l.attr("src",n),a&&a(e),l.trigger("lazy:loaded"),r.emit("lazyLoaded",l[0])}if(!n)return l.trigger("lazy:load"),r.emit("lazyLoad",l[0]),void d();const i=new s.Image;i.onload=d,i.onerror=function(){l.removeClass("lazy").addClass("lazy-loaded"),o?l.css("background-image",`url(${r.params.lazy.placeholder||""})`):l.attr("src",r.params.lazy.placeholder||""),a&&a(e),l.trigger("lazy:error"),r.emit("lazyError",l[0])},i.src=n,l.removeAttr("data-src").removeAttr("data-background"),l.trigger("lazy:load"),r.emit("lazyLoad",l[0])},load(e,a){const r=this;let s=t(e);s.hasClass("page")||(s=s.parents(".page").eq(0)),0!==s.length&&s.find(".lazy").each((e=>{t(e).parents(".tab:not(.tab-active)").length>0||r.lazy.isInViewport(e)&&(a?a(e):r.lazy.loadImage(e))}))}};var n={name:"lazy",params:{lazy:{placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXCwsK592mkAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==",threshold:0,sequential:!0,observer:!0}},create(){l(this,{lazy:o})},on:{pageInit(e){const a=this;(e.$el.find(".lazy").length>0||e.$el.hasClass("lazy"))&&a.lazy.create(e.$el)},pageAfterIn(e){const a=this,t=s();a.params.lazy.observer&&t.intersectionObserver||(e.$el.find(".lazy").length>0||e.$el.hasClass("lazy"))&&a.lazy.create(e.$el)},pageBeforeRemove(e){const a=this;(e.$el.find(".lazy").length>0||e.$el.hasClass("lazy"))&&a.lazy.destroy(e.$el)},tabMounted(e){const a=this,r=t(e);(r.find(".lazy").length>0||r.hasClass("lazy"))&&a.lazy.create(r)},tabBeforeRemove(e){const a=this,r=s();if(a.params.lazy.observer&&r.intersectionObserver)return;const l=t(e);(l.find(".lazy").length>0||l.hasClass("lazy"))&&a.lazy.destroy(l)}}};if(a){if(e.prototype.modules&&e.prototype.modules[n.name])return;e.use(n),e.instance&&(e.instance.useModuleParams(n,e.instance.params),e.instance.useModule(n))}return n}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
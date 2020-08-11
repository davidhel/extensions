function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"5S+f":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i,o,a=n("EM62"),c=n("2kYt"),r=n("bFHC"),l=((o=function(){function e(t){_classCallCheck(this,e),this.platformLocation=t,this._text=""}return _createClass(e,[{key:"ngOnInit",value:function(){this._text=this.example.toLowerCase().split(" ").filter((function(e){return"&"!==e})).join("-")}},{key:"getFragmentUrl",value:function(){return"".concat(this.platformLocation.pathname,"#").concat(this._text)}}]),e}()).\u0275fac=function(e){return new(e||o)(a.Qb(c.D))},o.\u0275cmp=a.Kb({type:o,selectors:[["header-link"]],inputs:{example:"example"},decls:3,vars:2,consts:[["aria-label","Link to this heading",1,"docs-markdown-a","header-link",3,"href"]],template:function(e,t){1&e&&(a.Wb(0,"a",0),a.Wb(1,"mat-icon"),a.Nc(2,"link"),a.Vb(),a.Vb()),2&e&&(a.qc("href",t.getFragmentUrl(),a.Ec),a.Db("aria-describedby",t.example))},directives:[r.a],styles:["h1 .header-link,h2 .header-link,h3 .header-link,h4 .header-link,h5 .header-link,h6 .header-link{display:inline-flex;padding:2px 0;margin:0 4px;color:#6e6e6e;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;visibility:hidden;vertical-align:text-top}h1:hover .header-link,h2:hover .header-link,h3:hover .header-link,h4:hover .header-link,h5:hover .header-link,h6:hover .header-link{visibility:visible}"],encapsulation:2}),o),s=((i=function(){function e(){_classCallCheck(this,e),this.text="",this.id=""}return _createClass(e,[{key:"ngOnInit",value:function(){this.id=this.text.toLowerCase().split(" ").filter((function(e){return"&"!==e})).join("-")}}]),e}()).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=a.Kb({type:i,selectors:[["doc-heading"]],inputs:{text:"text"},decls:4,vars:3,consts:[[3,"id"],[3,"example"]],template:function(e,t){1&e&&(a.Wb(0,"h3",0),a.Wb(1,"span"),a.Nc(2),a.Vb(),a.Rb(3,"header-link",1),a.Vb()),2&e&&(a.qc("id",t.id),a.Cb(2),a.Oc(t.text),a.Cb(1),a.qc("example",t.text))},directives:[l],encapsulation:2}),i)},Pg5x:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var i=n("EM62"),o=n("W1gw"),a=n("cTZo"),c=n("PBFl"),r=n("Y2X+"),l=n("bFHC"),s=n("2kYt"),p=n("KZIX"),d=["demo"];function u(e,t){if(1&e){var n=i.Xb();i.Wb(0,"mat-tab",10),i.Wb(1,"div",11),i.Wb(2,"div",12),i.Wb(3,"button",13),i.ec("click",(function(){i.Cc(n);var e=i.zc(8);return i.ic(2).copySource(e)})),i.Wb(4,"mat-icon"),i.Nc(5,"content_copy"),i.Vb(),i.Vb(),i.Vb(),i.Wb(6,"div",14),i.Rb(7,"pre",15,16),i.Vb(),i.Vb(),i.Vb()}if(2&e){var o=t.$implicit;i.qc("label",o.file),i.Cb(3),i.qc("matTooltip","Copy example source"),i.Cb(4),i.qc("innerHtml",o.content,i.Dc)}}function b(e,t){if(1&e&&(i.Wb(0,"div",8),i.Wb(1,"mat-tab-group"),i.Lc(2,u,9,3,"mat-tab",9),i.Vb(),i.Vb()),2&e){var n=i.ic();i.Cb(2),i.qc("ngForOf",n.exampleData.files)}}function m(e,t){if(1&e&&i.Rb(0,"div",17),2&e){var n=i.ic();i.qc("innerHtml",n.exampleData.description,i.Dc)}}function h(e,t){}var f=function(){var e=function(){function e(t,n,i){_classCallCheck(this,e),this.snackbar=t,this.copier=n,this.componentFactoryResolver=i,this.showSource=!1}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);this.demoComponentRef=this.demoRef.createComponent(e)}},{key:"ngOnDestroy",value:function(){this.demoComponentRef&&this.demoComponentRef.destroy()}},{key:"toggleSourceView",value:function(){this.showSource=!this.showSource}},{key:"copySource",value:function(e){this.copier.copyText(e.innerText)?this.snackbar.open("Code copied","",{duration:2500}):this.snackbar.open("Copy failed. Please try again!","",{duration:2500})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i.Qb(o.a),i.Qb(a.a),i.Qb(i.j))},e.\u0275cmp=i.Kb({type:e,selectors:[["example-viewer"]],viewQuery:function(e,t){var n;1&e&&i.Ic(d,!0,i.P),2&e&&i.yc(n=i.fc())&&(t.demoRef=n.first)},inputs:{type:"type",exampleData:"exampleData"},decls:13,vars:4,consts:[[1,"docs-example-viewer-wrapper"],[1,"docs-example-viewer-title"],[1,"docs-example-viewer-title-spacer"],["mat-icon-button","","type","button",3,"matTooltip","click"],["class","docs-example-viewer-source",4,"ngIf"],[1,"docs-example-viewer-body"],[3,"innerHtml",4,"ngIf"],["demo",""],[1,"docs-example-viewer-source"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"docs-example-source-wrapper"],[1,"button-bar"],["mat-icon-button","","type","button","title","Copy example source","aria-label","Copy example source to clipboard",1,"docs-example-source-copy","docs-example-button",3,"matTooltip","click"],[1,"code-snippet"],[1,"docs-example-source",3,"innerHtml"],["textContent",""],[3,"innerHtml"]],template:function(e,t){1&e&&(i.Wb(0,"div",0),i.Wb(1,"div",1),i.Wb(2,"span"),i.Nc(3),i.Vb(),i.Rb(4,"div",2),i.Wb(5,"button",3),i.ec("click",(function(){return t.toggleSourceView()})),i.Wb(6,"mat-icon"),i.Nc(7,"code"),i.Vb(),i.Vb(),i.Vb(),i.Lc(8,b,3,1,"div",4),i.Wb(9,"div",5),i.Lc(10,m,1,1,"div",6),i.Lc(11,h,0,0,"ng-template",null,7,i.Mc),i.Vb(),i.Vb()),2&e&&(i.Cb(3),i.Oc(t.exampleData.title),i.Cb(2),i.qc("matTooltip","View source"),i.Cb(3),i.qc("ngIf",t.showSource),i.Cb(2),i.qc("ngIf",t.exampleData.description))},directives:[c.b,r.a,l.a,s.t,p.b,s.s,p.a],styles:["[_nghost-%COMP%]{display:block;padding:20px 0}.docs-example-viewer-wrapper[_ngcontent-%COMP%]{border-radius:4px}.docs-example-viewer-title[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;justify-content:center;padding:8px 8px 8px 16px}.docs-example-viewer-title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.docs-example-viewer-body[_ngcontent-%COMP%]{padding:30px}.button-bar[_ngcontent-%COMP%]{float:right;padding:8px}.code-snippet[_ngcontent-%COMP%]{padding:20px}.docs-example-source[_ngcontent-%COMP%]{padding:0;margin:0;border:none;background:none;font-size:14px}"]}),e}()}}]);
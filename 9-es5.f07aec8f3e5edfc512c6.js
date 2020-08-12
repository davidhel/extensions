!function(){function s(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+9my":function(s,a){s.exports='<span class="hljs-comment">/** No CSS for this example */</span>\n'},"+alR":function(s,a,n){"use strict";n.r(a),a.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'progress-example',\n  templateUrl: 'app.component.html',\n  styleUrls: ['app.component.scss'],\n})\nexport class AppComponent {\n  type = 'info';\n  value = 50;\n  striped = false;\n  animate = false;\n  height = 16;\n  foreground = '';\n  background = '';\n}\n"},"4IsC":function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">&#x27;progress-example&#x27;</span>,\n  templateUrl: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  styleUrls: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {}\n'},"5B/8":function(s,a,n){"use strict";n.r(a),a.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'progress-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {}\n"},"6Ntb":function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Progress configuration<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Type:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;type&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>Info<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>Warning<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>Danger<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Progress:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">thumbLabel</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;value&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;striped&quot;</span> [<span class="hljs-attr">labelPosition</span>]=<span class="hljs-string">&quot;&#x27;before&#x27;&quot;</span>&gt;</span>Striped<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">&quot;striped&quot;</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;animate&quot;</span> [<span class="hljs-attr">labelPosition</span>]=<span class="hljs-string">&quot;&#x27;before&#x27;&quot;</span>&gt;</span>Animate\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Height:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;16&quot;</span> <span class="hljs-attr">thumbLabel</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;height&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>Foreground color<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mtx-color-picker</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;foreground&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mtx-color-picker</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-button</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">&quot;foreground&quot;</span> <span class="hljs-attr">matSuffix</span> <span class="hljs-attr">mat-icon-button</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Clear&quot;</span>\n            (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;foreground=&#x27;&#x27;&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">mat-icon</span>&gt;</span>close<span class="hljs-tag">&lt;/<span class="hljs-name">mat-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>Background color<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mtx-color-picker</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;background&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mtx-color-picker</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-button</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">&quot;background&quot;</span> <span class="hljs-attr">matSuffix</span> <span class="hljs-attr">mat-icon-button</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Clear&quot;</span>\n            (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;background=&#x27;&#x27;&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">mat-icon</span>&gt;</span>close<span class="hljs-tag">&lt;/<span class="hljs-name">mat-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Result<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">type</span>]=<span class="hljs-string">&quot;type&quot;</span>\n              [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;value&quot;</span>\n              [<span class="hljs-attr">striped</span>]=<span class="hljs-string">&quot;striped&quot;</span> [<span class="hljs-attr">animate</span>]=<span class="hljs-string">&quot;animate&quot;</span>\n              [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;height + &#x27;px&#x27;&quot;</span>\n              [<span class="hljs-attr">foreground</span>]=<span class="hljs-string">&quot;foreground&quot;</span> [<span class="hljs-attr">background</span>]=<span class="hljs-string">&quot;background&quot;</span>&gt;</span>\n  {{height&gt;=14 ? value + &#x27;%&#x27; : &#x27;&#x27;}}\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n'},GRrf:function(s,a,n){"use strict";n.r(a),a.default='<mtx-progress [value]="40" foreground="#3949AB">40%</mtx-progress>\n<mtx-progress [value]="70" [striped]="true" foreground="#6D4C41">70%</mtx-progress>\n<mtx-progress [value]="60" [striped]="true" foreground="#880E4F" background="#FCE4EC">60%\n</mtx-progress>\n'},IS1p:function(a,n,t){"use strict";t.r(n),t.d(n,"ProgressModule",(function(){return B}));var l=t("sEIs"),p=t("M0ag"),e=t("EM62"),o=t("2kYt"),c=t("Pg5x");function r(s,a){if(1&s&&(e.Rb(0),e.Ob(1,"example-viewer",2),e.Qb()),2&s){var n=a.$implicit;e.Bb(1),e.nc("exampleData",n)}}function i(s,a){if(1&s&&(e.Rb(0),e.Kc(1,r,2,1,"ng-container",1),e.Qb()),2&s){var n=a.ngIf;e.Bb(1),e.nc("ngForOf",n.examples)}}var g,h=((g=function a(n){s(this,a),this.route=n}).\u0275fac=function(s){return new(s||g)(e.Nb(l.a))},g.\u0275cmp=e.Hb({type:g,selectors:[["app-progress"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(s,a){1&s&&(e.Kc(0,i,2,1,"ng-container",0),e.gc(1,"async")),2&s&&e.nc("ngIf",e.hc(1,1,a.route.data))},directives:[o.t,o.s,c.a],pipes:[o.b],styles:[""]}),g),m=t("F1o0"),u=t("nIj0"),b=t("v9BS"),j=t("+Tre"),d=t("29Wa"),f=t("s4/8"),x=t("3EDn"),q=t("PBFl"),k=t("bFHC");function M(s,a){if(1&s){var n=e.Ub();e.Tb(0,"mat-checkbox",6),e.bc("ngModelChange",(function(s){return e.zc(n),e.fc().animate=s})),e.Mc(1,"Animate "),e.Sb()}if(2&s){var t=e.fc();e.nc("ngModel",t.animate)("labelPosition","before")}}function v(s,a){if(1&s){var n=e.Ub();e.Tb(0,"button",11),e.bc("click",(function(){return e.zc(n),e.fc().foreground=""})),e.Tb(1,"mat-icon"),e.Mc(2,"close"),e.Sb(),e.Sb()}}function C(s,a){if(1&s){var n=e.Ub();e.Tb(0,"button",11),e.bc("click",(function(){return e.zc(n),e.fc().background=""})),e.Tb(1,"mat-icon"),e.Mc(2,"close"),e.Sb(),e.Sb()}}var S,y,T={title:"Configurable progress",component:(S=function a(){s(this,a),this.type="info",this.value=50,this.striped=!1,this.animate=!1,this.height=16,this.foreground="",this.background=""},S.\u0275fac=function(s){return new(s||S)},S.\u0275cmp=e.Hb({type:S,selectors:[["progress-example"]],decls:41,vars:18,consts:[[3,"ngModel","ngModelChange"],["value","info"],["value","success"],["value","warning"],["value","danger"],["min","0","max","100","thumbLabel","",3,"ngModel","ngModelChange"],[3,"ngModel","labelPosition","ngModelChange"],[3,"ngModel","labelPosition","ngModelChange",4,"ngIf"],["min","1","max","16","thumbLabel","",3,"ngModel","ngModelChange"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[3,"type","value","striped","animate","height","foreground","background"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(s,a){1&s&&(e.Tb(0,"h2"),e.Mc(1,"Progress configuration"),e.Sb(),e.Tb(2,"section"),e.Tb(3,"label"),e.Mc(4,"Type:"),e.Sb(),e.Tb(5,"mat-radio-group",0),e.bc("ngModelChange",(function(s){return a.type=s})),e.Tb(6,"mat-radio-button",1),e.Mc(7,"Info"),e.Sb(),e.Tb(8,"mat-radio-button",2),e.Mc(9,"Success"),e.Sb(),e.Tb(10,"mat-radio-button",3),e.Mc(11,"Warning"),e.Sb(),e.Tb(12,"mat-radio-button",4),e.Mc(13,"Danger"),e.Sb(),e.Sb(),e.Sb(),e.Tb(14,"section"),e.Tb(15,"label"),e.Mc(16,"Progress:"),e.Sb(),e.Tb(17,"mat-slider",5),e.bc("ngModelChange",(function(s){return a.value=s})),e.Sb(),e.Sb(),e.Tb(18,"section"),e.Tb(19,"mat-checkbox",6),e.bc("ngModelChange",(function(s){return a.striped=s})),e.Mc(20,"Striped"),e.Sb(),e.Kc(21,M,2,2,"mat-checkbox",7),e.Sb(),e.Tb(22,"section"),e.Tb(23,"label"),e.Mc(24,"Height:"),e.Sb(),e.Tb(25,"mat-slider",8),e.bc("ngModelChange",(function(s){return a.height=s})),e.Sb(),e.Sb(),e.Tb(26,"section"),e.Tb(27,"mat-form-field"),e.Tb(28,"mat-label"),e.Mc(29,"Foreground color"),e.Sb(),e.Tb(30,"mtx-color-picker",0),e.bc("ngModelChange",(function(s){return a.foreground=s})),e.Sb(),e.Kc(31,v,3,0,"button",9),e.Sb(),e.Tb(32,"mat-form-field"),e.Tb(33,"mat-label"),e.Mc(34,"Background color"),e.Sb(),e.Tb(35,"mtx-color-picker",0),e.bc("ngModelChange",(function(s){return a.background=s})),e.Sb(),e.Kc(36,C,3,0,"button",9),e.Sb(),e.Sb(),e.Tb(37,"h2"),e.Mc(38,"Result"),e.Sb(),e.Tb(39,"mtx-progress",10),e.Mc(40),e.Sb()),2&s&&(e.Bb(5),e.nc("ngModel",a.type),e.Bb(12),e.nc("ngModel",a.value),e.Bb(2),e.nc("ngModel",a.striped)("labelPosition","before"),e.Bb(2),e.nc("ngIf",a.striped),e.Bb(4),e.nc("ngModel",a.height),e.Bb(5),e.nc("ngModel",a.foreground),e.Bb(1),e.nc("ngIf",a.foreground),e.Bb(4),e.nc("ngModel",a.background),e.Bb(1),e.nc("ngIf",a.background),e.Bb(3),e.nc("type",a.type)("value",a.value)("striped",a.striped)("animate",a.animate)("height",a.height+"px")("foreground",a.foreground)("background",a.background),e.Bb(1),e.Oc(" ",a.height>=14?a.value+"%":"","\n"))},directives:[m.b,u.m,u.p,m.a,b.a,j.a,o.t,d.c,d.g,f.a,x.a,q.b,d.j,k.a],styles:[".mat-radio-button[_ngcontent-%COMP%]{margin:1em}.mat-checkbox[_ngcontent-%COMP%]{display:inline-block;margin:1rem 1rem 1rem 0}.mat-form-field[_ngcontent-%COMP%]{margin-right:1rem}"]}),S),files:[{file:"app.component.html",content:t("6Ntb"),filecontent:t("Yk3m")},{file:"app.component.ts",content:t("UATY"),filecontent:t("+alR")},{file:"app.component.scss",content:t("gLVF"),filecontent:t("POz3")}]},w={title:"Custom Color",component:function(){var a=function a(){s(this,a)};return a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=e.Hb({type:a,selectors:[["progress-example"]],decls:6,vars:5,consts:[["foreground","#3949AB",3,"value"],["foreground","#6D4C41",3,"value","striped"],["foreground","#880E4F","background","#FCE4EC",3,"value","striped"]],template:function(s,a){1&s&&(e.Tb(0,"mtx-progress",0),e.Mc(1,"40%"),e.Sb(),e.Tb(2,"mtx-progress",1),e.Mc(3,"70%"),e.Sb(),e.Tb(4,"mtx-progress",2),e.Mc(5,"60%\n"),e.Sb()),2&s&&(e.nc("value",40),e.Bb(2),e.nc("value",70)("striped",!0),e.Bb(2),e.nc("value",60)("striped",!0))},directives:[x.a],styles:[""]}),a}(),files:[{file:"app.component.html",content:t("sqhv"),filecontent:t("GRrf")},{file:"app.component.ts",content:t("4IsC"),filecontent:t("5B/8")},{file:"app.component.scss",content:t("+9my"),filecontent:t("x04E")}]},B=((y=function a(){s(this,a)}).\u0275mod=e.Lb({type:y}),y.\u0275inj=e.Kb({factory:function(s){return new(s||y)},imports:[[p.a,l.i.forChild([{path:"",component:h,data:{examples:[T,w]}}])]]}),y)},POz3:function(s,a,n){"use strict";n.r(a),a.default=".mat-radio-button {\n  margin: 1em;\n}\n\n.mat-checkbox {\n  display: inline-block;\n  margin: 1rem 1rem 1rem 0;\n}\n\n.mat-form-field {\n  margin-right: 1rem;\n}\n"},UATY:function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">&#x27;progress-example&#x27;</span>,\n  templateUrl: <span class="hljs-string">&#x27;app.component.html&#x27;</span>,\n  styleUrls: [<span class="hljs-string">&#x27;app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  <span class="hljs-keyword">type</span> = <span class="hljs-string">&#x27;info&#x27;</span>;\n  value = <span class="hljs-number">50</span>;\n  striped = <span class="hljs-literal">false</span>;\n  animate = <span class="hljs-literal">false</span>;\n  height = <span class="hljs-number">16</span>;\n  foreground = <span class="hljs-string">&#x27;&#x27;</span>;\n  background = <span class="hljs-string">&#x27;&#x27;</span>;\n}\n'},Yk3m:function(s,a,n){"use strict";n.r(a),a.default='<h2>Progress configuration</h2>\n\n<section>\n  <label>Type:</label>\n  <mat-radio-group [(ngModel)]="type">\n    <mat-radio-button value="info">Info</mat-radio-button>\n    <mat-radio-button value="success">Success</mat-radio-button>\n    <mat-radio-button value="warning">Warning</mat-radio-button>\n    <mat-radio-button value="danger">Danger</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <label>Progress:</label>\n  <mat-slider min="0" max="100" thumbLabel [(ngModel)]="value"></mat-slider>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="striped" [labelPosition]="\'before\'">Striped</mat-checkbox>\n  <mat-checkbox *ngIf="striped" [(ngModel)]="animate" [labelPosition]="\'before\'">Animate\n  </mat-checkbox>\n</section>\n\n<section>\n  <label>Height:</label>\n  <mat-slider min="1" max="16" thumbLabel [(ngModel)]="height"></mat-slider>\n</section>\n\n<section>\n  <mat-form-field>\n    <mat-label>Foreground color</mat-label>\n    <mtx-color-picker [(ngModel)]="foreground">\n    </mtx-color-picker>\n    <button mat-button *ngIf="foreground" matSuffix mat-icon-button aria-label="Clear"\n            (click)="foreground=\'\'">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Background color</mat-label>\n    <mtx-color-picker [(ngModel)]="background">\n    </mtx-color-picker>\n    <button mat-button *ngIf="background" matSuffix mat-icon-button aria-label="Clear"\n            (click)="background=\'\'">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n</section>\n\n<h2>Result</h2>\n\n<mtx-progress [type]="type"\n              [value]="value"\n              [striped]="striped" [animate]="animate"\n              [height]="height + \'px\'"\n              [foreground]="foreground" [background]="background">\n  {{height>=14 ? value + \'%\' : \'\'}}\n</mtx-progress>\n'},gLVF:function(s,a){s.exports='<span class="hljs-selector-class">.mat-radio-button</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1em</span>;\n}\n\n<span class="hljs-selector-class">.mat-checkbox</span> {\n  <span class="hljs-attribute">display</span>: inline-block;\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">0</span>;\n}\n\n<span class="hljs-selector-class">.mat-form-field</span> {\n  <span class="hljs-attribute">margin-right</span>: <span class="hljs-number">1rem</span>;\n}\n'},sqhv:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;40&quot;</span> <span class="hljs-attr">foreground</span>=<span class="hljs-string">&quot;#3949AB&quot;</span>&gt;</span>40%<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;70&quot;</span> [<span class="hljs-attr">striped</span>]=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">foreground</span>=<span class="hljs-string">&quot;#6D4C41&quot;</span>&gt;</span>70%<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;60&quot;</span> [<span class="hljs-attr">striped</span>]=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">foreground</span>=<span class="hljs-string">&quot;#880E4F&quot;</span> <span class="hljs-attr">background</span>=<span class="hljs-string">&quot;#FCE4EC&quot;</span>&gt;</span>60%\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n'},x04E:function(s,a,n){"use strict";n.r(a),a.default="/** No CSS for this example */\n"}}])}();
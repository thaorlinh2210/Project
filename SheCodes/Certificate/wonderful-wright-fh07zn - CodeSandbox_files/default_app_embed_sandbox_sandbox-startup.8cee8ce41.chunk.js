(this.csbJsonP=this.csbJsonP||[]).push([["default~app~embed~sandbox~sandbox-startup"],{"../codesandbox-api/dist/codesandbox.es5.js":function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"Protocol",(function(){return d})),r.d(t,"transformError",(function(){return o})),r.d(t,"clearErrorTransformers",(function(){return i})),r.d(t,"registerErrorTransformer",(function(){return s})),r.d(t,"actions",(function(){return b})),r.d(t,"isStandalone",(function(){return y})),r.d(t,"iframeHandshake",(function(){return S})),r.d(t,"resetState",(function(){return $})),r.d(t,"dispatch",(function(){return E})),r.d(t,"listen",(function(){return A})),r.d(t,"notifyListeners",(function(){return I})),r.d(t,"registerFrame",(function(){return L})),r.d(t,"reattach",(function(){return j}));var n=[];function o(e,t,r){return n.map((function(n){return n(e,t,r)})).filter((function(e){return null!=e}))[0]}function i(){n.length=0}function s(e){n.push(e)}var a=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{c(n.next(e))}catch(t){i(t)}}function a(e){try{c(n.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))},c=function(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(a){i=[6,a],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},l=function(){return Math.floor(1e6*Math.random()+1e6*Math.random())},d=function(){function e(e,t,r){var n=this;this.type=e,this.handleMessage=t,this.target=r,this.outgoingMessages=new Set,this._messageListener=function(e){return a(n,void 0,void 0,(function(){var t,r,n;return c(this,(function(o){switch(o.label){case 0:return(t=e.data).$type!==this.getTypeId()||this.outgoingMessages.has(t.$id)?[2]:[4,this.handleMessage(t.$data)];case 1:return r=o.sent(),n={$originId:this.internalId,$type:this.getTypeId(),$data:r,$id:t.$id},e.source?e.source.postMessage(n,"*"):this._postMessage(n),[2]}}))}))},this.createConnection(),this.internalId=l(),this.isWorker="Worker"===function(e){try{return e.constructor.name}catch(t){return""}}(r)}return e.prototype.getTypeId=function(){return"p-"+this.type},e.prototype.createConnection=function(){self.addEventListener("message",this._messageListener)},e.prototype.dispose=function(){self.removeEventListener("message",this._messageListener)},e.prototype.sendMessage=function(e){var t=this;return new Promise((function(r){var n=l(),o={$originId:t.internalId,$type:t.getTypeId(),$data:e,$id:n};t.outgoingMessages.add(n);var i=function(e){var o=e.data;o.$type===t.getTypeId()&&o.$id===n&&o.$originId!==t.internalId&&(r(o.$data),self.removeEventListener("message",i))};self.addEventListener("message",i),t._postMessage(o)}))},e.prototype._postMessage=function(e){this.isWorker||"undefined"!==typeof DedicatedWorkerGlobalScope&&this.target instanceof DedicatedWorkerGlobalScope?this.target.postMessage(e):this.target.postMessage(e,"*")},e}();var u=Object.freeze({show:function(e,t,r){return void 0===t&&(t="notice"),void 0===r&&(r=2),{type:"action",action:"notification",title:e,notificationType:t,timeAlive:r}}});var p=Object.freeze({openModule:function(e,t,r){return{type:"action",action:"editor.open-module",path:e,lineNumber:t,column:r}}});var f=Object.freeze({add:function(e){return{type:"action",action:"source.dependencies.add",dependency:e}}}),h=Object.freeze({rename:function(e,t){return{type:"action",action:"source.module.rename",path:e,title:t}}});var b={notifications:u,editor:p,source:Object.freeze({dependencies:f,modules:h}),error:Object.freeze({show:function(e,t,r){var n=r.line,o=r.column,i=r.lineEnd,s=r.columnEnd;return{title:e,message:t,line:n,column:o,path:r.path,payload:r.payload,lineEnd:i,columnEnd:s,severity:"error",type:"action",action:"show-error",source:r.source||"browser"}},clear:function(e,t){return{type:"action",action:"clear-errors",path:e,source:t}}}),correction:Object.freeze({show:function(e,t){var r=void 0===t?{path:"",severity:"warning",source:""}:t,n=r.line,o=r.column,i=r.lineEnd,s=r.columnEnd,a=r.path,c=r.payload,l=r.severity,d=void 0===l?"warning":l,u=r.source;return{message:e,line:n,column:o,lineEnd:i,columnEnd:s,path:a,payload:c,severity:d,source:void 0===u?"":u,type:"action",action:"show-correction"}},clear:function(e,t){return{type:"action",action:"clear-corrections",path:e,source:t}}}),glyph:Object.freeze({show:function(e){return{line:e.line,path:e.path,className:e.className,type:"action",action:"show-glyph"}}})},g="undefined"!==typeof e&&"https://codesandbox.io"||"https://codesandbox.io",m=function(){return(m=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},U=new Map;var v,y="undefined"===typeof window||!!(window.location&&window.location.href.indexOf("?standalone")>-1)||!window.opener&&window.parent===window||!!(window.location&&window.location.href.indexOf(g)>-1),w=!1,S=new Promise((function(e){v=e})),R=null,x=null,_=function(e){var t;"register-frame"!==e.data.type||x||(R=e.data.origin,x=null!==(t=e.data.id)&&void 0!==t?t:null,w||(v(),w=!0),self.removeEventListener("message",_))};function $(){R=null,U.clear()}function E(e){if(e){var t=m(m({},e),{codesandbox:!0});null!==x&&(t.$id=x),I(t),function(e){var t=JSON.parse(JSON.stringify(e));U.forEach((function(e,r){r&&r.postMessage&&r.postMessage(m(m({},t),{codesandbox:!0}),e)}))}(t),y||null===R&&"initialized"!==e.type||(window.opener?window.opener.postMessage(t,null===R?"*":R):window.parent.postMessage(t,null===R?"*":R))}}"undefined"!==typeof window&&self.addEventListener("message",_);var D={},O=0;function A(e){var t=++O;return D[t]=e,function(){delete D[t]}}function I(e,t){Object.keys(D).forEach((function(r){if(D[r])try{D[r](e,t)}catch(n){}}))}function P(e){if(("initialized"===e.data.type||y)&&(w=!0),w){var t=e.data;!t||!t.codesandbox||null!==R&&e.origin!==R||null!=t.$id&&null!==x&&x!==t.$id||I(t,e.source)}}function L(e,t,r){U.set(e,t),e.postMessage({type:"register-frame",origin:document.location.origin,id:r},t)}function j(){window.addEventListener("message",P)}"undefined"!==typeof window&&window.addEventListener("message",P)}.call(this,r("../../node_modules/process/browser.js"))},"../common/lib/templates/helpers/is-server.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isServer=void 0;const n=["adonis","apollo","docusaurus","ember","gatsby","gridsome","marko","mdx-deck","nest","next","node","nuxt","quasar","remix","sapper","styleguidist","unibit","vuepress"];t.isServer=e=>-1!==n.indexOf(e)},"../common/lib/utils/url-generator.js":function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.v2DraftBranchUrl=t.v2DefaultBranchUrl=t.dashboard=t.teamInviteLink=t.docsUrl=t.getSandboxId=t.privacyUrl=t.tosUrl=t.curatorUrl=t.searchUrl=t.gitHubToProjectsUrl=t.gitHubToSandboxUrl=t.optionsToParameterizedUrl=t.githubRepoUrl=t.profileLikesUrl=t.profileSandboxesUrl=t.teamOverviewUrl=t.exploreUrl=t.dashboardUrl=t.profileUrl=t.signInVercelUrl=t.signInUrl=t.signInPageUrl=t.forkSandboxUrl=t.frameUrl=t.embedUrl=t.v2BranchUrl=t.sandboxUrl=t.v2EditorUrl=t.editorUrl=t.uploadFromCliUrl=t.newCxJSSandboxUrl=t.newAngularSandboxUrl=t.newSvelteSandboxUrl=t.importFromGitHubUrl=t.newVueSandboxUrl=t.newPreactSandboxUrl=t.newDojoSandboxUrl=t.newReactTypeScriptSandboxUrl=t.parcelSandboxUrl=t.newSandboxUrl=t.newSandboxWizard=t.protocolAndHost=t.host=t.CSBProjectGitHubRepository=t.gitHubRepoPattern=void 0;const s=r("../common/lib/templates/helpers/is-server.js"),a=i(r("../common/lib/utils/url-generator/dashboard.js"));t.dashboard=a,t.gitHubRepoPattern=/(https?:\/\/)?((www.)?)github.com(\/[\w-]+){2,}/;const c=/(https?:\/\/)?((www.)?)github.com/,l=/(\.git)$/,d={"https://codesandbox.io":"https://csb.app","https://codesandbox.stream":"https://codesandbox.dev"};t.CSBProjectGitHubRepository=({owner:e,repo:t})=>`https://codesandbox.io/p/github/${e}/${t}?create=true`;const u=(e,...t)=>e[0]+t.map((t,r)=>`${encodeURIComponent(t)}${e[r+1]}`).join("");t.host=()=>"https://codesandbox.io".split("//")[1];t.protocolAndHost=()=>`${location.protocol}//${t.host()}`;t.newSandboxWizard=()=>"/s";t.newSandboxUrl=()=>"/s/new";t.parcelSandboxUrl=()=>"/s/vanilla";t.newReactTypeScriptSandboxUrl=()=>"/s/react-ts";t.newDojoSandboxUrl=()=>"/s/github/dojo/dojo-codesandbox-template";t.newPreactSandboxUrl=()=>"/s/preact";t.newVueSandboxUrl=()=>"/s/vue";t.importFromGitHubUrl=()=>"/s/github";t.newSvelteSandboxUrl=()=>"/s/svelte";t.newAngularSandboxUrl=()=>"/s/angular";t.newCxJSSandboxUrl=()=>"/s/github/codaxy/cxjs-codesandbox-template";t.uploadFromCliUrl=()=>"/s/cli";const p=e=>u`github/${e.username}/${e.repo}/tree/${e.branch}/`+e.path;t.editorUrl=()=>"/s/";t.v2EditorUrl=()=>"/p/";t.sandboxUrl=e=>{if(e.git){const{git:r}=e;return`${t.editorUrl()}${p(r)}`}const r=e.isV2?t.v2EditorUrl()+"sandbox/":t.editorUrl();return e.alias?`${r}${e.alias}`:`${r}${e.id}`};t.v2BranchUrl=e=>{const{name:r,project:{repository:n}}=e;return`${t.v2EditorUrl()}github/${n.owner}/${n.name}/${r}`};t.embedUrl=e=>{if(e.git){const{git:t}=e;return"/embed/"+p(t)}return e.alias?"/embed/"+e.alias:"/embed/"+e.id};t.frameUrl=(e,r="",{useFallbackDomain:n=!1,port:o}={})=>{const i=0===r.indexOf("/")?r.substr(1):r,a=s.isServer(e.template);let c=t.host();return!("https://"+c in d)||n||a||(c=d["https://"+c].split("//")[1]),`${location.protocol}//${e.id}${o?"-"+o:""}.${a?"sse.":""}${c}/${i}`};t.forkSandboxUrl=e=>t.sandboxUrl(e)+"/fork";t.signInPageUrl=e=>{let t="/signin";return e&&(t+="?continue="+e),t};t.signInUrl=(e=!1)=>"/auth/github"+(e?"?scope=user:email,public_repo,workflow":"");t.signInVercelUrl=()=>"/auth/vercel";t.profileUrl=e=>"/u/"+e;t.dashboardUrl=()=>"/dashboard";t.exploreUrl=()=>"/explore";t.teamOverviewUrl=e=>"/dashboard/teams/"+e;t.profileSandboxesUrl=(e,r)=>`${t.profileUrl(e)}/sandboxes${r?"/"+r:""}`;t.profileLikesUrl=(e,r)=>`${t.profileUrl(e)}/likes${r?"/"+r:""}`;t.githubRepoUrl=({repo:e,branch:t,username:r,path:n})=>u`https://github.com/${r}/${e}/tree/${t}/`+n;t.optionsToParameterizedUrl=e=>{const t=Object.keys(e).sort().filter(t=>e[t]).map(t=>`${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join("&");return t?"?"+t:""};t.gitHubToSandboxUrl=e=>e.replace(c,"/s/github").replace(l,"");t.gitHubToProjectsUrl=e=>e.replace(c,"/p/github").replace(l,"");t.searchUrl=e=>"/search"+(e?"?query="+e:"");t.curatorUrl=()=>"/curator";t.tosUrl=()=>"/legal/terms";t.privacyUrl=()=>"/legal/privacy",t.getSandboxId=function(){const e="https://codesandbox.io";let t;if([e,d[e]].filter(Boolean).forEach(e=>{const r=e.replace(/https?:\/\//,"").replace(/\./g,"\\."),n=new RegExp("(.*)\\."+r),o=document.location.host.match(n);o&&(t=o[1])}),!t)throw new Error("Can't detect sandbox ID from the current URL");return t};t.docsUrl=(e="")=>"https://codesandbox.io/docs"+e;t.teamInviteLink=e=>`${t.protocolAndHost()}/invite/${e}`;t.v2DefaultBranchUrl=(e,r,n={})=>{const o=new URLSearchParams(Object.assign({},n));return`${t.v2EditorUrl()}github/${e}/${r}?${o.toString()}`};t.v2DraftBranchUrl=(e,r)=>""+t.v2DefaultBranchUrl(e,r,{create:"true"})},"../common/lib/utils/url-generator/dashboard.js":function(e,t,r){"use strict";function n(e,t){return t?`${e}?workspace=${t}`:e}Object.defineProperty(t,"__esModule",{value:!0}),t.discoverSearch=t.discover=t.search=t.permissionSettings=t.registrySettings=t.settings=t.liked=t.shared=t.deleted=t.recent=t.templates=t.syncedSandboxes=t.repository=t.repositories=t.myContributions=t.drafts=t.sandboxes=t.ALL_SANDBOXES_URL_PREFIX=t.DASHBOARD_URL_PREFIX=void 0,t.DASHBOARD_URL_PREFIX="/dashboard",t.ALL_SANDBOXES_URL_PREFIX=t.DASHBOARD_URL_PREFIX+"/sandboxes";t.sandboxes=(e,r)=>n(`${t.ALL_SANDBOXES_URL_PREFIX}${function(e){return e.split("/").map(e=>e.split(" ").map(encodeURIComponent).join(" ")).join("/")}(e)}`,r);t.drafts=e=>n(t.DASHBOARD_URL_PREFIX+"/drafts",e);t.myContributions=e=>n(t.DASHBOARD_URL_PREFIX+"/my-contributions",e);t.repositories=e=>n(t.DASHBOARD_URL_PREFIX+"/repositories",e);t.repository=({owner:e,name:r,teamId:o})=>n(`${t.DASHBOARD_URL_PREFIX}/repositories/github/${e}/${r}`,o);t.syncedSandboxes=e=>n(t.DASHBOARD_URL_PREFIX+"/synced-sandboxes",e);t.templates=e=>n(t.DASHBOARD_URL_PREFIX+"/templates",e);t.recent=e=>n(t.DASHBOARD_URL_PREFIX+"/recent",e);t.deleted=e=>n(t.DASHBOARD_URL_PREFIX+"/deleted",e);t.shared=e=>n(t.DASHBOARD_URL_PREFIX+"/shared",e);t.liked=e=>n(t.DASHBOARD_URL_PREFIX+"/liked",e);t.settings=e=>n(t.DASHBOARD_URL_PREFIX+"/settings",e);t.registrySettings=e=>n(t.DASHBOARD_URL_PREFIX+"/settings/npm-registry",e);t.permissionSettings=e=>n(t.DASHBOARD_URL_PREFIX+"/settings/permissions",e);t.search=(e,r)=>{let o=n(t.DASHBOARD_URL_PREFIX+"/search",r);return o.includes("?")?o+="&":o+="?",o+="query="+e,o};t.discover=(e,r)=>n(r?`${t.DASHBOARD_URL_PREFIX}/discover/${r}`:t.DASHBOARD_URL_PREFIX+"/discover",e);t.discoverSearch=(e,r)=>{let o=n(t.DASHBOARD_URL_PREFIX+"/discover/search",r);return o.includes("?")?o+="&":o+="?",o+="query="+e,o}}}]);
//# sourceMappingURL=default~app~embed~sandbox~sandbox-startup.8cee8ce41.chunk.js.map
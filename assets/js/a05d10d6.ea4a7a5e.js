"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[3242],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return h}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(o),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8839:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],l={custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/good_pr.md"},s="Good Pull Requests",u={unversionedId:"developer/good_pr",id:"developer/good_pr",title:"Good Pull Requests",description:"Pull Requests are how changes are shared with the community. When authors add features or fix bug for code contributions it's",source:"@site/docs/developer/good_pr.md",sourceDirName:"developer",slug:"/developer/good_pr",permalink:"/docs/developer/good_pr",editUrl:"https://github.com/pyrsia/pyrsia/edit/main/docs/good_pr.md",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/good_pr.md"},sidebar:"tutorialSidebar",previous:{title:"Code Contribution Workflow",permalink:"/docs/developer/dev_workflow"},next:{title:"Pyrsia Bootstrap Governance",permalink:"/docs/developer/governance"}},c={},p=[{value:"What makes a good Pull Request",id:"what-makes-a-good-pull-request",level:2},{value:"Signs of a weak Pull Request",id:"signs-of-a-weak-pull-request",level:2},{value:"Possible solutions",id:"possible-solutions",level:3},{value:"Test cases",id:"test-cases",level:2},{value:"Process of how you build PRs",id:"process-of-how-you-build-prs",level:2},{value:"Review cycle",id:"review-cycle",level:2}],d={toc:p};function h(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"good-pull-requests"},"Good Pull Requests"),(0,a.kt)("p",null,"Pull Requests are how changes are shared with the community. When authors add features or fix bug for code contributions it's\nimportant to have the mind set:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"I am asking others for a favor to review and give feedback on my work with the goal of delieverying the best quality work"))),(0,a.kt)("p",null,"With that in mind, what should authors do to make this process as smooth as possible for the reviewers?"),(0,a.kt)("h2",{id:"what-makes-a-good-pull-request"},"What makes a good Pull Request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Link to an issue that has clear description so reviewers know what to expect."),(0,a.kt)("li",{parentName:"ul"},"Keep the changes small, limit the scope of the PR to make it clear an consise."),(0,a.kt)("li",{parentName:"ul"},"Fill in the PR template to give the most information as possible.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Clear title"),(0,a.kt)("li",{parentName:"ul"},"Detailed description"),(0,a.kt)("li",{parentName:"ul"},"How to test/verify/review the changes locally"))),(0,a.kt)("li",{parentName:"ul"},"Screenshot of outcome if possible, visually it is easier to understand what happens."),(0,a.kt)("li",{parentName:"ul"},"Add logs in to highlight what to expect when running the code locally.")),(0,a.kt)("h2",{id:"signs-of-a-weak-pull-request"},"Signs of a weak Pull Request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Large number of changed files."),(0,a.kt)("li",{parentName:"ul"},"Lots of inline code documentation."),(0,a.kt)("li",{parentName:"ul"},'Numerous questions which don\'t understand "why this was changed".')),(0,a.kt)("h3",{id:"possible-solutions"},"Possible solutions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open new issues for the extra work you spot in the code if it takes more then 30 minutes.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Focus on the issue at hand!"),(0,a.kt)("li",{parentName:"ul"},"Clearly call out changes in the description of code comments to inform the reviewer."))),(0,a.kt)("li",{parentName:"ul"},"Document design decision in the ",(0,a.kt)("inlineCode",{parentName:"li"},"docs/")," folder of write a blog for the website.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Share the link to a Google Docs describing the decision and choices made."),(0,a.kt)("li",{parentName:"ul"},"Include any meeting records where the issue was discussed")))),(0,a.kt)("h2",{id:"test-cases"},"Test cases"),(0,a.kt)("p",null,"It's always recommended to write tests for any code changes. Tests should describe both expected and undesirable scenarios."),(0,a.kt)("p",null,"Make sure the Pull Request has:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Code that is readable by itself along with test cases that supplement the narrative of how the code works.")),(0,a.kt)("h2",{id:"process-of-how-you-build-prs"},"Process of how you build PRs"),(0,a.kt)("p",null,"It is worth reading our general ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pyrsia/.github/blob/main/contributing.md#dev-flow"},"contributing guidelines"),"."),(0,a.kt)("p",null,"Beyond that, any optional check(s) that fail should be brought up at the next team meeting so we can evaluate the significance."),(0,a.kt)("h2",{id:"review-cycle"},"Review cycle"),(0,a.kt)("p",null,"Pull Requests take time. It may take several passes for feedback and questions to be completely resolved.\nMake sure to help others learn about the work you've done and appreciate the dedication to improving your work."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enough time to understand the code and any context behind it."),(0,a.kt)("li",{parentName:"ul"},"Ability to demonstrate the function of the new code."),(0,a.kt)("li",{parentName:"ul"},"We should have guidence about what reviewers should expect."),(0,a.kt)("li",{parentName:"ul"},"Assigned reviewers questions should to be answered before merging")),(0,a.kt)("p",null,"Follow the 30 minutes when evalutating suggestions and comments!\n\u21aa\ufe0f If the changes would take more then 30 minutes, it's probably out of scope so open a new issue to keep track of the improvements."))}h.isMDXComponent=!0}}]);
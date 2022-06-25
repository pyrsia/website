"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[8459],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(r),d=n,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||i;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1075:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],l={custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/rfc/0000-template.md"},s=void 0,p={unversionedId:"developer/rfc/template",id:"developer/rfc/template",title:"template",description:"- Feature Name: (fill me in with a unique ident, myawesomefeature)",source:"@site/docs/developer/rfc/0000-template.md",sourceDirName:"developer/rfc",slug:"/developer/rfc/template",permalink:"/docs/developer/rfc/template",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/edit/main/docs/rfc/0000-template.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/rfc/0000-template.md"},sidebar:"tutorialSidebar",previous:{title:"Pyrsia RFCs",permalink:"/docs/developer/rfc/"},next:{title:"Things You Should Know",permalink:"/docs/developer/things-to-know"}},u={},c=[],h={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Feature Name: (fill me in with a unique ident, ",(0,i.kt)("inlineCode",{parentName:"li"},"my_awesome_feature"),")"),(0,i.kt)("li",{parentName:"ul"},"Start Date: (fill me in with today's date, YYYY-MM-DD)"),(0,i.kt)("li",{parentName:"ul"},"RFC PR: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pyrsia/pyrsia/pull/0000"},"pyrsia/pyrsia#0000")),(0,i.kt)("li",{parentName:"ul"},"Pyrsia Issue: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pyrsia/pyrsia/issues/0000"},"pyrsia/pyrsia#0000"))),(0,i.kt)("h1",{id:"summary"},"Summary"),(0,i.kt)("p",null,"One paragraph explanation of the feature or change."),(0,i.kt)("h1",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"Why are we doing this? What use cases does it support? What is the expected outcome?"),(0,i.kt)("h1",{id:"guide-level-explanation"},"Guide-level explanation"),(0,i.kt)("p",null,"Explain the proposal as if it was already included in the language and you were teaching it to another Pyrsia member. That generally means:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Introducing new named concepts."),(0,i.kt)("li",{parentName:"ul"},"Explaining the feature largely in terms of examples."),(0,i.kt)("li",{parentName:"ul"},"Explaining how Pyrsia users should ",(0,i.kt)("em",{parentName:"li"},"think")," about the feature, and how it should impact the way they use Pyrsia. It should explain the impact as concretely as possible."),(0,i.kt)("li",{parentName:"ul"},"If applicable, provide sample error messages, deprecation warnings, or migration guidance."),(0,i.kt)("li",{parentName:"ul"},"If applicable, describe the differences between teaching this to existing Pyrsia users and new Pyrsia users.")),(0,i.kt)("p",null,"For implementation-oriented RFCs (e.g. for peer-to-peer networking technology stack), this section should focus on how code contributors should think about the change, and give examples of its concrete impact."),(0,i.kt)("h1",{id:"reference-level-explanation"},"Reference-level explanation"),(0,i.kt)("p",null,"This is the technical portion of the RFC. Explain the design in sufficient detail that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Its interaction with other features is clear."),(0,i.kt)("li",{parentName:"ul"},"It is reasonably clear how the feature would be implemented."),(0,i.kt)("li",{parentName:"ul"},"Corner cases are dissected by example.")),(0,i.kt)("p",null,"The section should return to the examples given in the previous section, and explain more fully how the detailed proposal makes those examples work."),(0,i.kt)("h1",{id:"drawbacks"},"Drawbacks"),(0,i.kt)("p",null,"Why should we ",(0,i.kt)("em",{parentName:"p"},"not")," do this? What are the trade-offs? What negative side effects or limitation could be a consequence?"),(0,i.kt)("h1",{id:"rationale-and-alternatives"},"Rationale and alternatives"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Why is this design the best in the space of possible designs?"),(0,i.kt)("li",{parentName:"ul"},"What other designs have been considered and what is the rationale for not choosing them?"),(0,i.kt)("li",{parentName:"ul"},"What is the impact of not doing this?")),(0,i.kt)("h1",{id:"prior-art"},"Prior art"),(0,i.kt)("p",null,"Discuss prior art, both the good and the bad, in relation to this proposal.\nA few examples of what this can include are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Does this feature exist in other package managers and what experience have their community had?"),(0,i.kt)("li",{parentName:"ul"},"For community proposals: Is this done by some other community and what were their experiences with it?"),(0,i.kt)("li",{parentName:"ul"},"For other teams: What lessons can we learn from what other communities have done here?"),(0,i.kt)("li",{parentName:"ul"},"References: Are there any published papers or great posts that discuss this? If you have some relevant research to refer to, this can serve as a more detailed theoretical background. Existing implementation references for practical background can also help fill in a proposal.")),(0,i.kt)("p",null,"This is an excellent place to share research notes, articles or proof of concepts that can support or educate the reviewers."),(0,i.kt)("h1",{id:"unresolved-questions"},"Unresolved questions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What parts of the design do you expect to resolve through the RFC process before this gets merged?"),(0,i.kt)("li",{parentName:"ul"},"What parts of the design do you expect to resolve through the implementation of this feature before stabilization?"),(0,i.kt)("li",{parentName:"ul"},"What related issues do you consider out of scope for this RFC that could be addressed in the future independently of the solution that comes out of this RFC?")),(0,i.kt)("h1",{id:"future-possibilities-optional"},"Future possibilities (optional)"),(0,i.kt)("p",null,"Think about what the natural extension and evolution of your proposal would\nbe and how it would affect the project as a whole in a holistic\nway. Try to use this section as a tool to more fully consider all possible\ninteractions with the project and language in your proposal.\nAlso consider how this all fits into the road map for the project\nand of the relevant sub-team."),(0,i.kt)("p",null,'This is also a good place to "dump ideas", if they are out of scope for the\nRFC you are writing but otherwise related.'))}d.isMDXComponent=!0}}]);
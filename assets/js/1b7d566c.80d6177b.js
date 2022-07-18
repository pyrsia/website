"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[3700],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=u(n),m=i,y=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(y,a(a({ref:e},p),{},{components:n})):r.createElement(y,a({ref:e},p))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81179:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/tutorials/quick-installation.mdx",sidebar_position:0},l="Quick Installation",u={unversionedId:"tutorials/quick-installation",id:"tutorials/quick-installation",title:"Quick Installation",description:"Pyrsia can easily be setup on a local Ubuntu (or Debian based) machine by using our apt installer package.",source:"@site/docs/tutorials/quick-installation.mdx",sourceDirName:"tutorials",slug:"/tutorials/quick-installation",permalink:"/docs/tutorials/quick-installation",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/edit/main/docs/tutorials/quick-installation.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/tutorials/quick-installation.mdx",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/docs/tutorials/"},next:{title:"How to setup a Pyrsia node to build from source",permalink:"/docs/tutorials/build_from_source"}},p={},c=[{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Using the Web Script",id:"using-the-web-script",level:2},{value:"From the Command Line",id:"from-the-command-line",level:2},{value:"Verify everything is running smoothly",id:"verify-everything-is-running-smoothly",level:2}],d={toc:c};function m(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-installation"},"Quick Installation"),(0,o.kt)("p",null,"Pyrsia can easily be setup on a local Ubuntu (or Debian based) machine by using our ",(0,o.kt)("inlineCode",{parentName:"p"},"apt")," installer package."),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("admonition",{title:"Limited platform support",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Currently our team is working very hard on core features. There may be missing support for you Operating System (OS).")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ubuntu Focal (x86_64)")),(0,o.kt)("h2",{id:"using-the-web-script"},"Using the Web Script"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sS https://pyrsia.io/install.sh | sh\n")),(0,o.kt)("h2",{id:"from-the-command-line"},"From the Command Line"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# Update system and install base tooling\nsudo apt-get update\nsudo apt-get install -y wget gnupg\n\n# Add the Pyrsia keys to verify packages\nwget -q -O - https://repo.pyrsia.io/repos/Release.key |  gpg --dearmor  > pyrsia.gpg\nsudo install -o root -g root -m 644 pyrsia.gpg /etc/apt/trusted.gpg.d/\nrm pyrsia.gpg\necho "deb https://repo.pyrsia.io/repos/nightly focal main" | sudo tee -a /etc/apt/sources.list > /dev/null\nsudo apt-get update\n\n# Install\nsudo apt-get install -y pyrsia\n')),(0,o.kt)("h2",{id:"verify-everything-is-running-smoothly"},"Verify everything is running smoothly"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ pyrsia --version\npyrsia 0.1.0\n$ pyrsia ping\nConnection Successful !! {}\n")),(0,o.kt)("p",null,"If you see the following output, then your installation has failed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ pyrsia ping\nError: error sending request for url (http://localhost:7888/v2): error trying to connect: tcp connect error: Connection refused (os error 111)\n")))}m.isMDXComponent=!0}}]);
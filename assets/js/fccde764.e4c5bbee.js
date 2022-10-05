"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[5211],{35890:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=(r(8209),["components"]),s={custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/developers/pyrsia-with-docker.md",sidebar_position:5},p="Pyrsia and Docker",l={unversionedId:"developers/pyrsia-with-docker",id:"developers/pyrsia-with-docker",title:"Pyrsia and Docker",description:"Once you have setup your local environment with Pyrsia you are now ready to run Pyrsia with Docker support.",source:"@site/docs/developers/pyrsia-with-docker.md",sourceDirName:"developers",slug:"/developers/pyrsia-with-docker",permalink:"/docs/developers/pyrsia-with-docker",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/edit/main/docs/developers/pyrsia-with-docker.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/developers/pyrsia-with-docker.md",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Pyrsia AutoNAT Implementation (IETF STUN)",permalink:"/docs/developers/pyrsia-autonat"},next:{title:"Maven user scenarios",permalink:"/docs/developers/maven_and_pyrsia"}},d={},c=[{value:"Integrating and Building with Docker",id:"integrating-and-building-with-docker",level:2},{value:"Configure Docker Daemon for Pyrsia Network",id:"configure-docker-daemon-for-pyrsia-network",level:2}],u={toc:c};function k(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pyrsia-and-docker"},"Pyrsia and Docker"),(0,o.kt)("p",null,"Once you have setup your ",(0,o.kt)("a",{parentName:"p",href:"../get_involved/local_dev_setup.md"},"local environment")," with Pyrsia you are now ready to run Pyrsia with Docker support."),(0,o.kt)("h2",{id:"integrating-and-building-with-docker"},"Integrating and Building with Docker"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/get-started"},"Docker"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"macOS and Windows: Compose is included in Docker Desktop"),(0,o.kt)("li",{parentName:"ul"},"Linux: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/docker/compose#linux"},"Downloaded Compose"))))),(0,o.kt)("h2",{id:"configure-docker-daemon-for-pyrsia-network"},"Configure Docker Daemon for Pyrsia Network"),(0,o.kt)("p",null,"Follow these steps to run a Pyrsia node and use it as the registry for all Docker Hub content."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"cd pyrsia/pyrsia_node"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You need to start the Pyrsia Node. To do so, you have 2 options:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Rust: ",(0,o.kt)("inlineCode",{parentName:"li"},"DEV_MODE=on PYRSIA_ARTIFACT_PATH=pyrsia cargo run")),(0,o.kt)("li",{parentName:"ul"},"Docker Compose: ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose up --build"))),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Note"),": \u26a0\ufe0f Do not to stop this process, a running node is required for the\nfollowing steps:")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"configure Docker")," to use Pyrsia, which is running at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:7888"),",\nopen your Docker daemon settings and add this entry in the root JSON object:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"On Linux platforms"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "registry-mirrors": ["http://localhost:7888"]\n')),(0,o.kt)("p",{parentName:"li"},"By default you can find the Docker daemon settings here ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"On other platforms"),":"),(0,o.kt)("p",{parentName:"li"},"You can find the Docker daemon settings in Docker Desktop -> Preferences -> Docker Engine."),(0,o.kt)("p",{parentName:"li"},"If you're running Pyrsia inside Docker, the ",(0,o.kt)("inlineCode",{parentName:"p"},"registry-mirrors")," settings can be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:7888")," as well. However if you're not running inside Docker, you cannot use ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost")," because localhost will point to the Docker Desktop environment. Instead you have to use the hostname of your host machine. If you don't know/have that, you can add this to ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," (on Mac) or ",(0,o.kt)("inlineCode",{parentName:"p"},"c:\\windows\\system32\\drivers\\etc\\hosts")," (on Windows):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"127.0.0.1       my-pyrsia-host\n")),(0,o.kt)("p",{parentName:"li"},"And then use that name in the Docker configuration file like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"registry-mirrors": ["http://my-pyrsia-host:7888"]\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"using another terminal, use ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," to pull an image from Pyrsia:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull ubuntu\n")),(0,o.kt)("p",{parentName:"li"},"(or pull any other Docker image of your choice)"),(0,o.kt)("p",{parentName:"li"}," Optionally, you can inspect the Pyrsia node logs to check where the image came from. This can be either:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"locally (if it was cached by Pyrsia before)"),(0,o.kt)("li",{parentName:"ul"},"from the Pyrsia network"),(0,o.kt)("li",{parentName:"ul"},"or from Docker Hub (if it wasn't previously available in the Pyrsia network)")))))}k.isMDXComponent=!0}}]);
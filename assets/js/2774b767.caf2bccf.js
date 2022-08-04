"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[2005],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12332:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/community/get_involved/local_dev_setup.md"},s="Setup your development environment",u={unversionedId:"community/get_involved/local_dev_setup",id:"community/get_involved/local_dev_setup",title:"Setup your development environment",description:"Pyrsia uses Rust programming language and will require you to setup Rust and it's dependencies.",source:"@site/docs/community/get_involved/local_dev_setup.md",sourceDirName:"community/get_involved",slug:"/community/get_involved/local_dev_setup",permalink:"/docs/community/get_involved/local_dev_setup",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/edit/main/docs/community/get_involved/local_dev_setup.md",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/community/get_involved/local_dev_setup.md"},sidebar:"tutorialSidebar",previous:{title:"Good Pull Requests",permalink:"/docs/community/get_involved/good_pr"},next:{title:"Submit a PR",permalink:"/docs/community/get_involved/submit_pr"}},p={},c=[{value:"Download the Source Code",id:"download-the-source-code",level:2},{value:"Install Rust",id:"install-rust",level:2},{value:"Install System Dependencies",id:"install-system-dependencies",level:3},{value:"Build code and run tests",id:"build-code-and-run-tests",level:2},{value:"Simulate a network",id:"simulate-a-network",level:2},{value:"Interact using the CLI",id:"interact-using-the-cli",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup-your-development-environment"},"Setup your development environment"),(0,o.kt)("p",null,"Pyrsia uses ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust programming language")," and will require you to setup Rust and it's dependencies."),(0,o.kt)("h2",{id:"download-the-source-code"},"Download the Source Code"),(0,o.kt)("p",null,"Clone the project repo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/pyrsia/pyrsia.git\n")),(0,o.kt)("p",null,"We will call this directory ",(0,o.kt)("inlineCode",{parentName:"p"},"$PYRSIA_HOME")),(0,o.kt)("h2",{id:"install-rust"},"Install Rust"),(0,o.kt)("p",null,"Setup rust on your local machine as described in ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/learn/get-started"},"Rust's getting started guide"),".\nYou may also follow ",(0,o.kt)("a",{parentName:"p",href:"https://www.forrestthewoods.com/blog/how-to-debug-rust-with-visual-studio-code/"},"How to Debug Rust with Visual Studio Code"),"\nif you are looking to make code changes."),(0,o.kt)("h3",{id:"install-system-dependencies"},"Install System Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Install Clang and OpenSSL"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"macOS: use ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew")," to install OpenSSL"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"brew install openssl@1.1\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Linux (ubuntu): use ",(0,o.kt)("inlineCode",{parentName:"p"},"apt")," to install Clang, OpenSSL and CMake"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"apt install clang libssl-dev cmake\n")))))),(0,o.kt)("h2",{id:"build-code-and-run-tests"},"Build code and run tests"),(0,o.kt)("p",null,"The base line is making sure all the code compiles and every test passes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd $PYRSIA_HOME\ncargo build --all-targets\ncargo test --workspace\n")),(0,o.kt)("p",null,"These commands should run successfully. If you have issues with these please reach out to the team on slack and report an issue/submit a PR."),(0,o.kt)("h2",{id:"simulate-a-network"},"Simulate a network"),(0,o.kt)("p",null,"Once you have compiled the Pyrsia code you are ready to build a Pyrsia network for testing. Pyrsia nodes are run on a peer to peer network and will require port separation if you would like to run multiple nodes on the same computer."),(0,o.kt)("p",null,"Follow the instructions below to setup a test network."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Node 1:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"DEV_MODE=on PYRSIA_ARTIFACT_PATH=pyrsia cargo run --bin pyrsia_node -- -p 7888\n\n# RUST_LOG=debug DEV_MODE=on PYRSIA_ARTIFACT_PATH=pyrsia cargo run --bin pyrsia_node -- -p 7888 # Use this environment variable if you would like to see debug logs\n")))),(0,o.kt)("p",null,"Test the pyrsia_node status using ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," (notice the port number for Node 1)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl --location --request GET 'http://localhost:7888/status'\n")),(0,o.kt)("p",null,"In a real life deployment these nodes will be spread over the network and will all run on their own 7888 port."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Node 2:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"DEV_MODE=on PYRSIA_ARTIFACT_PATH=pyrsia cargo run --bin pyrsia_node -- -p 7889\n\n# RUST_LOG=debug DEV_MODE=on PYRSIA_ARTIFACT_PATH=pyrsia cargo run --bin pyrsia_node -- -p 8181 # Use this environment variable if you would like to see debug logs\n")))),(0,o.kt)("p",null,"Test the pyrsia_node status using ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," (notice the port number for Node 2)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl --location --request GET 'http://localhost:7889/status'\n")),(0,o.kt)("p",null,"Now you have confirmed that the individual nodes are running."),(0,o.kt)("h2",{id:"interact-using-the-cli"},"Interact using the CLI"),(0,o.kt)("p",null,"You can use the Pyrsia CLI to ensure that the peers are connected."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Build the CLI tool"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd ../pyrsia_cli\ncargo build\ncd ../target/debug\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Configure the CLI tool for your node using interactive subcommand "config"'),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"}," ./pyrsia config --add\n")),(0,o.kt)("p",{parentName:"li"},"OR place the config file in these OS specific locations:"),(0,o.kt)("p",{parentName:"li"},"Mac:  $HOME/Library/Preferences/rs.pyrsia-cli/pyrsia-cli.toml\nLinux: $HOME/.config/rs.pyrsia-cli/pyrsia-cli.toml or $XDG_CONFIG_HOME/rs.pyrsia-cli/pyrsia-cli.toml\nWindows: %APPDATA%","\\","Roaming","\\","pyrsia-cli","\\","config","\\","pyrsia-cli.toml")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ping the Pyrsia node and list the status"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./pyrsia ping\nConnection Successfull !! {}\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ ./pyrsia -s\nConnected Peers Count:       1\nArtifacts Count:             3 {"manifests": 1, "blobs": 2}\nTotal Disk Space Allocated:  5.84 GB\nDisk Space Used:             0.0002%\n')))),(0,o.kt)("p",null,"If you see a status message similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Error: error sending request for url (http://localhost:7888/v2): error trying to connect: tcp connect error: Connection refused (os error 111)\n")),(0,o.kt)("p",null,"then your node is likely not running. Go back to step 3 to make sure the Pyrsia Node can be started."),(0,o.kt)("p",null,"Congratulations! You have now setup your developer environment and are ready to write code and submit a PR to Pyrsia. Head over to ",(0,o.kt)("a",{parentName:"p",href:"https://pyrsia.io/docs/get_involved/contributing/"},"contributing guidelines")," to start contributing to the project."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Word of caution: Running the peers for a few hours does generate network traffic and hence can drain your computer power. Ensure you are plugged into power if you are running multiple peers for a long time`")))}m.isMDXComponent=!0}}]);
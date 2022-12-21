(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),s=n(35),c=n.n(s),r=(n(43),n(5)),o=n(4),l=n(20),d=n(15),u=n.n(d),h=n(1),j=function(e){return void 0===u.a.get("jwt_token")?Object(h.jsx)(o.a,{to:"/signin"}):Object(h.jsx)(o.b,Object(l.a)({},e))},p=n(11),b=n(17),g=n(7),m=n(8),v=n(9),x=n(10),O=(n(52),function(e){Object(v.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={username:"",password:"",showErrorMsg:!1,showUsernameErrorMsg:"",showPasswordErrorMsg:""},e.usernameChanged=function(t){e.setState({username:t.target.value})},e.passwordChanged=function(t){e.setState({password:t.target.value})},e.loginSuccess=function(t,n,a){var i=e.props.history;u.a.set("jwt_token",t,{expires:30}),u.a.set("movies_username",n,{expires:30}),u.a.set("movies_password",a,{expires:30}),i.replace("/")},e.showErrorMsg=function(){e.setState({showErrorMsg:!0})},e.usernameBlurred=function(t){""===t.target.value?e.setState({showUsernameErrorMsg:!0}):e.setState({showUsernameErrorMsg:!1})},e.passwordBlurred=function(t){""===t.target.value?e.setState({showPasswordErrorMsg:!0}):e.setState({showPasswordErrorMsg:!1})},e.getAccessToken=Object(b.a)(Object(p.a)().mark((function e(){var t,n,a,i;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"e0f651cd0a119e2743046fd2ebe55ff8",t="https://api.themoviedb.org/3/authentication/token/new?api_key=".concat("e0f651cd0a119e2743046fd2ebe55ff8"),n={method:"GET"},e.next=5,fetch(t,n);case 5:return a=e.sent,e.next=8,a.json();case 8:return i=e.sent,e.abrupt("return",i.request_token);case 10:case"end":return e.stop()}}),e)}))),e.signinClicked=Object(b.a)(Object(p.a)().mark((function t(){var n,a,i,s,c,r,o,l,d;return Object(p.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state,a=n.username,i=n.password,t.next=3,e.getAccessToken();case 3:return s=t.sent,c={username:a,password:i,request_token:s},"1b2d30ef98a7d05a52a075002d77b253",r="https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=".concat("1b2d30ef98a7d05a52a075002d77b253"),o={method:"POST",body:JSON.stringify(c),headers:{"Content-type":"application/json"}},t.next=10,fetch(r,o);case 10:return l=t.sent,t.next=13,l.json();case 13:d=t.sent,l.ok?e.loginSuccess(d.jwtToken,a,i):e.showErrorMsg();case 15:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.showErrorMsg,n=e.showUsernameErrorMsg,a=e.showPasswordErrorMsg;return void 0!==u.a.get("jwt_token")?Object(h.jsx)(o.a,{to:"/"}):Object(h.jsxs)("div",{className:"signin-bg-container",children:[Object(h.jsx)("img",{src:"https://res.cloudinary.com/degjdup40/image/upload/v1624546015/Group_73991px_irgijd.png",alt:"movies-logo",className:"signin-movies-logo"}),Object(h.jsx)("div",{className:"signin-main-container",children:Object(h.jsxs)("div",{className:"signin-form-container",children:[Object(h.jsx)("h1",{className:"signin-form-heading",children:"Sign In"}),Object(h.jsxs)("form",{className:"signin-form",children:[Object(h.jsxs)("div",{className:"signin-labelinput-container",children:[Object(h.jsx)("label",{className:"signin-label",htmlFor:"signin-username",children:"USERNAME"}),Object(h.jsx)("input",{onChange:this.usernameChanged,className:"signin-input",type:"text",id:"signin-username",onBlur:this.usernameBlurred}),n&&Object(h.jsx)("p",{className:"signin-error-msg",children:"*Required"})]}),Object(h.jsxs)("div",{className:"signin-labelinput-container",children:[Object(h.jsx)("label",{className:"signin-label",htmlFor:"signin-password",children:"PASSWORD"}),Object(h.jsx)("input",{onChange:this.passwordChanged,className:"signin-input",type:"password",id:"signin-password",onBlur:this.passwordBlurred}),a&&Object(h.jsx)("p",{className:"signin-error-msg",children:"*Required"})]}),t&&Object(h.jsx)("p",{className:"signin-error-msg",children:"Please enter a valid Email & Password"}),Object(h.jsx)("div",{className:"signin-button-container",children:Object(h.jsx)("button",{onClick:this.signinClicked,className:"signin-button",type:"button",children:"Sign In"})})]})]})})]})}}]),n}(a.Component)),f=O,k=n(37),N=(n(53),function(e){Object(v.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={input:""},e.inputChanged=function(t){e.setState({input:t.target.value})},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.backgroundColor,n=e.hideLinkSearchProfile,a=e.linkText,i=e.highlightHomeLink,s=e.highlightPopularLink,c=this.state.input;return Object(h.jsxs)("div",{style:{background:t},className:"navbar-bg-container",children:[Object(h.jsxs)("div",{className:"navbar-logo-container",children:[Object(h.jsx)(r.b,{to:"/",children:Object(h.jsx)("img",{src:"https://res.cloudinary.com/degjdup40/image/upload/v1624546015/Group_73991px_irgijd.png",alt:"movies logo",className:"navbar-logo"})}),Object(h.jsxs)("div",{style:{display:n?"none":""},children:[Object(h.jsx)(r.b,{to:"/",className:"navbar-link ".concat(i?"navbar-highlight-link":""),children:"Home"}),Object(h.jsx)(r.b,{to:"/".concat(a.toLowerCase()),className:"navbar-link ".concat(s?"navbar-highlight-link":""),children:a})]})]}),Object(h.jsxs)("div",{style:{display:n?"none":""},className:"navbar-profile-container",children:[Object(h.jsxs)("div",{className:"navbar-search-container",children:[Object(h.jsx)("input",{onChange:this.inputChanged,className:"navbar-input",type:"search",value:c}),Object(h.jsx)(r.b,{to:"/search/".concat(c),children:Object(h.jsx)(k.a,{onClick:this.searchClicked,className:"navbar-search-icon"})})]}),Object(h.jsx)(r.b,{to:"/account",children:Object(h.jsx)("img",{src:"https://res.cloudinary.com/degjdup40/image/upload/v1624546765/Avatar_1_e4m0j7.png",alt:"profile-avatar",className:"navbar-profile-avatar"})})]})]})}}]),n}(a.Component)),w=Object(o.g)(N),y=n(32),A=n.n(y),C=n(18),S=n.n(C),M=(n(87),{dots:!1,infinite:!1,speed:500,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:3,slidesToScroll:3}}]}),P=function(e){Object(v.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).fetchMoviesData=function(){var e=a.props.url;fetch(e).then((function(e){return e.json()})).then((function(e){a.setState({moviesData:e.results})}))},a.renderSlider=function(){var e=a.state.moviesData;return Object(h.jsx)(A.a,Object(l.a)(Object(l.a)({},M),{},{children:e.map((function(e){var t="https://image.tmdb.org/t/p/original/".concat(e.poster_path);return Object(h.jsx)(r.b,{to:"/movie/".concat(e.id),children:Object(h.jsx)("div",{className:"react-slick-item",children:Object(h.jsx)("img",{className:"poster",src:t,width:"100%",height:"100%",alt:"pic_".concat(e.id)})})},e.id)}))}))},a.state={moviesData:[]},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.fetchMoviesData()}},{key:"render",value:function(){var e=this.state.moviesData,t=this.props.title;return Object(h.jsxs)("div",{className:"slick-app-container",children:[Object(h.jsx)("h1",{className:"slick-app-heading",children:t}),Object(h.jsxs)("div",{style:{width:"80%"},children:[e.length?this.renderSlider():Object(h.jsx)(S.a,{style:{textAlign:"center"},type:"TailSpin",color:"red",height:50,width:50}),Object(h.jsx)(A.a,Object(l.a)({},M))]})]})}}]),n}(a.Component),L=n(38),_=(n(93),[{id:0,url:"https://www.google.com/search?q=netflix&sxsrf=ALeKk00QGh7KCvkYObkfzlDcXLDyWXEL9A%3A1624985056345&source=hp&ei=4E3bYL6eEtmp3LUP6fussAw&iflsig=AINFCbYAAAAAYNtb8PND2Ymo2goStnyjHwqeJ_iK94zk&oq=netflix&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBAgjECcyBQgAEJECMgUIABCRAjIICAAQsQMQkQIyCggAEIcCELEDEBQyBQgAELEDMgUIABCxAzIFCAAQsQM6BAgAEEM6AggAOggIABCxAxCDAToHCAAQsQMQQzoFCAAQyQNQiwpY7RJgqztoAHAAeACAAb4FiAGDFpIBDTAuMS4wLjIuMy4wLjGYAQCgAQGqAQdnd3Mtd2l6&sclient=gws-wiz&ved=0ahUKEwi-jq-Ipb3xAhXZFLcAHek9C8YQ4dUDCAc&uact=5"},{id:1,url:"https://twitter.com/netflix?lang=en"},{id:2,url:"https://www.instagram.com/netflix/"},{id:3,url:"https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw"}]),E=function(){return Object(h.jsxs)("div",{className:"footer-bg-container",children:[Object(h.jsx)("div",{children:_.map((function(e){return Object(h.jsx)(L.SocialIcon,{target:"_blank",bgColor:"transparent",fgColor:"#ffffff",url:e.url},e.id)}))}),Object(h.jsx)("p",{children:"Contact Us"})]})},D=(n(94),[{id:0,title:"Trending",url:"https://api.themoviedb.org/3/trending/all/week?api_key=1b2d30ef98a7d05a52a075002d77b253"},{id:1,title:"Top Rated",url:"https://api.themoviedb.org/3/movie/top_rated?api_key=1b2d30ef98a7d05a52a075002d77b253&language=en-US"},{id:2,title:"Originals",url:"https://api.themoviedb.org/3/discover/tv?api_key=1b2d30ef98a7d05a52a075002d77b253"}]),T=function(e){Object(v.a)(n,e);var t=Object(x.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"home-top-container",children:[Object(h.jsx)(w,{linkText:"Popular",hideLinkSearchProfile:!1,backgroundColor:"transparent",highlightHomeLink:!0,highlightPopularLink:!1}),Object(h.jsxs)("div",{className:"home-top-container-content",children:[Object(h.jsx)("h1",{className:"home-top-container-heading",children:"Super Man"}),Object(h.jsx)("p",{className:"home-top-container-description",children:"Superman is a fictional superhero who first appeared in American comic books published by DC Comics"}),Object(h.jsx)("button",{className:"home-top-container-button",type:"button",children:"Play"})]})]}),Object(h.jsx)("div",{className:"home-bottom-container",children:Object(h.jsx)("div",{children:D.map((function(e){return Object(h.jsx)(P,{url:e.url,title:e.title},e.id)}))})}),Object(h.jsx)(E,{})]})}}]),n}(a.Component),B=T,Q=(n(95),function(e){Object(v.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={movieData:{},isLoading:!0},e.timeInHrs=function(e){var t=parseInt(e/60,10),n=e-60*t;return"".concat(t,"h ").concat(n,"m")},e.getMovieData=Object(b.a)(Object(p.a)().mark((function t(){var n,a,i,s,c,r,o,l;return Object(p.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.match,a=n.params,i=a.id,t.next=5,fetch("https://api.themoviedb.org/3/movie/".concat(i,"?api_key=1b2d30ef98a7d05a52a075002d77b253&language=en-US"));case 5:return s=t.sent,t.next=8,s.json();case 8:return c=t.sent,t.next=11,fetch("https://api.themoviedb.org/3/movie/".concat(i,"/similar?api_key=1b2d30ef98a7d05a52a075002d77b253&language=en-US"));case 11:return r=t.sent,t.next=14,r.json();case 14:o=t.sent,l={backdropPath:c.backdrop_path,originalTitle:c.original_title,runtime:e.timeInHrs(c.runtime),adult:c.adult,releaseYear:new Date(c.release_date).getFullYear(),overview:c.overview,genres:c.genres,spokenLanguages:c.spoken_languages,voteCount:c.vote_count,voteAverage:c.vote_average,budget:c.budget,releaseDate:c.release_date,moreMovies:o.results},e.setState({movieData:l,isLoading:!1});case 17:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getMovieData()}},{key:"componentDidUpdate",value:function(){this.getMovieData()}},{key:"render",value:function(){var e=this.state,t=e.movieData,n=e.isLoading,a={backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat(t.backdropPath,")"),minHeight:"100vh",padding:"16px",backgroundSize:"cover"};return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{style:a,children:[Object(h.jsx)(w,{linkText:"Popular",hideLinkSearchProfile:!1,backgroundColor:"transparent"}),n?Object(h.jsx)(S.a,{style:{textAlign:"center"},type:"TailSpin",color:"red",height:50,width:50}):Object(h.jsxs)("div",{className:"movie-content-container",children:[Object(h.jsx)("h1",{className:"movie-heading",children:t.originalTitle}),Object(h.jsx)("span",{children:t.runtime}),Object(h.jsx)("span",{className:"movie-adult-rating",children:t.adult?"A":"UA"}),Object(h.jsx)("span",{children:t.releaseYear}),Object(h.jsx)("p",{className:"movie-description",children:t.overview}),Object(h.jsx)("button",{className:"movie-button",type:"button",children:"Play"})]})]}),n?Object(h.jsx)(S.a,{type:"TailSpin",color:"red",height:50,width:50}):Object(h.jsxs)("div",{className:"movie-bottom-container",children:[Object(h.jsxs)("div",{className:"movie-details-container",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"movie-detail-heading",children:"Genres"}),!n&&void 0!==t.genres&&t.genres.map((function(e){return Object(h.jsx)("p",{children:e.name},e.id)}))]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"movie-detail-heading",children:"Audio Available"}),!n&&void 0!==t.spokenLanguages&&t.spokenLanguages.map((function(e){return Object(h.jsx)("p",{children:e.name},e.id)}))]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"movie-detail-heading",children:"Rating Count"}),Object(h.jsx)("p",{children:t.voteCount}),Object(h.jsx)("p",{className:"movie-detail-heading",children:"Rating Average"}),Object(h.jsx)("p",{children:t.voteAverage})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"movie-detail-heading",children:"Budget"}),Object(h.jsx)("p",{children:t.budget}),Object(h.jsx)("p",{className:"movie-detail-heading",children:"Release Date"}),Object(h.jsx)("p",{children:t.releaseDate})]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"movies-more-heading",children:"More like this"}),Object(h.jsx)("div",{children:!n&&void 0!==t.moreMovies&&t.moreMovies.map((function(e){return Object(h.jsx)(r.b,{to:"/movie/".concat(e.id),children:Object(h.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(e.poster_path),alt:e.id,className:"movies-more-poster"})},e.id)}))})]})]})]})}}]),n}(a.Component)),U=Q,I=n(33),F=(n(96),function(e){var t=e.moveBackPage,n=e.moveForwardPage,a=e.pageNumber;return Object(h.jsxs)("div",{className:"pagination-buttons-container",children:[Object(h.jsx)(I.a,{className:"pagination-button pagination-back-button",onClick:function(){t()}}),Object(h.jsxs)("span",{children:[a," of 20"]}),Object(h.jsx)(I.b,{className:"pagination-button pagination-forward-button",onClick:function(){n()}})]})}),H=(n(97),function(e){var t=e.inputText;return Object(h.jsxs)("div",{children:[Object(h.jsx)(w,{linkText:"Popular",hideNavbarLinkElement:!1,backgroundColor:"#000000",highlightHomeLink:!1,highlightPopularLink:!0}),Object(h.jsxs)("div",{className:"nomatch-container",children:[Object(h.jsx)("img",{src:"https://res.cloudinary.com/dfheomufg/image/upload/v1625139326/Movies%20App/Group_7394_zavyom.png",alt:"not found"}),Object(h.jsxs)("h1",{children:["Your search for ",t," did not find any matches."]})]})]})}),q=(n(98),function(e){Object(v.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={searchMoviesList:[],isLoading:!0,inputText:"",pageNumber:1},e.getSearchMovies=Object(b.a)(Object(p.a)().mark((function t(){var n,a,i,s,c,r;return Object(p.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.pageNumber,a=e.props.match,i=a.params,s=i.input,t.next=6,fetch("https://api.themoviedb.org/3/search/movie?api_key=1b2d30ef98a7d05a52a075002d77b253&language=en-US&page=".concat(n,"&query=").concat(s));case 6:return c=t.sent,t.next=9,c.json();case 9:r=t.sent,e.setState({searchMoviesList:r.results,isLoading:!1,inputText:s});case 11:case"end":return t.stop()}}),t)}))),e.moveBackPage=function(){e.setState((function(e){return 1===e.pageNumber?null:{pageNumber:e.pageNumber-1}}))},e.moveForwardPage=function(){e.setState((function(e){return 20===e.pageNumber?null:{pageNumber:e.pageNumber+1}}))},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getSearchMovies()}},{key:"componentDidUpdate",value:function(){this.getSearchMovies()}},{key:"render",value:function(){var e=this.state,t=e.searchMoviesList,n=e.isLoading,a=e.inputText,i=e.pageNumber;return 0!==t.length||n?Object(h.jsxs)("div",{className:"moviesearch-bg-container",children:[Object(h.jsx)(w,{linkText:"Popular",hideLinkSearchProfile:!1,backgroundColor:"transparent",highlightHomeLink:!1,highlightPopularLink:!0}),n?Object(h.jsx)(S.a,{style:{textAlign:"center"},type:"TailSpin",color:"red",height:50,width:50}):Object(h.jsxs)("div",{className:"moviesearch-movies-container",children:[t.map((function(e){return null!==e.backdrop_path?Object(h.jsx)(r.b,{to:"/movie/".concat(e.id),children:Object(h.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(e.backdrop_path),alt:e.id,className:"movies-more-poster"})},e.id):null})),Object(h.jsx)(F,{moveBackPage:this.moveBackPage,moveForwardPage:this.moveForwardPage,pageNumber:i})]})]}):Object(h.jsx)(H,{inputText:a})}}]),n}(a.Component)),Y=q,z=(n(99),function(e){Object(v.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={popularMovies:[],isLoading:!0,pageNumber:1},e.getPopularMovies=Object(b.a)(Object(p.a)().mark((function t(){var n,a,i;return Object(p.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.pageNumber,t.next=3,fetch("https://api.themoviedb.org/3/movie/popular?api_key=1b2d30ef98a7d05a52a075002d77b253&language=en-US&page=".concat(n));case 3:return a=t.sent,t.next=6,a.json();case 6:i=t.sent,e.setState({popularMovies:i.results,isLoading:!1});case 8:case"end":return t.stop()}}),t)}))),e.moveBackPage=function(){e.setState((function(e){return 1===e.pageNumber?null:{pageNumber:e.pageNumber-1}}))},e.moveForwardPage=function(){e.setState((function(e){return 20===e.pageNumber?null:{pageNumber:e.pageNumber+1}}))},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getPopularMovies()}},{key:"componentDidUpdate",value:function(){this.getPopularMovies()}},{key:"render",value:function(){var e=this.state,t=e.popularMovies,n=e.isLoading,a=e.pageNumber;return Object(h.jsxs)("div",{className:"popular-bg-container",children:[Object(h.jsx)(w,{linkText:"Popular",hideLinkSearchProfile:!1,backgroundColor:"transparent",highlightHomeLink:!1,highlightPopularLink:!0}),n?Object(h.jsx)(S.a,{style:{textAlign:"center"},type:"TailSpin",color:"red",height:50,width:50}):Object(h.jsxs)("div",{className:"popular-movies-container",children:[t.map((function(e){return Object(h.jsx)(r.b,{to:"/movie/".concat(e.id),children:Object(h.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(e.poster_path),alt:e.id,className:"movies-more-poster"})},e.id)})),Object(h.jsx)(F,{moveBackPage:this.moveBackPage,moveForwardPage:this.moveForwardPage,pageNumber:a})]})]})}}]),n}(a.Component)),G=z,R=(n(100),function(e){for(var t=e.history,n=u.a.get("movies_username"),a=u.a.get("movies_password").length,i="",s=0;s<a;s+=1)i=i.concat("*");return Object(h.jsxs)("div",{children:[Object(h.jsx)(w,{linkText:"My List",hideLinkSearchProfile:!1,backgroundColor:"#000000"}),Object(h.jsx)("div",{className:"account-bg-container",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"account-heading",children:"Account"}),Object(h.jsx)("hr",{className:"account-horizontal-line"}),Object(h.jsxs)("div",{className:"account-details-container",children:[Object(h.jsx)("p",{className:"account-text",children:"Membership"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"account-details",children:n}),Object(h.jsxs)("p",{className:"account-text",children:["Password: ",i]})]})]}),Object(h.jsx)("hr",{className:"account-horizontal-line"}),Object(h.jsxs)("div",{className:"account-details-container",children:[Object(h.jsx)("p",{className:"account-text",children:"Plan Details"}),Object(h.jsxs)("p",{className:"account-details",children:[Object(h.jsx)("span",{children:"Premium"}),Object(h.jsx)("span",{className:"account-resolution",children:"Ultra HD"})]})]}),Object(h.jsx)("hr",{className:"account-horizontal-line"}),Object(h.jsx)("div",{className:"account-button-container",children:Object(h.jsx)("button",{onClick:function(){u.a.remove("jwt_token"),t.replace("/signin")},className:"account-button",type:"button",children:"Logout"})})]})})]})}),J=(n(101),function(){return Object(h.jsx)(r.a,{children:Object(h.jsxs)(o.d,{children:[Object(h.jsx)(o.b,{path:"/signin",component:f}),Object(h.jsx)(j,{exact:!0,path:"/",component:B}),Object(h.jsx)(j,{path:"/popular",component:G}),Object(h.jsx)(j,{path:"/account",component:R}),Object(h.jsx)(j,{path:"/movie/:id",component:U}),Object(h.jsx)(j,{path:"/search/:input",component:Y}),Object(h.jsx)(j,{path:"/nomatchsearch",component:H}),Object(h.jsx)(f,{})]})})});c.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(J,{})}),document.getElementById("root"))},43:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},87:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.c015d43a.chunk.js.map
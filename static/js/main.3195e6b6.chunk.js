(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),s=a.n(r),i=(a(13),a(1)),o=a(2),m=a(4),u=a(3),l=a(5),d=(a(14),a(15),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-menu"},c.a.createElement("div",{id:"nowMenu",className:"menu-item focus-menu"},"AGORA"),c.a.createElement("div",{id:"hoursMenu",className:"menu-item"},"POR HORA"),c.a.createElement("div",{id:"15daysMenu",className:"menu-item"},"15 DIAS"),c.a.createElement("div",{id:"regionMenu",className:"menu-item"},"POR REGI\xc3O"))}}]),t}(n.Component)),p=(a(16),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={data:{temperature:"",condition:"",icon:"",sensation:"",humidity:"",pressure:"",wind_velocity:""}},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/http://apiadvisor.climatempo.com.br/api/v1/weather/locale/5864/current?token=c4914ccec5c2da1a8b08fd980bac3b68").then((function(e){return e.json()})).then((function(t){e.setState({data:{temperature:t.data.temperature,condition:t.data.condition,icon:t.data.icon,sensation:t.data.sensation,humidity:t.data.humidity,pressure:t.data.pressure,wind_velocity:t.data.wind_velocity}})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.data;return c.a.createElement("div",{id:"base-card",className:"base-card"},c.a.createElement("div",{className:"title-base-card"},"TEMPO AGORA EM",c.a.createElement("div",{className:"locale"},"Natal, RN")),c.a.createElement("div",{className:"temperature-box"},c.a.createElement("img",{className:"moment-icon",src:"/realistic/250px/"+e.icon+".jpg",alt:""}),c.a.createElement("div",{className:"moment-temperature"},c.a.createElement("div",{className:"temperature"},e.temperature,"\xba"),c.a.createElement("div",null,e.condition))),c.a.createElement("span",{className:"predictions"},"Sensa\xe7\xe3o",c.a.createElement("div",null,e.sensation,"\xba")),c.a.createElement("span",{className:"predictions"},"Umidade",c.a.createElement("div",null,e.humidity,"%")),c.a.createElement("span",{className:"predictions"},"Press\xe3o",c.a.createElement("div",null,e.pressure," hPa")),c.a.createElement("span",{className:"predictions"},"Vento",c.a.createElement("div",null,e.wind_velocity," km/h")))}}]),t}(n.Component)),f=(a(17),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={region:"nordeste",data:{regionImage:"",regiontext:""}},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="http://apiadvisor.climatempo.com.br/api/v1/forecast/region/"+this.state.region+"?token=c4914ccec5c2da1a8b08fd980bac3b68";fetch("https://cors-anywhere.herokuapp.com/"+t).then((function(e){return e.json()})).then((function(t){e.setState({data:{regionImage:t.data[0].image,regiontext:t.data[0].text}})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.data;return c.a.createElement("div",{id:"region-card",className:"region-card deactivate"},c.a.createElement("img",{className:"region-image",src:e.regionImage,alt:""}),c.a.createElement("div",{className:"region-text"},e.regiontext))}}]),t}(n.Component)),h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={focusedScene:"base-card",focusedMenuItem:0},a.handleKeyPress=function(e){if("ArrowRight"===e.key||"ArrowLeft"===e.key){e.preventDefault();for(var t=document.getElementsByClassName("menu-item"),n=0;n<t.length;n++)if("menu-item focus-menu"===t[n].className){t[n].className="menu-item",a.focusItem(e.key,t,n);break}}else"Enter"===e.key&&a.enterMenu()},a.focusItem=function(e,t,n){"ArrowRight"===e?n+1===t.length?n=0:n++:n-1===-1?n=t.length-1:n--,t[n].className="menu-item focus-menu",a.setState({focusedMenuItem:n})},a.enterMenu=function(){document.getElementById(a.state.focusedScene).className="deactivate",0===a.state.focusedMenuItem?a.focusScene("base-card"):1===a.state.focusedMenuItem?a.focusScene("region-card"):2===a.state.focusedMenuItem?a.focusScene("base-card"):3===a.state.focusedMenuItem&&a.focusScene("region-card")},a.focusScene=function(e){document.getElementById(e).className=e,a.setState({focusedScene:e})},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"title"},"Weather App",c.a.createElement("span",{className:"subtitle"},"Previs\xe3o do Tempo")),c.a.createElement(d,null),c.a.createElement(p,null),c.a.createElement(f,null))}}]),t}(n.Component);s.a.render(c.a.createElement(h,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.3195e6b6.chunk.js.map
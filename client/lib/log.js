//https://github.com/cpatik/console.log-wrapper
;if(Function.prototype.bind&&(typeof console==="object"||typeof console==="function")&&typeof console.log==="object"){["log","info","warn","error","assert","dir","clear","profile","profileEnd"].forEach(function(a){console[a]=this.call(console[a],console)},Function.prototype.bind)}if(!window.log){window.log=function(){log.history=log.history||[];log.history.push(arguments);if(typeof console!="undefined"&&typeof console.log=="function"){if(Array.prototype.slice.call(arguments).length===1&&typeof Array.prototype.slice.call(arguments)[0]==="string"){console.log(Array.prototype.slice.call(arguments).toString())}else{console.log(Array.prototype.slice.call(arguments))}}else if(!Function.prototype.bind&&typeof console!=="undefined"&&typeof console.log==="object"){Function.prototype.call.call(console.log,console,Array.prototype.slice.call(arguments))}else{if(!document.getElementById("firebug-lite")){var a=document.createElement("script");a.type="text/javascript";a.id="firebug-lite";a.src="https://getfirebug.com/firebug-lite.js";document.getElementsByTagName("HEAD")[0].appendChild(a);setTimeout(function(){log(Array.prototype.slice.call(arguments))},2e3)}else{setTimeout(function(){log(Array.prototype.slice.call(arguments))},500)}}}}
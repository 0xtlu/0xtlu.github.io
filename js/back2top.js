KEEP.initBack2Top=()=>{KEEP.utils={...KEEP.utils,back2BottomButton_dom:document.querySelector(".tool-scroll-to-bottom"),back2top(){const c=setInterval(function(){let t=document.body.scrollTop||document.documentElement.scrollTop;let o=t/2;if(document.body.scrollTop!==0){document.body.scrollTop-=o}else{document.documentElement.scrollTop-=o}if(t===0){clearInterval(c)}},50)},back2Bottom(){let t=document.body.scrollHeight||document.documentElement.scrollHeight;let o=document.body.scrollTop||document.documentElement.scrollTop;const c=setInterval(function(){if(!o)o=10;o=Math.floor(o+o/2);window.scrollTo(0,o);if(o>=t){clearInterval(c)}},50)},initBack2Top(){this.back2TopButton_dom.addEventListener("click",()=>{this.back2top()})},initBack2Bottom(){this.back2BottomButton_dom.addEventListener("click",()=>{this.back2Bottom()})}};KEEP.utils.initBack2Top();KEEP.utils.initBack2Bottom()};
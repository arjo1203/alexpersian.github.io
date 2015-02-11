var $WBAPP=function(){var e={};e.canvas=document.getElementById("myCanvas"),e.width=window.innerWidth,e.height=.95*window.innerHeight,e.canvas.width=e.width,e.canvas.height=e.height,e.penColor="black",e.bgColor="white",e.penStroke=3,e.eraseStroke=30;var n,a;return e.shape="",e.shapeStrokeColor="#95B1BD",e.night=!1,e.erasing=!1,e.nightBg="#002b36",e.nightBlack="#657b83",e.nightRed="#dc322f",e.nightBlue="#268bd2",e.nightGreen="#349900",document.addEventListener("touchmove",function(e){e.preventDefault()},!1),$(window).bind("beforeunload",function(){return"Save your drawing before leaving!!"}),e.erase=function(){e.erasing?(e.penColor=n,e.penStroke=a,document.getElementById("erase").innerHTML='Erase <span class="glyphicon glyphicon-unchecked" aria-hidden="true"></span>',e.erasing=!1):(n=e.penColor,a=e.penStroke,e.penColor=e.bgColor,e.penStroke=e.eraseStroke,document.getElementById("erase").innerHTML='Erase <span class="glyphicon glyphicon-check" aria-hidden="true"></span>',e.erasing=!0)},e.getDate=function(){var e=new Date,n=e.getFullYear(),a=e.getMonth()+1,t=e.getDate(),r=e.getHours(),o=e.getMinutes(),c=e.getSeconds();return n+"-"+a+"-"+t+"_"+r+":"+o+":"+c},e.changeColor=function(n){if(e.erasing&&e.erase(),e.night)switch(n){case"black":e.penColor=e.nightBlack;break;case"red":e.penColor=e.nightRed;break;case"blue":e.penColor=e.nightBlue;break;case"green":e.penColor=e.nightGreen}else e.penColor=n},e.changePenWidth=function(n){e.erasing?(a=n,document.getElementById("penDisplay").innerHTML="Pen Width: "+n+' <span class="caret"></span>'):(e.penStroke=n,document.getElementById("penDisplay").innerHTML="Pen Width: "+n+' <span class="caret"></span>')},e.changeEraserWidth=function(n){e.erasing?(e.eraseStroke=n,e.penStroke=e.eraseStroke,document.getElementById("eraseDisplay").innerHTML="Eraser Width: "+n+' <span class="caret"></span>'):(e.eraseStroke=n,document.getElementById("eraseDisplay").innerHTML="Eraser Width: "+n+' <span class="caret"></span>')},e.nightTheme=function(){if(c=confirm("This will clear the canvas. Are you sure?"),c){if(e.night){switch(document.getElementById("night").innerHTML='Night Theme <span class="glyphicon glyphicon-unchecked" aria-hidden="true"></span>',e.bgColor="#ffffff",e.shapeStrokeColor="#95B1BD",e.penColor){case"#495F66":e.penColor="black";break;case"#dc322f":e.penColor="red";break;case"#268bd2":e.penColor="blue";break;case"#859900":e.penColor="green"}e.night=!1}else{switch(document.getElementById("night").innerHTML='Night Theme <span class="glyphicon glyphicon-check" aria-hidden="true"></span>',e.bgColor=e.nightBg,e.shapeStrokeColor="#E3F6FF",e.penColor){case"black":e.penColor=e.nightBlack;break;case"red":e.penColor=e.nightRed;break;case"blue":e.penColor=e.nightBlue;break;case"green":e.penColor=e.nightGreen}e.night=!0}$WBPAPER.drawBackground()}},e.undo=function(){$WBPAPER.removePath()},e.clear=function(){c=confirm("Are you sure you want to clear the canvas?"),c&&(e.bgColor=e.night?e.nightBg:"#ffffff",$WBPAPER.drawBackground())},e.changeShape=function(n){e.shape=n,document.getElementById("shapeChoice").innerHTML=n+' <span class="caret"></span>'},e.createShape=function(){$WBPAPER.drawingMode?($WBPAPER.drawingMode=!1,$WBPAPER.shapeMode=!0,document.getElementById("createShape").className="glyphicon glyphicon-unchecked",document.getElementById("createShape").className="glyphicon glyphicon-check"):($WBPAPER.drawingMode=!0,$WBPAPER.shapeMode=!1,document.getElementById("createShape").className="glyphicon glyphicon-check",document.getElementById("createShape").className="glyphicon glyphicon-unchecked")},$("#btn-save").on("click",function(){this.download=e.getDate(),this.href=e.canvas.toDataURL("image/svg")}),$("#btn-load").on("change",function(n){var a=n.target.files[0],t=new FileReader;t.onload=function(n){e.clear(),$WBPAPER.loadRaster(n.target.result)},t.readAsDataURL(a)}),e}($WBAPP=$WBAPP||{});
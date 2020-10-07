(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["5990237d"],{"1d46":function(t,e,o){},"59f2":function(t,e,o){"use strict";var n=o("1d46"),a=o.n(n);a.a},"67f4":function(t,e,o){"use strict";o.r(e);var n,a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{},[o("div",{staticClass:"full-width q-pa-sm q-gutter-md fixed text-right\t",staticStyle:{"z-index":"200"}},[o("q-btn",{staticClass:"customButtonStyle",attrs:{label:"Select from Map"},on:{click:t.selectPointFromMap}}),o("q-btn",{staticClass:"customButtonStyle",attrs:{label:"Add Point"},on:{click:function(e){t.ShowPointSection=!0}}}),o("q-btn",{staticClass:"customButtonStyle",attrs:{label:"CSV To geoJSON"},on:{click:function(e){t.ShowCsvSection=!0}}}),t.ShowPointSection?o("q-card",{staticClass:"q-my-md bg-white"},[o("q-card-section",[o("q-input",{attrs:{label:"Coordinates"},model:{value:t.point,callback:function(e){t.point=e},expression:"point"}})],1),o("q-card-section",{staticClass:"q-gutter-md"},[o("q-btn",{staticClass:"customButtonStyle",attrs:{label:"Add"},on:{click:t.AddPoint}}),o("q-btn",{staticClass:"customButtonStyle",attrs:{label:"Close"},on:{click:function(e){t.ShowPointSection=!1}}})],1)],1):t._e(),t.ShowCsvSection?o("q-card",{staticClass:"q-my-md bg-white"},[o("q-card-section",{staticClass:"q-gutter-sm row items-start"},[o("div",{attrs:{id:"app"}},[o("FileReader",{on:{load:function(e){t.text=e}}}),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{rows:"8",cols:"74"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),o("br")],1),o("div",[o("div",[o("q-btn",{staticClass:"customButtonStyle",attrs:{label:"Convert to geoJSON"},on:{click:t.Convert}})],1),o("br"),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.myLinesString,expression:"myLinesString"}],attrs:{rows:"8",cols:"74"},domProps:{value:t.myLinesString},on:{input:function(e){e.target.composing||(t.myLinesString=e.target.value)}}})]),o("q-btn",{staticClass:"customButtonStyle",attrs:{label:"Add to Map"},on:{click:t.Add}}),o("q-btn",{staticClass:"customButtonStyle",attrs:{label:"Close"},on:{click:function(e){t.ShowCsvSection=!1}}})],1)],1):t._e()],1),o("div",{staticClass:"full-width"},[o("div",{attrs:{id:"mapCanvas"}})])])},i=[],s=o("c47a"),l=o.n(s),r=(o("28a5"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("label",{staticClass:"text-reader"},[o("q-input",{attrs:{id:"t",unelevated:"",flat:"",type:"file",accept:".csv"},on:{change:t.loadFile}})],1)}),c=[],d={methods:{loadFile:function(t){var e=this,o=t.target.files[0],n=new FileReader;n.onload=function(t){return e.$emit("load",t.target.result)},n.readAsText(o)}}},m=d,u=o("2877"),p=o("eebe"),h=o.n(p),g=o("27f9"),f=Object(u["a"])(m,r,c,!1,null,null,null),y=f.exports;h()(f,"components",{QInput:g["a"]});var v={name:"app",data:function(){return{map:"",text:"",point:"",myLines:[],myLinesString:[],ShowPointSection:!1,ShowCsvSection:!1,selectPoint:!1,createdGeoElements:""}},components:{FileReader:y},computed:{localTiles5To6:function(){return"https://maptrack.in/tiles1588/5To6Ind/{z}/{x}/{y}.png"},localTiles7To10:function(){return"https://maptrack.in/tiles1588/7To10Ind/{z}/{x}/{y}.png"},localTiles11To15:function(){return"https://maptrack.in/tiles1588/11To15Go/{z}/{x}/{y}.png"},localTiles16To17:function(){return"https://maptrack.in/tiles1588/16To17Go/{z}/{x}/{y}.png"},localTiles18Panaji:function(){return"https://maptrack.in/tiles1588/18Panaji/{z}/{x}/{y}.png"}},methods:(n={initMap:function(){var t=this,e=t.getBaseMap();t.map=L.map("mapCanvas",{center:[15.464213,73.849571],zoom:10,minZoom:5,maxZoom:25,layers:[e],attributionControl:!1,worldCopyJump:!0}),L.control.scale({metric:!0,imperial:!1}).addTo(t.map),L.control.attribution({prefix:'<a href="http://leafletjs.com" title="A JS library for interactive maps" target="_blank">Leaflet</a> | 2020 © <a href="https://freethink.co.in/" target="_blank">freeTHINK(India)</a> | © <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a>'}).addTo(t.map),t.map.on("click",(function(e){t.setCoordinates(e.latlng.lng,e.latlng.lat)})),this.createdGeoElements=new L.FeatureGroup,this.drawControl=new L.Control.Draw({position:"bottomright",draw:{rectangle:!1,circle:!1,circlemarker:!1,polygon:!1,polyline:!1,featureGroup:t.createdGeoElements}}),t.map.addControl(this.drawControl),t.map.on("draw:created",(function(e){t.isleftDrawerOpen=!0;e.layerType;var o=e.layer;t.createdGeoElements.addLayer(o),t.map.addLayer(t.createdGeoElements)}))},setCoordinates:function(t,e){1==this.selectPoint&&(this.point=t+","+e)},Add:function(){var t=this.myLines;L.geoJSON(t).addTo(this.map)},selectPointFromMap:function(){this.drawCursor=new L.Draw.Marker(this.map,this.drawControl.options.marker),this.drawCursor.enable()},AddPoint:function(){for(var t=this.point.split("\n"),e=0;e<t.length;e++){var o={type:"",coordinates:[]},n=t[e].split(",");o.type="Point";for(var a=0;a<n.length;a++)n[a]=parseFloat(n[a]);for(a=0;a<n.length;a+=2)o.coordinates.push(n[a],n[a+1]);this.myLines=[],this.myLines.push(o),this.myLinesString.push(JSON.stringify(o)),console.log(this.myLines)}this.text="",this.Add()}},l()(n,"Add",(function(){var t=this.myLines;console.log(t[0].coordinates[0]),console.log(t[0].coordinates[1]);for(var e=0;e<t.length;e++){var o=t[e].coordinates[0],n=t[e].coordinates[1];L.marker([o,n]).addTo(this.map)}})),l()(n,"Convert",(function(){for(var t=[],e=this.text.split("\n"),o=0;o<e.length;o++){var n={type:"",coordinates:[]},a=e[o].split(",");n.type=a[0];for(var i=1;i<a.length;i++)a[i]=parseFloat(a[i]);if("Point"===a[0])for(i=1;i<a.length;i+=2)n.coordinates.push(a[i],a[i+1]);if("LineString"===a[0])for(i=1;i<a.length;i+=2)n.coordinates.push([a[i],a[i+1]]);if("Polygon"===a[0]){for(i=1;i<a.length;i+=2)t.push([a[i],a[i+1]]);n.coordinates.push(t)}this.myLines.push(n),this.myLinesString.push(JSON.stringify(n)),console.log(this.myLines)}this.text=""})),l()(n,"getBaseMap",(function(){var t=L.latLng(3.776559,55.986328),e=L.latLng(36.456636,104.501953),o=L.latLngBounds(t,e),n=L.latLng(4.65308,67.763672),a=L.latLng(29.573457,89.208984),i=L.latLngBounds(n,a),s=L.latLng(14.636739,73.35022),l=L.latLng(15.91115,74.437866),r=L.latLngBounds(s,l),c=L.latLng(14.881087,73.666077),d=L.latLng(15.813396,74.358215),m=L.latLngBounds(c,d),u=L.layerGroup([L.tileLayer(this.localTiles5To6,{maxZoom:6,minZoom:5,bounds:o}),L.tileLayer(this.localTiles7To10,{maxZoom:10,minZoom:7,bounds:i}),L.tileLayer(this.localTiles11To15,{maxZoom:15,minZoom:11,bounds:r}),L.tileLayer(this.localTiles16To17,{maxZoom:25,maxNativeZoom:17,minZoom:16,bounds:m}),L.tileLayer(this.localTiles18Panaji,{maxZoom:25,maxNativeZoom:18,minZoom:18})]);return u})),n),mounted:function(){this.initMap()}},S=v,C=(o("59f2"),o("9989")),b=o("9c40"),w=o("f09f"),x=o("a370"),T=Object(u["a"])(S,a,i,!1,null,null,null);e["default"]=T.exports;h()(T,"components",{QPage:C["a"],QBtn:b["a"],QCard:w["a"],QCardSection:x["a"],QInput:g["a"]})}}]);
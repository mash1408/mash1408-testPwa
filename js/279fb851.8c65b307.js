(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["279fb851"],{"19c0":function(t,e,o){"use strict";var a=o("5496"),n=o.n(a);n.a},"1d46":function(t,e,o){},5496:function(t,e,o){},"59f2":function(t,e,o){"use strict";var a=o("1d46"),n=o.n(a);n.a},"67f4":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{},[o("q-drawer",{attrs:{"show-if-above":"",side:"right",width:300,breakpoint:500,height:500,elevated:"",bordered:"",overlay:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("q-scroll-area",{staticClass:"fit",staticStyle:{height:"200px","max-width":"300px"}},[o("q-list",{attrs:{padding:""}},[o("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"close"},on:{click:function(e){t.drawer=!t.drawer}}}),o("q-list",{staticClass:"rounded-borders sidebar-list",attrs:{bordered:""}},[o("q-expansion-item",{attrs:{"expand-separator":"",icon:"",label:"Add Manually",caption:"Select Category"},model:{value:t.manualAdd,callback:function(e){t.manualAdd=e},expression:"manualAdd"}},[o("q-card",{staticClass:"q-my-md bg-white"},[o("q-card-section",[o("p",[t._v(" Enter coordinates for point")]),o("q-input",{attrs:{label:"Coordinates"},model:{value:t.point,callback:function(e){t.point=e},expression:"point"}}),o("q-btn",{staticClass:"q-ml-xs q-mt-xs customButtonStyle",attrs:{label:"Add"},on:{click:t.AddPoint}}),o("q-btn",{staticClass:"q-ml-xs q-mt-xs customButtonStyle",attrs:{label:"Close"},on:{click:function(e){t.manualAdd=!1}}})],1),o("q-card-section",{staticClass:"q-gutter-md"}),o("q-card-section",[o("p",[t._v(" Enter coordinates for Line")]),o("q-input",{attrs:{label:"Coordinates"},model:{value:t.polylineCoords,callback:function(e){t.polylineCoords=e},expression:"polylineCoords"}}),o("q-btn",{staticClass:"q-ml-xs q-mt-xs customButtonStyle",attrs:{label:"Add"},on:{click:t.addPolyline}}),o("q-btn",{staticClass:" q-ml-xs q-mt-xs customButtonStyle",attrs:{label:"Close"},on:{click:function(e){t.manualAdd=!1}}})],1),o("q-card-section",[o("p",[t._v(" Enter coordinates for Polygon")]),o("q-input",{attrs:{label:"Coordinates"},model:{value:t.polygonCoords,callback:function(e){t.polygonCoords=e},expression:"polygonCoords"}}),o("q-btn",{staticClass:" q-ml-xs q-mt-xs customButtonStyle",attrs:{label:"Add"},on:{click:t.addPolygon}}),o("q-btn",{staticClass:" q-ml-xs q-mt-xs customButtonStyle",attrs:{label:"Close"},on:{click:function(e){t.manualAdd=!1}}})],1)],1)],1),o("q-expansion-item",{attrs:{"expand-separator":"",icon:"",label:"CSV to GeoJSON",caption:"Select Category"}},[o("q-btn",{staticClass:"customButtonStyle",attrs:{label:"CSV To geoJSON"},on:{click:function(e){t.ShowCsvSection=!0}}}),o("q-btn",{staticClass:"customButtonStyle",attrs:{label:"Download CSV"},on:{click:t.getCsvData}}),o("br"),o("br"),o("br"),t.ShowCsvSection?o("q-card",{staticClass:"q-my-md bg-white"},[o("q-card-section",{staticClass:"q-gutter-sm row items-start"},[o("div",{attrs:{id:"app"}},[o("FileReader",{on:{load:function(e){t.text=e}}}),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticStyle:{resize:"none"},attrs:{rows:"13",cols:"74"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),o("br")],1),o("div",[o("div",[o("q-btn",{staticClass:"customButtonStyle",attrs:{label:"Convert to geoJSON"},on:{click:t.Convert}})],1),o("br"),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.geoJsonText,expression:"geoJsonText"}],staticStyle:{resize:"none"},attrs:{rows:"13",cols:"74"},domProps:{value:t.geoJsonText},on:{input:function(e){e.target.composing||(t.geoJsonText=e.target.value)}}})]),o("q-btn",{staticClass:"customButtonStyle",attrs:{label:"Add to Map"},on:{click:t.AddToMap}}),o("q-btn",{staticClass:"customButtonStyle",attrs:{label:"Close"},on:{click:function(e){t.ShowCsvSection=!1}}})],1)],1):t._e()],1),o("q-expansion-item",{attrs:{"expand-separator":"",icon:"",label:"Add Manually",caption:"Select Category"},model:{value:t.manualAdd,callback:function(e){t.manualAdd=e},expression:"manualAdd"}})],1)],1)],1)],1),o("div",{staticClass:"full-width q-pa-sm q-gutter-md fixed text-center ",staticStyle:{"z-index":"200"}},[o("q-btn",{attrs:{round:"",color:"red",icon:"directions"},on:{click:function(e){t.drawer=!t.drawer}}}),o("q-btn",{staticClass:"customButtonStyle",attrs:{label:"Save"},on:{click:function(e){t.confirmSave=!0}}}),o("q-dialog",{attrs:{persistent:""},model:{value:t.confirmSave,callback:function(e){t.confirmSave=e},expression:"confirmSave"}},[o("q-card",[o("q-card-section",{staticClass:"row items-center"},[o("q-avatar",{attrs:{icon:"cloud_upload",color:"pink-10","text-color":"white"}}),o("span",{staticClass:"q-ml-sm"},[t._v("This will save the changes globally")])],1),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"customButtonStyle",attrs:{flat:"",label:"Cancel"}}),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"customButtonStyle",attrs:{flat:"",label:"Save"},on:{click:t.save}})],1)],1)],1),o("q-btn",{staticClass:"customButtonStyle",attrs:{label:"Reset"},on:{click:function(e){t.confirmReset=!0}}}),o("q-dialog",{attrs:{persistent:""},model:{value:t.confirmReset,callback:function(e){t.confirmReset=e},expression:"confirmReset"}},[o("q-card",[o("q-card-section",{staticClass:"row items-center"},[o("q-avatar",{attrs:{icon:"layers_clear",color:"pink-10","text-color":"white"}}),o("span",{staticClass:"q-ml-sm"},[t._v("Are you sure you want to reset")])],1),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"customButtonStyle",attrs:{flat:"",label:"Keep Working"}}),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"customButtonStyle",attrs:{flat:"",label:"OK"},on:{click:t.reset}})],1)],1)],1),o("q-btn-dropdown",{staticClass:"legend customButtonStyle ",attrs:{label:"Legends","dropdown-icon":"change_history"}},[o("q-list",{attrs:{dense:""}},[t._l(t.legendData,(function(e){return o("q-item",{key:e.label},[o("q-item-section",{attrs:{avatar:""}},[o("img",{staticClass:"icon",attrs:{src:e.source}})]),o("q-item-section",[o("q-item-label",{staticClass:"text-caption"},[t._v(t._s(e.label))])],1)],1)})),o("q-item",[o("q-item-section",{attrs:{avatar:""}},[o("q-avatar",{staticClass:"icon",attrs:{square:"",bordered:"",color:"green"}})],1),o("q-item-section",[o("q-item-label",{staticClass:"text-caption"},[t._v("Unknown")])],1)],1),o("q-item",[o("q-item-section",{attrs:{avatar:""}},[o("q-avatar",{staticClass:"icon",attrs:{square:"",bordered:"",color:"purple"}})],1),o("q-item-section",[o("q-item-label",{staticClass:"text-caption"},[t._v("Unknown")])],1)],1)],2)],1)],1),o("div",{staticClass:"full-width"},[o("div",{attrs:{id:"mapCanvas"}})])],1)},n=[],r=(o("a481"),o("ac4d"),o("8a81"),o("ac6a"),o("cadf"),o("06db"),o("456d"),o("28a5"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("label",{staticClass:"text-reader"},[o("q-input",{attrs:{filled:"",id:"t",type:"file",accept:".csv"},on:{input:function(e){t.readCsv(e[0])}}})],1)}),s=[],i={methods:{readCsv:function(t){var e=this,o=new FileReader;o.readAsText(t),o.onload=function(){var t=o.result.trim();e.$emit("load",t)}}}},l=i,c=o("2877"),p=o("eebe"),u=o.n(p),d=o("27f9"),m=Object(c["a"])(l,r,s,!1,null,null,null),h=m.exports;u()(m,"components",{QInput:d["a"]});var f={name:"app",data:function(){return{drawer:!0,miniState:!0,map:"",text:"",geoJsonText:"",point:"",myLines:[],myLinesString:[],ShowPointSection:!1,ShowCsvSection:!1,selectPoint:!1,showPolygoneSection:!1,showPolylineSection:!1,showIconSection:!1,showDeleteLayersSection:!1,showLinesEditSection:!1,showPolygonsEditSection:!1,polygonCoords:[],polylineCoords:[],baseLayerGroup:new L.layerGroup,layerGroupCentral:new L.layerGroup,layerGroupType:new L.layerGroup,createdGeoElements:"",qmarkers:!1,qlines:!1,qpolygons:!1,qcirclemarkers:!1,qrectangles:!1,qcircles:!1,manualAdd:!1,del:!1,confirmSave:!1,confirmReset:!1,defaultIcon:"",popUpContentMarker:"",popUpOptions:{autoPan:!0,autoClose:!0,className:"custom-popup"},legendData:this.$store.state.legendMarker}},components:{FileReader:h},computed:{localTiles5To6:function(){return"https://maptrack.in/tiles1588/5To6Ind/{z}/{x}/{y}.png"},localTiles7To10:function(){return"https://maptrack.in/tiles1588/7To10Ind/{z}/{x}/{y}.png"},localTiles11To15:function(){return"https://maptrack.in/tiles1588/11To15Go/{z}/{x}/{y}.png"},localTiles16To17:function(){return"https://maptrack.in/tiles1588/16To17Go/{z}/{x}/{y}.png"},localTiles18Panaji:function(){return"https://maptrack.in/tiles1588/18Panaji/{z}/{x}/{y}.png"},geoJson:function(){return this.$store.state.geoJson},geoJsonFeatures:function(){return this.$store.state.geoJson.features}},methods:{initMap:function(){var t=this,e=t.getBaseMap();t.map=L.map("mapCanvas",{center:[15.464213,73.849571],zoom:10,minZoom:5,maxZoom:25,layers:[e],attributionControl:!1,worldCopyJump:!0}),L.control.scale({metric:!0,imperial:!1}).addTo(t.map),L.control.attribution({prefix:'<a href="http://leafletjs.com" title="A JS library for interactive maps" target="_blank">Leaflet</a> | 2020 © <a href="https://freethink.co.in/" target="_blank">freeTHINK(India)</a> | © <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> |  <a href="https://www.flaticon.com/auth title="A JS library for interactive maps" target="_blank">Leaflet</a> | 2020 © <a href="https://freethink.co.in/" target="_blank">freeTHINK(India)</a> | © <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> Icon </a>'}).addTo(t.map),this.createdGeoElements=new L.featureGroup(this.layerGroupCentral).addTo(this.map),this.defaultIcon=L.icon({iconUrl:"../statics/icons/map-marker.png",iconSize:[38,38],iconAnchor:[19,38],popupAnchor:[1,-30],shadowSize:[68,95],shadowAnchor:[22,94]}),this.drawControl=new L.Control.Draw({position:"bottomleft",draw:{circlemarker:!1,circle:!1,marker:{icon:this.defaultIcon,shapeOptions:{riseOnHover:!0}},polyline:{allowIntersection:!1,showLength:!0,metric:["km","m"],drawError:{color:"#b00b00",timeout:2500},shapeOptions:{color:"blue"}},polygon:{showArea:!0,showLength:!0,metric:["km","m"],shapeOptions:{color:"blue"}},rectangle:{showArea:!0,showLength:!0,metric:["km","m"],shapeOptions:{color:"blue"}}},edit:{featureGroup:this.createdGeoElements,remove:!0,edit:!1}}),t.map.addControl(this.drawControl),t.map.on("draw:created",(function(e){t.isleftDrawerOpen=!0;var o=e.layerType,a=e.layer;"marker"===o?(t.draw(a),a.bindPopup(t.getPopUpMarker(a),t.popUpOptions),t.createdGeoElements.addLayer(a)):"polyline"===o?(t.draw(a),a.bindPopup(t.getPopUpLine(a),t.popUpOptions),t.createdGeoElements.addLayer(a)):"polygon"===o?(t.draw(a),a.bindPopup(t.getPopUpPolygon(a),t.popUpOptions),t.createdGeoElements.addLayer(a)):"rectangle"===o&&(t.draw(a),a.bindPopup(t.getPopUpRectangle(a),t.popUpOptions),t.createdGeoElements.addLayer(a))})),this.baseLayerGroup.addTo(this.map),this.layerGroupCentral.addTo(this.map);var o=L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png",{maxZoom:18,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'}),a={BaseMap:e,Colored:o};this.map.zoomControl.setPosition("topleft"),L.control.layers(a,null,{position:"topleft"}).addTo(this.map)},getPopUpMarker:function(t){var e=this,o=L.DomUtil.create("div"),a=this.createButton("Delete Layer",o,"customButton"),n=(this.createP("Select Type Of Parking",o,"customText"),this.createButton("",o,"carParking")),r=this.createButton("",o,"taxiParking"),s=this.createButton("",o,"truckParking"),i=this.createButton("",o,"busParking");return L.DomEvent.on(a,"click",(function(){e.layerGroupCentral.removeLayer(t)})),L.DomEvent.on(n,"click",(function(){e.updateIcon(t,"https://image.flaticon.com/icons/png/512/51/51778.png")})),L.DomEvent.on(r,"click",(function(){e.updateIcon(t,"https://www.iconfinder.com/data/icons/car-11/100/taxi3-512.png")})),L.DomEvent.on(s,"click",(function(){e.updateIcon(t,"https://www.iconfinder.com/data/icons/eldorado-transport/40/truck_1-512.png")})),L.DomEvent.on(i,"click",(function(){e.updateIcon(t,"https://cdn.iconscout.com/icon/premium/png-256-thumb/bus-1734816-1471755.png")})),o},getPopUpLine:function(t){var e=this,o=L.DomUtil.create("div"),a=this.createButton("Delete Layer",o,"customButton"),n=(this.createP("What Type Of Parking Lot?",o,"customText"),this.createButton("Paid",o,"customPaid")),r=this.createButton("Free",o,"customUnpaid");return L.DomEvent.on(a,"click",(function(){e.layerGroupCentral.removeLayer(t)})),L.DomEvent.on(r,"click",(function(){e.editColor("green",t)})),L.DomEvent.on(n,"click",(function(){e.editColor("red",t)})),o},getPopUpPolygon:function(t){var e=this,o=L.DomUtil.create("div"),a=this.createButton("Delete Layer",o,"customButton"),n=(this.createP("What Type Of Parking Lot?",o,"customText"),this.createButton("Paid",o,"customPaid")),r=this.createButton("Free",o,"customUnpaid");return L.DomEvent.on(a,"click",(function(){e.layerGroupCentral.removeLayer(t)})),L.DomEvent.on(r,"click",(function(){e.editColor("green",t)})),L.DomEvent.on(n,"click",(function(){e.editColor("red",t)})),o},getPopUpRectangle:function(t){var e=this,o=L.DomUtil.create("div"),a=this.createButton("Delete Layer",o,"customButton"),n=(this.createP("What Type Of Parking Lot?",o,"customText"),this.createButton("Paid",o,"customPaid")),r=this.createButton("Free",o,"customUnpaid");return L.DomEvent.on(a,"click",(function(){e.layerGroupCentral.removeLayer(t)})),L.DomEvent.on(r,"click",(function(){e.editColor("green",t)})),L.DomEvent.on(n,"click",(function(){e.editColor("red",t)})),o},save:function(){var t=this.layerGroupCentral.toGeoJSON();console.log(JSON.stringify(t.features,null,2)),this.$store.commit("addGeoElements",t.features)},draw:function(t){var e=this;e.layerGroupCentral.addLayer(t)},reset:function(){this.layerGroupCentral.clearLayers()},createButton:function(t,e,o){var a=L.DomUtil.create("button","",e);return a.setAttribute("type","button"),a.innerHTML=t,a.className=o,a},createP:function(t,e,o){var a=L.DomUtil.create("p","",e);return a.setAttribute("type","p"),a.innerHTML=t,a.className=o,a},getGeoJsonLayer:function(){var t=L.geoJSON(this.geoJson,{}).bindPopup((function(t){return"layer"}));return t},addLayerToMap:function(){this.baseLayerGroup.addLayer(this.getGeoJsonLayer())},updateColor:function(t,e){var o=e.feature=e.feature||{};o.type="Feature",o["properties"]=o["properties"]||{},o.properties["color"]=t},editColor:function(t,e){e.setStyle({color:t}),this.updateColor(t,e)},updateIcon:function(t,e){t._icon.setAttribute("src",e),console.log(t),this.updateMarkersIcon()},updateMarkersIcon:function(t,e){var o=e.feature=e.feature||{};o.type="Feature",o["properties"]=o["properties"]||{},o.properties["icon"]=t},AddPoint:function(){var t=this.point.split(","),e=L.marker([t[0],t[1]]);this.layerGroupMarkers.addLayer(e),this.point=""},getBaseMap:function(){var t=L.latLng(3.776559,55.986328),e=L.latLng(36.456636,104.501953),o=L.latLngBounds(t,e),a=L.latLng(4.65308,67.763672),n=L.latLng(29.573457,89.208984),r=L.latLngBounds(a,n),s=L.latLng(14.636739,73.35022),i=L.latLng(15.91115,74.437866),l=L.latLngBounds(s,i),c=L.latLng(14.881087,73.666077),p=L.latLng(15.813396,74.358215),u=L.latLngBounds(c,p),d=L.layerGroup([L.tileLayer(this.localTiles5To6,{maxZoom:6,minZoom:5,bounds:o}),L.tileLayer(this.localTiles7To10,{maxZoom:10,minZoom:7,bounds:r}),L.tileLayer(this.localTiles11To15,{maxZoom:15,minZoom:11,bounds:l}),L.tileLayer(this.localTiles16To17,{maxZoom:25,maxNativeZoom:17,minZoom:16,bounds:u}),L.tileLayer(this.localTiles18Panaji,{maxZoom:25,maxNativeZoom:18,minZoom:18})]);return d},addPolyline:function(){var t=[];console.log(this.polylineCoords);for(var e=this.polylineCoords.split(" "),o=0;o<e.length;o++){for(var a=[],n=e[o].split(","),r=0;r<n.length;r++)n[r]=parseFloat(n[r]);for(var s=0;s<n.length;s+=2)a.push(n[s],n[s+1]),console.log(a),t.push(a)}console.log(t);var i=L.polyline(t,{color:"red"});this.layerGroupLines.addLayer(i)},addPolygon:function(){var t=[];console.log(this.polygonCoords);for(var e=this.polygonCoords.split(" "),o=0;o<e.length;o++){for(var a=[],n=e[o].split(","),r=0;r<n.length;r++)n[r]=parseFloat(n[r]);for(var s=0;s<n.length;s+=2)a.push(n[s],n[s+1]),console.log(a),t.push(a)}console.log(t);var i=L.polygon(t,{color:"red"});this.layerGroupPolygons.addLayer(i)},getCsvData:function(){if(0===this.geoJsonFeatures.length)return alert("No Geo Elements found on map!");var t=this.geoJsonFeatures,e=t.map((function(t){return{geometry:t.geometry.type,coordinates:t.geometry.coordinates,icon:t.properties.icon?t.properties.icon:" "}})),o=this.convertoCsv(e);console.log(o),this.download(o)},convertoCsv:function(t){var e=[],o=Object.keys(t[0]);e.push(o.join(","));var a=!0,n=!1,r=void 0;try{for(var s,i=function(){var t=s.value,a=o.map((function(e){var o=(""+t[e]).replace(/"/g,'\\"');return'"'.concat(o,'"')}));e.push(a.join(","))},l=t[Symbol.iterator]();!(a=(s=l.next()).done);a=!0)i()}catch(c){n=!0,r=c}finally{try{a||null==l.return||l.return()}finally{if(n)throw r}}return e.join("\n")},download:function(t){var e=new Blob([t],{type:"text/csv"}),o=window.URL.createObjectURL(e),a=document.createElement("a");a.setAttribute("hidden",""),a.setAttribute("href",o),a.setAttribute("download","data.csv"),document.body.appendChild(a),a.click(),document.body.removeChild(a)},converToJson:function(t){var e=this,o={type:"FeatureCollection",features:[]},a=o.features,n=t.split("\n").splice(1),r=/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g;return n.forEach((function(t){var o=t.split(r);o=o.filter((function(t){return","!==t&&""!==t})),a.push({type:"Feature",properties:{icon:o[2].replaceAll('"',"")},geometry:{type:o[0].replaceAll('"',""),coordinates:e.parseCoords(o)}})})),o},parseCoords:function(t){var e=t[0].replaceAll('"',""),o=t[1].replaceAll('"',"").split(",");return o=o.map((function(t){return parseFloat(t)})),"Point"===e?o:"LineString"===e?(o=this.splitIntoSubArray(o,2),o):"Polygon"===e?(o=this.splitIntoSubArray(o,2),o=[o],o):void 0},splitIntoSubArray:function(t,e){var o=[];while(t.length>0)o.push(t.splice(0,e));return o},Convert:function(){if(!this.text)return alert("Upload a csv file!");var t=this.converToJson(this.text);this.geoJsonText=JSON.stringify(t,null,2),this.text=""},AddToMap:function(){if(!this.text)return alert("Upload a csv file!");var t=this.converToJson(this.text).features;this.$store.commit("updateGeoElements",t),this.text="",this.addLayerToMap(),this.ShowCsvSection=!1}},mounted:function(){this.initMap()}},y=f,g=(o("59f2"),o("19c0"),o("9989")),v=o("9404"),b=o("4983"),C=o("1c1c"),w=o("9c40"),k=o("3b73"),q=o("f09f"),x=o("a370"),S=o("24e8"),T=o("cb32"),P=o("4b7e"),B=o("f20b"),A=o("66e5"),G=o("4074"),D=o("0170"),E=o("7f67"),O=Object(c["a"])(y,a,n,!1,null,"03167c68",null);e["default"]=O.exports;u()(O,"components",{QPage:g["a"],QDrawer:v["a"],QScrollArea:b["a"],QList:C["a"],QBtn:w["a"],QExpansionItem:k["a"],QCard:q["a"],QCardSection:x["a"],QInput:d["a"],QDialog:S["a"],QAvatar:T["a"],QCardActions:P["a"],QBtnDropdown:B["a"],QItem:A["a"],QItemSection:G["a"],QItemLabel:D["a"]}),u()(O,"directives",{ClosePopup:E["a"]})}}]);
(this["webpackJsonplifesum-clone"]=this["webpackJsonplifesum-clone"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(34),i=n.n(s),r=(n(44),n(6)),o=(n(45),n(11)),l=n(7),u=(n(46),n(77)),d=(n(47),n(1)),m=function(e){var t={fontSize:"".concat(Math.round(Number(e.circleSize)/5),"px")},n={fontSize:"".concat(Math.round(Number(e.circleSize)/12),"px")};return Object(d.jsxs)("div",{className:"progresscircle",children:[Object(d.jsx)(u.a,{variant:"determinate",value:e.progress,size:"".concat(e.circleSize,"px"),color:"inherit",thickness:1.2}),Object(d.jsxs)("div",{className:"progresscircle-text",children:[Object(d.jsx)("h2",{style:t,children:e.calories}),Object(d.jsx)("h3",{style:n,children:e.message})]})]})},j=n(23);n(52),n(65);j.a.initializeApp({apiKey:"AIzaSyBuUbx8Hxva5oyPCSAAdGp9nBkzbaK1t6M",authDomain:"lifesum-clone.firebaseapp.com",projectId:"lifesum-clone",storageBucket:"lifesum-clone.appspot.com",messagingSenderId:"87225916127",appId:"1:87225916127:web:2a81ab0a4faf08b270e76a"});j.a.firestore(),j.a.auth();var b,h,p,f,O=j.a,g=function(e){var t=Object(a.useState)(1250),n=Object(r.a)(t,2),c=n[0],s=(n[1],Object(a.useState)(0)),i=Object(r.a)(s,2),o=i[0],l=i[1],u=Object(a.useState)(0),j=Object(r.a)(u,2),b=j[0],h=j[1],p=Object(a.useState)(0),f=Object(r.a)(p,2),O=f[0],g=f[1],x=Object(a.useState)(0),v=Object(r.a)(x,2),N=v[0],y=v[1],D=Object(a.useState)(0),C=Object(r.a)(D,2),S=C[0],k=C[1],w=Object(a.useState)({color:"white"}),F=Object(r.a)(w,2),P=F[0],E=F[1],U=Object(a.useState)("Calories Left"),I=Object(r.a)(U,2),z=I[0],B=I[1];return Object(a.useEffect)((function(){l(e.data.sumCal),h(e.data.sumBurnt)}),[e.data]),Object(a.useEffect)((function(){var e=o-b;g(e=e<0?0:e)}),[o,b]),Object(a.useEffect)((function(){var e=c-O,t=Math.round(O/c*100);t>100?(t%=100,e=O-c,B("Calories Over"),E({color:"rgb(219, 138, 105)"})):E({color:"white"}),t>200&&(t=100),y(e),k(t)}),[O,c]),Object(d.jsxs)("div",{className:"databar",children:[Object(d.jsxs)("div",{className:"databar-top",children:[Object(d.jsxs)("div",{className:"databar-data",children:[Object(d.jsx)("h2",{children:o}),Object(d.jsx)("h3",{children:"Calories Eaten"})]}),Object(d.jsx)("div",{className:"databar-calories",style:P,children:Object(d.jsx)(m,{progress:S,circleSize:"480",calories:N,message:z})}),Object(d.jsxs)("div",{className:"databar-data",children:[Object(d.jsx)("h2",{children:b}),Object(d.jsx)("h3",{children:"Calories Burnt"})]})]}),Object(d.jsxs)("div",{className:"databar-bottom",children:[Object(d.jsxs)("div",{className:"databar-data",children:[Object(d.jsx)("h2",{children:"Carbs"}),Object(d.jsx)("h3",{children:"###"})]}),Object(d.jsxs)("div",{className:"databar-data",children:[Object(d.jsx)("h2",{children:"Proetein"}),Object(d.jsx)("h3",{children:"###"})]}),Object(d.jsxs)("div",{className:"databar-data",children:[Object(d.jsx)("h2",{children:"Fat"}),Object(d.jsx)("h3",{children:"###"})]})]})]})},x=function(e){return Object(d.jsxs)("div",{className:"datechanger",children:[Object(d.jsx)("button",{onClick:function(){return e.dispatchDate({type:"decrement"})},children:"\u2b05"}),Object(d.jsx)("h1",{children:e.date}),Object(d.jsx)("button",{onClick:function(){return e.dispatchDate({type:"increment"})},children:"\u27a1"})]})},v=(n(54),function(e){var t=Object(a.useState)(e.meal),n=Object(r.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(e.totalCal),l=Object(r.a)(i,2),u=l[0],m=l[1],j={breakfast:{title:"Breakfast",emoji:"\ud83c\udf73"},lunch:{title:"Lunch",emoji:"\ud83e\udd57"},dinner:{title:"Dinner",emoji:"\ud83c\udf72"},snacks:{title:"Snacks",emoji:"\ud83c\udf50"}};return Object(a.useEffect)((function(){s(e.meal),m(e.totalCal)}),[e]),Object(d.jsxs)("div",{className:"mealbar",children:[Object(d.jsxs)("div",{className:"mealbar-top",children:[Object(d.jsx)("h2",{className:"mealbar-emoji",children:j[c].emoji}),Object(d.jsx)(o.b,{to:"meal/".concat(c),children:Object(d.jsxs)("div",{className:"mealbar-text",children:[Object(d.jsx)("h2",{children:j[c].title}),Object(d.jsx)("h3",{children:"Here I'll write down a list of foods"})]})}),Object(d.jsx)(o.b,{to:"meal/".concat(c,"/search"),children:Object(d.jsx)("button",{children:"\u2795"})})]}),Object(d.jsx)("div",{className:"mealbar-bottom",children:Object(d.jsxs)("h2",{children:[u," Calories"]})})]})}),N=(n(56),function(e){var t=Object(a.useState)(!0),n=Object(r.a)(t,2),c=n[0],s=n[1];return!0===c?Object(d.jsxs)("div",{className:"page-signin",children:[Object(d.jsx)("h2",{children:"Lifesum Clone"}),Object(d.jsx)("h3",{children:"Please Don't Use Real Private Information"}),Object(d.jsxs)("div",{className:"signin",children:[Object(d.jsx)("h1",{children:"Sign Up"}),Object(d.jsx)("input",{type:"text",placeholder:"username",id:"signUp-username",maxLength:"12",autoComplete:"off"}),Object(d.jsx)("input",{type:"email",placeholder:"fake email",id:"signUp-email",maxLength:"20",autoComplete:"off"}),Object(d.jsx)("input",{type:"password",placeholder:"password",id:"signUp-password",maxLength:"15",autoComplete:"off"}),Object(d.jsx)("button",{onClick:function(){var t=document.querySelector("#signUp-username"),n=document.querySelector("#signUp-email"),a=document.querySelector("#signUp-password"),c=O.auth().createUserWithEmailAndPassword(n.value,a.value);c.then((function(n){return e.changeSign(!!O.auth().currentUser),n.user.updateProfile({displayName:t.value})})),c.catch((function(e){return alert(e)}))},children:"Submit"}),Object(d.jsx)("h4",{children:"Already a member?"}),Object(d.jsx)("button",{onClick:function(){s(!1)},id:"signin-btnOther",children:"Log In"})]})]}):Object(d.jsxs)("div",{className:"page-signin",children:[Object(d.jsx)("h2",{children:"Lifesum Clone"}),Object(d.jsxs)("div",{className:"signin",children:[Object(d.jsx)("h1",{children:"Log In"}),Object(d.jsx)("input",{type:"email",placeholder:"email",id:"logIn-email",autoComplete:"off"}),Object(d.jsx)("input",{type:"password",placeholder:"password",id:"logIn-password",autoComplete:"off"}),Object(d.jsx)("button",{onClick:function(){var t=document.querySelector("#logIn-email"),n=document.querySelector("#logIn-password"),a=O.auth().signInWithEmailAndPassword(t.value,n.value);a.then((function(t){e.changeSign(!!O.auth().currentUser)})),a.catch((function(e){return alert(e)}))},children:"Log In"}),Object(d.jsx)("h4",{children:"Not a member?"}),Object(d.jsx)("button",{onClick:function(){s(!0)},id:"signin-btnOther",children:"Sign Up"})]})]})}),y=(n(57),n(28)),D=function(e){var t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),a=e.getFullYear();return e=t+"-"+n+"-"+a},C=function(e){if(""!==e&&"string"===typeof e)return e.charAt(0).toUpperCase()+e.slice(1)},S=function(e,t){var n=e.nutrition.nutrients.filter((function(e){return e.name===t}));return n.length>0?n[0]:{name:"Not Found",amount:0,unit:"cal",percentOfDailyNeeds:0}},k=function(e,t,n){var a=Object(y.a)({},e);a.meals[t].foods.push(n);return[["sumCal","Calories"],["sumFat","Fat"],["sumProtein","Protein"],["sumCarb","Carbohydrates"]].forEach((function(e){var c=n.nutrition.nutrients.filter((function(t){return t.name===e[1]}))[0];a=function(e,t,n,a,c){var s=Object(y.a)({},e);return s.meals[t][n]=Math.round("add"===c?s.meals[t][n]+a:s.meals[t][n]-a),s[n]=Math.round("add"===c?s[n]+a:s[n]-a),s}(a,t,e[0],c.amount,"add")})),n.nutrition.nutrients.forEach((function(e){a=function(e,t,n,a,c,s){var i=Object(y.a)({},e);return i.meals[t].nutrients=i.meals[t].nutrients.map((function(e){return e.name===n&&(e.amount=Math.round("add"===s?e.amount+a:e.amount-a),void 0!==e.percentOfDailyNeeds&&(e.percentOfDailyNeeds=Math.round("add"===s?e.percentOfDailyNeeds+c:e.percentOfDailyNeeds-c))),e})),i.nutrients=i.nutrients.map((function(e){return e.name===n&&(e.amount=Math.round("add"===s?e.amount+a:e.amount-a),void 0!==e.percentOfDailyNeeds&&(e.percentOfDailyNeeds=Math.round(e.percentOfDailyNeeds+c))),e})),i}(a,t,e.name,e.amount,e.percentOfDailyNeeds,"add")})),a},w=[{name:"Calories",amount:0,unit:"cal",percentOfDailyNeeds:0},{name:"Fat",amount:0,unit:"g",percentOfDailyNeeds:0},{name:"Saturated Fat",amount:0,unit:"g",percentOfDailyNeeds:0},{name:"Carbohydrates",amount:0,unit:"g",percentOfDailyNeeds:0},{name:"Net Carbohydrates",amount:0,unit:"g",percentOfDailyNeeds:0},{name:"Sugar",amount:0,unit:"g",percentOfDailyNeeds:0},{name:"Cholesterol",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Sodium",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Protein",amount:0,unit:"g",percentOfDailyNeeds:0},{name:"Vitamin C",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Manganese",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Fiber",amount:0,unit:"g",percentOfDailyNeeds:0},{name:"Vitamin B6",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Copper",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Vitamin B1",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Folate",amount:0,unit:"\xb5g",percentOfDailyNeeds:0},{name:"Potassium",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Magnesium",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Vitamin B3",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Vitamin B5",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Vitamin B2",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Iron",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Calcium",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Vitamin A",amount:0,unit:"IU",percentOfDailyNeeds:0},{name:"Zinc",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Phosphorus",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Vitamin K",amount:0,unit:"\xb5g",percentOfDailyNeeds:0},{name:"Selenium",amount:0,unit:"\xb5g",percentOfDailyNeeds:0},{name:"Vitamin E",amount:0,unit:"mg",percentOfDailyNeeds:0}],F={sumCal:0,sumFat:0,sumProtein:0,sumCarb:0,sumBurnt:0,meals:{breakfast:{sumCal:0,sumFat:0,sumProtein:0,sumCarb:0,foods:[],nutrients:w},lunch:{sumCal:0,sumFat:0,sumProtein:0,sumCarb:0,foods:[],nutrients:w},dinner:{sumCal:0,sumFat:0,sumProtein:0,sumCarb:0,foods:[],nutrients:w},snacks:{sumCal:0,sumFat:0,sumProtein:0,sumCarb:0,foods:[],nutrients:w}},nutrients:w},P={id:1111,name:"name",nameClean:"name clean",amount:1,unit:"g",possibleUnits:["piece","slice","fruit","g","oz","cup","serving"],image:"imgFile",meta:[],nutrition:{nutrients:[{name:"Calories",amount:170,unit:"cal",percentOfDailyNeeds:10},{name:"Fat",amount:13,unit:"g",percentOfDailyNeeds:3},{name:"Saturated Fat",amount:11,unit:"g",percentOfDailyNeeds:50},{name:"Carbohydrates",amount:56,unit:"g",percentOfDailyNeeds:8},{name:"Net Carbohydrates",amount:0,unit:"g",percentOfDailyNeeds:0},{name:"Sugar",amount:32,unit:"g",percentOfDailyNeeds:60},{name:"Cholesterol",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Sodium",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Protein",amount:23,unit:"g",percentOfDailyNeeds:30},{name:"Vitamin C",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Manganese",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Fiber",amount:0,unit:"g",percentOfDailyNeeds:0},{name:"Vitamin B6",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Copper",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Vitamin B1",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Folate",amount:0,unit:"\xb5g",percentOfDailyNeeds:0},{name:"Potassium",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Magnesium",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Vitamin B3",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Vitamin B5",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Vitamin B2",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Iron",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Calcium",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Vitamin A",amount:0,unit:"IU",percentOfDailyNeeds:0},{name:"Zinc",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Phosphorus",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Vitamin K",amount:0,unit:"\xb5g",percentOfDailyNeeds:0},{name:"Selenium",amount:0,unit:"\xb5g",percentOfDailyNeeds:0},{name:"Vitamin E",amount:0,unit:"mg",percentOfDailyNeeds:0}],caloricBreakdown:{percentProtein:30,percentFat:20,percentCarbs:50},weightPerServing:{amount:0,unit:"g"}}},E=function(e){var t=Object(a.useState)(D(new Date)),n=Object(r.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(!!O.auth().currentUser),o=Object(r.a)(i,2),l=o[0],u=o[1],m=Object(a.useState)(F),j=Object(r.a)(m,2),b=j[0],h=j[1];Object(a.useEffect)((function(){var t=!1;return!1===t&&(console.log("the date recorded now is: ",D(e.date)),s(D(e.date))),function(){t=!0}}),[e.date]),O.auth().onAuthStateChanged((function(){console.log("(auth state change) - Signed in ",!!O.auth().currentUser),u(!!O.auth().currentUser)}));return Object(a.useEffect)((function(){if(!0===l){console.log("(useEffect() of Home) - Am signed in");var e=O.firestore().collection("users").doc(O.auth().currentUser.uid).collection("days").doc(c);e.get().then((function(t){t.exists?e.onSnapshot((function(e){console.log("the doc of this date exists!",e),h(e.data())})):(console.log("the doc was not found, need to create it"),e.set(F),h(F))}))}}),[l,c]),l?Object(d.jsxs)("div",{className:"page-home",children:[Object(d.jsxs)("div",{className:"page-home-top",children:[Object(d.jsx)("button",{onClick:function(){O.auth().signOut()},children:"Sign Out"}),Object(d.jsx)(g,{date:c,data:b})]}),Object(d.jsx)(x,{date:c,dispatchDate:e.dispatchDate}),Object(d.jsx)("div",{className:"page-home-mealbars",children:["breakfast","lunch","dinner","snacks"].map((function(e){return Object(d.jsx)(v,{meal:e,totalCal:b.meals[e].sumCal},e)}))})]}):Object(d.jsx)(N,{changeSign:function(e){u(e)}})},U=(n(58),n(59),n(35)),I=function(e){var t=function(t){var n={fat:Number(e.data.sumFat),protein:Number(e.data.sumProtein),carb:Number(e.data.sumCarb)};return Number(e.data.sumFat)+Number(e.data.sumProtein)+Number(e.data.sumCarb)!==0?Math.round(n[t]/(Number(e.data.sumFat)+Number(e.data.sumProtein)+Number(e.data.sumCarb))*100):0},n={fat:"rgb(160, 192, 160)",protein:"rgb(128, 155, 135)",carb:"rgb(106, 128, 115)"},a={fat:"Fat",carb:"Carbs",protein:"Protein"};return Object(d.jsxs)("div",{className:"datalist",children:[Object(d.jsxs)("div",{className:"datalist-portion",children:[Object(d.jsxs)("h1",{children:[e.data.sumCal," Calories"]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"datalist-info",children:[Object(d.jsx)("h2",{children:"Recommended"}),Object(d.jsxs)("h2",{children:["".concat(e.goal-140,"-").concat(e.goal)," cals"]})]}),Object(d.jsxs)("div",{className:"datalist-info",children:[Object(d.jsx)("h2",{children:"Calories"}),Object(d.jsxs)("h2",{children:[e.data.sumCal," cals"]})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"datalist-info-pie",children:[Object(d.jsx)(U.PieChart,{className:"datalist-pie",data:[{title:"Fat",value:Number(e.data.sumFat),color:n.fat},{title:"Protein",value:Number(e.data.sumProtein),color:n.protein},{title:"Carb",value:Number(e.data.sumCarb),color:n.carb}]}),";",Object(d.jsx)("div",{className:"datalist-pie-info",children:["fat","protein","carb"].map((function(e){return Object(d.jsxs)("div",{className:"datalist-info",children:[Object(d.jsxs)("div",{className:"datalist-pie-label",children:[Object(d.jsx)("div",{className:"datalist-pie-color",style:{backgroundColor:n[e]}}),Object(d.jsx)("h2",{children:a[e]})]}),Object(d.jsxs)("h2",{children:[t(e),"%"]})]},e)}))})]})]}),Object(d.jsxs)("div",{className:"datalist-portion",children:[Object(d.jsxs)("div",{className:"datalist-info",children:[Object(d.jsx)("h2",{children:"Calories"}),Object(d.jsxs)("h2",{children:[e.data.sumCal," cals"]})]}),Object(d.jsxs)("div",{className:"datalist-info",children:[Object(d.jsx)("h2",{children:"Protein"}),Object(d.jsxs)("h2",{children:[e.data.sumProtein,"g"]})]}),Object(d.jsxs)("div",{className:"datalist-info",children:[Object(d.jsx)("h2",{children:"Carbs"}),Object(d.jsxs)("h2",{children:[e.data.sumCarb,"g"]})]}),Object(d.jsxs)("div",{className:"datalist-info",children:[Object(d.jsx)("h2",{children:"Fat"}),Object(d.jsxs)("h2",{children:[e.data.sumFat,"g"]})]})]})]})},z=n(24),B=n(25),M=B.a.div(b||(b=Object(z.a)(["\n  position: relative;\n  display: inline-block;\n\n  font-size: ",";\n\n  &:hover{\n    .dropdown-content {\n      display: block;\n    }\n  }\n\n  .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f9f9f9;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n  }\n\n  .dropdown-btn {\n    color: black;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n    border-bottom: 1px solid black;\n    cursor: pointer;\n    font-size: inherit;\n  }\n"])),(function(e){return e.fontSize||"15px"})),V=B.a.h3(h||(h=Object(z.a)([" \n  color: black;\n  font-size: ",";\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  &:hover {\n    background-color: #f1f1f1;\n  }\n"])),(function(e){return e.fontSize||"15px"})),A=B.a.div(p||(p=Object(z.a)(["\n\n  position: relative;\n  width: fit-content;\n\n  &:hover {\n    .component-message {\n      display: block;\n    }\n  }\n  .component-message {\n    display :none;\n    position: absolute;\n    top: -70px;\n    transition: 0.3s all linear;\n    background-color: #f9f9f9;\n    padding: 10px 20px;\n    border-radius: 30px;\n    width: fit-content;\n    font-size: 15px;\n  }\n"]))),L=B.a.div(f||(f=Object(z.a)(["\n  background-color: var(--primary);\n  border-radius: 50px;\n  width: ",";\n  color: white;\n  font-weight: 500;\n  font-size: 40px;\n  margin: 50px auto;\n  padding: 30px 0;\n  transition: 0.1s linear all;\n  text-align: center;\n  &: hover{\n    background-color: var(--primary-dark);\n  }\n"])),(function(e){return e.width||"100%"})),R=function(e){var t=Object(l.f)("/meal/:id").url.split("/");t=t[t.length-1];var n=Object(a.useState)(400),c=Object(r.a)(n,2),s=c[0],i=(c[1],Object(a.useState)(F.meals[t])),u=Object(r.a)(i,2),j=u[0],b=u[1],h=Object(a.useState)({color:"white"}),p=Object(r.a)(h,2),f=p[0],g=p[1],x=Object(a.useState)(0),v=Object(r.a)(x,2),N=v[0],y=v[1],C=Object(a.useState)(!!O.auth().currentUser),S=Object(r.a)(C,2),k=S[0],w=S[1];return Object(a.useEffect)((function(){var n=O.firestore();O.auth().currentUser?n.collection("users").doc(O.auth().currentUser.uid).collection("days").doc(D(e.date)).get().then((function(e){console.log("MyDoc in Meal: ",e),b(e.data().meals[t])})).catch((function(e){console.error("Error in Meal: ",e)})):console.log("not logged in cannot update meal")}),[e.date,t,k]),O.auth().onAuthStateChanged((function(){w(!!O.auth().currentUser)})),Object(a.useEffect)((function(){var e=Math.round(j.sumCal/s*100);e>100?(e%=100,g({color:"rgb(226, 190, 113)"})):g({color:"white"}),e>200&&(e=100,g({color:"rgb(219, 138, 105)"})),y(e)}),[j,s]),Object(d.jsxs)("div",{className:"page-meal",children:[Object(d.jsxs)("div",{className:"page-meal-top",children:[Object(d.jsx)("div",{className:"page-meal-progress",style:f,children:Object(d.jsx)(m,{progress:N,circleSize:"400",calories:j.sumCal,message:"calories eaten"})}),Object(d.jsx)("h2",{children:t}),Object(d.jsx)("h3",{children:D(e.date)})]}),Object(d.jsx)(o.b,{to:"".concat(t,"/search"),className:"page-meal-search-link",children:Object(d.jsx)(L,{width:"60%",children:"Add Food"})}),Object(d.jsx)("div",{className:"page-meal-foodlist"}),Object(d.jsx)("div",{className:"page-meal-datalist",children:Object(d.jsx)(I,{data:j,goal:s})}),Object(d.jsx)("div",{className:"page-meal-back-div",children:Object(d.jsx)(o.b,{to:"/",children:Object(d.jsx)("h2",{children:"\u2b05"})})})]})},T=n(21),q=n.n(T),K=n(27),G=(n(61),n(62),function(e){var t;return Object(d.jsx)("div",{className:"foodbar",children:Object(d.jsx)(o.b,{to:"/meal/".concat(e.meal,"/search/").concat((t=e.id,t.split("-")[1])),children:Object(d.jsxs)("div",{className:"foodbar-left",children:[e.imgSrc?Object(d.jsx)("img",{src:e.imgSrc,alt:e.title}):null,Object(d.jsxs)("div",{className:"foodbar-text",children:[Object(d.jsx)("h2",{children:C(e.title)}),e.calories?Object(d.jsxs)("h3",{children:[e.calories,"cal  \u26ab  ",e.quantity]}):null]})]})})})}),H=function(e){var t=Object(l.f)("/meal/:id/search").url.split("/");t=t[t.length-2];var n=Object(a.useState)(""),c=Object(r.a)(n,2),s=c[0],i=c[1];return Object(a.useEffect)((function(){var e=document.getElementById("page-searchbar"),t=function(t){13===t.keyCode&&(t.preventDefault(),console.log("clicked on enter from input, value:",e.value),i(e.value))};return e.addEventListener("keyup",t),function(){return console.log("Search Enter: removing event listener..."),e.removeEventListener("keyup",t)}}),[]),Object(a.useEffect)((function(){var t=!1;if(""!==s){function n(){return(n=Object(K.a)(q.a.mark((function n(){var a,c;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.spoonacular.com/food/ingredients/search?apiKey=".concat("533b3991a7534e9fae98b026145e06db","&query=").concat(s,"&number=25"));case 2:return a=n.sent,n.next=5,a.json();case 5:c=n.sent,!1===t&&(console.log("Results: ",c),e.dispatchResults({type:"update",payload:c.results}));case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}console.log("Going to fetch API info for: ",s),function(){n.apply(this,arguments)}()}return function(){t=!0}}),[s]),Object(d.jsxs)("div",{className:"page-search",children:[Object(d.jsxs)("div",{className:"page-search-top",children:[Object(d.jsxs)("div",{className:"page-search-nav",children:[Object(d.jsx)(o.b,{to:"/meal/".concat(t),children:Object(d.jsx)("button",{children:"\u2b05"})}),Object(d.jsx)("h2",{children:C(t)})]}),Object(d.jsx)("input",{type:"text",placeholder:"\ud83d\udd0d Search Food",id:"page-searchbar"})]}),Object(d.jsx)("div",{className:"page-search-items",children:e.results.map((function(e){return Object(d.jsx)(G,{id:"foodId-"+e.id,title:e.name,imgSrc:"https://spoonacular.com/cdn/ingredients_100x100/"+e.image,meal:t},e.id)}))})]})},J=(n(63),function(e){var t=Object(l.f)("/meal/:id/search/:id").url.split("/");console.log("link is: ",t);var n=t[t.length-1],c=t[t.length-3];console.log("The ID of the food is: ",n),console.log("The meal is: ",c),console.log("The date is: ",D(e.date));var s=Object(a.useState)(P),i=Object(r.a)(s,2),u=i[0],j=i[1],b=Object(a.useState)(F),h=Object(r.a)(b,2),p=h[0],f=h[1],g=Object(a.useState)(1),x=Object(r.a)(g,2),v=x[0],N=x[1],y=Object(a.useState)("g"),C=Object(r.a)(y,2),w=C[0],E=C[1],U=Object(a.useState)([["protein",30],["fat",20],["carbs",50]]),I=Object(r.a)(U,2),z=I[0],B=I[1];Object(a.useEffect)((function(){var t=O.firestore().collection("users").doc(O.auth().currentUser.uid).collection("days").doc(D(e.date));t.get().then((function(e){e.exists?t.onSnapshot((function(e){f(e.data())})):console.log("the doc was not found, need to create it")}))}),[e.date]),Object(a.useEffect)((function(){var e=document.getElementById("page-food-amount");e.value=v;var t=function(t){13===t.keyCode&&(t.preventDefault(),console.log("clicked on enter from input, value:",e.value),N(e.value))};return e.addEventListener("keyup",t),function(){return e.removeEventListener("keyup",t)}}),[]),Object(a.useEffect)((function(){var e=!1;function t(){return(t=Object(K.a)(q.a.mark((function t(){var a,c;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.spoonacular.com/food/ingredients/".concat(n,"/information?apiKey=").concat("533b3991a7534e9fae98b026145e06db","&amount=").concat(v,"&unit=").concat(w));case 2:return a=t.sent,t.next=5,a.json();case 5:c=t.sent,!1===e&&(console.log("Result Food: ",c),j(c));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return console.log("Amount is now: ",v,". Unit is: ",w),function(){t.apply(this,arguments)}(),function(){return e=!0}}),[v,w,n]),Object(a.useEffect)((function(){var e=u.nutrition.caloricBreakdown;console.log("Protein: ",e.percentProtein),B([["protein",e.percentProtein],["fat",e.percentFat],["carbs",e.percentCarbs]])}),[u]);return Object(d.jsxs)("div",{className:"page-food",children:[Object(d.jsx)("div",{className:"page-food-top",children:Object(d.jsx)("h2",{children:u.name})}),Object(d.jsxs)("div",{className:"page-food-section",children:[Object(d.jsxs)("div",{className:"page-food-inputs",children:[Object(d.jsxs)(A,{children:[Object(d.jsx)("h2",{className:"component-message",children:"Press Enter to Submit"}),Object(d.jsx)("input",{type:"number",min:"1",id:"page-food-amount"})]}),Object(d.jsxs)(M,{fontSize:"55px",children:[Object(d.jsxs)("button",{className:"dropdown-btn",children:[w," \u23f7"]}),Object(d.jsx)("div",{className:"dropdown-content",children:u.possibleUnits.map((function(e){return Object(d.jsxs)(V,{onClick:function(){return E(e)},children:[" ",e]},e)}))})]})]}),Object(d.jsx)("div",{children:Object(d.jsxs)("h2",{children:[S(u,"Calories").amount," cals"]})})]}),Object(d.jsxs)("div",{className:"page-food-section",children:[Object(d.jsx)("h3",{children:"Nutritional Information"}),Object(d.jsx)("div",{className:"page-food-macros",children:z.map((function(e){return Object(d.jsx)(m,{progress:Number(e[1]),circleSize:"250",calories:"".concat(e[1],"%"),message:e[0]},e[0])}))}),Object(d.jsx)("div",{className:"page-food-nutrients",children:u.nutrition.nutrients.map((function(e){return Object(d.jsxs)("div",{className:"page-food-nutrient",children:[Object(d.jsxs)("div",{className:"page-food-nutrient-top",children:[Object(d.jsx)("h4",{className:"page-food-nutrient-top-text",children:e.name}),Object(d.jsx)("h4",{className:"page-food-nutrient-top-text",children:e.amount+e.unit})]}),Object(d.jsx)("div",{children:Object(d.jsxs)("h4",{className:"page-food-nutrient-percent",children:[e.percentOfDailyNeeds,"% of Daily Needs"]})})]},e.name)}))})]}),Object(d.jsx)("div",{className:"page-food-trackDiv",children:Object(d.jsx)(o.b,{to:"/meal/".concat(c),children:Object(d.jsx)(L,{onClick:function(){console.log("Going to Update Firestore"),console.log("The result being: ",u),console.log("The data (before update) being: ",p);var t=k(p,c,u);O.firestore().collection("users").doc(O.auth().currentUser.uid).collection("days").doc(D(e.date)).update(t)},children:"Track Food"})})})]})});function W(e,t){switch(t.type){case"increment":var n=e.date;return n.setDate(n.getDate()+1),console.log("added: ",n),{date:n};case"decrement":var a=e.date;return a.setDate(a.getDate()-1),{date:a};case"reload":return{date:e.date};default:throw new Error}}function Z(e,t){switch(t.type){case"update":return{results:t.payload};default:throw new Error}}var Y=function(){var e=Object(a.useReducer)(W,{date:new Date}),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useReducer)(Z,{results:[]}),i=Object(r.a)(s,2),u=i[0],m=i[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(o.a,{children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",component:function(){return Object(d.jsx)(E,{date:n.date,dispatchDate:c})}}),Object(d.jsx)(l.a,{exact:!0,path:"/meal/:id",component:function(){return Object(d.jsx)(R,{date:n.date,dispatchDate:c})}}),Object(d.jsx)(l.a,{exact:!0,path:"/signin",component:function(){return Object(d.jsx)(N,{})}}),Object(d.jsx)(l.a,{exact:!0,path:"/meal/:id/search",component:function(){return Object(d.jsx)(H,{date:n.date,results:u.results,dispatchResults:m})}}),Object(d.jsx)(l.a,{exact:!0,path:"/meal/:id/search/:id",component:function(){return Object(d.jsx)(J,{date:n.date})}})]})})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(Y,{})}),document.getElementById("root")),_()}},[[64,1,2]]]);
//# sourceMappingURL=main.f02150e8.chunk.js.map
(this["webpackJsonplifesum-clone"]=this["webpackJsonplifesum-clone"]||[]).push([[0],{34:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(35),i=n.n(s),r=(n(45),n(6)),o=(n(46),n(11)),l=n(7),u=(n(47),n(77)),d=(n(48),n(1)),m=function(e){var t={fontSize:"".concat(Math.round(Number(e.circleSize)/5),"px")},n={fontSize:"".concat(Math.round(Number(e.circleSize)/12),"px")};return Object(d.jsxs)("div",{className:"progresscircle",children:[Object(d.jsx)(u.a,{variant:"determinate",value:e.progress,size:"".concat(e.circleSize,"px"),color:"inherit",thickness:1.2}),Object(d.jsxs)("div",{className:"progresscircle-text",children:[Object(d.jsx)("h2",{style:t,children:e.calories}),Object(d.jsx)("h3",{style:n,children:e.message})]})]})},j=n(23);n(53),n(65);j.a.initializeApp({apiKey:"AIzaSyBuUbx8Hxva5oyPCSAAdGp9nBkzbaK1t6M",authDomain:"lifesum-clone.firebaseapp.com",projectId:"lifesum-clone",storageBucket:"lifesum-clone.appspot.com",messagingSenderId:"87225916127",appId:"1:87225916127:web:2a81ab0a4faf08b270e76a"});j.a.firestore(),j.a.auth();var b,h,f,p,O=j.a,g=function(e){var t=Object(a.useState)(1250),n=Object(r.a)(t,2),c=n[0],s=(n[1],Object(a.useState)(0)),i=Object(r.a)(s,2),o=i[0],l=i[1],u=Object(a.useState)(0),j=Object(r.a)(u,2),b=j[0],h=j[1],f=Object(a.useState)(0),p=Object(r.a)(f,2),O=p[0],g=p[1],x=Object(a.useState)(0),v=Object(r.a)(x,2),N=v[0],y=v[1],C=Object(a.useState)(0),D=Object(r.a)(C,2),S=D[0],w=D[1],k=Object(a.useState)({color:"white"}),F=Object(r.a)(k,2),P=F[0],E=F[1],U=Object(a.useState)("Calories Left"),I=Object(r.a)(U,2),z=I[0],A=I[1];return Object(a.useEffect)((function(){l(e.data.sumCal),h(e.data.sumBurnt)}),[e.data]),Object(a.useEffect)((function(){var e=o-b;g(e=e<0?0:e)}),[o,b]),Object(a.useEffect)((function(){var e=c-O,t=Math.round(O/c*100);t>100?(t%=100,e=O-c,A("Calories Over"),E({color:"rgb(219, 138, 105)"})):E({color:"white"}),t>200&&(t=100),y(e),w(t)}),[O,c]),Object(d.jsxs)("div",{className:"databar",children:[Object(d.jsxs)("div",{className:"databar-top",children:[Object(d.jsxs)("div",{className:"databar-data",children:[Object(d.jsx)("h2",{children:o}),Object(d.jsx)("h3",{children:"Calories Eaten"})]}),Object(d.jsx)("div",{className:"databar-calories",style:P,children:Object(d.jsx)(m,{progress:S,circleSize:"480",calories:N,message:z})}),Object(d.jsxs)("div",{className:"databar-data",children:[Object(d.jsx)("h2",{children:b}),Object(d.jsx)("h3",{children:"Calories Burnt"})]})]}),Object(d.jsxs)("div",{className:"databar-bottom",children:[Object(d.jsxs)("div",{className:"databar-data",children:[Object(d.jsx)("h2",{children:"Carbs"}),Object(d.jsx)("h3",{children:"###"})]}),Object(d.jsxs)("div",{className:"databar-data",children:[Object(d.jsx)("h2",{children:"Proetein"}),Object(d.jsx)("h3",{children:"###"})]}),Object(d.jsxs)("div",{className:"databar-data",children:[Object(d.jsx)("h2",{children:"Fat"}),Object(d.jsx)("h3",{children:"###"})]})]})]})},x=function(e){return Object(d.jsxs)("div",{className:"datechanger",children:[Object(d.jsx)("button",{onClick:function(){return e.dispatchDate({type:"decrement"})},children:"\u2b05"}),Object(d.jsx)("h1",{children:e.date}),Object(d.jsx)("button",{onClick:function(){return e.dispatchDate({type:"increment"})},children:"\u27a1"})]})},v=(n(55),function(e){var t=Object(a.useState)(e.meal),n=Object(r.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(e.totalCal),l=Object(r.a)(i,2),u=l[0],m=l[1],j={breakfast:{title:"Breakfast",emoji:"\ud83c\udf73"},lunch:{title:"Lunch",emoji:"\ud83e\udd57"},dinner:{title:"Dinner",emoji:"\ud83c\udf72"},snacks:{title:"Snacks",emoji:"\ud83c\udf50"}};return Object(a.useEffect)((function(){s(e.meal),m(e.totalCal)}),[e]),Object(d.jsxs)("div",{className:"mealbar",children:[Object(d.jsxs)("div",{className:"mealbar-top",children:[Object(d.jsx)("h2",{className:"mealbar-emoji",children:j[c].emoji}),Object(d.jsx)(o.b,{to:"/meal/".concat(c),children:Object(d.jsxs)("div",{className:"mealbar-text",children:[Object(d.jsx)("h2",{children:j[c].title}),Object(d.jsx)("h3",{children:"Here I'll write down a list of foods"})]})}),Object(d.jsx)(o.b,{to:"/meal/".concat(c,"/search"),children:Object(d.jsx)("button",{children:"\u2795"})})]}),Object(d.jsx)("div",{className:"mealbar-bottom",children:Object(d.jsxs)("h2",{children:[u," Calories"]})})]})}),N=(n(57),function(e){var t=Object(a.useState)(!0),n=Object(r.a)(t,2),c=n[0],s=n[1];return!0===c?Object(d.jsxs)("div",{className:"page-signin",children:[Object(d.jsx)("h2",{children:"Lifesum Clone"}),Object(d.jsx)("h3",{children:"Please Don't Use Real Private Information"}),Object(d.jsxs)("div",{className:"signin",children:[Object(d.jsx)("h1",{children:"Sign Up"}),Object(d.jsx)("input",{type:"text",placeholder:"username",id:"signUp-username",maxLength:"12",autoComplete:"off"}),Object(d.jsx)("input",{type:"email",placeholder:"fake email",id:"signUp-email",maxLength:"20",autoComplete:"off"}),Object(d.jsx)("input",{type:"password",placeholder:"password",id:"signUp-password",maxLength:"15",autoComplete:"off"}),Object(d.jsx)("button",{onClick:function(){var t=document.querySelector("#signUp-username"),n=document.querySelector("#signUp-email"),a=document.querySelector("#signUp-password"),c=O.auth().createUserWithEmailAndPassword(n.value,a.value);c.then((function(n){return e.changeSign(!!O.auth().currentUser),n.user.updateProfile({displayName:t.value})})),c.catch((function(e){return alert(e)}))},children:"Submit"}),Object(d.jsx)("h4",{children:"Already a member?"}),Object(d.jsx)("button",{onClick:function(){s(!1)},id:"signin-btnOther",children:"Log In"})]})]}):Object(d.jsxs)("div",{className:"page-signin",children:[Object(d.jsx)("h2",{children:"Lifesum Clone"}),Object(d.jsxs)("div",{className:"signin",children:[Object(d.jsx)("h1",{children:"Log In"}),Object(d.jsx)("input",{type:"email",placeholder:"email",id:"logIn-email",autoComplete:"off"}),Object(d.jsx)("input",{type:"password",placeholder:"password",id:"logIn-password",autoComplete:"off"}),Object(d.jsx)("button",{onClick:function(){var t=document.querySelector("#logIn-email"),n=document.querySelector("#logIn-password"),a=O.auth().signInWithEmailAndPassword(t.value,n.value);a.then((function(t){e.changeSign(!!O.auth().currentUser)})),a.catch((function(e){return alert(e)}))},children:"Log In"}),Object(d.jsx)("h4",{children:"Not a member?"}),Object(d.jsx)("button",{onClick:function(){s(!0)},id:"signin-btnOther",children:"Sign Up"})]})]})}),y=(n(58),n(26)),C=function(e){var t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),a=e.getFullYear();return e=t+"-"+n+"-"+a},D=function(e){if(""!==e&&"string"===typeof e)return e.charAt(0).toUpperCase()+e.slice(1)},S=function(e,t){var n=e.nutrition.nutrients.filter((function(e){return e.name===t}));return n.length>0?n[0]:{name:"Not Found",amount:0,unit:"cal",percentOfDailyNeeds:0}},w=function(e,t,n,a,c){var s=Object(y.a)({},e);return s.meals[t][n]=Math.round("add"===c?s.meals[t][n]+a:s.meals[t][n]-a),s[n]=Math.round("add"===c?s[n]+a:s[n]-a),s},k=function(e,t,n,a,c,s){var i=Object(y.a)({},e);return i.meals[t].nutrients=i.meals[t].nutrients.map((function(e){return e.name===n&&(e.amount=Math.round("add"===s?e.amount+a:e.amount-a),void 0!==e.percentOfDailyNeeds&&(e.percentOfDailyNeeds=Math.round("add"===s?e.percentOfDailyNeeds+c:e.percentOfDailyNeeds-c))),e})),i.nutrients=i.nutrients.map((function(e){return e.name===n&&(e.amount=Math.round("add"===s?e.amount+a:e.amount-a),void 0!==e.percentOfDailyNeeds&&(e.percentOfDailyNeeds=Math.round(e.percentOfDailyNeeds+c))),e})),i},F=[{name:"Calories",amount:0,unit:"cal",percentOfDailyNeeds:0},{name:"Fat",amount:0,unit:"g",percentOfDailyNeeds:0},{name:"Saturated Fat",amount:0,unit:"g",percentOfDailyNeeds:0},{name:"Carbohydrates",amount:0,unit:"g",percentOfDailyNeeds:0},{name:"Net Carbohydrates",amount:0,unit:"g",percentOfDailyNeeds:0},{name:"Sugar",amount:0,unit:"g",percentOfDailyNeeds:0},{name:"Cholesterol",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Sodium",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Protein",amount:0,unit:"g",percentOfDailyNeeds:0},{name:"Vitamin C",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Manganese",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Fiber",amount:0,unit:"g",percentOfDailyNeeds:0},{name:"Vitamin B6",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Copper",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Vitamin B1",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Folate",amount:0,unit:"\xb5g",percentOfDailyNeeds:0},{name:"Potassium",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Magnesium",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Vitamin B3",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Vitamin B5",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Vitamin B2",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Iron",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Calcium",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Vitamin A",amount:0,unit:"IU",percentOfDailyNeeds:0},{name:"Zinc",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Phosphorus",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Vitamin K",amount:0,unit:"\xb5g",percentOfDailyNeeds:0},{name:"Selenium",amount:0,unit:"\xb5g",percentOfDailyNeeds:0},{name:"Vitamin E",amount:0,unit:"mg",percentOfDailyNeeds:0}],P={sumCal:0,sumFat:0,sumProtein:0,sumCarb:0,sumBurnt:0,meals:{breakfast:{sumCal:0,sumFat:0,sumProtein:0,sumCarb:0,foods:[],nutrients:F},lunch:{sumCal:0,sumFat:0,sumProtein:0,sumCarb:0,foods:[],nutrients:F},dinner:{sumCal:0,sumFat:0,sumProtein:0,sumCarb:0,foods:[],nutrients:F},snacks:{sumCal:0,sumFat:0,sumProtein:0,sumCarb:0,foods:[],nutrients:F}},nutrients:F},E={id:1111,name:"name",nameClean:"name clean",amount:1,unit:"g",possibleUnits:["piece","slice","fruit","g","oz","cup","serving"],image:"imgFile",meta:[],nutrition:{nutrients:[{name:"Calories",amount:170,unit:"cal",percentOfDailyNeeds:10},{name:"Fat",amount:13,unit:"g",percentOfDailyNeeds:3},{name:"Saturated Fat",amount:11,unit:"g",percentOfDailyNeeds:50},{name:"Carbohydrates",amount:56,unit:"g",percentOfDailyNeeds:8},{name:"Net Carbohydrates",amount:0,unit:"g",percentOfDailyNeeds:0},{name:"Sugar",amount:32,unit:"g",percentOfDailyNeeds:60},{name:"Cholesterol",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Sodium",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Protein",amount:23,unit:"g",percentOfDailyNeeds:30},{name:"Vitamin C",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Manganese",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Fiber",amount:0,unit:"g",percentOfDailyNeeds:0},{name:"Vitamin B6",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Copper",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Vitamin B1",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Folate",amount:0,unit:"\xb5g",percentOfDailyNeeds:0},{name:"Potassium",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Magnesium",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Vitamin B3",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Vitamin B5",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Vitamin B2",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Iron",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Calcium",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Vitamin A",amount:0,unit:"IU",percentOfDailyNeeds:0},{name:"Zinc",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Phosphorus",amount:0,unit:"mg",percentOfDailyNeeds:0},{name:"Vitamin K",amount:0,unit:"\xb5g",percentOfDailyNeeds:0},{name:"Selenium",amount:0,unit:"\xb5g",percentOfDailyNeeds:0},{name:"Vitamin E",amount:0,unit:"mg",percentOfDailyNeeds:0}],caloricBreakdown:{percentProtein:30,percentFat:20,percentCarbs:50},weightPerServing:{amount:0,unit:"g"}}},U=function(e){var t=Object(a.useState)(C(new Date)),n=Object(r.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(!!O.auth().currentUser),o=Object(r.a)(i,2),l=o[0],u=o[1],m=Object(a.useState)(P),j=Object(r.a)(m,2),b=j[0],h=j[1];Object(a.useEffect)((function(){var t=new AbortController;return!1===t.signal.aborted&&(console.log("the date recorded now is: ",C(e.date)),s(C(e.date))),function(){t.abort()}}),[e.date]),O.auth().onAuthStateChanged((function(){console.log("(auth state change) - Signed in ",!!O.auth().currentUser),u(!!O.auth().currentUser)}));return Object(a.useEffect)((function(){var e=new AbortController;e.signal.aborted;if(!0===l){console.log("(useEffect() of Home) - Am signed in");var t=O.firestore().collection("users").doc(O.auth().currentUser.uid).collection("days").doc(c);t.get().then((function(n){n.exists?t.onSnapshot((function(t){console.log("the doc of this date exists!",t),!1===e.signal.aborted&&h(t.data())})):(console.log("the doc was not found, need to create it"),t.set(P),!1===e.signal.aborted&&h(P))}))}return function(){e.abort()}}),[l,c]),l?Object(d.jsxs)("div",{className:"page-home",children:[Object(d.jsxs)("div",{className:"page-home-top",children:[Object(d.jsx)("button",{onClick:function(){O.auth().signOut()},children:"Sign Out"}),Object(d.jsx)(g,{date:c,data:b})]}),Object(d.jsx)(x,{date:c,dispatchDate:e.dispatchDate}),Object(d.jsx)("div",{className:"page-home-mealbars",children:["breakfast","lunch","dinner","snacks"].map((function(e){return Object(d.jsx)(v,{meal:e,totalCal:b.meals[e].sumCal},e)}))})]}):Object(d.jsx)(N,{changeSign:function(e){u(e)}})},I=(n(59),n(60),n(36)),z=function(e){var t=function(t){var n={fat:Number(e.data.sumFat),protein:Number(e.data.sumProtein),carb:Number(e.data.sumCarb)};return Number(e.data.sumFat)+Number(e.data.sumProtein)+Number(e.data.sumCarb)!==0?Math.round(n[t]/(Number(e.data.sumFat)+Number(e.data.sumProtein)+Number(e.data.sumCarb))*100):0},n={fat:"rgb(160, 192, 160)",protein:"rgb(128, 155, 135)",carb:"rgb(106, 128, 115)"},a={fat:"Fat",carb:"Carbs",protein:"Protein"};return Object(d.jsxs)("div",{className:"datalist",children:[Object(d.jsxs)("div",{className:"datalist-portion",children:[Object(d.jsxs)("h1",{children:[e.data.sumCal," Calories"]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"datalist-info",children:[Object(d.jsx)("h2",{children:"Recommended"}),Object(d.jsxs)("h2",{children:["".concat(e.goal-140,"-").concat(e.goal)," cals"]})]}),Object(d.jsxs)("div",{className:"datalist-info",children:[Object(d.jsx)("h2",{children:"Calories"}),Object(d.jsxs)("h2",{children:[e.data.sumCal," cals"]})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"datalist-info-pie",children:[Object(d.jsx)(I.PieChart,{className:"datalist-pie",data:[{title:"Fat",value:Number(e.data.sumFat),color:n.fat},{title:"Protein",value:Number(e.data.sumProtein),color:n.protein},{title:"Carb",value:Number(e.data.sumCarb),color:n.carb}]}),";",Object(d.jsx)("div",{className:"datalist-pie-info",children:["fat","protein","carb"].map((function(e){return Object(d.jsxs)("div",{className:"datalist-info",children:[Object(d.jsxs)("div",{className:"datalist-pie-label",children:[Object(d.jsx)("div",{className:"datalist-pie-color",style:{backgroundColor:n[e]}}),Object(d.jsx)("h2",{children:a[e]})]}),Object(d.jsxs)("h2",{children:[t(e),"%"]})]},e)}))})]})]}),Object(d.jsxs)("div",{className:"datalist-portion",children:[Object(d.jsxs)("div",{className:"datalist-info",children:[Object(d.jsx)("h2",{children:"Calories"}),Object(d.jsxs)("h2",{children:[e.data.sumCal," cals"]})]}),Object(d.jsxs)("div",{className:"datalist-info",children:[Object(d.jsx)("h2",{children:"Protein"}),Object(d.jsxs)("h2",{children:[e.data.sumProtein,"g"]})]}),Object(d.jsxs)("div",{className:"datalist-info",children:[Object(d.jsx)("h2",{children:"Carbs"}),Object(d.jsxs)("h2",{children:[e.data.sumCarb,"g"]})]}),Object(d.jsxs)("div",{className:"datalist-info",children:[Object(d.jsx)("h2",{children:"Fat"}),Object(d.jsxs)("h2",{children:[e.data.sumFat,"g"]})]})]})]})},A=n(24),B=n(25),M=B.a.div(b||(b=Object(A.a)(["\n  position: relative;\n  display: inline-block;\n\n  font-size: ",";\n\n  &:hover{\n    .dropdown-content {\n      display: block;\n    }\n  }\n\n  .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f9f9f9;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n  }\n\n  .dropdown-btn {\n    color: black;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n    border-bottom: 1px solid black;\n    cursor: pointer;\n    font-size: inherit;\n  }\n"])),(function(e){return e.fontSize||"15px"})),V=B.a.h3(h||(h=Object(A.a)([" \n  color: black;\n  font-size: ",";\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  &:hover {\n    background-color: #f1f1f1;\n  }\n"])),(function(e){return e.fontSize||"15px"})),L=B.a.div(f||(f=Object(A.a)(["\n\n  position: relative;\n  width: fit-content;\n\n  &:hover {\n    .component-message {\n      display: block;\n    }\n  }\n  .component-message {\n    display :none;\n    position: absolute;\n    top: -70px;\n    transition: 0.3s all linear;\n    background-color: #f9f9f9;\n    padding: 10px 20px;\n    border-radius: 30px;\n    width: fit-content;\n    font-size: 15px;\n  }\n"]))),R=B.a.div(p||(p=Object(A.a)(["\n  background-color: var(--primary);\n  border-radius: 50px;\n  width: ",";\n  color: white;\n  font-weight: 500;\n  font-size: 40px;\n  margin: 50px auto;\n  padding: 30px 0;\n  transition: 0.1s linear all;\n  text-align: center;\n  &: hover{\n    background-color: var(--primary-dark);\n  }\n"])),(function(e){return e.width||"100%"})),T=(n(34),function(e){var t=function(){console.log("original data: ",e.data);var t=function(e,t,n,a){var c=Object(y.a)({},e);return c.meals[t].foods.splice(a,1),[["sumCal","Calories"],["sumFat","Fat"],["sumProtein","Protein"],["sumCarb","Carbohydrates"]].forEach((function(e){var a=n.nutrition.nutrients.filter((function(t){return t.name===e[1]}))[0];c=w(c,t,e[0],a.amount,"subtract")})),n.nutrition.nutrients.forEach((function(e){c=k(c,t,e.name,e.amount,e.percentOfDailyNeeds,"subtract")})),c}(e.data,e.meal,e.food,e.order);console.log("updated data: ",t),e.update(t)};return Object(d.jsxs)("div",{className:"foodbar",children:[Object(d.jsxs)("div",{className:"foodbar-left",children:[e.food.image?Object(d.jsx)("img",{src:"https://spoonacular.com/cdn/ingredients_100x100/"+e.food.image,alt:e.food.name}):null,Object(d.jsxs)("div",{className:"foodbar-text",children:[Object(d.jsx)("h2",{children:D(e.food.name)}),Object(d.jsxs)("h3",{children:[S(e.food,"Calories").amount,"cal  \u26ab ",e.food.quantity,e.food.unit]})]})]}),Object(d.jsx)("button",{onClick:function(){return t()},children:"-"})]})}),q=function(e){var t=Object(l.f)("/meal/:id").url.split("/");t=t[t.length-1];var n=Object(a.useState)(400),c=Object(r.a)(n,2),s=c[0],i=(c[1],Object(a.useState)(P.meals[t])),u=Object(r.a)(i,2),j=u[0],b=u[1],h=Object(a.useState)({color:"white"}),f=Object(r.a)(h,2),p=f[0],g=f[1],x=Object(a.useState)(0),v=Object(r.a)(x,2),N=v[0],y=v[1],D=Object(a.useState)(!!O.auth().currentUser),S=Object(r.a)(D,2),w=S[0],k=S[1],F=Object(a.useState)(P),E=Object(r.a)(F,2),U=E[0],I=E[1];Object(a.useEffect)((function(){var n=new AbortController,a=n.signal.aborted,c=O.firestore();return O.auth().currentUser&&!0!==a?c.collection("users").doc(O.auth().currentUser.uid).collection("days").doc(C(e.date)).get().then((function(e){console.log("MyDoc in Meal: ",e),!0!==(a=n.signal.aborted)&&(b(e.data().meals[t]),I(e.data()))})).catch((function(e){console.error("Error in Meal: ",e)})):console.log("not logged in cannot update meal"),function(){n.abort()}}),[e.date,t,w]),O.auth().onAuthStateChanged((function(){k(!!O.auth().currentUser)})),Object(a.useEffect)((function(){var e=Math.round(j.sumCal/s*100);e>100?(e%=100,g({color:"rgb(226, 190, 113)"})):g({color:"white"}),e>200&&(e=100,g({color:"rgb(219, 138, 105)"})),y(e)}),[j,s]);var A=function(t){console.log("updated: ",t),O.firestore().collection("users").doc(O.auth().currentUser.uid).collection("days").doc(C(e.date)).update(t),e.dispatchDate({type:"reload"})};return Object(d.jsxs)("div",{className:"page-meal",children:[Object(d.jsxs)("div",{className:"page-meal-top",children:[Object(d.jsx)("div",{className:"page-meal-progress",style:p,children:Object(d.jsx)(m,{progress:N,circleSize:"400",calories:j.sumCal,message:"calories eaten"})}),Object(d.jsx)("h2",{children:t}),Object(d.jsx)("h3",{children:C(e.date)})]}),Object(d.jsx)(o.b,{to:"".concat(t,"/search"),className:"page-meal-search-link",children:Object(d.jsx)(R,{width:"60%",children:"Add Food"})}),Object(d.jsx)("div",{className:"page-meal-foodlist",children:j.foods.map((function(e,n){return Object(d.jsx)(T,{food:e,order:n,data:U,meal:t,update:A},n)}))}),Object(d.jsx)("div",{className:"page-meal-datalist",children:Object(d.jsx)(z,{data:j,goal:s})}),Object(d.jsx)("div",{className:"page-meal-back-div",children:Object(d.jsx)(o.b,{to:"/lifesum-clone",children:Object(d.jsx)("h2",{children:"\u2b05"})})})]})},K=n(21),G=n.n(K),H=n(28),J=(n(62),function(e){var t;return Object(d.jsx)("div",{className:"foodbar",children:Object(d.jsx)(o.b,{to:"/meal/".concat(e.meal,"/search/").concat((t=e.id,t.split("-")[1])),children:Object(d.jsxs)("div",{className:"foodbar-left",children:[e.imgSrc?Object(d.jsx)("img",{src:e.imgSrc,alt:e.title}):null,Object(d.jsx)("div",{className:"foodbar-text",children:Object(d.jsx)("h2",{children:D(e.title)})})]})})})}),W=function(e){var t=Object(l.f)("/meal/:id/search").url.split("/");t=t[t.length-2];var n=Object(a.useState)(""),c=Object(r.a)(n,2),s=c[0],i=c[1];return Object(a.useEffect)((function(){var e=document.getElementById("page-searchbar"),t=function(t){13===t.keyCode&&(t.preventDefault(),console.log("clicked on enter from input, value:",e.value),i(e.value))};return e.addEventListener("keyup",t),function(){return console.log("Search Enter: removing event listener..."),e.removeEventListener("keyup",t)}}),[]),Object(a.useEffect)((function(){var t=new AbortController,n=t.signal.aborted;if(""!==s){function a(){return(a=Object(H.a)(G.a.mark((function a(){var c,i;return G.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://api.spoonacular.com/food/ingredients/search?apiKey=".concat("533b3991a7534e9fae98b026145e06db","&query=").concat(s,"&number=25"));case 2:return c=a.sent,a.next=5,c.json();case 5:i=a.sent,n=t.signal.aborted,console.log("Search abort signal is: ",n),!1===n&&(console.log("Results: ",i),e.dispatchResults({type:"update",payload:i.results}));case 9:case"end":return a.stop()}}),a)})))).apply(this,arguments)}console.log("Going to fetch API info for: ",s),function(){a.apply(this,arguments)}()}return function(){console.log("Search has been aborted"),t.abort()}}),[s]),Object(d.jsxs)("div",{className:"page-search",children:[Object(d.jsxs)("div",{className:"page-search-top",children:[Object(d.jsxs)("div",{className:"page-search-nav",children:[Object(d.jsx)(o.b,{to:"/meal/".concat(t),children:Object(d.jsx)("button",{children:"\u2b05"})}),Object(d.jsx)("h2",{children:D(t)})]}),Object(d.jsx)("input",{type:"text",placeholder:"\ud83d\udd0d Search Food",id:"page-searchbar"})]}),Object(d.jsx)("div",{className:"page-search-items",children:e.results.map((function(e){return Object(d.jsx)(J,{id:"foodId-"+e.id,title:e.name,imgSrc:"https://spoonacular.com/cdn/ingredients_100x100/"+e.image,meal:t},e.id)}))})]})},Z=(n(63),function(e){var t=Object(l.f)("/meal/:id/search/:id").url.split("/");console.log("link is: ",t);var n=t[t.length-1],c=t[t.length-3];console.log("The ID of the food is: ",n),console.log("The meal is: ",c),console.log("The date is: ",C(e.date));var s=Object(a.useState)(E),i=Object(r.a)(s,2),u=i[0],j=i[1],b=Object(a.useState)(P),h=Object(r.a)(b,2),f=h[0],p=h[1],g=Object(a.useState)(1),x=Object(r.a)(g,2),v=x[0],N=x[1],D=Object(a.useState)("g"),F=Object(r.a)(D,2),U=F[0],I=F[1],z=Object(a.useState)([["protein",30],["fat",20],["carbs",50]]),A=Object(r.a)(z,2),B=A[0],T=A[1];Object(a.useEffect)((function(){var t=new AbortController,n=(t.signal.aborted,O.firestore().collection("users").doc(O.auth().currentUser.uid).collection("days").doc(C(e.date)));return n.get().then((function(e){e.exists?n.onSnapshot((function(e){!0!==t.signal.aborted&&p(e.data())})):console.log("the doc was not found, need to create it")})),function(){t.abort()}}),[e.date]),Object(a.useEffect)((function(){var e=document.getElementById("page-food-amount");e.value=v;var t=function(t){13===t.keyCode&&(t.preventDefault(),console.log("clicked on enter from input, value:",e.value),N(e.value))};return e.addEventListener("keyup",t),function(){return e.removeEventListener("keyup",t)}}),[]),Object(a.useEffect)((function(){var e=new AbortController;e.signal.aborted;function t(){return(t=Object(H.a)(G.a.mark((function t(){var a,c;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.spoonacular.com/food/ingredients/".concat(n,"/information?apiKey=").concat("533b3991a7534e9fae98b026145e06db","&amount=").concat(v,"&unit=").concat(U));case 2:return a=t.sent,t.next=5,a.json();case 5:c=t.sent,!1===e.signal.aborted&&(console.log("Result Food: ",c),j(c));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return console.log("Amount is now: ",v,". Unit is: ",U),function(){t.apply(this,arguments)}(),function(){e.abort()}}),[v,U,n]),Object(a.useEffect)((function(){var e=u.nutrition.caloricBreakdown;console.log("Protein: ",e.percentProtein),T([["protein",e.percentProtein],["fat",e.percentFat],["carbs",e.percentCarbs]])}),[u]);return Object(d.jsxs)("div",{className:"page-food",children:[Object(d.jsx)("div",{className:"page-food-top",children:Object(d.jsx)("h2",{children:u.name})}),Object(d.jsxs)("div",{className:"page-food-section",children:[Object(d.jsxs)("div",{className:"page-food-inputs",children:[Object(d.jsxs)(L,{children:[Object(d.jsx)("h2",{className:"component-message",children:"Press Enter to Submit"}),Object(d.jsx)("input",{type:"number",min:"1",id:"page-food-amount"})]}),Object(d.jsxs)(M,{fontSize:"55px",children:[Object(d.jsxs)("button",{className:"dropdown-btn",children:[U," \u23f7"]}),Object(d.jsx)("div",{className:"dropdown-content",children:u.possibleUnits.map((function(e){return Object(d.jsxs)(V,{onClick:function(){return I(e)},children:[" ",e]},e)}))})]})]}),Object(d.jsx)("div",{children:Object(d.jsxs)("h2",{children:[S(u,"Calories").amount," cals"]})})]}),Object(d.jsxs)("div",{className:"page-food-section",children:[Object(d.jsx)("h3",{children:"Nutritional Information"}),Object(d.jsx)("div",{className:"page-food-macros",children:B.map((function(e){return Object(d.jsx)(m,{progress:Number(e[1]),circleSize:"250",calories:"".concat(e[1],"%"),message:e[0]},e[0])}))}),Object(d.jsx)("div",{className:"page-food-nutrients",children:u.nutrition.nutrients.map((function(e){return Object(d.jsxs)("div",{className:"page-food-nutrient",children:[Object(d.jsxs)("div",{className:"page-food-nutrient-top",children:[Object(d.jsx)("h4",{className:"page-food-nutrient-top-text",children:e.name}),Object(d.jsx)("h4",{className:"page-food-nutrient-top-text",children:e.amount+e.unit})]}),Object(d.jsx)("div",{children:Object(d.jsxs)("h4",{className:"page-food-nutrient-percent",children:[e.percentOfDailyNeeds,"% of Daily Needs"]})})]},e.name)}))})]}),Object(d.jsx)("div",{className:"page-food-trackDiv",children:Object(d.jsx)(o.b,{to:"/meal/".concat(c),children:Object(d.jsx)(R,{onClick:function(){console.log("Going to Update Firestore"),console.log("The result being: ",u),console.log("The data (before update) being: ",f);var t=function(e,t,n){var a=Object(y.a)({},e);return a.meals[t].foods.push(n),[["sumCal","Calories"],["sumFat","Fat"],["sumProtein","Protein"],["sumCarb","Carbohydrates"]].forEach((function(e){var c=n.nutrition.nutrients.filter((function(t){return t.name===e[1]}))[0];a=w(a,t,e[0],c.amount,"add")})),n.nutrition.nutrients.forEach((function(e){a=k(a,t,e.name,e.amount,e.percentOfDailyNeeds,"add")})),a}(f,c,u);O.firestore().collection("users").doc(O.auth().currentUser.uid).collection("days").doc(C(e.date)).update(t)},children:"Track Food"})})})]})});function _(e,t){switch(t.type){case"increment":var n=e.date;return n.setDate(n.getDate()+1),console.log("added: ",n),{date:n};case"decrement":var a=e.date;return a.setDate(a.getDate()-1),{date:a};case"reload":return{date:e.date};default:throw new Error}}function Y(e,t){switch(t.type){case"update":return{results:t.payload};default:throw new Error}}var Q=function(){var e=Object(a.useReducer)(_,{date:new Date}),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useReducer)(Y,{results:[]}),i=Object(r.a)(s,2),u=i[0],m=i[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(o.a,{children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/lifesum-clone/",component:function(){return Object(d.jsx)(U,{date:n.date,dispatchDate:c})}}),Object(d.jsx)(l.a,{exact:!0,path:"/meal/:id",component:function(){return Object(d.jsx)(q,{date:n.date,dispatchDate:c})}}),Object(d.jsx)(l.a,{exact:!0,path:"/lifesum-clone/signin",component:function(){return Object(d.jsx)(N,{})}}),Object(d.jsx)(l.a,{exact:!0,path:"/meal/:id/search",component:function(){return Object(d.jsx)(W,{date:n.date,results:u.results,dispatchResults:m})}}),Object(d.jsx)(l.a,{exact:!0,path:"/meal/:id/search/:id",component:function(){return Object(d.jsx)(Z,{date:n.date})}})]})})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(Q,{})}),document.getElementById("root")),X()}},[[64,1,2]]]);
//# sourceMappingURL=main.9e9753af.chunk.js.map
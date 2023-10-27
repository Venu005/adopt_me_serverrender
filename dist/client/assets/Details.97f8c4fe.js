var p=Object.defineProperty;var m=(s,r,e)=>r in s?p(s,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[r]=e;var i=(s,r,e)=>(m(s,typeof r!="symbol"?r+"":r,e),e);import{r as c,j as o,a as t,L as v,_ as g,u as f,b as x,A as k}from"./index.efbdc0b9.js";import{u as C}from"./useQuery.esm.7fc5e6d0.js";class E extends c.exports.Component{constructor(){super(...arguments);i(this,"state",{hasError:!1})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,n){console.error("Error boundary component caught an error ",e,n)}render(){return this.state.hasError?o("h2",{children:["Error found withthis listing.",t(v,{to:"/",children:"Click here to go back to home page"})]}):this.props.children}}const _=E,b=async({queryKey:s})=>{const r=s[1],e=await fetch(`http://pets-v2.dev-apis.com/pets?id=${r}`);if(!e.ok)throw new Error("details/${id} fetch not ok");return e.json()};class u extends c.exports.Component{constructor(){super(...arguments);i(this,"state",{active:0});i(this,"handleIndexClick",e=>{this.setState({active:+e.target.dataset.index})})}render(){const{active:e}=this.state,{images:n}=this.props;return o("div",{className:"carousel",children:[t("img",{src:n[e],alt:"pet_hero"}),t("div",{className:"carousel-smaller",children:n.map((l,d)=>t("img",{onClick:this.handleIndexClick,"data-index":d,src:l,className:d===e?"active":"",alt:"animal thumbnail"},l))})]})}}i(u,"defaultProps",{images:["http://pets-images.dev-apis.com/pets/none.jpg"]});const y=c.exports.lazy(()=>g(()=>import("./Modal.830f34f0.js"),["assets/Modal.830f34f0.js","assets/index.efbdc0b9.js","assets/index.0f0f1391.css"])),N=()=>{const{id:s}=f(),[r,e]=c.exports.useState(!1),n=x(),[l,d]=c.exports.useContext(k),h=C(["details",s],b);if(h.isLoading)return t("div",{className:"loading-pane",children:t("h2",{className:"loader",children:"\u{1F436}"})});const a=h.data.pets[0];return o("div",{className:"details",children:[t(u,{images:a.images}),o("div",{children:[t("h1",{children:a.name}),t("h2",{children:`${a.animal} \u2014 ${a.breed} \u2014 ${a.city}, ${a.state}`}),o("button",{onClick:()=>e(!0),children:["Adopt ",a.name]}),t("p",{children:a.description}),r?t(y,{children:o("div",{children:[o("h1",{children:["Would you like to adopt ",a.name,"?"]}),o("div",{className:"buttons",children:[t("button",{onClick:()=>{d(a),n("/")},children:"Yes"}),t("button",{onClick:()=>e(!1),children:"No"})]})]})}):null]})]})};function j(s){return t(_,{children:t(N,{...s})})}export{j as default};

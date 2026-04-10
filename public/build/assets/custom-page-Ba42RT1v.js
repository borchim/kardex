import{j as r}from"./ui-CdAo8jEz.js";import{K as _,n as w}from"./app-BnvI0xFy.js";import C from"./Header-Drom56qY.js";import F from"./Footer-CeWytgXV.js";import{u as z}from"./use-favicon-Cx1OqM43.js";import"./vendor-CxtKjBZA.js";/* empty css            *//* empty css                  */import"./utils-DBYZG17H.js";import"./language-switcher-B0q26n5n.js";import"./react-country-flag.esm-Bay_T7EW.js";import"./refresh-cw-CyMDD5FE.js";import"./globe-C1E5fffU.js";import"./settings-CBLQJdf0.js";import"./menu-BhxyS0GA.js";import"./mail-BwzqZdmf.js";import"./phone-Dt_Qa67m.js";import"./map-pin-Cj9C4L7S.js";import"./circle-check-big-DRpPD6bc.js";import"./instagram-DaAklXrv.js";import"./linkedin-DsBjAk6L.js";import"./twitter-BmGUfqRk.js";import"./facebook-DEAjMTUo.js";function Y(){var i,p,l,g,s,d,u,b,f,h,y,v,x;const k=`
    /* Content Typography */
    .custom-page-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      line-height: 1.7;
      color: #374151;
    }
    
    .custom-page-content h1 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: #111827;
      line-height: 1.2;
    }
    
    .custom-page-content h2 {
      font-size: 2rem;
      font-weight: 600;
      margin-top: 2rem;
      margin-bottom: 1rem;
      color: #111827;
      line-height: 1.3;
    }
    
    .custom-page-content h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-top: 1.5rem;
      margin-bottom: 0.75rem;
      color: #111827;
    }
    
    .custom-page-content p {
      margin-bottom: 1rem;
      font-size: 1rem;
    }
    
    .custom-page-content ul, .custom-page-content ol {
      margin-bottom: 1rem;
      padding-left: 1.5rem;
    }
    
    .custom-page-content li {
      margin-bottom: 0.5rem;
    }
    
    .custom-page-content a {
      color: var(--primary-color);
      text-decoration: underline;
    }
    
    .custom-page-content a:hover {
      opacity: 0.8;
    }
    
    .custom-page-content blockquote {
      border-left: 4px solid var(--primary-color);
      padding-left: 1rem;
      margin: 1.5rem 0;
      font-style: italic;
      background-color: #f9fafb;
      padding: 1rem;
    }
    
    .custom-page-content code {
      background-color: #f3f4f6;
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      font-family: monospace;
      font-size: 0.875rem;
    }
    
    .custom-page-content pre {
      background-color: #1f2937;
      color: #f9fafb;
      padding: 1rem;
      border-radius: 0.5rem;
      overflow-x: auto;
      margin: 1rem 0;
    }
    
    .custom-page-content img {
      max-width: 100%;
      height: auto;
      border-radius: 0.5rem;
      margin: 1rem 0;
    }
    
    .custom-page-content table {
      width: 100%;
      border-collapse: collapse;
      margin: 1rem 0;
    }
    
    .custom-page-content th, .custom-page-content td {
      border: 1px solid #d1d5db;
      padding: 0.75rem;
      text-align: left;
    }
    
    .custom-page-content th {
      background-color: #f9fafb;
      font-weight: 600;
    }
    
    /* Fix form inputs */
    .custom-page-content input:focus, 
    .custom-page-content textarea:focus {
      --tw-ring-color: var(--primary-color) !important;
      border-color: var(--primary-color) !important;
    }
    
    /* Fix color issues */
    .custom-page-content .bg-blue-50 { background-color: rgba(var(--primary-color-rgb), 0.1) !important; }
    .custom-page-content .bg-purple-50 { background-color: rgba(var(--secondary-color-rgb), 0.1) !important; }
    .custom-page-content .bg-green-50 { background-color: rgba(var(--accent-color-rgb), 0.1) !important; }
    .custom-page-content .bg-red-50 { background-color: rgba(var(--accent-color-rgb), 0.1) !important; }
    
    .custom-page-content .text-blue-600 { color: var(--primary-color) !important; }
    .custom-page-content .text-purple-600 { color: var(--secondary-color) !important; }
    .custom-page-content .text-green-600 { color: var(--accent-color) !important; }
    .custom-page-content .text-red-600 { color: var(--accent-color) !important; }
    
    .custom-page-content .border-blue-500 { border-color: var(--primary-color) !important; }
    .custom-page-content .border-purple-500 { border-color: var(--secondary-color) !important; }
    .custom-page-content .border-green-500 { border-color: var(--accent-color) !important; }
    .custom-page-content .border-red-500 { border-color: var(--accent-color) !important; }
    
    .custom-page-content .bg-blue-600 { background-color: var(--primary-color) !important; }
    .custom-page-content .bg-purple-600 { background-color: var(--secondary-color) !important; }
    .custom-page-content .bg-green-600 { background-color: var(--accent-color) !important; }
    .custom-page-content .bg-red-500 { background-color: var(--accent-color) !important; }
    
    /* Fix border colors */
    .custom-page-content .border-blue-200 { border-color: rgba(var(--primary-color-rgb), 0.2) !important; }
    .custom-page-content .border-green-200 { border-color: rgba(var(--accent-color-rgb), 0.2) !important; }
    
    /* Fix hover states */
    .custom-page-content .hover\\:bg-blue-700:hover { background-color: var(--primary-color) !important; opacity: 0.9; }
    
    /* Fix form button */
    .custom-page-content .bg-blue-600 { background-color: var(--primary-color) !important; }
  `,j=_().props,{page:e,customPages:a=[],settings:o}=j,c=((p=(i=o==null?void 0:o.config_sections)==null?void 0:i.theme)==null?void 0:p.primary_color)||"#3b82f6",n=((g=(l=o==null?void 0:o.config_sections)==null?void 0:l.theme)==null?void 0:g.secondary_color)||"#8b5cf6",m=((d=(s=o==null?void 0:o.config_sections)==null?void 0:s.theme)==null?void 0:d.accent_color)||"#10b77f";return z(),r.jsxs(r.Fragment,{children:[r.jsxs(w,{children:[r.jsx("title",{children:e.meta_title||e.title}),e.meta_description&&r.jsx("meta",{name:"description",content:e.meta_description}),r.jsx("style",{children:k})]}),r.jsxs("div",{className:"min-h-screen bg-white",style:{"--primary-color":c,"--secondary-color":n,"--accent-color":m,"--primary-color-rgb":((u=c.replace("#","").match(/.{2}/g))==null?void 0:u.map(t=>parseInt(t,16)).join(", "))||"59, 130, 246","--secondary-color-rgb":((b=n.replace("#","").match(/.{2}/g))==null?void 0:b.map(t=>parseInt(t,16)).join(", "))||"139, 92, 246","--accent-color-rgb":((f=m.replace("#","").match(/.{2}/g))==null?void 0:f.map(t=>parseInt(t,16)).join(", "))||"16, 185, 129"},children:[r.jsx(C,{settings:o,customPages:a,directoryCustomPages:a,isDirectoryContext:!0,sectionData:((y=(h=o==null?void 0:o.config_sections)==null?void 0:h.sections)==null?void 0:y.find(t=>t.key==="header"))||{},brandColor:c}),r.jsx("main",{className:"pt-16 min-h-screen",children:r.jsx("div",{className:"custom-page-content",dangerouslySetInnerHTML:{__html:e.content.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")}})}),r.jsx(F,{settings:o,sectionData:((x=(v=o==null?void 0:o.config_sections)==null?void 0:v.sections)==null?void 0:x.find(t=>t.key==="footer"))||{},brandColor:c})]})]})}export{Y as default};

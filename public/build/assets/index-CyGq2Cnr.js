import{R as e}from"./ui-CdAo8jEz.js";import k from"./SocialIcon-CE1eTPOs.js";import{aj as o}from"./app-BnvI0xFy.js";const oe=(n,s)=>{if(n.startsWith("dynamic:")){const c=n.split(":");if(c.length===3){const[,m,p]=c,a=parseInt(p,10);return s&&s[m]&&s[m][a]?s[m][a]:ce(m,a)}}return n},ce=(n,s=0)=>`${window.baseUrl||window.location.origin}/storage/images/bio-image/${n}/image${s+1}.jpg`,me=n=>!(!n||n.includes("dynamic:")||n.includes("/storage/images/bio-image/")||n.includes("demo.workdo.io/vcard-saas/storage/images/bio-image/")),de=n=>n?n.startsWith("http://")||n.startsWith("https://")?n:n.startsWith("/")?`${window.baseUrl||window.location.origin}${n}`:n.startsWith("storage/")?`${window.baseUrl||window.location.origin}/${n}`:n.startsWith("media/")?`${window.baseUrl||window.location.origin}/storage/${n}`:`${window.baseUrl||window.location.origin}/${n}`:"",ie=(n,s)=>n?me(n)?de(n):oe(n,s):"",w={name:o("Alex Johnson"),tagline:o("Digital Creator & Innovation Enthusiast"),email:o("hello@alexjohnson.com"),phone:o("+1 (555) 234-5678"),description:o("Passionate about creating impactful digital experiences and building meaningful connections in the creative community."),links:[{text:"View Portfolio",url:"#",description:"Explore my creative work",icon:""},{text:"Book Consultation",url:"#",description:"Schedule a meeting",icon:""},{text:"Read Blog",url:"#",description:"Latest insights & tips",icon:""}],social:[{platform:"linkedin",url:"#",icon:""},{platform:"twitter",url:"#",icon:""},{platform:"instagram",url:"#",icon:""}]},U={name:"Personal",layout:"standard",buttonStyle:"soft",socialPosition:"floating",profileStyle:"large",profileFields:[{name:"name",label:o("Name"),type:"text",placeholder:o("Enter your name"),defaultValue:w.name,required:!0,section:o("Basic Information"),cols:1},{name:"tagline",label:o("Tagline"),type:"text",placeholder:o("Enter a short description"),defaultValue:w.tagline,required:!1,section:o("Basic Information"),cols:1},{name:"profile_image",label:o("Profile Picture"),type:"image",placeholder:o("Select profile picture"),required:!1,section:o("Basic Information"),cols:2},{name:"email",label:o("Email Address"),type:"email",placeholder:o("Enter your email address"),defaultValue:w.email,required:!1,section:o("Contact Information"),cols:1},{name:"phone",label:o("Phone Number"),type:"tel",placeholder:o("Enter your phone number"),defaultValue:w.phone,required:!1,section:o("Contact Information"),cols:1},{name:"description",label:o("Description"),type:"textarea",placeholder:o("Enter a detailed description about yourself"),defaultValue:w.description,required:!1,section:o("About Me"),cols:2,rows:4}],customCSS:`
    /* Modern Personal Theme - Elegant & Professional */
    .bio-link-container {
      position: relative;
      overflow: hidden;
      font-family: 'Inter', sans-serif;
      letter-spacing: -0.01em;
      min-height: 100vh;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    
    /* Animated gradient background */
    .bio-link-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 0;
    }
    
    /* Subtle particle effect */
    .bio-link-container::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.15) 2%, transparent 0%);
      background-size: 50px 50px;
      opacity: 0.4;
      z-index: 0;
    }
    
    /* Enhanced header styling */
    .bio-link-header {
      position: relative;
      z-index: 1;
      padding: 3rem 1.5rem 2rem;
      text-align: center;
    }
    
    /* Main content container */
    .bio-link-layout {
      max-width: 480px;
      margin: 0 auto;
      padding: 0 1.5rem;
      position: relative;
      z-index: 1;
    }
    
    /* Modern profile image styling */
    .bio-link-profile {
      position: relative;
      width: 140px;
      height: 140px;
      margin: 0 auto 0.25rem;
      box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.3);
      transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.5s ease;
      overflow: hidden;
    }
    
    .bio-link-profile img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    /* Profile image hover animation */
    .bio-link-profile:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.4);
    }
    
    /* Profile image inner glow */
    .bio-link-profile::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at center, transparent 50%, rgba(0, 0, 0, 0.2));
      pointer-events: none;
    }
    
    /* Name title with elegant animation */
    .bio-link-title {
      position: relative;
      display: inline-block;
      margin-top: 1.25rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      font-size: 1.75rem;
      line-height: 1.2;
    }
    
    /* Animated text highlight effect */
    .bio-link-title::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 0;
      height: 2px;
      background: var(--theme-accent, currentColor);
      opacity: 0.6;
      transition: width 0.6s ease;
    }
    
    .bio-link-title:hover::after {
      width: 100%;
    }
    
    /* Animated underline for name */
    .animate-expand {
      height: 2px;
      background: var(--theme-accent, rgba(255, 255, 255, 0.5));
      margin: 0.5rem auto 0.75rem;
      animation: expand 1.5s ease-out forwards;
      max-width: 80px;
    }
    
    /* Enhanced description styling */
    .bio-link-description {
      font-weight: 400;
      letter-spacing: 0;
      max-width: 85%;
      margin: 0.75rem auto 0;
      line-height: 1.6;
      font-size: 1rem;
    }
    
    /* Contact information styling */
    .bio-link-contact {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      align-items: center;
      margin-top: 1.5rem;
      padding: 1rem;
      border-radius: 1rem;
      background-color: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(10px);
      max-width: 85%;
      margin-left: auto;
      margin-right: auto;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .bio-link-contact-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 0.75rem;
      border-radius: 0.5rem;
      background-color: rgba(255, 255, 255, 0.1);
      width: 100%;
      transition: all 0.3s ease;
    }
    
    .bio-link-contact-item:hover {
      background-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }
    
    .bio-link-contact a {
      transition: all 0.2s ease;
      color: inherit;
      text-decoration: none;
    }
    
    .bio-link-contact a:hover {
      opacity: 0.9;
    }
    
    .bio-link-description-text {
      text-align: center;
      line-height: 1.6;
      padding: 0.5rem;
      font-style: italic;
      opacity: 0.9;
      font-weight: 400;
    }
    
    /* Animations */
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes expand {
      0% { width: 0; }
      100% { width: 80px; }
    }
    
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes pulse {
      0% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.05); opacity: 0.8; }
      100% { transform: scale(1); opacity: 1; }
    }
    
    /* Modern button styling */
    .bio-link-button {
      position: relative;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
      z-index: 1;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      margin-bottom: 1rem;
      border-radius: 12px;
      padding: 1rem 1.5rem;
      font-weight: 500;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
      background-color: var(--button-color) !important;
      color: var(--button-text-color, #FFFFFF) !important;
    }
    
    /* Button shine effect */
    .bio-link-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.7s ease;
      z-index: -1;
    }
    
    /* Button hover effects */
    .bio-link-button:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
      border-color: rgba(255, 255, 255, 0.25);
      background-color: rgba(255, 255, 255, 0.2);
    }
    
    .bio-link-button:hover::before {
      left: 100%;
    }
    
    /* Link icon styling */
    .bio-link-button img {
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .bio-link-button:hover img {
      transform: scale(1.15) rotate(5deg);
    }
    
    /* Arrow icon animation */
    .bio-link-button svg {
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .bio-link-button:hover svg {
      transform: translateX(4px);
    }
    
    /* Social icons with hover effects */
    .bio-link-social {
      margin-top: 2rem;
      margin-bottom: 1.5rem;
      position: relative;
      z-index: 2;
    }
    
    .bio-link-social a {
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      border-radius: 50%;
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(255, 255, 255, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .bio-link-social a:hover {
      transform: translateY(-5px) scale(1.1);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
      background-color: rgba(255, 255, 255, 0.25);
    }
    
    /* Floating elements animation */
    @keyframes float-diagonal {
      0% { transform: translate(0, 0); }
      50% { transform: translate(15px, -15px); }
      100% { transform: translate(0, 0); }
    }
    
    @keyframes float-circular {
      0% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(8px, 8px) rotate(5deg); }
      50% { transform: translate(0, 15px) rotate(0deg); }
      75% { transform: translate(-8px, 8px) rotate(-5deg); }
      100% { transform: translate(0, 0) rotate(0deg); }
    }
    
    .float-diagonal {
      animation: float-diagonal 8s ease-in-out infinite;
    }
    
    .float-circular {
      animation: float-circular 12s ease-in-out infinite;
    }
    
    /* Copyright section */
    .bio-link-copyright {
      text-align: center;
      font-size: 0.8rem;
      padding: 1rem 0;
      margin-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      transition: opacity 0.3s ease;
      letter-spacing: 0.02em;
      font-weight: 500;
      position: relative;
      bottom: 0;
    }
    
 
  `,colorPresets:[{name:"Ocean Breeze",background:{type:"image",color:"#1F6CAB",gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",image:"dynamic:personal:0"},buttonColor:"#1F6CAB",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Cosmic Purple",background:{type:"image",color:"#9E841C",gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",image:"dynamic:personal:1"},buttonColor:"#9E841C",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Emerald Dream",background:{type:"image",color:"#E67E22",gradient:"linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",image:"dynamic:personal:2"},buttonColor:"#E67E22",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Sunset Bliss",background:{type:"image",color:"#6C5CE7",gradient:"linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",image:"dynamic:personal:3"},buttonColor:"#6C5CE7",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Golden Horizon",background:{type:"image",color:"#27AE60",gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",image:"dynamic:personal:4"},buttonColor:"#27AE60",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"}],font:"Inter, sans-serif",defaultPreset:0,renderDecorativeElements:n=>e.createElement(e.Fragment,null,e.createElement("div",{className:"absolute bottom-[20%] right-[10%] w-20 h-20 rounded-full bg-white/5 float-circular"}),e.createElement("div",{className:"absolute top-[30%] right-[20%] w-12 h-12 rounded-full bg-white/10 float-diagonal"}),e.createElement("div",{className:"absolute bottom-[40%] left-[25%] w-10 h-10 rounded-full bg-white/5 float-circular"})),renderProfile:n=>{const{data:s,layoutStyle:c,isPublic:m,textColor:p,buttonColor:a,t:r=f=>f}=n,{header:t}=s.config,i=!m,l=t.name||(t.name!==null&&t.name!==""&&i?w.name:null),d=t.tagline||(t.tagline!==null&&t.tagline!==""&&i?w.tagline:null),g=t.email||(t.email!==null&&t.email!==""&&i?w.email:null),h=t.phone||(t.phone!==null&&t.phone!==""&&i?w.phone:null),b=t.description||(t.description!==null&&t.description!==""&&i?w.description:null);return e.createElement(e.Fragment,null,t.profile_image?e.createElement("div",{className:`${c.profileSize} overflow-hidden mb-5 bio-link-profile rounded-2xl w-36 h-36`,style:{borderColor:a,boxShadow:`0 0 30px ${a}40, 0 15px 35px rgba(0, 0, 0, 0.3)`}},e.createElement("img",{src:F(t.profile_image),alt:t.name,className:"w-full h-full object-cover"})):l?e.createElement("div",{className:`${c.profileSize} mb-5 flex items-center justify-center text-3xl font-bold bio-link-profile rounded-2xl w-36 h-36`,style:{background:`linear-gradient(135deg, ${a}, rgba(255,255,255,0.5))`,boxShadow:`0 0 30px ${a}40, 0 15px 35px rgba(0, 0, 0, 0.3)`,color:p}},l.charAt(0)):null,l&&e.createElement("div",{className:"relative"},e.createElement("h1",{className:"text-2xl font-bold mb-2 bio-link-title","data-text":l,style:{letterSpacing:"-0.02em"}},l)),d&&e.createElement("p",{className:"text-base bio-link-description mt-2",style:{fontWeight:"400",letterSpacing:"0",maxWidth:"85%",margin:"0 auto"}},d),(g||h||b)&&e.createElement("div",{className:"bio-link-contact"},e.createElement("div",{className:"text-sm font-medium mb-1"},r("Contact Information")),e.createElement("div",{className:"w-full flex flex-col gap-2"},g&&e.createElement("div",{className:"bio-link-contact-item"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"flex-shrink-0"},e.createElement("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),e.createElement("path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"})),e.createElement("a",{href:`mailto:${g}`,className:"text-sm font-medium truncate"},g)),h&&e.createElement("div",{className:"bio-link-contact-item"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"flex-shrink-0"},e.createElement("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})),e.createElement("a",{href:`tel:${h}`,className:"text-sm font-medium truncate"},h))),b&&e.createElement("div",{className:"bio-link-description-text text-sm w-full",style:{borderTop:"1px solid rgba(255, 255, 255, 0.1)",paddingTop:"0.75rem",marginTop:"0.25rem"}},b)))},renderSocial:n=>{const{data:s,isPublic:c,textColor:m,buttonColor:p,t:a=l=>l}=n,{social:r}=s.config,t=!c,i=r!=null&&r.items&&r.items.length>0?r.items:r!=null&&r.display&&t?w.social:[];return!(r!=null&&r.display)||!i.length?null:e.createElement("div",{className:"flex justify-center mt-6 bio-link-social flex-wrap gap-3",style:{padding:"0.5rem 0",marginBottom:"1rem"}},e.createElement("div",{className:"w-full text-sm mb-3 font-medium text-center"},a("Connect With Me")),i.map((l,d)=>l.platform&&e.createElement("a",{key:d,href:l.url||"#",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center",style:{width:"2.5rem",height:"2.5rem",borderRadius:"50%",backgroundColor:"rgba(255, 255, 255, 0.15)",border:"1px solid rgba(255, 255, 255, 0.2)",boxShadow:"0 6px 15px rgba(0, 0, 0, 0.1)",animation:c?`fadeInUp 0.5s ease forwards ${.2+d*.1}s`:"none",opacity:1}},e.createElement(k,{platform:l.platform,color:m}))))},renderLinks:n=>{const{data:s,layoutStyle:c,isPublic:m,buttonColor:p,buttonTextColor:a,textColor:r,buttonStyle:t}=n,{links:i}=s.config,l=s.config.buttonColor||p,d=s.config.buttonTextColor||a,g=!m,h=i&&i.length>0?i:g?w.links:[];return!h||!h.length?e.createElement("div",{className:"bg-white/20 rounded-lg p-4 flex items-center justify-center shadow-sm text-white/70 text-sm"},o("No links added yet")):e.createElement("div",{className:"space-y-4"},h.map((f,u)=>e.createElement("a",{key:u,href:f.url||"#",target:"_blank",rel:"noopener noreferrer",className:"flex items-center bio-link-button no-underline",style:{backgroundColor:l,color:d,boxShadow:`0 6px 15px rgba(0, 0, 0, 0.1), 0 0 20px ${l}`,...t,transform:m?`translateY(${u*5}px)`:"none",animationDelay:m?`${u*.1}s`:"0s",opacity:1,animation:m?"fadeInUp 0.6s ease forwards":"none",textDecoration:"none"}},f.icon&&e.createElement("div",{className:"w-8 h-8 mr-4 flex-shrink-0 ml-2 rounded-lg overflow-hidden",style:{boxShadow:"0 4px 8px rgba(0,0,0,0.1)",background:"rgba(255,255,255,0.1)",padding:"2px"}},e.createElement("img",{src:F(f.icon),alt:"",className:"w-full h-full object-contain"})),e.createElement("div",{className:"flex-1"},e.createElement("div",{className:"font-medium text-base",style:{letterSpacing:"-0.01em",fontWeight:"600",color:a,textShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"}},f.text||"Untitled Link"),f.description&&e.createElement("div",{className:"text-sm mt-1",style:{opacity:"0.95",fontWeight:"500",color:a,textShadow:"0 1px 2px rgba(0, 0, 0, 0.1)"}},f.description)),e.createElement("div",{className:"w-6 h-6 ml-3 mr-1 flex-shrink-0 flex items-center justify-center rounded-full bg-white"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#060606",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M5 12h14"}),e.createElement("path",{d:"M12 5l7 7-7 7"}))))))},renderContainer:n=>{var i,l;const{data:s,textColor:c,buttonColor:m,font:p}=n,{background:a}=s.config,r=window.__themeImages||{};let t={};if((a==null?void 0:a.type)==="color"&&a.color)t={backgroundColor:a.color,backgroundImage:"none"};else if((a==null?void 0:a.type)==="gradient"&&a.gradient)t={background:a.gradient,backgroundImage:"none"};else if((a==null?void 0:a.type)==="image"){const d=a.image||"dynamic:personal:0";t={backgroundImage:`url(${ie(d,r)})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}else{const d=oe("dynamic:personal:0",r);d&&(t={backgroundImage:`url(${d})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"})}return e.createElement("div",{className:"bio-link-container",style:{color:c,fontFamily:p,"--button-color":m,"--text-color":c,"--theme-accent":m,...t}},U.renderDecorativeElements&&U.renderDecorativeElements(n),e.createElement("div",{className:"bio-link-layout"},e.createElement("div",{className:"bio-link-header"},U.renderProfile&&U.renderProfile(n)),U.renderLinks&&U.renderLinks(n),U.renderSocial&&U.renderSocial(n),((i=s.config.copyright)==null?void 0:i.enabled)!==!1&&e.createElement("div",{className:"bio-link-copyright",style:{color:c,borderTop:`1px solid ${c?c.replace(")",", 0.1)"):"rgba(255, 255, 255, 0.1)"}`}},((l=s.config.copyright)==null?void 0:l.text)||`© ${new Date().getFullYear()} ${s.config.header.name||w.name}. All rights reserved.`)))}},E={name:o("Sarah Mitchell"),tagline:o("CEO & Business Strategist"),email:o("sarah@businesspro.com"),phone:o("+1 (555) 987-6543"),description:o("Leading innovative business solutions with 15+ years of experience in strategic planning and corporate growth."),links:[{text:"Our Services",url:"#",description:o("Explore our offerings"),icon:""},{text:"Schedule Meeting",url:"#",description:o("Book a consultation"),icon:""},{text:"Case Studies",url:"#",description:o("Success stories"),icon:""}],social:[{platform:"linkedin",url:"#",icon:""},{platform:"twitter",url:"#",icon:""}]},q={name:"Business",layout:"card",buttonStyle:"corporate",socialPosition:"inline-code",profileStyle:"editorial",profileFields:[{name:"name",label:o("Business Name"),type:"text",placeholder:o("Enter your business name"),defaultValue:E.name,required:!0,section:o("Business Information"),cols:1},{name:"tagline",label:o("Business Tagline"),type:"text",placeholder:o("Enter your business tagline or slogan"),defaultValue:E.tagline,required:!1,section:o("Business Information"),cols:1},{name:"profile_image",label:o("Business Logo"),type:"image",placeholder:o("Upload your business logo"),required:!1,section:o("Business Information"),cols:2},{name:"email",label:o("Business Email"),type:"email",placeholder:o("Enter your business email"),defaultValue:E.email,required:!1,section:o("Contact Details"),cols:1},{name:"phone",label:o("Business Phone"),type:"tel",placeholder:o("Enter your business phone"),defaultValue:E.phone,required:!1,section:o("Contact Details"),cols:1},{name:"address",label:o("Business Address"),type:"text",placeholder:o("Enter your business address"),required:!1,section:o("Contact Details"),cols:2},{name:"description",label:o("Business Description"),type:"textarea",placeholder:o("Enter a detailed description about your business"),defaultValue:E.description,required:!1,section:o("About Business"),cols:2,rows:4},{name:"hours",label:o("Business Hours"),type:"textarea",placeholder:o(`Mon-Fri: 9:00 AM - 6:00 PM
Sat: 10:00 AM - 4:00 PM
Sun: Closed`),required:!1,section:o("Additional Information"),cols:2,rows:3}],customCSS:`
    /* Premium Business Theme - Professional & Elegant */
    .bio-link-container.business-theme {
      position: relative;
      font-family: 'Plus Jakarta Sans', sans-serif;
      letter-spacing: -0.01em;
      max-width: 100%;
      overflow: hidden;
      background: var(--theme-bg, #F8FAFC);
      color: var(--theme-text, #1E293B);
      min-height: 100vh;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    
    /* Dynamic color system */
    .business-theme {
      --theme-bg: var(--business-bg, #F8FAFC);
      --theme-text: #1E293B;
      --theme-button: var(--business-button, #2563EB);
      --theme-button-text: #FFFFFF;
      --theme-accent: var(--business-accent, var(--business-button, #2563EB));
      --theme-border: rgba(0, 0, 0, 0.08);
      --theme-card-bg: rgba(255, 255, 255, 0.95);
      --theme-hover-bg: rgba(255, 255, 255, 0.98);
    }
    
    /* Modern subtle background pattern */
    .bio-link-container.business-theme::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        linear-gradient(45deg, rgba(0, 0, 0, 0.02) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.02) 75%),
        linear-gradient(45deg, rgba(0, 0, 0, 0.02) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.02) 75%);
      background-size: 60px 60px;
      background-position: 0 0, 30px 30px;
      opacity: 0.5;
      z-index: 0;
      pointer-events: none;
    }
    
    /* Header styling for business theme */
    .business-theme .bio-link-header {
      position: relative;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      padding-top: 1rem;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
      z-index: 1;
    }
    
    /* Modern Profile Card */
    .business-theme .modern-profile-card {
      background: var(--theme-card-bg);
      border-radius: 24px;
      padding: 1rem;
      margin: 0 2rem 0.5rem 2rem;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(20px);
      transition: all 0.4s ease;
    }
    
    /* Transparent profile card when background image is set */
    .business-theme.has-bg-image .modern-profile-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .business-theme .modern-profile-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
    }
    
    /* Profile Header */
    .business-theme .profile-header-section {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    }
    
    .business-theme .profile-avatar {
      width: 80px;
      height: 80px;
      border-radius: 20px;
      overflow: hidden;
      margin-right: 1.5rem;
      flex-shrink: 0;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    }
    
    .business-theme .avatar-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .business-theme .avatar-fallback {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.5rem;
      font-weight: 700;
    }
    
    .business-theme .profile-text {
      flex: 1;
    }
    
    .business-theme .business-name {
      font-size: 1.5rem;
      font-weight: 700;
      margin: 0 0 0.5rem 0;
      line-height: 1.2;
    }
    
    .business-theme .business-tagline {
      font-size: 1rem;
      opacity: 1;
      margin: 0;
      line-height: 1.4;
    }
    
    /* Business About */
    .business-theme .business-about {
      margin-bottom: 1.5rem;
      padding: 1.25rem;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 16px;
      border-left: 4px solid var(--theme-accent);
    }
    
    .business-theme .business-about p {
      margin: 0;
      color: var(--theme-text);
      line-height: 1.6;
      font-size: 0.95rem;
    }
    
    /* Contact Grid */
    .business-theme .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1rem;
    }
    
    .business-theme .contact-card {
      display: flex;
      align-items: flex-start;
      padding: 1.17rem;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 16px;
      border: 1px solid rgba(0, 0, 0, 0.08);
      text-decoration: none;
      color: var(--theme-text);
      transition: all 0.3s ease;
      cursor: pointer;
    }
    

    
    .business-theme .hours-card {
      cursor: default;
    }
    
    .business-theme .contact-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background: var(--theme-accent);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1rem;
      flex-shrink: 0;
    }
    
    .business-theme .contact-icon svg {
      color: white;
    }
    
    .business-theme .contact-info {
      flex: 1;
      min-width: 0;
    }
    
    .business-theme .contact-label {
      display: block;
      font-size: 0.8rem;
      font-weight: 600;
      color: #060606 !important;
      opacity: 1;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 0.25rem;
    }
    
    .business-theme .contact-value {
      display: block;
      font-size: 0.95rem;
      font-weight: 500;
      color: #1F2937 !important;
      line-height: 1.4;
      word-break: break-word;
      text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.8);
    }
    
    .business-theme .hours-display {
      font-size: 0.9rem;
      color: var(--theme-text);
    }
    
    .business-theme .hours-line {
      margin-bottom: 0.25rem;
      line-height: 1.3;
    }
    
    .business-theme .hours-line:last-child {
      margin-bottom: 0;
    }
    
    /* Name styling for business theme */
    .business-theme .bio-link-title {
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 0.75rem;
      letter-spacing: -0.02em;
      line-height: 1.2;
      position: relative;
      display: inline-block;
    }
    
    /* Title underline effect */
    .business-theme .bio-link-title::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 40px;
      height: 3px;
      background-color: var(--accent-color, currentColor);
      border-radius: 2px;
      transition: width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    
    .business-theme .bio-link-title:hover::after {
      width: 100%;
    }
    
    /* Tagline styling for business theme */
    .business-theme .bio-link-description {
      font-size: 1.125rem;
      opacity: 0.8;
      font-weight: 400;
      margin-top: 0.5rem;
      line-height: 1.5;
      max-width: 90%;
    }
    
    /* Enhanced Business Detail Items */
    .business-theme .business-detail-item {
      display: flex;
      align-items: center;
      padding: 0.875rem 1rem;
      background: rgba(255, 255, 255, 0.6);
      border: 1px solid rgba(0, 0, 0, 0.06);
      border-radius: 12px;
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      cursor: default;
      position: relative;
      overflow: hidden;
    }
    
    .business-theme .business-detail-item.interactive-contact {
      cursor: pointer;
      text-decoration: none;
      color: inherit;
    }
    
    .business-theme .business-detail-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 3px;
      height: 100%;
      background: var(--theme-accent);
      transform: scaleY(0);
      transition: transform 0.3s ease;
    }
    
    .business-theme .business-detail-item:hover {
      transform: translateY(-2px);
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
      border-color: var(--theme-accent);
    }
    
    .business-theme .business-detail-item:hover::before {
      transform: scaleY(1);
    }
    
    .business-theme .business-detail-item:focus {
      outline: 2px solid var(--theme-accent);
      outline-offset: 2px;
    }
    
    .business-theme .contact-icon-wrapper {
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--theme-accent);
      border-radius: 8px;
      margin-right: 0.875rem;
      flex-shrink: 0;
      transition: all 0.4s ease;
    }
    
    .business-theme .contact-icon-wrapper svg {
      color: white;
      transition: transform 0.3s ease;
    }
    
    .business-theme .business-detail-item:hover .contact-icon-wrapper {
      transform: scale(1.1) rotate(5deg);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    
    .business-theme .contact-text {
      font-size: 0.95rem;
      font-weight: 500;
      line-height: 1.4;
      word-break: break-word;
    }
    
    /* Enhanced Business Description */
    .business-theme .business-description {
      margin-top: 1.5rem;
      padding: 1.25rem;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 12px;
      border-left: 4px solid var(--theme-accent);
      font-size: 0.95rem;
      line-height: 1.6;
      opacity: 0.9;
      transition: all 0.3s ease;
    }
    
    .business-theme .business-description:hover {
      background: rgba(255, 255, 255, 0.6);
      opacity: 1;
    }
    

    

    
    .business-theme .hours-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .business-theme .hours-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 0.75rem;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 8px;
      transition: all 0.3s ease;
      border-left: 3px solid transparent;
    }
    
    .business-theme .hours-item:hover {
      background: rgba(255, 255, 255, 0.9);
      border-left-color: var(--theme-accent);
      transform: translateX(4px);
    }
    
    .business-theme .hours-item.single {
      justify-content: center;
      text-align: center;
    }
    
    .business-theme .hours-item .day {
      font-weight: 600;
      color: var(--theme-text);
      font-size: 0.9rem;
      min-width: 60px;
    }
    
    .business-theme .hours-item .time {
      font-weight: 500;
      color: var(--theme-text);
      opacity: 0.8;
      font-size: 0.9rem;
      text-align: right;
    }
    
    .business-theme .hours-simple {
      padding: 0.75rem 1rem;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 8px;
      font-size: 0.95rem;
      line-height: 1.5;
      color: var(--theme-text);
      white-space: pre-line;
    }
    
    /* Current day highlighting */
    .business-theme .hours-item.current-day {
      background: linear-gradient(135deg, var(--theme-accent)15, var(--theme-button)10);
      border-left-color: var(--theme-accent);
      font-weight: 600;
    }
    
    .business-theme .hours-item.current-day .day,
    .business-theme .hours-item.current-day .time {
      color: var(--theme-button);
      opacity: 1;
    }
    
    /* Links section styling */
    .business-theme .links-section {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
      margin: 0 2rem 0.5rem 2rem;
      position: relative;
      z-index: 1;
    }
    
    /* Business link button styling */
    .business-theme .bio-link-button {
      display: flex;
      align-items: center;
      padding: 1.25rem 1.5rem;
      border-radius: 12px;
      transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      border-left: 5px solid var(--theme-button);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.02), 0 0 15px var(--theme-button);
      height: 100%;
      background-color: var(--theme-button) !important;
      position: relative;
      overflow: hidden;
      color: var(--theme-button-text) !important;
    }
    
    /* Transparent link buttons when background image is set */
    .business-theme.has-bg-image .bio-link-button {
      background-color: var(--theme-button);
      backdrop-filter: blur(10px);
      border: 1px solid var(--theme-button);
      border-left: 5px solid var(--theme-button);
      color: var(--theme-button-text);
    }
    
    .business-theme.has-bg-image .bio-link-button:hover {
      background-color: var(--theme-button);
      opacity: 0.9;
    }
    
    /* Link button shine effect */
    .business-theme .bio-link-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to right,
        transparent 0%,
        rgba(255, 255, 255, 0.2) 50%,
        transparent 100%
      );
      transition: left 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
      pointer-events: none;
    }
    
    .business-theme .bio-link-button:hover::before {
      left: 100%;
    }
    
    .business-theme .bio-link-button:hover {
      transform: translateY(-6px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.03), 0 0 25px var(--theme-button);
      background-color: var(--theme-button);
      border-left-color: var(--theme-button);
      opacity: 0.9;
    }
    
    /* Link icon container */
    .business-theme .link-icon {
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      margin-right: 1.25rem;
      flex-shrink: 0;
      background: rgba(0, 0, 0, 0.04);
      transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      border: 1px solid rgba(0, 0, 0, 0.03);
    }
    
    .business-theme .bio-link-button:hover .link-icon {
      transform: scale(1.15) rotate(8deg);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    }
    
    /* Link text styling */
    .business-theme .link-text {
      flex: 1;
      text-align: left;
    }
    
    .business-theme .link-title {
      font-weight: 600;
      font-size: 1.125rem;
      margin-bottom: 0.35rem;
      line-height: 1.3;
      letter-spacing: -0.01em;
    }
    
    .business-theme .link-description {
      font-size: 0.95rem;
      opacity: 0.7;
      line-height: 1.5;
    }
    
    /* Social media section */
    .business-theme .social-section {
      background: var(--theme-card-bg);
      padding: 1rem;
      border-radius: 16px;
      margin: 0.5rem 2rem 0 2rem;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.02);
      position: relative;
      z-index: 1;
      border-left: 5px solid var(--theme-accent);
      color: var(--theme-text);
    }
    
    /* Transparent social section when background image is set */
    .business-theme.has-bg-image .social-section {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-left: 5px solid var(--theme-accent);
    }
    
    .business-theme .social-title {
      font-size: 0.95rem;
      font-weight: 600;
      margin-bottom: 1.25rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      opacity: 1;
      position: relative;
      display: inline-block;
    }
    
    .business-theme .social-title::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 30px;
      height: 2px;
      background-color: var(--theme-accent);
      border-radius: 2px;
    }
    
    .business-theme .bio-link-social {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
    }
    
    .business-theme .bio-link-social a {
      width: 45px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      border: 1px solid rgba(0, 0, 0, 0.03);
      background-color: #ffffff !important;
    }
    
    .business-theme .bio-link-social a:hover {
      transform: translateY(-6px) scale(1.1);
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08);
    }
    
    .business-theme .bio-link-social a svg {
      transition: transform 0.4s ease;
      color: var(--theme-button) !important;
      fill: var(--theme-button) !important;
    }
    
    .business-theme .bio-link-social a:hover svg {
      transform: scale(1.2);
    }
    
    /* Footer section */
    .business-theme .footer-section {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(0, 0, 0, 0.08);
      text-align: center;
      font-size: 0.95rem;
      opacity: 1;
      position: relative;
      z-index: 1;
      font-weight: 500;
      margin: 1rem 2rem 0.5rem 2rem;
      color: #374151 !important;
    }
    
    .business-theme .footer-content {
      margin-bottom: 1rem;
      line-height: 1.6;
    }
    
    .business-theme .footer-links {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
      margin-bottom: 1rem;
    }
    
    .business-theme .footer-links a {
      color: var(--theme-button);
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      transition: all 0.3s ease;
    }
    
    .business-theme .footer-links a:hover {
      background-color: rgba(var(--theme-button-rgb), 0.1);
      transform: translateY(-1px);
    }
    
    .business-theme .footer-copyright {
      font-size: 0.85rem;
      opacity: 0.8;
    }
    
    /* Transparent footer when background image is set */
    .business-theme.has-bg-image .footer-section {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 12px;
      padding: 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .business-theme.has-bg-image .footer-links a {
      color: var(--theme-button);
      background-color: rgba(255, 255, 255, 0.1);
    }
    
    .business-theme.has-bg-image .footer-links a:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
    
    /* Enhanced Animations with Accessibility */
    @keyframes slideInRightFade {
      from { transform: translateX(30px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes fadeInUpScale {
      from { transform: translateY(20px) scale(0.95); opacity: 0; }
      to { transform: translateY(0) scale(1); opacity: 1; }
    }
    
    @keyframes scaleInRotate {
      from { transform: scale(0.9) rotate(-2deg); opacity: 0; }
      to { transform: scale(1) rotate(0); opacity: 1; }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideInUp {
      from { transform: translateY(15px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    
    /* Respect user's motion preferences */
    @media (prefers-reduced-motion: reduce) {
      .business-theme * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
    
    .business-theme .profile-section {
      animation: scaleInRotate 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      opacity: 0;
    }
    
    .business-theme .bio-link-title,
    .business-theme .bio-link-description {
      animation: slideInRightFade 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      animation-delay: 0.2s;
      opacity: 0;
    }
    
    .business-theme .business-details {
      animation: slideInUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      animation-delay: 0.4s;
      opacity: 0;
    }
    
    .business-theme .business-detail-item {
      animation: fadeIn 0.5s ease forwards;
      animation-delay: calc(0.1s * var(--index, 0) + 0.5s);
      opacity: 0;
    }
    
    .business-theme .business-description {
      animation: fadeInUpScale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      animation-delay: 0.7s;
      opacity: 0;
    }
    
    .business-theme .bio-link-button {
      animation: fadeInUpScale 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      animation-delay: calc(0.1s * var(--index, 0) + 0.5s);
      opacity: 0;
    }
    
    .business-theme .social-section {
      animation: fadeInUpScale 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      animation-delay: 0.6s;
      opacity: 0;
    }
    
    .business-theme .bio-link-social a {
      animation: fadeIn 0.5s ease forwards;
      animation-delay: calc(0.1s * var(--index, 0) + 0.8s);
      opacity: 0;
    }
    
    .business-theme .footer-section {
      animation: fadeIn 0.8s ease forwards;
      animation-delay: 1s;
      opacity: 0;
    }
    
    .business-theme .qr-section {
      position: relative;
      z-index: 1;
      animation: fadeInUpScale 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      animation-delay: 0.8s;
      opacity: 0;
    }
    
    /* Enhanced Responsive Design */
    @media (max-width: 768px) {
      .business-theme .profile-section {
        flex-direction: column;
        text-align: center;
        padding: 2rem;
        align-items: center;
      }
      
      .business-theme .profile-image-container {
        margin-right: 0;
        margin-bottom: 1.5rem;
      }
      
      .business-theme .profile-image-wrapper,
      .business-theme .profile-fallback {
        width: 6rem;
        height: 6rem;
      }
      
      .business-theme .bio-link-title::after {
        left: 50%;
        transform: translateX(-50%);
      }
      
      .business-theme .business-details.enhanced {
        grid-template-columns: 1fr;
        gap: 0.5rem;
      }
      
      .business-theme .business-detail-item {
        padding: 0.75rem;
      }
      
      .business-theme .contact-icon-wrapper {
        width: 2.25rem;
        height: 2.25rem;
        margin-right: 0.75rem;
      }
      
      .business-theme .profile-header-section {
        flex-direction: column;
        text-align: center;
      }
      
      .business-theme .profile-avatar {
        margin-right: 0;
        margin-bottom: 1rem;
      }
      
      .business-theme .contact-grid {
        grid-template-columns: 1fr;
      }
      
      .business-theme .links-section {
        grid-template-columns: 1fr;
      }
      
      .business-theme .social-title::after {
        left: 50%;
        transform: translateX(-50%);
      }
      
      .business-theme .social-title {
        display: block;
        text-align: center;
      }
      
      .business-theme .footer-links {
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
      }
      
      .business-theme .footer-links a {
        padding: 0.5rem 1rem;
        border-radius: 8px;
        min-width: 120px;
        text-align: center;
      }
    }
    
    @media (max-width: 480px) {
      .business-theme .profile-section {
        padding: 1.5rem;
      }
      
      .business-theme .business-detail-item {
        padding: 0.625rem 0.75rem;
      }
      
      .business-theme .contact-text {
        font-size: 0.875rem;
      }
      
      .business-theme .modern-profile-card {
        padding: 1.5rem;
      }
      
      .business-theme .business-about {
        padding: 1rem;
      }
      
      .business-theme .contact-card {
        padding: 1rem;
      }
      
      .business-theme .contact-icon {
        width: 40px;
        height: 40px;
      }
    }
  `,colorPresets:[{name:"Premium Burgundy",background:{type:"image",color:"#1F6FEB",gradient:"linear-gradient(135deg, #fef2f2 0%, #fecaca 100%)",image:"dynamic:bussiness:0"},buttonColor:"#1F6FEB",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Innovation Indigo",background:{type:"image",color:"#BB6653",gradient:"linear-gradient(135deg, #f0f9ff 0%, #dbeafe 100%)",image:"dynamic:bussiness:4"},buttonColor:"#BB6653",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Corporate Blue",background:{type:"image",color:"#1591B3",gradient:"linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",image:"dynamic:bussiness:2"},buttonColor:"#1591B3",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Growth Green",background:{type:"image",color:"#EAA64D",gradient:"linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",image:"dynamic:bussiness:3"},buttonColor:"#EAA64D",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Executive Steel",background:{type:"image",color:"#D75555",gradient:"linear-gradient(135deg, #f9fafb 0%, #d1d5db 100%)",image:"dynamic:bussiness:2"},buttonColor:"#D75555",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"}],font:"Plus Jakarta Sans, sans-serif",defaultPreset:0,renderProfile:n=>{const{data:s,buttonColor:c,textColor:m,isPublic:p,t:a=u=>u}=n,r=!p,{header:t}=s.config,i=t.name||(t.name!==null&&t.name!==""&&r?E.name:null),l=t.tagline||(t.tagline!==null&&t.tagline!==""&&r?E.tagline:null),d=t.email||(t.email!==null&&t.email!==""&&r?E.email:null),g=t.phone||(t.phone!==null&&t.phone!==""&&r?E.phone:null),h=t.description||(t.description!==null&&t.description!==""&&r?E.description:null),b=i?i.split(" ").map(u=>u[0]).join("").substring(0,2):"?",f=t.address?t.address.replace(/,/g,`
`):"";return e.createElement("div",{className:"modern-profile-card"},e.createElement("div",{className:"profile-header-section"},e.createElement("div",{className:"profile-avatar"},t.profile_image?e.createElement("img",{src:F(t.profile_image),alt:i,className:"avatar-image"}):e.createElement("div",{className:"avatar-fallback",style:{backgroundColor:c}},b)),e.createElement("div",{className:"profile-text"},e.createElement("h1",{className:"business-name",style:{color:n.textColor}},i),t.tagline&&e.createElement("p",{className:"business-tagline",style:{color:n.textColor}},l))),h&&e.createElement("div",{className:"business-about"},e.createElement("p",null,h)),e.createElement("div",{className:"contact-grid"},g&&e.createElement("a",{href:`tel:${g}`,className:"contact-card phone-card"},e.createElement("div",{className:"contact-icon"},e.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},e.createElement("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}))),e.createElement("div",{className:"contact-info"},e.createElement("span",{className:"contact-label"},a("Phone")),e.createElement("span",{className:"contact-value"},g))),d&&e.createElement("a",{href:`mailto:${d}`,className:"contact-card email-card"},e.createElement("div",{className:"contact-icon"},e.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},e.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),e.createElement("polyline",{points:"22,6 12,13 2,6"}))),e.createElement("div",{className:"contact-info"},e.createElement("span",{className:"contact-label"},a("Email")),e.createElement("span",{className:"contact-value"},d))),t.address&&e.createElement("a",{href:`https://maps.google.com/?q=${encodeURIComponent(t.address)}`,target:"_blank",rel:"noopener noreferrer",className:"contact-card address-card"},e.createElement("div",{className:"contact-icon"},e.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},e.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),e.createElement("circle",{cx:"12",cy:"10",r:"3"}))),e.createElement("div",{className:"contact-info"},e.createElement("span",{className:"contact-label"},a("Address")),e.createElement("span",{className:"contact-value",style:{whiteSpace:"pre-line"}},f))),t.hours&&e.createElement("div",{className:"contact-card hours-card"},e.createElement("div",{className:"contact-icon"},e.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},e.createElement("circle",{cx:"12",cy:"12",r:"10"}),e.createElement("polyline",{points:"12 6 12 12 16 14"}))),e.createElement("div",{className:"contact-info"},e.createElement("span",{className:"contact-label"},a("Hours")),e.createElement("div",{className:"hours-display"},(()=>{try{const x=typeof t.hours=="string"?JSON.parse(t.hours):t.hours;if(Array.isArray(x)||typeof x=="object")return Object.entries(x).map(([y,v],I)=>e.createElement("div",{key:I,className:"hours-line"},e.createElement("span",null,`${y}: ${v||a("Closed")}`)))}catch{}const u=t.hours.split(/[\n,;]|\s{2,}/).filter(x=>x.trim()).map(x=>x.trim());return u.length>1?u.map((x,y)=>e.createElement("div",{key:y,className:"hours-line"},x)):e.createElement("span",null,t.hours)})())))))},renderSocial:n=>{const{data:s,isPublic:c,buttonColor:m,t:p=i=>i}=n,{social:a}=s.config,r=!c,t=a!=null&&a.items&&a.items.length>0?a.items:a!=null&&a.display&&r?E.social:[];return!(a!=null&&a.display)||!t.length?null:e.createElement("div",{className:"social-section animate-fade-up",style:{marginBottom:"2rem",animationDelay:"0.3s"}},e.createElement("div",{className:"social-title",style:{color:n.textColor}},p("Connect With Us")),e.createElement("div",{className:"bio-link-social"},t.map((i,l)=>i.platform&&e.createElement("a",{key:l,href:i.url||"#",target:"_blank",rel:"noopener noreferrer",style:{backgroundColor:`${m}15`,animation:`fadeIn 0.4s ease forwards ${.4+l*.05}s`,opacity:1}},e.createElement(k,{platform:i.platform,color:m,style:{color:m,fill:m}})))))},renderLinks:n=>{const{data:s,isPublic:c,buttonColor:m,textColor:p}=n,{links:a,background:r}=s.config,t=!c,i=a&&a.length>0?a:t?E.links:[],l=(r==null?void 0:r.type)==="image"&&r.image;return!i||!i.length?e.createElement("div",{className:"bg-white/90 rounded-xl p-4 flex items-center justify-center shadow-sm text-gray-500 text-sm"},o("No links added yet")):e.createElement("div",{className:"links-section"},i.map((d,g)=>e.createElement("a",{key:g,href:d.url||"#",target:"_blank",rel:"noopener noreferrer",className:"bio-link-button animate-slide-in no-underline",style:{borderLeftColor:m,color:n.buttonTextColor||"#FFFFFF",backgroundColor:m+" !important",backdropFilter:l?"blur(10px)":"none",boxShadow:`0 8px 20px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.02), 0 0 15px ${m}40`,animationDelay:`${.2+g*.05}s`,opacity:1,textDecoration:"none"}},d.icon?e.createElement("div",{className:"link-icon"},e.createElement("img",{src:d.icon,alt:"",className:"w-6 h-6 object-contain"})):e.createElement("div",{className:"link-icon",style:{backgroundColor:"rgba(255,255,255,0.2)"}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:n.buttonTextColor||"#FFFFFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),e.createElement("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}))),e.createElement("div",{className:"link-text"},e.createElement("div",{className:"link-title",style:{color:n.buttonTextColor||"#FFFFFF"}},d.text||"Untitled Link"),d.description&&e.createElement("div",{className:"link-description",style:{color:n.buttonTextColor||"#FFFFFF"}},d.description)))))},renderContainer:n=>{var g,h,b,f,u,x,y,v,I,te,ae,ne;const s=new Date().getFullYear(),c=n.data.config.header.name||"Business Name",m=n.data.config.copyright,{data:p,textColor:a,buttonColor:r,buttonTextColor:t}=n,{background:i}=p.config,l=(i==null?void 0:i.type)==="image"&&i.image,d=window.__themeImages||{};if((i==null?void 0:i.type)==="image"){const ee=i.image||"dynamic:bussiness:0";ie(ee,d)}else(i==null?void 0:i.type)==="gradient"&&i.gradient?i.gradient:(i==null?void 0:i.type)==="color"&&i.color?i.color:oe("dynamic:bussiness:0",d);return e.createElement("div",{className:`business-theme${l?" has-bg-image":""}`,style:{"--business-bg":(i==null?void 0:i.color)||"#F8FAFC","--business-text":a,"--business-button":r,"--business-button-text":t,"--business-accent":r,"--theme-button-rgb":((g=r.replace("#","").match(/.{2}/g))==null?void 0:g.map(ee=>parseInt(ee,16)).join(", "))||"37, 99, 235",color:a}},e.createElement("div",{className:"bio-link-header",style:{color:a}},q.renderProfile&&q.renderProfile(n)),e.createElement("div",{className:"flex flex-col",style:{position:"relative",zIndex:1,paddingBottom:"1rem"}},((h=n.data.config.social)==null?void 0:h.display)&&n.data.config.social.items.length>0&&q.renderSocial&&q.renderSocial(n),q.renderLinks&&q.renderLinks(n),((b=p.config.qr_share)==null?void 0:b.enable_qr)&&e.createElement("div",{className:"qr-section",style:{background:l?"rgba(255, 255, 255, 0.1)":"var(--theme-card-bg)",backdropFilter:l?"blur(10px)":"none",border:l?"1px solid rgba(255, 255, 255, 0.1)":"1px solid rgba(0, 0, 0, 0.06)",borderRadius:"16px",padding:"1.5rem",margin:"0.5rem 2rem",textAlign:"center",borderLeft:`5px solid ${r}`,boxShadow:"0 8px 32px rgba(0, 0, 0, 0.08)"}},p.config.qr_share.qr_title&&e.createElement("h3",{style:{color:a,marginBottom:"0.75rem",fontSize:"1.1rem",fontWeight:"600",textAlign:"center"}},p.config.qr_share.qr_title),p.config.qr_share.qr_description&&e.createElement("p",{style:{color:a,marginBottom:"1.5rem",opacity:"0.8",fontSize:"0.9rem",textAlign:"center",lineHeight:"1.5"}},p.config.qr_share.qr_description),e.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"1rem",backgroundColor:"white",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)",margin:"0 auto",width:p.config.qr_share.qr_size==="large"?"300px":p.config.qr_share.qr_size==="small"?"128px":"200px",height:p.config.qr_share.qr_size==="large"?"300px":p.config.qr_share.qr_size==="small"?"128px":"200px",border:"2px dashed #ccc",fontSize:"0.9rem",color:"#666",maxWidth:"100%"}},o("QR Code"))),(((f=n.data.config.footer)==null?void 0:f.show_footer)!==!1||(m==null?void 0:m.enabled)!==!1)&&e.createElement("div",{className:"footer-section",style:{color:a}},((u=n.data.config.footer)==null?void 0:u.show_footer)&&((x=n.data.config.footer)==null?void 0:x.footer_text)&&e.createElement("div",{className:"footer-content",style:{color:a,marginBottom:"1rem",fontSize:"0.95rem",lineHeight:"1.6"}},n.data.config.footer.footer_text),((y=n.data.config.footer)==null?void 0:y.show_footer)&&((I=(v=n.data.config.footer)==null?void 0:v.footer_links)==null?void 0:I.length)>0&&e.createElement("div",{className:"footer-links",style:{display:"flex",flexWrap:"wrap",gap:"1rem",justifyContent:"center",marginBottom:"1rem"}},n.data.config.footer.footer_links.map((ee,se)=>e.createElement("a",{key:se,href:ee.url||"#",target:"_blank",rel:"noopener noreferrer",style:{color:r,textDecoration:"none",fontSize:"0.9rem",fontWeight:"500",padding:"0.25rem 0.5rem",borderRadius:"4px",transition:"all 0.3s ease"},onMouseEnter:re=>{re.target.style.backgroundColor=`${r}15`},onMouseLeave:re=>{re.target.style.backgroundColor="transparent"}},ee.title))),e.createElement("div",{className:"footer-copyright",style:{color:a,fontSize:"0.85rem",opacity:"0.8",borderTop:(te=n.data.config.footer)!=null&&te.show_footer?"1px solid rgba(0, 0, 0, 0.1)":"none",paddingTop:(ae=n.data.config.footer)!=null&&ae.show_footer?"1rem":"0"}},((ne=n.data.config.copyright)==null?void 0:ne.text)||(m==null?void 0:m.text)||`© ${s} ${c}. All rights reserved.`))))}},C={name:o("Marcus Chen"),tagline:o("Creative Director & Designer"),email:o("marcus@portfolio.design"),phone:o("+1 (555) 456-7890"),description:o("Award-winning designer specializing in brand identity and digital experiences for global clients."),links:[{text:"View Portfolio",url:"#",description:o("See my work"),icon:""},{text:"Hire Me",url:"#",description:o("Start a project"),icon:""},{text:"Design Process",url:"#",description:o("How I work"),icon:""}],social:[{platform:"behance",url:"#",icon:""},{platform:"dribbble",url:"#",icon:""},{platform:"instagram",url:"#",icon:""}]},V={name:"Portfolio",layout:"masonry",buttonStyle:"borderless",socialPosition:"sidebar",profileStyle:"asymmetric",profileFields:[{name:"name",label:o("Full Name"),type:"text",placeholder:o("Enter your full name"),defaultValue:C.name,required:!0,section:o("Personal Details"),cols:1},{name:"tagline",label:o("Professional Title"),type:"text",placeholder:o("Enter your professional title"),defaultValue:C.tagline,required:!1,section:o("Personal Details"),cols:1},{name:"profile_image",label:o("Profile Photo"),type:"image",placeholder:o("Upload your profile photo"),required:!1,section:o("Personal Details"),cols:2},{name:"email",label:o("Email Address"),type:"email",placeholder:o("Enter your email address"),defaultValue:C.email,required:!1,section:o("Contact Information"),cols:1},{name:"phone",label:o("Phone Number"),type:"tel",placeholder:o("Enter your phone number"),defaultValue:C.phone,required:!1,section:o("Contact Information"),cols:1},{name:"website",label:o("Portfolio Website"),type:"url",placeholder:o("Enter your portfolio website URL"),required:!1,section:o("Professional Details"),cols:2},{name:"description",label:o("Bio"),type:"textarea",placeholder:o("Write a short bio about yourself and your work"),defaultValue:C.description,required:!1,section:o("Professional Details"),cols:2,rows:4},{name:"skills",label:o("Skills"),type:"text",placeholder:o("Enter your skills (e.g. Photography, Design, Illustration)"),required:!1,section:o("Professional Details"),cols:2}],customCSS:`
    /* Portfolio theme styling */
    .bio-link-container.portfolio-theme {
      position: relative;
      font-family: 'Space Grotesk', sans-serif;
      overflow-x: hidden;
      min-height: 100vh;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    /* Background overlay for readability */
    .bio-link-container.portfolio-theme::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 0;
    }

    /* Creative grid layout */
    .portfolio-theme .portfolio-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      gap: 1rem;
      padding: 1rem;
      max-width: 100%;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    /* Creative header with asymmetric design */
    .portfolio-theme .bio-link-header {
      position: relative;
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      padding: 0;
      margin-bottom: 1rem;
    }

    /* Profile section with creative layout */
    .portfolio-theme .profile-section {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 1.5rem;
      border-radius: 0;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-left: 4px solid;
    }

    /* Decorative elements */
    .portfolio-theme .decorative-line {
      position: absolute;
      height: 100%;
      width: 1px;
      background: linear-gradient(to bottom, transparent, currentColor, transparent);
      left: 1.5rem;
      top: 0;
      opacity: 0.3;
    }

    .portfolio-theme .decorative-dot {
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: currentColor;
      opacity: 0.5;
    }

    /* Profile image with creative styling */
    .portfolio-theme .bio-link-profile {
      position: relative;
      width: 120px !important;
      height: 120px !important;
      margin-bottom: 1.5rem !important;
      border: none !important;
      z-index: 1;
      border-radius:10px;
      overflow:hidden;
    }




    .portfolio-theme .bio-link-profile img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    /* Name styling with creative typography */
    .portfolio-theme .bio-link-title {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.1;
      margin-bottom: 0.5rem;
      position: relative;
      display: inline-block;
      letter-spacing: -0.02em;
      color: var(--text-color, #FFFFFF) !important;
    }



    /* Creative tagline styling */
    .portfolio-theme .bio-link-description {
      font-size: 1rem;
      font-weight: 500;
      opacity: 1;
      margin-bottom: 1rem;
      max-width: 100%;
      line-height: 1.5;
      color: var(--text-color, #F3F4F6) !important;
    }

    /* Portfolio category tags */
    .portfolio-theme .portfolio-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .portfolio-theme .portfolio-tag {
      font-size: 0.75rem;
      padding: 0.25rem 0.75rem;
      border-radius: 2rem;
      background-color: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(5px);
      white-space: nowrap;
      color: var(--text-color, #FFFFFF) !important;
    }

    /* Links section with masonry layout */
    .portfolio-theme .links-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 1rem;
      width: 100%;
    }

    /* Portfolio project card styling */
    .portfolio-theme .bio-link-button {
      position: relative;
      display: flex;
      flex-direction: column;
      padding: 1.5rem;
      overflow: hidden;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.1) !important;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
      text-decoration: none;
      color: inherit;
    }

    .portfolio-theme .bio-link-button:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.15) !important;
      border-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }



    /* Project image container */
    .portfolio-theme .project-image {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .portfolio-theme .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .portfolio-theme .bio-link-button:hover .project-image img {
      transform: scale(1.05);
    }

    /* Project overlay with info */
    .portfolio-theme .project-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 1rem;
      background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
      transform: translateY(100%);
      transition: transform 0.3s ease;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .portfolio-theme .bio-link-button:hover .project-overlay {
      transform: translateY(0);
    }

    .portfolio-theme .project-title {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
      color: white;
    }

    .portfolio-theme .project-description {
      font-size: 0.75rem;
      opacity: 0.9;
      color: white;
    }

    /* Social links section */
    .portfolio-theme .social-links-section {
      margin-top: 1rem;
      width: 100%;
    }

    .portfolio-theme .social-buttons a:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      opacity: 0.9;
    }

    /* Animations */
    @keyframes fadeSlideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeSlideIn {
      from { opacity: 0; transform: translateX(20px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }

    .portfolio-theme .animate-fade-up {
      animation: fadeSlideUp 0.6s ease forwards;
    }

    .portfolio-theme .animate-slide-in {
      animation: fadeSlideIn 0.6s ease forwards;
    }

    .portfolio-theme .animate-scale-in {
      animation: scaleIn 0.5s ease forwards;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .portfolio-theme .links-container {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 0;
      }

      .portfolio-theme .social-sidebar {
        position: relative;
        right: auto;
        top: auto;
        transform: none;
        flex-direction: row;
        justify-content: center;
        margin-top: 2rem;
        padding: 1rem;
      }

      .portfolio-theme .bio-link-social {
        flex-direction: row;
        gap: 1rem;
      }
    }

    @media (min-width: 640px) {
      .portfolio-theme .links-container {
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      }
    }

    @media (min-width: 1024px) {
      .portfolio-theme .links-container {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      }
    }
  `,colorPresets:[{name:"Creative Black",background:{type:"image",color:"#C55A4E",gradient:"linear-gradient(135deg, #fecaca 0%, #fed7d7 100%)",image:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop"},buttonColor:"#C55A4E",buttonTextColor:"#FFFFFF",textColor:"#ffffff"},{name:"Designer Purple",background:{type:"image",color:"#7D5BA6",gradient:"linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)",image:"https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=800&fit=crop"},buttonColor:"#7D5BA6",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Photographer Slate",background:{type:"image",color:"#3E7FB4",gradient:"linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",image:"https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=1200&h=800&fit=crop"},buttonColor:"#3E7FB4",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Architect Stone",background:{type:"image",color:"#E38B1B",gradient:"linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",image:"https://images.unsplash.com/photo-1554774853-719586f82d77?w=1200&h=800&fit=crop"},buttonColor:"#E38B1B",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Artist Emerald",background:{type:"image",color:"#6D926D",gradient:"linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",image:"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&h=800&fit=crop"},buttonColor:"#6D926D",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"}],font:"Space Grotesk, sans-serif",defaultPreset:0,renderProfile:n=>{const{data:s,textColor:c,buttonColor:m,isPublic:p,t:a=f=>f}=n,r=!p,{header:t}=s.config,i=t.name||(t.name!==null&&t.name!==""&&r?C.name:null),l=t.tagline||(t.tagline!==null&&t.tagline!==""&&r?C.tagline:null),d=t.email||(t.email!==null&&t.email!==""&&r?C.email:null),g=t.phone||(t.phone!==null&&t.phone!==""&&r?C.phone:null),h=t.description||(t.description!==null&&t.description!==""&&r?C.description:null),b=t.skills?t.skills.split(",").map(f=>f.trim()).filter(Boolean):[];return e.createElement("div",{className:"profile-section",style:{borderLeftColor:m}},t.profile_image?e.createElement("div",{className:"bio-link-profile",style:{borderColor:c}},e.createElement("img",{src:F(t.profile_image),alt:i})):e.createElement("div",{className:"bio-link-profile",style:{borderColor:c,backgroundColor:m}},e.createElement("div",{className:"w-full h-full flex items-center justify-center text-3xl font-bold",style:{color:n.buttonTextColor}},i.charAt(0))),e.createElement("h1",{className:"bio-link-title",style:{color:c}},i),e.createElement("p",{className:"bio-link-description",style:{color:c}},l),e.createElement("div",{className:"portfolio-tags"},b.length>0?b.map((f,u)=>e.createElement("div",{key:u,className:"portfolio-tag",style:{color:c}},f)):[e.createElement("div",{key:"default-1",className:"portfolio-tag",style:{color:c}},"Designer"),e.createElement("div",{key:"default-2",className:"portfolio-tag",style:{color:c}},"Creative")]),t.website&&e.createElement("div",{className:"mt-4 text-sm flex items-center gap-2",style:{color:c}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("circle",{cx:"12",cy:"12",r:"10"}),e.createElement("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),e.createElement("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})),t.website),d&&e.createElement("div",{className:"mt-3 text-sm flex items-center gap-2",style:{color:c}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),e.createElement("polyline",{points:"22,6 12,13 2,6"})),d),g&&e.createElement("div",{className:"mt-2 text-sm flex items-center gap-2",style:{color:c,opacity:.8,textShadow:"1px 1px 2px rgba(0, 0, 0, 0.8)"}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})),g),h&&e.createElement("div",{className:"mt-4 text-sm p-3 bg-white/10 rounded-lg",style:{color:c}},h))},renderSocial:n=>{const{data:s,isPublic:c,textColor:m,t:p=i=>i}=n,{social:a}=s.config,r=!c,t=a!=null&&a.items&&a.items.length>0?a.items:a!=null&&a.display&&r?C.social:[];return!(a!=null&&a.display)||!t.length?null:e.createElement("div",{style:{marginTop:"1.5rem",padding:"1.5rem",backgroundColor:"rgba(0, 0, 0, 0.3)",borderRadius:"12px",backdropFilter:"blur(10px)"}},e.createElement("h3",{style:{fontSize:"1rem",fontWeight:600,marginBottom:"1rem",color:m,textShadow:"1px 1px 2px rgba(0, 0, 0, 0.8)",textAlign:"center"}},p("Connect With Us")),e.createElement("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap",justifyContent:"center"}},t.map((i,l)=>i.platform&&e.createElement("a",{key:l,href:i.url||"#",target:"_blank",rel:"noopener noreferrer",style:{width:"3rem",height:"3rem",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"12px",backgroundColor:"rgba(255, 255, 255, 0.9)",color:"#333",textDecoration:"none",transition:"all 0.3s ease",animation:c?`fadeSlideUp 0.3s ease forwards ${.3+l*.1}s`:"none",opacity:1}},e.createElement(k,{platform:i.platform,color:"#333"})))))},renderLinks:n=>{const{data:s,isPublic:c,buttonColor:m,textColor:p}=n,{links:a}=s.config,r=!c,t=a&&a.length>0?a:r?C.links:[];return!t||!t.length?e.createElement("div",{className:"bg-white/20 rounded-lg p-3 flex items-center justify-center shadow-sm text-sm",style:{color:p,opacity:.7}},"No portfolio items yet"):e.createElement("div",{className:"links-container",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",width:"100%",marginTop:"1rem"}},t.map((i,l)=>e.createElement("a",{key:l,href:i.url||"#",target:"_blank",rel:"noopener noreferrer",className:"bio-link-button animate-fade-up no-underline",style:{position:"relative",display:"flex",flexDirection:"column",padding:0,overflow:"hidden",borderRadius:"8px",background:m,transition:"transform 0.3s ease",animationDelay:c?`${.2+l*.1}s`:"0s",opacity:1,textDecoration:"none"}},e.createElement("div",{style:{position:"relative",width:"100%",height:"100%",backgroundColor:m,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem 1rem"}},i.icon?e.createElement("img",{src:i.icon,alt:i.text,style:{width:"48px",height:"48px",objectFit:"contain",marginBottom:"0.5rem"}}):e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",stroke:n.buttonTextColor||"#FFFFFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginBottom:"0.5rem"}},e.createElement("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),e.createElement("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})),e.createElement("div",{style:{fontSize:"0.875rem",fontWeight:600,color:n.buttonTextColor||"#FFFFFF",textAlign:"center",textShadow:"0 1px 2px rgba(0, 0, 0, 0.5)"}},i.text||"Link"),i.description&&e.createElement("div",{style:{fontSize:"0.7rem",color:n.buttonTextColor||"#FFFFFF",textAlign:"center",marginTop:"0.25rem"}},i.description)))))},renderContainer:n=>{var i,l,d;const{data:s,textColor:c,buttonColor:m,font:p}=n,{background:a}=s.config,r="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop";let t={};return(a==null?void 0:a.type)==="image"?t={backgroundImage:`url(${a.image||r})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}:(a==null?void 0:a.type)==="gradient"&&a.gradient?t={background:a.gradient,backgroundImage:"none"}:(a==null?void 0:a.type)==="color"&&a.color?t={backgroundColor:a.color,backgroundImage:"none"}:t={backgroundImage:`url(${r})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},e.createElement("div",{className:"bio-link-container portfolio-theme",style:{color:c,fontFamily:p,"--button-color":m,"--text-color":c,...t}},e.createElement("div",{className:"portfolio-container",style:{position:"relative",minHeight:"100vh",padding:"1rem",display:"flex",flexDirection:"column"}},e.createElement("div",{className:"bio-link-header",style:{marginBottom:"1rem"}},V.renderProfile&&V.renderProfile(n)),e.createElement("div",{style:{width:"100%",flex:1}},V.renderLinks&&V.renderLinks(n)),((i=n.data.config.social)==null?void 0:i.display)&&n.data.config.social.items.length>0&&V.renderSocial&&V.renderSocial(n),((l=n.data.config.copyright)==null?void 0:l.enabled)!==!1&&e.createElement("div",{className:"portfolio-footer",style:{padding:"1.25rem",textAlign:"center",fontSize:"0.85rem",opacity:1,borderTop:"1px solid rgba(255, 255, 255, 0.2)",letterSpacing:"0.02em",color:c,textShadow:"1px 1px 2px rgba(0, 0, 0, 0.8)",marginTop:"0.5rem"}},((d=n.data.config.copyright)==null?void 0:d.text)||`© ${new Date().getFullYear()} ${n.data.config.header.name}. All rights reserved.`)))}},z={name:o("Emma Rodriguez"),tagline:o("Social Media Influencer"),email:o("emma@socialconnect.com"),description:o("Creating authentic content and building communities across all social platforms. Join me on this journey!"),links:[{text:"Latest Content",url:"#",description:o("Check out my recent posts"),icon:""},{text:"Collaborate",url:"#",description:o("Work with me"),icon:""},{text:"Shop My Favorites",url:"#",description:o("Curated products I love"),icon:""}],social:[{platform:"instagram",url:"#",icon:""},{platform:"tiktok",url:"#",icon:""},{platform:"youtube",url:"#",icon:""}]},_={name:"Social",layout:"compact",buttonStyle:"pill",socialPosition:"inline",profileStyle:"small",profileFields:[{name:"name",label:o("Display Name"),type:"text",placeholder:o("Enter your display name"),defaultValue:z.name,required:!0,section:o("Profile Info"),cols:1},{name:"tagline",label:o("Bio"),type:"text",placeholder:o("Enter a short bio"),defaultValue:z.tagline,required:!1,section:o("Profile Info"),cols:1},{name:"profile_image",label:o("Profile Picture"),type:"image",placeholder:o("Upload your profile picture"),required:!1,section:o("Profile Info"),cols:2},{name:"location",label:o("Location"),type:"text",placeholder:o("Enter your location"),required:!1,section:o("Additional Info"),cols:1},{name:"email",label:o("Email"),type:"email",placeholder:o("Enter your email"),defaultValue:z.email,required:!1,section:o("Additional Info"),cols:1},{name:"description",label:o("About Me"),type:"textarea",placeholder:o("Tell people more about yourself"),defaultValue:z.description,required:!1,section:o("Additional Info"),cols:2,rows:3}],customCSS:`
    .social-theme {
      font-family: 'Inter', sans-serif;
      min-height: 100vh;
      position: relative;
      background-size: cover;
      background-position: center;
      padding: 2rem 1rem;
    }
    
    .social-theme::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.1));
      z-index: 0;
    }
    
    .social-theme .bio-link-layout {
      max-width: 400px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
      padding: 0;
    }
    
    .social-theme .bio-link-profile-container {
      width: 100px;
      height: 100px;
      margin: 0 auto 1.5rem;
      border-radius: 50%;
      overflow: hidden;
    }
    

    
    .social-theme .bio-link-profile {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .social-theme .bio-link-title {
      font-size: 1.75rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 0.5rem;
      color: var(--text-color, #ffffff) !important;
    }
    
    .social-theme .bio-link-tagline {
      font-size: 1rem;
      text-align: center;
      margin-bottom: 1.5rem;
      color: var(--text-color, #ffffff) !important;
      opacity: 1;
      line-height: 1.4;
    }
    
    .social-theme .bio-link-description {
      padding: 1rem;
      border-radius: 12px;
      margin: 1.5rem 0;
      line-height: 1.6;
      border: 1px solid rgba(255,255,255,0.2);
      color: var(--text-color, #495057);
      font-size: 0.9rem;
      backdrop-filter: blur(10px);
    }
    
    .social-theme .info-card {
      border-radius: 12px;
      padding: 1rem;
      margin: 1rem 0;
      border: 1px solid rgba(255,255,255,0.2);
      backdrop-filter: blur(10px);
      color: var(--text-color, #495057);
    }
    
    .social-theme .social-card {
      border-radius: 12px;
      padding: 1rem 1.25rem;
      margin-bottom: 1.20rem;
      transition: all 0.2s ease;
      border: 1px solid var(--button-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      color: var(--button-text-color, #333333) !important;
      background-color: var(--button-color) !important;
      box-shadow: 0 8px 20px var(--button-color)60, 0 4px 12px var(--button-color)40, 0 2px 4px var(--button-color)20;
      backdrop-filter: blur(10px);
    }
    
    .social-theme .social-card:hover {
      transform: translateY(-1px);
      box-shadow: 0 12px 30px var(--button-color)70, 0 8px 20px var(--button-color)50, 0 4px 12px var(--button-color)30;
      border-color: var(--button-color);
    }
    
    .social-theme .card-icon {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      margin-right: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    
    .social-theme .card-content {
      flex: 1;
    }
    
    .social-theme .card-title {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
    }
    
    .social-theme .card-description {
      font-size: 0.8rem;
      opacity: 0.8;
      line-height: 1.3;
    }
    
    .social-theme .card-arrow {
      color: inherit;
      margin-left: 0.5rem;
    }
    
    .social-theme .social-icons {
      display: flex;
      justify-content: center;
      gap: 0.75rem;
      margin: 2rem 0;
      flex-wrap: wrap;
    }
    
    .social-theme .social-icon {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      border: 1px solid rgba(255,255,255,0.2);
      color: var(--text-color, #495057);
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      backdrop-filter: blur(10px);
      cursor:pointer;
    }
    

    .social-theme .social-icon svg {
      color: var(--text-color, #ffffff) !important;
      fill: var(--text-color, #ffffff) !important;
      width: 20px;
      height: 20px;
    }
    
    @media (max-width: 768px) {
      .social-theme .bio-link-layout {
        padding: 1.5rem 1rem;
      }
      
      .social-theme .bio-link-title {
        font-size: 1.875rem;
      }
    }
  `,colorPresets:[{name:"Instagram Gradient",background:{type:"image",color:"#FF6F61",gradient:"linear-gradient(45deg, #ede9fe 0%, #ddd6fe 50%, #c4b5fd 100%)",image:"https://images.unsplash.com/photo-1611262588024-d12430b98920?w=1200&h=800&fit=crop"},buttonColor:"#FF6F61",buttonTextColor:"#ffffff",textColor:"#ffffff"},{name:"Twitter Blue",background:{type:"image",color:"#00C2FF",gradient:"linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",image:"https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop"},buttonColor:"#00C2FF",buttonTextColor:"#ffffff",textColor:"#ffffff"},{name:"TikTok Vibes",background:{type:"image",color:"#77B2A2",gradient:"linear-gradient(135deg, #cffafe 0%, #a7f3d0 50%, #6ee7b7 100%)",image:"https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=1200&h=800&fit=crop"},buttonColor:"#77B2A2",buttonTextColor:"#ffffff",textColor:"#ffffff"},{name:"LinkedIn Pro",background:{type:"image",color:"#E38B1B",gradient:"linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",image:"https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop"},buttonColor:"#E38B1B",buttonTextColor:"#ffffff",textColor:"#ffffff"},{name:"Sunset Vibes",background:{type:"image",color:"#8B355E",gradient:"linear-gradient(135deg, #fce7f3 0%, #fbcfe8 50%, #f9a8d4 100%)",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop"},buttonColor:"#8B355E",buttonTextColor:"#ffffff",textColor:"#ffffff"}],font:"Inter, sans-serif",defaultPreset:0,renderProfile:n=>{const{data:s,textColor:c,buttonColor:m,buttonTextColor:p,isPublic:a}=n,r=!a,{header:t}=s.config,i=t.name||(t.name!==null&&t.name!==""&&r?z.name:null),l=t.tagline||(t.tagline!==null&&t.tagline!==""&&r?z.tagline:null),d=t.email||(t.email!==null&&t.email!==""&&r?z.email:null);t.phone||t.phone!==null&&t.phone!==""&&r&&z.phone;const g=t.description||(t.description!==null&&t.description!==""&&r?z.description:null);return e.createElement("div",{className:"bio-link-header"},e.createElement("div",{className:"bio-link-profile-container"},t.profile_image?e.createElement("img",{src:F(t.profile_image),alt:i,className:"bio-link-profile"}):e.createElement("div",{className:"bio-link-profile",style:{background:"rgba(255,255,255,0.2)",color:c,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2.5rem",fontWeight:"bold"}},i.charAt(0))),e.createElement("h1",{className:"bio-link-title"},i),l&&e.createElement("div",{className:"bio-link-tagline"},l),g&&e.createElement("div",{className:"bio-link-description"},g),(t.location||d)&&e.createElement("div",{className:"info-card",style:{display:"flex",flexDirection:"column",gap:"0.75rem"}},t.location&&e.createElement("div",{style:{display:"flex",alignItems:"flex-start",gap:"0.5rem",fontSize:"0.9rem"}},e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{flexShrink:0,marginTop:"2px"}},e.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),e.createElement("circle",{cx:"12",cy:"10",r:"3"})),e.createElement("span",{style:{wordWrap:"break-word",overflowWrap:"break-word",wordBreak:"break-word",lineHeight:"1.4",flex:1,minWidth:0}},t.location)),d&&e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.9rem"}},e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},e.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),e.createElement("polyline",{points:"22,6 12,13 2,6"})),d)))},renderSocial:n=>{const{data:s,isPublic:c,textColor:m,buttonColor:p,buttonTextColor:a}=n,{social:r}=s.config;r!=null&&r.items&&r.items.length>0?r.items:z.social;const t=[{platform:"instagram",url:"#"},{platform:"twitter",url:"#"},{platform:"facebook",url:"#"},{platform:"linkedin",url:"#"}],i=r!=null&&r.display&&r.items.length>0?r.items:t;return e.createElement("div",{className:"social-icons"},i.map((l,d)=>l.platform&&e.createElement("a",{key:d,href:l.url||"#",target:"_blank",rel:"noopener noreferrer",className:"social-icon"},e.createElement(k,{platform:l.platform,color:m||"#ffffff"}))))},renderLinks:n=>{const{data:s,isPublic:c,buttonColor:m,textColor:p,buttonTextColor:a}=n,{links:r}=s.config,t=r&&r.length>0?r:z.links;return e.createElement(e.Fragment,null,t&&t.map((i,l)=>e.createElement("a",{key:l,href:i.url||"#",target:"_blank",rel:"noopener noreferrer",className:"social-card"},e.createElement("div",{className:"card-icon",style:{color:n.buttonTextColor||"#FFFFFF"}},i.icon?e.createElement("img",{src:i.icon,alt:"",style:{width:"24px",height:"24px",borderRadius:"4px"}}):e.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},e.createElement("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),e.createElement("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}))),e.createElement("div",{className:"card-content"},e.createElement("h3",{className:"card-title",style:{color:n.textColor}},i.text||"Untitled"),i.description&&e.createElement("p",{className:"card-description",style:{color:n.textColor}},i.description)),e.createElement("div",{className:"card-arrow"},e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:n.buttonTextColor||"#FFFFFF",strokeWidth:"2"},e.createElement("path",{d:"M5 12h14"}),e.createElement("path",{d:"M12 5l7 7-7 7"}))))))},renderContainer:n=>{var i,l;const{data:s,textColor:c,buttonColor:m,font:p}=n,{background:a}=s.config,r="https://images.unsplash.com/photo-1611262588024-d12430b98920?w=1200&h=800&fit=crop";let t={};return(a==null?void 0:a.type)==="image"?t={backgroundImage:`url(${a.image||r})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}:(a==null?void 0:a.type)==="gradient"&&a.gradient?t={background:a.gradient,backgroundImage:"none"}:(a==null?void 0:a.type)==="color"&&a.color?t={backgroundColor:a.color,backgroundImage:"none"}:t={backgroundImage:`url(${r})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},e.createElement("div",{className:"social-theme",style:{color:c,fontFamily:p||"Inter, sans-serif","--text-color":c,"--button-color":m,...t}},e.createElement("div",{className:"bio-link-layout"},_.renderProfile&&_.renderProfile(n),_.renderSocial&&_.renderSocial(n),_.renderLinks&&_.renderLinks(n),((i=s.config.copyright)==null?void 0:i.enabled)!==!1&&e.createElement("div",{style:{marginTop:"3rem",padding:"1.5rem",textAlign:"center",background:"rgba(255,255,255,0.1)",borderRadius:"16px",border:"1px solid rgba(255,255,255,0.2)",fontSize:"0.875rem",color:c,opacity:.8,backdropFilter:"blur(10px)"}},((l=s.config.copyright)==null?void 0:l.text)||`© ${new Date().getFullYear()} ${s.config.header.name||z.name}. Connect With Me!`)))}},N={name:o("Jordan Smith"),tagline:o("Minimalist Designer"),email:o("jordan@minimal.design"),phone:o("+1 (555) 654-3210"),description:o("Less is more. Creating clean, functional designs that speak volumes through simplicity."),links:[{text:"Portfolio",url:"#",description:o("View my work"),icon:""},{text:"Contact",url:"#",description:o("Get in touch"),icon:""},{text:"Blog",url:"#",description:o("Design insights"),icon:""}],social:[{platform:"dribbble",url:"#",icon:""},{platform:"behance",url:"#",icon:""},{platform:"linkedin",url:"#",icon:""}]},R={name:"Minimal",layout:"minimal",buttonStyle:"pill",socialPosition:"bottom",profileStyle:"square",profileFields:[{name:"name",label:o("Name"),type:"text",placeholder:o("Enter your name"),defaultValue:N.name,required:!0,section:o("Basic Info"),cols:1},{name:"tagline",label:o("Tagline"),type:"text",placeholder:o("Enter a short tagline"),defaultValue:N.tagline,required:!1,section:o("Basic Info"),cols:1},{name:"profile_image",label:o("Profile Image"),type:"image",placeholder:o("Upload your profile image"),required:!1,section:o("Basic Info"),cols:2},{name:"email",label:o("Email"),type:"email",placeholder:o("Enter your email"),defaultValue:N.email,required:!1,section:o("Contact Details"),cols:1},{name:"phone",label:o("Phone"),type:"tel",placeholder:o("Enter your phone number"),defaultValue:N.phone,required:!1,section:o("Contact Details"),cols:1},{name:"description",label:o("Brief Description"),type:"textarea",placeholder:o("Enter a brief description"),defaultValue:N.description,required:!1,section:o("Additional Info"),cols:2,rows:2}],customCSS:`
    /* Ultra Modern Minimal Theme - Clean & Sophisticated */
    .bio-link-container.minimal-theme {
      position: relative;
      font-family: 'Outfit', sans-serif;
      letter-spacing: -0.01em;
      background-color: var(--bg-color, #FFFFFF);
      color: var(--text-color, #000000);
      border-radius: 0;
      overflow: hidden;
      max-width: 100%;
      margin: 0;
      min-height: 100vh;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    
    /* Background overlay for readability */
    .bio-link-container.minimal-theme::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.3);
      z-index: 0;
    }
    
    .bio-link-container.minimal-theme.dark-mode::after {
      background: rgba(0, 0, 0, 0.4);
    }
    
    /* Modern geometric background pattern */
    .minimal-theme::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        linear-gradient(to right, var(--pattern-color) 1px, transparent 1px),
        linear-gradient(to bottom, var(--pattern-color) 1px, transparent 1px);
      background-size: 24px 24px;
      pointer-events: none;
      z-index: 0;
      opacity: 0.6;
    }
    
    /* Modern header styling with glass effect */
    .minimal-theme .bio-link-header {
      padding: 4rem 2rem 2rem;
      position: relative;
      z-index: 2;
      text-align: left;
      max-width: 650px;
      margin: 0 auto;
      backdrop-filter: blur(5px);
      border-radius: 16px;
    }
    
    /* Modern square profile image */
    .minimal-theme .bio-link-profile {
      width: 130px !important;
      height: 130px !important;
      border-radius: 12px;
      overflow: hidden;
      position: relative;
      box-shadow: 0 10px 30px var(--theme-button)50, 0 4px 12px var(--theme-button)30, 0 0 0 2px var(--theme-button)20;
      flex-shrink: 0;
    }
    

    
    /* Profile content container */
    .minimal-theme .profile-content {
      flex: 1;
    }
    
    /* Clean modern typography */
    .minimal-theme .bio-link-title {
      font-size: 2.25rem;
      font-weight: 700;
      margin-bottom: 0.75rem;
      position: relative;
      display: inline-block;
      letter-spacing: -0.03em;
      line-height: 1.1;
      color: var(--text-color, #FFFFFF) !important;
    }
    
    /* Modern highlight for title */

    
    /* Title hover effect */
    .minimal-theme .bio-link-title:hover::after {
      width: 100%;
    }
    
    /* Description styling */
    .minimal-theme .bio-link-description {
      font-size: 1.25rem;
      opacity: 1;
      line-height: 1.6;
      font-weight: 400;
      max-width: 90%;
      color: var(--text-color, #FFFFFF) !important;
    }
    
    /* About me section styling */
    .minimal-theme .about-me-section {
      transition: all 0.3s ease;
    }
    
    .minimal-theme .about-me-section:hover {
      opacity: 0.95;
    }
    
    .minimal-theme .about-me-header {
      transition: all 0.3s ease;
    }
    
    .minimal-theme .about-me-section:hover .about-me-header {
      transform: translateX(3px);
    }
    
    /* Custom scrollbar for long descriptions */
    .minimal-theme .about-me-content {
      scrollbar-width: thin;
      scrollbar-color: var(--button-color, rgba(0, 0, 0, 0.2)) transparent;
    }
    
    .minimal-theme .about-me-content::-webkit-scrollbar {
      width: 4px;
    }
    
    .minimal-theme .about-me-content::-webkit-scrollbar-track {
      background: transparent;
    }
    
    .minimal-theme .about-me-content::-webkit-scrollbar-thumb {
      background-color: var(--button-color, rgba(0, 0, 0, 0.2));
      border-radius: 4px;
    }
    
    /* Links container */
    .minimal-theme .links-container {
      padding: 1rem 2rem 2rem 2rem;
      max-width: 650px;
      margin: 0 auto;
      position: relative;
      z-index: 2;
      color: var(--theme-text, #000000) !important;
    }
    
    /* Link button styling */
    .minimal-theme .bio-link-button {
      padding: 1.25rem 1.75rem;
      border-radius: 14px;
      transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      position: relative;
      overflow: hidden;
      background-color: var(--theme-button) !important;
      border: 1px solid var(--theme-button);
      box-shadow: 0 8px 20px var(--theme-button)60, 0 4px 12px var(--theme-button)40, 0 2px 4px var(--theme-button)20;
      color: var(--theme-button-text, #000000) !important;
    }
      .minimal-theme .bio-link-button:not(:last-of-type){
      margin-bottom: 1.25rem;
      }
    
    /* Link hover effect */
    .minimal-theme .bio-link-button:hover {
      transform: translateY(-4px) scale(1.01);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
      opacity: 0.9;
      filter: brightness(1.05);
    }
    
    /* Link button shine effect */
    .minimal-theme .bio-link-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to right,
        transparent 0%,
        rgba(255, 255, 255, 0.2) 50%,
        transparent 100%
      );
      transition: left 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
      pointer-events: none;
    }
    
    .minimal-theme .bio-link-button:hover::before {
      left: 100%;
    }
    
    /* Link content */
    .minimal-theme .link-content {
      display: flex;
      align-items: center;
      flex: 1;
    }
    
    /* Link icon */
    .minimal-theme .link-icon {
      width: 3rem;
      height: 3rem;
      margin-right: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      overflow: hidden;
      transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    }
    
    /* Link icon hover effect */
    .minimal-theme .bio-link-button:hover .link-icon {
      transform: scale(1.15) rotate(5deg);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }
    
    /* Link text */
    .minimal-theme .link-text {
      font-weight: 600;
      font-size: 1.25rem;
      transition: transform 0.4s ease;
      letter-spacing: -0.01em;
    }
    
    /* Link description */
    .minimal-theme .link-description {
      font-size: 0.95rem;
      opacity: 0.7;
      margin-top: 0.35rem;
      font-weight: 400;
      line-height: 1.5;
    }
    
    /* Link arrow */
    .minimal-theme .link-arrow {
      transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      margin-left: 0.75rem;
      transform: translateX(0);
    }
    
    /* Arrow hover effect */
    .minimal-theme .bio-link-button:hover .link-arrow {
      transform: translateX(6px);
      opacity: 1;
    }
    
    /* Social icons container */
    .minimal-theme .social-container,
    .minimal-footer-container {
      padding: 2.5rem 2rem;
      max-width: 650px;
      margin: 0 auto;
      position: relative;
      z-index: 2;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: flex-start;
      border-top: 1px solid var(--border-color, rgba(0, 0, 0, 0.08));
    }
    
    /* Social section title */
    .minimal-theme .social-title {
      width: 100%;
      font-size: 0.95rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      opacity: 1;
      font-weight: 600;
      color: var(--text-color, #FFFFFF) !important;
    }
    
    /* Social icon */
    .minimal-theme .social-icon {
      width: 3.25rem;
      height: 3.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      position: relative;
      border-radius: 12px;
      background-color: var(--theme-button) !important;
      border: 1px solid var(--theme-button);
      box-shadow: 0 4px 12px var(--theme-button)40, 0 2px 4px var(--theme-button)20;
      color: var(--theme-button-text, #FFFFFF) !important;
    }
    
    /* Social icon hover effect */
    .minimal-theme .social-icon:hover {
      transform: translateY(-5px) scale(1.1);
      background-color: var(--icon-hover-bg, rgba(0, 0, 0, 0.06));
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08);
    }
    
    /* Fix for social icons */
    .minimal-theme .social-icon svg {
      width: 20px;
      height: 20px;
      position: relative;
      z-index: 2;
      transition: all 0.3s ease;
      color: var(--theme-button-text, #FFFFFF) !important;
      fill: var(--theme-button-text, #FFFFFF) !important;
    }
    
    .minimal-theme .social-icon:hover svg {
      transform: scale(1.2);
    }
    
    /* Footer */
    .minimal-theme .minimal-footer {
      padding: 1rem;
      text-align: center;
      font-size: 0.95rem;
      opacity: 1;
      max-width: 650px;
      margin: 0 auto ;
      letter-spacing: -0.01em;
      border-top: none;
      font-weight: 500;
      color: var(--theme-button-text, #ffffff) !important;
      text-shadow: none;
        background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(10px);
      border-radius: 12px;
      position: relative;
      z-index: 10;
    }
    
    /* Dark mode footer */
    .minimal-theme.dark-mode .minimal-footer {
      background: rgba(0, 0, 0, 0.7);
      color: var(--theme-button-text, #FFFFFF) !important;
    }
    
    /* Dynamic color system */
    .minimal-theme {
      --bg-color: var(--theme-bg, #FFFFFF);
      --text-color: var(--theme-text, #111827);
      --button-color: var(--theme-button, #3B82F6);
      --button-text-color: var(--theme-button-text, #000000);
      --accent-color: var(--theme-accent, var(--theme-button, #3B82F6));
      --border-color: var(--theme-border, rgba(0, 0, 0, 0.08));
      --pattern-color: var(--theme-pattern, rgba(0, 0, 0, 0.02));
      --button-bg: var(--theme-button-bg, rgba(0, 0, 0, 0.04));
      --button-border: var(--theme-button-border, rgba(0, 0, 0, 0.06));
      --button-hover-bg: var(--theme-button-hover, rgba(0, 0, 0, 0.06));
      --icon-bg: var(--theme-icon-bg, rgba(0, 0, 0, 0.04));
      --icon-border: var(--theme-icon-border, rgba(0, 0, 0, 0.06));
      --icon-hover-bg: var(--theme-icon-hover, rgba(0, 0, 0, 0.06));
    }
    
    /* Dark mode adjustments */
    .minimal-theme.dark-mode {
      --theme-bg: #111111;
      --theme-text: #FFFFFF;
      --theme-border: rgba(255, 255, 255, 0.08);
      --theme-button-bg: rgba(255, 255, 255, 0.06);
      --theme-button-border: rgba(255, 255, 255, 0.08);
      --theme-button-hover: rgba(255, 255, 255, 0.1);
      --theme-pattern: rgba(255, 255, 255, 0.04);
      --theme-icon-bg: rgba(255, 255, 255, 0.06);
      --theme-icon-border: rgba(255, 255, 255, 0.08);
      --theme-icon-hover: rgba(255, 255, 255, 0.1);
      --theme-accent: rgba(255, 255, 255, 0.8);
    }
    
    /* Enhanced Animations */
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(-20px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes scaleInRotate {
      from { opacity: 0; transform: scale(0.8) rotate(-5deg); }
      to { opacity: 1; transform: scale(1) rotate(-2deg); }
    }
    
    @keyframes pulseGlow {
      0% { box-shadow: 0 0 0 0 rgba(var(--pulse-color, 0, 0, 0), 0.4); }
      70% { box-shadow: 0 0 0 10px rgba(var(--pulse-color, 0, 0, 0), 0); }
      100% { box-shadow: 0 0 0 0 rgba(var(--pulse-color, 0, 0, 0), 0); }
    }
    

    
    .minimal-theme .bio-link-title {
      animation: slideInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      animation-delay: 0.1s;
    }
    
    .minimal-theme .bio-link-description {
      animation: slideInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      animation-delay: 0.2s;
    }
    
    .minimal-theme .about-me-section {
      animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      animation-delay: 0.3s;
      opacity: 0;
    }
    
    .minimal-theme .bio-link-button {
      animation: fadeInUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      animation-delay: calc(0.1s * var(--index, 0) + 0.3s);
      opacity: 0;
    }
    
    .minimal-theme .social-icon {
      animation: fadeInUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      animation-delay: calc(0.1s * var(--index, 0) + 0.5s);
      opacity: 0;
    }
    
    .minimal-theme .minimal-footer {
      animation: fadeInUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      animation-delay: 0.8s;
      opacity: 0;
    }
    
    /* Responsive adjustments */
    @media (max-width: 640px) {
      .minimal-theme .bio-link-header {
        flex-direction: column;
        text-align: center;
        gap: 1.75rem;
        padding: 3.5rem 1.5rem 2rem;
      }
      
      .minimal-theme .bio-link-title::after {
        left: 50%;
        transform: translateX(-50%);
      }
      
      .minimal-theme .bio-link-description {
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
      }
      
      .minimal-theme .social-container {
        justify-content: center;
      }
      
      .minimal-theme .social-title {
        text-align: center;
      }
      
      .minimal-theme .minimal-footer {
        text-align: center;
      }
    }
  `,colorPresets:[{name:"Warm Beige",background:{type:"image",color:"#A53860",gradient:"linear-gradient(135deg, #fefcf3 0%, #fef7e0 100%)",image:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop"},buttonColor:"#A53860",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Soft Gray",background:{type:"image",color:"#919F71",gradient:"linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop"},buttonColor:"#919F71",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Pure Minimal",background:{type:"image",color:"#BE7942",gradient:"",image:"https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop"},buttonColor:"#BE7942",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Deep Navy",background:{type:"image",color:"#131C08",gradient:"linear-gradient(135deg, #1e293b 0%, #334155 100%)",image:"https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&h=800&fit=crop"},buttonColor:"#131C08",buttonTextColor:"#ffffff",textColor:"#000000"},{name:"Charcoal Black",background:{type:"image",color:"#7C316B",gradient:"",image:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop"},buttonColor:"#7C316B",buttonTextColor:"#ffffff",textColor:"#000000"}],font:"Outfit, sans-serif",defaultPreset:0,renderProfile:n=>{const{data:s,textColor:c,buttonColor:m,buttonTextColor:p,isPublic:a}=n,r=!a,{header:t}=s.config,i=t.name||(t.name!==null&&t.name!==""&&r?N.name:null),l=t.tagline||(t.tagline!==null&&t.tagline!==""&&r?N.tagline:null),d=t.email||(t.email!==null&&t.email!==""&&r?N.email:null),g=t.phone||(t.phone!==null&&t.phone!==""&&r?N.phone:null),h=t.description||(t.description!==null&&t.description!==""&&r?N.description:null),b=c==="#FFFFFF"||c==="#E2E8F0",f=d||g?e.createElement("div",{className:"mt-4 flex flex-col gap-2",style:{opacity:.9}},d&&e.createElement("div",{className:"flex items-center gap-2 text-sm",style:{padding:"0.75rem 1rem",backgroundColor:"rgba(0, 0, 0, 0.2)",borderRadius:"8px",color:p||"#FFFFFF"}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:p||"#FFFFFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),e.createElement("polyline",{points:"22,6 12,13 2,6"})),d),g&&e.createElement("div",{className:"flex items-center gap-2 text-sm",style:{padding:"0.75rem 1rem",backgroundColor:m,borderRadius:"8px",border:`1px solid ${m}`,boxShadow:`0 4px 12px ${m}40, 0 2px 4px ${m}20`,color:p||"#FFFFFF"}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:p||"#FFFFFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})),g)):null,u=h?e.createElement("div",{className:"mt-5 text-sm about-me-section",style:{padding:"0",lineHeight:"1.8",maxWidth:"100%",position:"relative",marginTop:"2rem"}},e.createElement("div",{className:"about-me-header",style:{display:"flex",alignItems:"center",marginBottom:"0.75rem",fontWeight:600,fontSize:"1rem",color:c}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:c,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginRight:"0.5rem"}},e.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),e.createElement("polyline",{points:"14 2 14 8 20 8"}),e.createElement("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),e.createElement("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),e.createElement("polyline",{points:"10 9 9 9 8 9"})),o("About Me")),e.createElement("div",{className:"about-me-content",style:{fontWeight:400,color:c,fontSize:"0.95rem",whiteSpace:"pre-wrap",wordBreak:"break-word",maxHeight:h.length>300?"200px":"none",overflowY:h.length>300?"auto":"visible",paddingRight:h.length>300?"10px":"0"}},h)):null;return e.createElement(e.Fragment,null,e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"2.5rem",marginBottom:"2rem"}},t.profile_image?e.createElement("div",{className:"bio-link-profile"},e.createElement("img",{src:F(t.profile_image),alt:i,className:"w-full h-full object-cover"})):e.createElement("div",{className:"bio-link-profile flex items-center justify-center text-xl font-medium",style:{backgroundColor:b?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.05)"}},i.charAt(0)),e.createElement("div",{className:"profile-content"},e.createElement("h1",{className:"bio-link-title"},i),e.createElement("p",{className:"bio-link-description"},l))),u,f)},renderSocial:n=>{const{data:s,isPublic:c,textColor:m,buttonColor:p,buttonTextColor:a}=n,{social:r}=s.config,t=r!=null&&r.items&&r.items.length>0?r.items:N.social;return!(r!=null&&r.display)||!t.length?null:e.createElement("div",{className:"social-container"},e.createElement("div",{className:"social-title"},o("Connect")),t.map((i,l)=>i.platform&&e.createElement("a",{key:l,href:i.url||"#",target:"_blank",rel:"noopener noreferrer",className:"social-icon",style:{"--index":l}},e.createElement(k,{platform:i.platform,color:a||"#FFFFFF"}))))},renderLinks:n=>{const{data:s,isPublic:c,buttonColor:m,textColor:p,buttonTextColor:a}=n,{links:r}=s.config,t=r&&r.length>0?r:N.links,i=p==="#FFFFFF"||p==="#E2E8F0";return!t||!t.length?e.createElement("div",{className:"text-center p-4 opacity-50 text-sm",style:{backgroundColor:i?"rgba(255, 255, 255, 0.03)":"rgba(0, 0, 0, 0.03)",borderRadius:"8px"}},"No links added yet"):e.createElement("div",{className:"links-container"},t.map((l,d)=>e.createElement("a",{key:d,href:l.url||"#",target:"_blank",rel:"noopener noreferrer",className:"bio-link-button no-underline",style:{"--index":d,textDecoration:"none"}},e.createElement("div",{className:"link-content"},l.icon&&e.createElement("div",{className:"link-icon"},e.createElement("img",{src:l.icon,alt:"",className:"w-full h-full object-contain"})),e.createElement("div",null,e.createElement("div",{className:"link-text"},l.text||o("Untitled Link")),l.description&&e.createElement("div",{className:"link-description"},l.description))),e.createElement("div",{className:"link-arrow"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:a||"#000000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M5 12h14"}),e.createElement("path",{d:"M12 5l7 7-7 7"}))))))},renderContainer:n=>{var d,g;const s=n.textColor==="#FFFFFF"||n.textColor==="#E2E8F0",{data:c,textColor:m,buttonColor:p,buttonTextColor:a,font:r}=n,{background:t}=c.config,i="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop";let l={};return(t==null?void 0:t.type)==="gradient"?l={background:t.gradient,backgroundImage:"none"}:(t==null?void 0:t.type)==="color"?l={backgroundColor:t.color||"#FFFFFF",backgroundImage:"none"}:(t==null?void 0:t.type)==="image"?l={backgroundImage:`url(${t.image||i})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}:l={backgroundImage:`url(${i})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},e.createElement("div",{className:`bio-link-container minimal-theme ${s?"dark-mode":""}`,style:{"--theme-bg":(t==null?void 0:t.color)||"#FFFFFF","--theme-text":m,"--theme-button":p,"--theme-button-text":a,"--theme-accent":p,color:m,fontFamily:r,...l}},e.createElement("div",{className:"bio-link-header"},R.renderProfile&&R.renderProfile(n)),R.renderLinks&&R.renderLinks(n),R.renderSocial&&R.renderSocial(n),((d=c.config.copyright)==null?void 0:d.enabled)!==!1&&e.createElement("div",{className:"minimal-footer-container"},e.createElement("div",{className:"minimal-footer",style:{position:"relative",bottom:0,width:"100%",color:"#333333",opacity:1}},((g=c.config.copyright)==null?void 0:g.text)||`© ${new Date().getFullYear()} ${c.config.displayName}. All rights reserved.`)))}},D={name:o("Alex Chen"),tagline:o("Full Stack Developer"),email:o("alex@techstack.dev"),description:o("Building the future with code. Passionate about creating scalable solutions and innovative tech products."),links:[{text:"GitHub",url:"#",description:o("View my code"),icon:""},{text:"Projects",url:"#",description:o("See what I built"),icon:""},{text:"Tech Blog",url:"#",description:o("Latest insights"),icon:""}],social:[{platform:"github",url:"#",icon:""},{platform:"linkedin",url:"#",icon:""},{platform:"twitter",url:"#",icon:""}]},Y={name:"Tech",layout:"modern",buttonStyle:"tech",socialPosition:"bottom",profileStyle:"modern",profileFields:[{name:"name",label:o("Full Name"),type:"text",placeholder:o("Enter your full name"),defaultValue:D.name,required:!0,section:o("Profile Information"),cols:1},{name:"tagline",label:o("Professional Title"),type:"text",placeholder:o("e.g. Full Stack Developer, UI/UX Designer"),defaultValue:D.tagline,required:!1,section:o("Profile Information"),cols:1},{name:"profile_image",label:o("Profile Photo"),type:"image",placeholder:o("Upload your professional photo"),required:!1,section:o("Profile Information"),cols:2},{name:"email",label:o("Email Address"),type:"email",placeholder:o("your.email@example.com"),defaultValue:D.email,required:!1,section:o("Contact Details"),cols:1},{name:"location",label:o("Location"),type:"text",placeholder:o("City, Country"),required:!1,section:o("Contact Details"),cols:1},{name:"description",label:o("Professional Bio"),type:"textarea",placeholder:o("Brief description of your expertise and experience"),defaultValue:D.description,required:!1,section:o("About"),cols:2,rows:3}],customCSS:`
    /* Modern Tech Theme - Professional & Clean */
    .bio-link-container {
      position: relative;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      min-height: 100vh;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      overflow: hidden;
    }
    
    /* Subtle overlay for better text readability */
    .bio-link-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 0;
    }
    
    /* Animated grid pattern */

    
    /* Main content container */
    .bio-link-layout {
      max-width: 420px;
      margin: 0 auto;
      padding: 2rem 1.5rem;
      position: relative;
      z-index: 1;
    }
    
    /* Header section */
    .bio-link-header {
      text-align: center;
      margin-bottom: 2rem;
      animation: fadeInUp 0.8s ease-out;
    }
    
    /* Profile image with modern styling */
    .bio-link-profile {
      position: relative;
      width: 120px;
      height: 120px;
      margin: 0 auto 1.5rem;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 
        0 10px 30px var(--button-color)70,
        0 4px 12px var(--button-color)50,
        0 0 0 3px var(--button-color)30;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
      backdrop-filter: blur(10px);
    }
    
    .bio-link-profile img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    
    .bio-link-profile:hover {
      transform: translateY(-5px) scale(1.02);
      box-shadow: 
        0 15px 40px var(--button-color)80,
        0 8px 20px var(--button-color)60,
        0 0 0 3px var(--button-color);
    }
    
    .bio-link-profile:hover img {
      transform: scale(1.05);
    }
    
    /* Name with elegant typography */
    .bio-link-title {
      font-size: 1.875rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      letter-spacing: -0.025em;
      line-height: 1.2;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
      position: relative;
      color: var(--text-color, #FFFFFF) !important;
    }
    
    /* Animated underline */
    .bio-link-title::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -8px;
      width: 0;
      height: 2px;
      background: currentColor;
      opacity: 0.6;
      transition: all 0.6s ease;
      transform: translateX(-50%);
    }
    
    .bio-link-title:hover::after {
      width: 60px;
    }
    
    /* Professional tagline */
    .bio-link-tagline {
      font-size: 1rem;
      font-weight: 500;
      opacity: 1;
      margin-bottom: 1rem;
      letter-spacing: 0.01em;
      color: var(--text-color, #F3F4F6) !important;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
    }
    
    /* Contact info section */
    .bio-link-contact {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: 1.5rem;
      padding: 1.25rem;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(15px);
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    
    .bio-link-contact-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.5rem;
      border-radius: 8px;
      transition: all 0.3s ease;
      font-size: 0.9rem;
    }
    
    .bio-link-contact-item:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateX(4px);
    }
    
    .bio-link-contact-item svg {
      width: 16px;
      height: 16px;
      opacity: 0.8;
    }
    
    /* Description */
    .bio-link-description {
      text-align: center;
      line-height: 1.6;
      font-size: 0.95rem;
      margin-bottom: 2rem;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      border-left: 3px solid currentColor;
    }
    
    /* Modern button styling */
    .bio-link-button {
      position: relative;
      display: flex;
      align-items: center;
      padding: 1rem 1.25rem;
      margin-bottom: 0.75rem;
      border-radius: 12px;
      font-weight: 600;
      font-size: 0.95rem;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 8px 20px var(--button-color)80, 0 4px 12px var(--button-color)60, 0 2px 4px var(--button-color)40;
      overflow: hidden;
      text-decoration: none;
      animation: slideInUp 0.6s ease-out;
      animation-fill-mode: both;
      background-color: var(--button-color) !important;
      color: var(--button-text-color, #000000) !important;
    }
    
    /* Button shine effect */
    .bio-link-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.6s ease;
      z-index: 1;
    }
    
    .bio-link-button:hover::before {
      left: 100%;
    }
    
    .bio-link-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 30px var(--button-color)90, 0 8px 20px var(--button-color)70, 0 4px 12px var(--button-color)50;
      border-color: rgba(255, 255, 255, 0.25);
    }
    
    /* Button icon */
    .bio-link-button img {
      width: 20px;
      height: 20px;
      margin-right: 0.75rem;
      border-radius: 4px;
      transition: transform 0.3s ease;
    }
    
    .bio-link-button:hover img {
      transform: scale(1.1);
    }
    
    /* Button text */
    .bio-link-button-text {
      flex: 1;
      position: relative;
      z-index: 2;
    }
    
    .bio-link-button-title {
      font-weight: 600;
      margin-bottom: 0.25rem;
    }
    
    .bio-link-button-desc {
      font-size: 0.85rem;
      font-weight: 400;
    }
    
    /* Social section */
    .bio-link-social {
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .bio-link-social-title {
      text-align: center;
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 1rem;
      opacity: 1;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--text-color, #FFFFFF) !important;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
    }
    
    .bio-link-social-icons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }
    
    .bio-link-social-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: var(--button-color) !important;
      backdrop-filter: blur(10px);
      border: 1px solid var(--button-color);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 4px 15px var(--button-color)60, 0 2px 4px var(--button-color)40;
      animation: fadeInUp 0.6s ease-out;
      animation-fill-mode: both;
    }
    
    .bio-link-social-icon:hover {
      transform: translateY(-4px) scale(1.05);
      background: var(--button-color) !important;
      box-shadow: 0 8px 25px var(--button-color)80, 0 4px 12px var(--button-color)60;
    }
    
    .bio-link-social-icon svg,
    .bio-link-social-icon img {
      width: 60%;
      height: 60%;
      object-fit: contain;
    }
    
    .bio-link-social-icon:hover svg {
      transform: scale(1.1);
    }
    
    /* Copyright */
    .bio-link-copyright {
      text-align: center;
      font-size: 0.8rem;
      opacity: 1;
      margin-top: 2rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      font-weight: 500;
      color: var(--text-color, #E5E7EB) !important;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
    }
    
    /* Animations */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes gridMove {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(30px, 30px);
      }
    }
    
    /* Animation delays for staggered effect */
    .bio-link-button:nth-child(1) { animation-delay: 0.1s; }
    .bio-link-button:nth-child(2) { animation-delay: 0.2s; }
    .bio-link-button:nth-child(3) { animation-delay: 0.3s; }
    .bio-link-button:nth-child(4) { animation-delay: 0.4s; }
    .bio-link-button:nth-child(5) { animation-delay: 0.5s; }
    .bio-link-button:nth-child(6) { animation-delay: 0.6s; }
    
    .bio-link-social-icon:nth-child(1) { animation-delay: 0.7s; }
    .bio-link-social-icon:nth-child(2) { animation-delay: 0.8s; }
    .bio-link-social-icon:nth-child(3) { animation-delay: 0.9s; }
    .bio-link-social-icon:nth-child(4) { animation-delay: 1.0s; }
    .bio-link-social-icon:nth-child(5) { animation-delay: 1.1s; }
    
    /* Responsive design */
    @media (max-width: 640px) {
      .bio-link-layout {
        padding: 1.5rem 1rem;
      }
      
      .bio-link-profile {
        width: 100px;
        height: 100px;
      }
      
      .bio-link-title {
        font-size: 1.5rem;
      }
      
      .bio-link-button {
        padding: 0.875rem 1rem;
      }
    }
  `,colorPresets:[{name:"Orange Glow",background:{type:"image",color:"#F97316",gradient:"linear-gradient(135deg, #1c1917 0%, #292524 100%)",image:"dynamic:tech:0"},buttonColor:"#F97316",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Neon Pink",background:{type:"image",color:"#06B6D4",gradient:"linear-gradient(135deg, #18181b 0%, #27272a 100%)",image:"dynamic:tech:1"},buttonColor:"#06B6D4",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Tech Blue",background:{type:"image",color:"#5F51DA",gradient:"linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",image:"dynamic:tech:2"},buttonColor:"#5F51DA",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Cyber Green",background:{type:"image",color:"#7B2869",gradient:"linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",image:"dynamic:tech:3"},buttonColor:"#7B2869",buttonTextColor:"#ffffff",textColor:"#FFFFFF"},{name:"Purple Code",background:{type:"image",color:"#AF9410",gradient:"linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",image:"dynamic:tech:4"},buttonColor:"#AF9410",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"}],font:"Inter, -apple-system, BlinkMacSystemFont, sans-serif",defaultPreset:0,renderProfile:n=>{const{data:s,textColor:c,buttonColor:m,buttonTextColor:p,isPublic:a}=n,r=!a,{header:t}=s.config,i=t.name||(t.name!==null&&t.name!==""&&r?D.name:null),l=t.tagline||(t.tagline!==null&&t.tagline!==""&&r?D.tagline:null),d=t.email||(t.email!==null&&t.email!==""&&r?D.email:null);t.phone||t.phone!==null&&t.phone!==""&&r&&D.phone;const g=t.description||(t.description!==null&&t.description!==""&&r?D.description:null),h=v=>v?v.replace(/[<>"&]/g,I=>({"<":"&lt;",">":"&gt;",'"':"&quot;","&":"&amp;"})[I]||I):"",b=h(i||""),f=h(l||""),u=h(d||""),x=h(t.location||""),y=h(g||"");return e.createElement(e.Fragment,null,t.profile_image?e.createElement("div",{className:"bio-link-profile"},e.createElement("img",{src:F(t.profile_image),alt:b,className:"w-full h-full object-cover"})):e.createElement("div",{className:"bio-link-profile flex items-center justify-center text-2xl font-bold",style:{background:"linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",color:c}},b.charAt(0).toUpperCase()),e.createElement("h1",{className:"bio-link-title",style:{color:c}},b),f&&e.createElement("p",{className:"bio-link-tagline",style:{color:c}},f),(u||x)&&e.createElement("div",{className:"bio-link-contact"},u&&e.createElement("div",{className:"bio-link-contact-item"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),e.createElement("path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"})),e.createElement("span",null,u)),x&&e.createElement("div",{className:"bio-link-contact-item"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"}),e.createElement("circle",{cx:"12",cy:"10",r:"3"})),e.createElement("span",null,x))),y&&e.createElement("div",{className:"bio-link-description",style:{color:c}},y))},renderSocial:n=>{const{data:s,isPublic:c,textColor:m,buttonColor:p,buttonTextColor:a}=n,{social:r}=s.config,t=r!=null&&r.items&&r.items.length>0?r.items:D.social;return!(r!=null&&r.display)||!t.length?null:e.createElement("div",{className:"bio-link-social"},e.createElement("div",{className:"bio-link-social-title",style:{color:m}},o("Connect")),e.createElement("div",{className:"bio-link-social-icons"},t.map((i,l)=>i.platform&&e.createElement("a",{key:l,href:i.url||"#",target:"_blank",rel:"noopener noreferrer",className:"bio-link-social-icon",style:{textDecoration:"none",animationDelay:`${.7+l*.1}s`}},e.createElement(k,{platform:i.platform,color:n.buttonTextColor||"#FFFFFF"})))))},renderLinks:n=>{const{data:s,isPublic:c,buttonColor:m,textColor:p,buttonTextColor:a}=n,{links:r}=s.config,t=r&&r.length>0?r:D.links;if(!t||!t.length)return e.createElement("div",{className:"text-center p-4 opacity-70 text-sm",style:{color:a}},"No links added yet");const i=l=>l?l.replace(/[<>"&]/g,d=>({"<":"&lt;",">":"&gt;",'"':"&quot;","&":"&amp;"})[d]||d):"";return e.createElement(e.Fragment,null,t.map((l,d)=>e.createElement("a",{key:d,href:l.url||"#",target:"_blank",rel:"noopener noreferrer",className:"bio-link-button",style:{backgroundColor:m,color:a,textDecoration:"none",animationDelay:`${.1+d*.1}s`,"--button-color":m,"--button-text-color":a}},l.icon&&e.createElement("img",{src:l.icon,alt:"",className:"w-5 h-5 mr-3 rounded"}),e.createElement("div",{className:"bio-link-button-text"},e.createElement("div",{className:"bio-link-button-title"},i(l.text||"Untitled Link")),l.description&&e.createElement("div",{className:"bio-link-button-desc"},i(l.description))))))},renderContainer:n=>{const{data:s,textColor:c,buttonColor:m,buttonTextColor:p,font:a}=n,{background:r}=s.config,t=s.config.copyright,i=window.__themeImages||{};let l={};if((r==null?void 0:r.type)==="image"){const b=r.image||"dynamic:tech:0";l={backgroundImage:`url(${ie(b,i)})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}else if((r==null?void 0:r.type)==="gradient"&&r.gradient)l={background:r.gradient};else if((r==null?void 0:r.type)==="color"&&r.color)l={backgroundColor:r.color};else{const b=oe("dynamic:tech:0",i);b&&(l={backgroundImage:`url(${b})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"})}const d=b=>b?b.replace(/[<>"&]/g,f=>({"<":"&lt;",">":"&gt;",'"':"&quot;","&":"&amp;"})[f]||f):"",g=d(s.config.displayName||""),h=d((t==null?void 0:t.text)||`© ${new Date().getFullYear()} ${g}. All rights reserved.`);return e.createElement("div",{className:"bio-link-container",style:{color:c,fontFamily:a,"--button-color":m,"--button-text-color":p,"--text-color":c,...l}},e.createElement("div",{className:"bio-link-layout"},e.createElement("div",{className:"bio-link-header"},Y.renderProfile&&Y.renderProfile(n)),Y.renderLinks&&Y.renderLinks(n),Y.renderSocial&&Y.renderSocial(n),(t==null?void 0:t.enabled)!==!1&&e.createElement("div",{className:"bio-link-copyright",style:{color:c}},h)))}},S={name:o("Green Earth Maya"),tagline:o("Environmental Advocate & Nature Lover"),email:o("maya@greenearth.org"),phone:o("+1 (555) 123-4567"),description:o("Protecting our planet through awareness and action. Join the movement for a sustainable future."),links:[{text:"Eco Tips",url:"#",description:o("Sustainable living"),icon:""},{text:"Nature Photography",url:"#",description:o("Beautiful landscapes"),icon:""},{text:"Conservation Projects",url:"#",description:o("Make a difference"),icon:""}],social:[{platform:"instagram",url:"#",icon:""},{platform:"twitter",url:"#",icon:""},{platform:"linkedin",url:"#",icon:""}]},W={name:"Nature",layout:"organic",buttonStyle:"leaf",socialPosition:"branch",profileStyle:"circular-frame",profileFields:[{name:"name",label:o("Name"),type:"text",placeholder:o("Enter your name"),defaultValue:S.name,required:!0,section:o("Personal Details"),cols:1},{name:"tagline",label:o("Tagline"),type:"text",placeholder:o("Enter a nature-inspired tagline"),defaultValue:S.tagline,required:!1,section:o("Personal Details"),cols:1},{name:"profile_image",label:o("Profile Image"),type:"image",placeholder:o("Upload your profile image"),required:!1,section:o("Personal Details"),cols:2},{name:"location",label:o("Location"),type:"text",placeholder:o("Enter your location"),required:!1,section:o("Additional Details"),cols:1},{name:"email",label:o("Nature Email"),type:"email",placeholder:o("Enter your nature email"),defaultValue:S.email,required:!1,section:o("Contact Details"),cols:1},{name:"phone",label:o("Nature Phone"),type:"tel",placeholder:o("Enter your nature phone"),defaultValue:S.phone,required:!1,section:o("Contact Details"),cols:1},{name:"description",label:o("About Me"),type:"textarea",placeholder:o("Tell people about yourself and your connection to nature"),defaultValue:S.description,required:!1,section:o("Additional Details"),cols:2,rows:3}],customCSS:`
    /* Nature theme styling */
    .bio-link-container.nature-theme {
      position: relative;
      font-family: 'Quicksand', sans-serif;
      overflow: hidden;
      border-radius: 16px;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    }

    /* Organic background pattern */
    .nature-theme::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E");
      z-index: 0;
      pointer-events: none;
    }

    /* Floating leaves */
    .nature-theme .floating-leaf {
      position: absolute;
      width: 30px;
      height: 30px;
      background-size: contain;
      background-repeat: no-repeat;
      opacity: 0.15;
      pointer-events: none;
      z-index: 1;
      filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.1));
    }

    .nature-theme .leaf-1 {
      top: 10%;
      left: 10%;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpath d='M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20a4,4,0,0,0,4-4,4,4,0,0,0-4-4,4.18,4.18,0,0,0-1.26.2c1.81-2.5,5.69-4.23,10.26-4.2C17,8,17,8,17,8Z'/%3E%3C/svg%3E");
      animation: floatLeaf 20s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95);
    }

    .nature-theme .leaf-2 {
      top: 20%;
      right: 15%;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpath d='M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20a4,4,0,0,0,4-4,4,4,0,0,0-4-4,4.18,4.18,0,0,0-1.26.2c1.81-2.5,5.69-4.23,10.26-4.2C17,8,17,8,17,8Z'/%3E%3C/svg%3E");
      transform: rotate(120deg);
      animation: floatLeaf 25s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95) reverse;
    }

    .nature-theme .leaf-3 {
      bottom: 15%;
      left: 20%;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpath d='M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20a4,4,0,0,0,4-4,4,4,0,0,0-4-4,4.18,4.18,0,0,0-1.26.2c1.81-2.5,5.69-4.23,10.26-4.2C17,8,17,8,17,8Z'/%3E%3C/svg%3E");
      transform: rotate(240deg);
      animation: floatLeaf 30s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95);
    }

    .nature-theme .leaf-4 {
      bottom: 25%;
      right: 10%;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpath d='M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20a4,4,0,0,0,4-4,4,4,0,0,0-4-4,4.18,4.18,0,0,0-1.26.2c1.81-2.5,5.69-4.23,10.26-4.2C17,8,17,8,17,8Z'/%3E%3C/svg%3E");
      transform: rotate(60deg);
      animation: floatLeaf 22s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95) reverse;
    }

    /* Additional leaves for more organic feel */
    .nature-theme .leaf-5 {
      top: 40%;
      left: 5%;
      width: 20px;
      height: 20px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpath d='M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20a4,4,0,0,0,4-4,4,4,0,0,0-4-4,4.18,4.18,0,0,0-1.26.2c1.81-2.5,5.69-4.23,10.26-4.2C17,8,17,8,17,8Z'/%3E%3C/svg%3E");
      transform: rotate(180deg);
      animation: floatLeaf 28s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95);
    }

    .nature-theme .leaf-6 {
      top: 60%;
      right: 5%;
      width: 25px;
      height: 25px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpath d='M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20a4,4,0,0,0,4-4,4,4,0,0,0-4-4,4.18,4.18,0,0,0-1.26.2c1.81-2.5,5.69-4.23,10.26-4.2C17,8,17,8,17,8Z'/%3E%3C/svg%3E");
      transform: rotate(300deg);
      animation: floatLeaf 26s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95) reverse;
    }

    /* Header styling */
    .nature-theme .bio-link-header {
      position: relative;
      padding: 2.5rem 1.5rem 1.5rem;
      text-align: center;
      z-index: 2;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(15px);
      border-radius: 20px;
      margin: 1rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }

    /* Profile image styling */
    .nature-theme .bio-link-profile {
      width: 120px !important;
      height: 120px !important;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto 1rem;
      border: 4px solid var(--button-color, rgba(255, 255, 255, 0.3));
      position: relative;
      z-index: 2;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }



    /* Name styling */
    .nature-theme .bio-link-title {
      font-size: 1.85rem;
      font-weight: 700;
      position: relative;
      display: inline-block;
      letter-spacing: -0.01em;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
      color: var(--text-color, #FFFFFF);
    }

    /* Organic underline for name */
    .nature-theme .bio-link-title::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 2px;
      background: linear-gradient(90deg, transparent, currentColor, transparent);
      opacity: 0.6;
      transition: width 0.4s ease, opacity 0.4s ease;
    }

    /* Title hover effect */
    .nature-theme .bio-link-title:hover::after {
      width: 100%;
      opacity: 0.8;
    }

    /* Description styling */
    .nature-theme .bio-link-description {
      font-size: 1.05rem;
      opacity: 0.95;
      max-width: 85%;
      margin: 1.25rem auto ;
      line-height: 1.6;
      font-weight: 500;
      text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
      color: var(--text-color, #FFFFFF);
    }

    /* Profile fields styling */
    .nature-theme .profile-field {
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .nature-theme .profile-field:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12) !important;
    }

    .nature-theme .profile-field-icon {
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .nature-theme .profile-field:hover .profile-field-icon {
      transform: scale(1.1);
    }

    /* Links container */
    .nature-theme .links-container {
      padding: 1.5rem;
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
      max-width: 93%;
      margin: 1rem auto;
      background: rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(20px);
      border-radius: 25px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    }

    /* Link button styling */
    .nature-theme .bio-link-button {
      position: relative;
      padding: 0.85rem 1.5rem;
      background: var(--button-color);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 12px;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      overflow: hidden;
      display: flex;
      align-items: center;
      font-weight: 500;
    }

    /* Leaf shape for buttons */




    .nature-theme .bio-link-button:hover::before {
      width: 6px;
      opacity: 0.8;
    }

    /* Link icon */
    .nature-theme .bio-link-button .link-icon {
      width: 2.25rem;
      height: 2.25rem;
      margin-right: 1.25rem;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.1);
      padding: 0.25rem;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .nature-theme .bio-link-button .link-icon img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .nature-theme .bio-link-button:hover .link-icon {
      transform: scale(1.1) rotate(5deg);
      box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
    }

    .nature-theme .bio-link-button:hover .link-icon img {
      transform: scale(1.1);
    }

    /* Link text */
    .nature-theme .bio-link-button .link-text {
      flex: 1;
    }

    .nature-theme .bio-link-button .link-title {
      font-weight: 700;
      font-size: 1.05rem;
      letter-spacing: 0.01em;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      color: var(--button-text-color, #FFFFFF);
    }

    .nature-theme .bio-link-button .link-description {
      font-size: 0.85rem;
      opacity: 0.9;
      margin-top: 0.25rem;
      font-weight: 500;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      color: var(--button-text-color, #FFFFFF);
    }

    /* Arrow icon */
    .nature-theme .bio-link-button .arrow-icon {
      margin-left: 0.85rem;
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .nature-theme .bio-link-button:hover .arrow-icon {
      transform: translateX(4px);
      opacity: 1;
    }

    /* Social icons section */
    .nature-theme .social-container {
      position: relative;
      z-index: 2;
    }

    /* Branch layout for social icons */
    .nature-theme .social-branch {
      display: flex;
      justify-content: center;
      position: relative;
      padding-top: 0.5rem;
    }

    /* Branch line */
    .nature-theme .social-branch::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 1.75rem;
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
    }

    /* Social icons */
    .nature-theme .social-icons {
      display: flex;
      gap: 0.85rem;
      position: relative;
      flex-wrap: wrap;
      justify-content: center;
    }



    /* Social icon styling */
    .nature-theme .social-icon {
      width: 2.75rem;
      height: 2.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      position: relative;
    }

    /* Fix for social icons */
    .nature-theme .social-icon svg {
      width: 16px;
      height: 16px;
      position: relative;
      z-index: 2;
      filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1));
    }

    /* Social icon hover effect */
    .nature-theme .social-icon:hover {
      transform: translateY(-5px) scale(1.1);
      background: rgba(255, 255, 255, 0.25);
      border-color: rgba(255, 255, 255, 0.4);
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2), 0 6px 15px var(--button-color);
    }

    /* Social icon glow effect */
    .nature-theme .social-icon::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      background: radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%);
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 1;
    }

    .nature-theme .social-icon:hover::after {
      opacity: 1;
    }

    /* Footer */
    .nature-theme .nature-footer {
      padding: 1.25rem;
      text-align: center;
      font-size: 0.85rem;
      opacity: 1;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      letter-spacing: 0.02em;
      font-weight: 600;
      color: var(--text-color, #FFFFFF);
      background: #rgba(0, 0, 0, 0.25) !important;
      backdrop-filter: blur(5px);
      border-radius: 12px;
    }

    /* Animations */
    @keyframes floatLeaf {
      0% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(10px, 10px) rotate(90deg); }
      50% { transform: translate(0, 20px) rotate(180deg); }
      75% { transform: translate(-10px, 10px) rotate(270deg); }
      100% { transform: translate(0, 0) rotate(360deg); }
    }

    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(15px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }

    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(-20px); }
      to { opacity: 1; transform: translateX(0); }
    }

    .nature-theme .bio-link-profile {
      animation: scaleIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }

    .nature-theme .bio-link-title {
      animation: fadeIn 0.8s ease forwards;
      animation-delay: 0.1s;
    }

    .nature-theme .bio-link-description {
      animation: fadeIn 0.8s ease forwards;
      animation-delay: 0.2s;
    }

    .nature-theme .bio-link-button {
      animation: slideInRight 0.6s ease forwards;
      animation-delay: calc(0.1s * var(--index, 0) + 0.3s);
    }

    .nature-theme .social-icon {
      animation: fadeIn 0.6s ease forwards;
      animation-delay: calc(0.1s * var(--index, 0) + 0.5s);
    }
  `,colorPresets:[{name:"Forest Green",background:{type:"image",color:"#B9891C",gradient:"linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",image:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop"},buttonColor:"#B9891C",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Ocean Depths",background:{type:"image",color:"#B9631B",gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",image:"https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&h=800&fit=crop"},buttonColor:"#B9631B",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Autumn Leaves",background:{type:"image",color:"#73946B",gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",image:"https://images.unsplash.com/photo-1507041957456-9c397ce39c97?w=1200&h=800&fit=crop"},buttonColor:"#73946B",buttonTextColor:"#FFFFFF",textColor:"#000000"},{name:"Spring Bloom",background:{type:"image",color:"#3D90D7",gradient:"linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",image:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&h=800&fit=crop"},buttonColor:"#3D90D7",buttonTextColor:"#FFFFFF",textColor:"#000000"},{name:"Desert Sunset",background:{type:"image",color:"#B83B6D",gradient:"linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",image:"https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1200&h=800&fit=crop"},buttonColor:"#B83B6D",buttonTextColor:"#FFFFFF",textColor:"#000000"}],font:"Quicksand, sans-serif",defaultPreset:0,renderProfile:n=>{const{data:s,textColor:c,buttonColor:m,buttonTextColor:p,isPublic:a}=n,r=!a,{header:t}=s.config,i=t.name||(t.name!==null&&t.name!==""&&r?S.name:null),l=t.tagline||(t.tagline!==null&&t.tagline!==""&&r?S.tagline:null),d=t.email||(t.email!==null&&t.email!==""&&r?S.email:null),g=t.phone||(t.phone!==null&&t.phone!==""&&r?S.phone:null),h=t.description||(t.description!==null&&t.description!==""&&r?S.description:null);return e.createElement(e.Fragment,null,e.createElement("div",{className:"floating-leaf leaf-1"}),e.createElement("div",{className:"floating-leaf leaf-2"}),e.createElement("div",{className:"floating-leaf leaf-3"}),e.createElement("div",{className:"floating-leaf leaf-4"}),e.createElement("div",{className:"floating-leaf leaf-5"}),e.createElement("div",{className:"floating-leaf leaf-6"}),t.profile_image?e.createElement("div",{className:"bio-link-profile"},e.createElement("img",{src:F(t.profile_image),alt:i,className:"w-full h-full object-cover"})):e.createElement("div",{className:"bio-link-profile flex items-center justify-center text-xl font-bold"},i.charAt(0)),e.createElement("h1",{className:"bio-link-title"},i),e.createElement("p",{className:"bio-link-description"},l),t.location&&e.createElement("div",{className:"mt-4 flex items-center justify-center gap-2 text-sm profile-field",style:{textDecoration:"none",padding:"0.75rem 1.25rem",background:"rgba(0, 0, 0, 0.2)",backdropFilter:"blur(10px)",borderRadius:"1rem",margin:"0 auto",border:"1px solid rgba(255, 255, 255, 0.25)",fontWeight:600,position:"relative",zIndex:5,color:p}},e.createElement("div",{className:"profile-field-icon",style:{display:"flex",alignItems:"center",justifyContent:"center",width:"28px",height:"28px",borderRadius:"50%",background:m||"rgba(255, 255, 255, 0.2)"}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:p,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),e.createElement("circle",{cx:"12",cy:"10",r:"3"}))),t.location),(d||g)&&e.createElement("div",{className:"mt-4 flex flex-col items-center gap-2",style:{textDecoration:"none",opacity:.9}},d&&e.createElement("div",{className:"flex items-center gap-2 text-sm",style:{textDecoration:"none",padding:"0.5rem 1rem",background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(5px)",borderRadius:"12px",border:"1px solid rgba(255, 255, 255, 0.2)",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.05)"}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),e.createElement("polyline",{points:"22,6 12,13 2,6"})),d),g&&e.createElement("div",{className:"flex items-center gap-2 text-sm",style:{textDecoration:"none",padding:"0.5rem 1rem",background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(5px)",borderRadius:"2rem",border:"1px solid rgba(255, 255, 255, 0.2)",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.05)"}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})),g)),h&&e.createElement("div",{className:"mt-5 text-sm profile-field",style:{textDecoration:"none",padding:"1.25rem",background:"rgba(0, 0, 0, 0.2)",backdropFilter:"blur(15px)",borderRadius:"1rem",margin:"1rem auto 0",border:"1px solid rgba(255, 255, 255, 0.25)",lineHeight:1.7,position:"relative",zIndex:5,color:p,fontWeight:500}},e.createElement("div",{className:"profile-field-icon",style:{display:"flex",alignItems:"center",marginBottom:"0.75rem",fontWeight:600,fontSize:"0.95rem"}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:p,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{textDecoration:"none",marginRight:"0.5rem"}},e.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),e.createElement("polyline",{points:"14 2 14 8 20 8"}),e.createElement("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),e.createElement("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),e.createElement("polyline",{points:"10 9 9 9 8 9"})),o("About Me")),e.createElement("div",{style:{textDecoration:"none",fontStyle:"normal",textAlign:"start"}},h)))},renderSocial:n=>{const{data:s,isPublic:c,textColor:m,buttonColor:p,buttonTextColor:a}=n,{social:r}=s.config,t=r!=null&&r.items&&r.items.length>0?r.items:S.social;return!(r!=null&&r.display)||!t.length?null:e.createElement("div",{className:"social-container"},e.createElement("div",{className:"social-branch"},e.createElement("div",{className:"social-icons"},t.map((i,l)=>i.platform&&e.createElement("a",{key:l,href:i.url||"#",target:"_blank",rel:"noopener noreferrer",className:"social-icon",style:{textDecoration:"none","--index":l}},e.createElement(k,{platform:i.platform,color:a}))))))},renderLinks:n=>{const{data:s,isPublic:c,buttonColor:m,textColor:p,buttonTextColor:a}=n,{links:r}=s.config,t=r&&r.length>0?r:S.links;return!t||!t.length?e.createElement("div",{className:"text-center p-4 opacity-70 text-sm rounded-lg bg-white/10 backdrop-blur-md"},o("No links added yet")):e.createElement("div",{className:"links-container"},t.map((i,l)=>e.createElement("a",{key:l,href:i.url||"#",target:"_blank",rel:"noopener noreferrer",className:"bio-link-button",style:{textDecoration:"none","--index":l}},i.icon&&e.createElement("div",{className:"link-icon"},e.createElement("img",{src:i.icon,alt:""})),e.createElement("div",{className:"link-text"},e.createElement("div",{className:"link-title"},i.text||"Untitled Link"),i.description&&e.createElement("div",{className:"link-description"},i.description)),e.createElement("div",{className:"arrow-icon"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M5 12h14"}),e.createElement("path",{d:"M12 5l7 7-7 7"}))))))},renderContainer:n=>{var l,d;const{data:s,textColor:c,buttonColor:m,buttonTextColor:p,font:a}=n,{background:r}=s.config,t="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop";let i={};return(r==null?void 0:r.type)==="image"?i={backgroundImage:`url(${r.image||t})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}:(r==null?void 0:r.type)==="gradient"&&r.gradient?i={background:r.gradient,backgroundImage:"none"}:(r==null?void 0:r.type)==="color"&&r.color?i={backgroundColor:r.color,backgroundImage:"none"}:i={backgroundImage:`url(${t})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},e.createElement("div",{className:"nature-theme",style:{color:c,fontFamily:a,"--button-color":m,"--button-text-color":p,"--text-color":c,...i}},e.createElement("div",{className:"bio-link-header"},W.renderProfile&&W.renderProfile(n)),W.renderLinks&&W.renderLinks(n),W.renderSocial&&W.renderSocial(n),((l=s.config.copyright)==null?void 0:l.enabled)!==!1&&e.createElement("div",{className:"nature-footer-container",style:{padding:"1.5rem 1.75rem 0"}},e.createElement("div",{className:"nature-footer",style:{position:"relative",bottom:0,width:"100%"}},((d=s.config.copyright)==null?void 0:d.text)||`© ${new Date().getFullYear()} ${s.config.displayName}. All rights reserved.`)))}},T={name:o("Isabella Fashion"),tagline:o("Style Curator & Fashion Blogger"),email:o("isabella@fashionforward.style"),description:o("Bringing you the latest trends and timeless style inspiration from the fashion capitals of the world."),links:[{text:"Style Guide",url:"#",description:o("Fashion tips & trends"),icon:""},{text:"Shop My Looks",url:"#",description:o("Get the look"),icon:""},{text:"Fashion Blog",url:"#",description:o("Latest articles"),icon:""}],social:[{platform:"instagram",url:"#",icon:""},{platform:"pinterest",url:"#",icon:""},{platform:"tiktok",url:"#",icon:""}]},H={name:"Fashion",layout:"elegant",buttonStyle:"minimal",socialPosition:"bottom",profileStyle:"editorial",profileFields:[{name:"name",label:o("Full Name"),type:"text",placeholder:o("Enter your full name"),defaultValue:T.name,required:!0,section:o("Personal Information"),cols:1},{name:"tagline",label:o("Professional Title"),type:"text",placeholder:o("e.g. Fashion Designer, Style Consultant"),defaultValue:T.tagline,required:!1,section:o("Personal Information"),cols:1},{name:"profile_image",label:o("Profile Photo"),type:"image",placeholder:o("Upload your professional photo"),required:!1,section:o("Personal Information"),cols:2},{name:"email",label:o("Email Address"),type:"email",placeholder:o("your.email@example.com"),defaultValue:T.email,required:!1,section:o("Contact Details"),cols:1},{name:"location",label:o("Location"),type:"text",placeholder:o("City, Country"),required:!1,section:o("Contact Details"),cols:1},{name:"description",label:o("Professional Bio"),type:"textarea",placeholder:o("Brief description of your style and expertise"),defaultValue:T.description,required:!1,section:o("About"),cols:2,rows:3}],customCSS:`
    /* Modern Fashion Theme - Elegant & Sophisticated */
    .bio-link-container {
      position: relative;
      font-family: 'Playfair Display', serif;
      min-height: 100vh;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      overflow: hidden;
    }

    /* Elegant overlay for better text readability */
    .bio-link-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      z-index: 0;
    }

    /* Subtle pattern overlay */
    .bio-link-container::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image:
        radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 2%, transparent 0%);
      background-size: 50px 50px;
      animation: patternMove 30s linear infinite;
      z-index: 0;
    }

    /* Main content container */
    .bio-link-layout {
      max-width: 450px;
      margin: 0 auto;
      padding: 2.5rem 1.5rem;
      position: relative;
      z-index: 1;
    }

    /* Header section */
    .bio-link-header {
      text-align: center;
      margin-bottom: 2.5rem;
      animation: fadeInUp 0.8s ease-out;
    }

    /* Profile image with editorial styling */
    .bio-link-profile {
      position: relative;
      width: 140px;
      height: 140px;
      margin: 0 auto 2rem;
      border-radius: 50%;
      overflow: hidden;
      border: 3px solid var(--button-color, rgba(255, 255, 255, 0.2));
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
      backdrop-filter: blur(10px);
    }

    .bio-link-profile img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
      filter: saturate(1.1) contrast(1.05);
    }



    /* Name with elegant typography */
    .bio-link-title {
      font-size: 2.25rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
      letter-spacing: -0.02em;
      line-height: 1.2;
      position: relative;
    }

    /* Elegant underline */
    .bio-link-title::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -12px;
      width: 0;
      height: 1px;
      background: currentColor;
      opacity: 0.7;
      transition: all 0.8s ease;
      transform: translateX(-50%);
    }

    .bio-link-title:hover::after {
      width: 80px;
    }

    /* Professional tagline */
    .bio-link-tagline {
      font-size: 1.1rem;
      font-weight: 500;
      opacity: 0.95;
      margin-bottom: 1.5rem;
      letter-spacing: 0.02em;
      font-style: italic;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    }

    /* Contact info section */
    .bio-link-contact {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(20px);
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    }

    .bio-link-contact-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.5rem;
      border-radius: 10px;
      transition: all 0.3s ease;
      font-size: 0.95rem;
    }

    .bio-link-contact-item:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateX(5px);
    }

    .bio-link-contact-item svg {
      width: 16px;
      height: 16px;
      opacity: 0.8;
    }

    /* Description */
    .bio-link-description {
      text-align: center;
      line-height: 1.7;
      font-size: 1rem;
      margin-bottom: 2.5rem;
      padding: 1.25rem;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 16px;
      border-left: 3px solid currentColor;
      font-style: italic;
    }

    /* Modern button styling */
    .bio-link-button {
      position: relative;
      display: flex;
      align-items: center;
      padding: 1.25rem 1.5rem;
      margin-bottom: 1rem;
      border-radius: 16px;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15), 0 4px 15px var(--button-color);
      overflow: hidden;
      text-decoration: none;
      animation: slideInUp 0.6s ease-out;
      animation-fill-mode: both;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }

    .bio-link-button:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25), 0 8px 25px var(--button-color);
      border-color: rgba(255, 255, 255, 0.25);
    }

    /* Button shimmer effect */
    .bio-link-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
      transition: left 0.7s ease;
      z-index: 1;
    }

    .bio-link-button:hover::before {
      left: 100%;
    }



    /* Button icon */
    .bio-link-button img {
      width: 22px;
      height: 22px;
      margin-right: 1rem;
      border-radius: 6px;
      transition: transform 0.3s ease;
    }

    .bio-link-button:hover img {
      transform: scale(1.1);
    }

    /* Button text */
    .bio-link-button-text {
      flex: 1;
      position: relative;
      z-index: 2;
    }

    .bio-link-button-title {
      font-weight: 600;
      margin-bottom: 0.25rem;
      letter-spacing: -0.01em;
    }

    .bio-link-button-desc {
      font-size: 0.9rem;
      font-weight: 400;
      font-style: italic;
    }

    /* Social icons */
    .bio-link-social {
      margin-top: 2.5rem;
      padding: 1rem 1.5rem;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(20px);
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }

    .bio-link-social-title {
      text-align: center;
      font-size: 0.9rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
      opacity: 0.8;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      position: relative;
    }

    .bio-link-social-title::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      height: 1px;
      background: currentColor;
      opacity: 0.5;
    }

    .bio-link-social-icons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.75rem;
      max-width: 300px;
      margin: 0 auto;
    }

    .bio-link-social-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45px;
      height: 45px;
      border-radius: 15px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      animation: fadeInUp 0.6s ease-out;
      animation-fill-mode: both;
      position: relative;
      overflow: hidden;
    }

    .bio-link-social-icon::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s ease;
    }

    .bio-link-social-icon:hover::before {
      left: 100%;
    }

    .bio-link-social-icon:hover {
      transform: translateY(-3px);
      background: rgba(255, 255, 255, 0.15);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2), 0 4px 15px var(--button-color, rgba(0, 0, 0, 0.15));
      border-color: rgba(255, 255, 255, 0.3);
    }

    .bio-link-social-icon svg {
      width: 22px;
      height: 22px;
      transition: transform 0.3s ease;
      position: relative;
      z-index: 2;
    }

    .bio-link-social-icon:hover svg {
      transform: scale(1.1);
    }

    /* Copyright */
    .bio-link-copyright {
      text-align: center;
      font-size: 0.85rem;
      opacity: 0.9;
      margin-top: 2.5rem;
      padding: 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.15);
      font-weight: 500;
      letter-spacing: 0.02em;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
      background: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(10px);
      border-radius: 12px;
    }

    /* Simple animations */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(15px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes patternMove {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(50px, 50px);
      }
    }

    /* Animation delays for staggered effect */
    .bio-link-button:nth-child(1) { animation-delay: 0.1s; }
    .bio-link-button:nth-child(2) { animation-delay: 0.2s; }
    .bio-link-button:nth-child(3) { animation-delay: 0.3s; }
    .bio-link-button:nth-child(4) { animation-delay: 0.4s; }
    .bio-link-button:nth-child(5) { animation-delay: 0.5s; }
    .bio-link-button:nth-child(6) { animation-delay: 0.6s; }

    /* Responsive design */
    @media (max-width: 640px) {
      .bio-link-layout {
        padding: 2rem 1rem;
      }

      .bio-link-profile {
        width: 120px;
        height: 120px;
      }

      .bio-link-title {
        font-size: 1.875rem;
      }

      .bio-link-button {
        padding: 1rem 1.25rem;
      }

      .bio-link-social {
        padding: 1.5rem 1rem 0.75rem;
      }

      .bio-link-social-icons {
        grid-template-columns: repeat(auto-fit, minmax(45px, 1fr));
        max-width: 250px;
      }

      .bio-link-social-icon {
        width: 45px;
        height: 45px;
        border-radius: 12px;
      }

      .bio-link-social-icon svg {
        width: 20px;
        height: 20px;
      }
    }
  `,colorPresets:[{name:"Champagne Gold",background:{type:"image",color:"#E75480",gradient:"linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",image:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=800&fit=crop"},buttonColor:"#E75480",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Blush Pink",background:{type:"image",color:"#B17457",gradient:"linear-gradient(135deg, #fef7f0 0%, #fed7d7 100%)",image:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=800&fit=crop"},buttonColor:"#B17457",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Elegant Rose",background:{type:"image",color:"#0D5EA6",gradient:"linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)",image:"https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=1200&h=800&fit=crop"},buttonColor:"#0D5EA6",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Sage Green",background:{type:"image",color:"#E83030",gradient:"linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",image:"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&h=800&fit=crop"},buttonColor:"#E83030",buttonTextColor:"#ffffff",textColor:"#FFFFFF"},{name:"Ocean Blue",background:{type:"image",color:"#DC8BE0",gradient:"linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop"},buttonColor:"#DC8BE0",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"}],font:"Playfair Display, serif",defaultPreset:0,renderProfile:n=>{const{data:s,textColor:c,buttonColor:m,buttonTextColor:p,isPublic:a}=n,r=!a,{header:t}=s.config,i=t.name||(t.name!==null&&t.name!==""&&r?T.name:null),l=t.tagline||(t.tagline!==null&&t.tagline!==""&&r?T.tagline:null),d=t.email||(t.email!==null&&t.email!==""&&r?T.email:null);t.phone||t.phone!==null&&t.phone!==""&&r&&T.phone;const g=t.description||(t.description!==null&&t.description!==""&&r?T.description:null),h=v=>v?v.replace(/[<>\"&]/g,I=>({"<":"&lt;",">":"&gt;",'"':"&quot;","&":"&amp;"})[I]||I):"",b=h(i||""),f=h(l||""),u=h(d||""),x=h(t.location||""),y=h(g||"");return e.createElement(e.Fragment,null,t.profile_image?e.createElement("div",{className:"bio-link-profile"},e.createElement("img",{src:F(t.profile_image),alt:b,className:"w-full h-full object-cover"})):e.createElement("div",{className:"bio-link-profile flex items-center justify-center text-3xl font-bold",style:{background:"linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",color:c}},b.charAt(0).toUpperCase()),e.createElement("h1",{className:"bio-link-title",style:{color:c}},b),f&&e.createElement("p",{className:"bio-link-tagline",style:{color:c}},f),(u||x)&&e.createElement("div",{className:"bio-link-contact"},u&&e.createElement("div",{className:"bio-link-contact-item"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),e.createElement("path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"})),e.createElement("span",null,u)),x&&e.createElement("div",{className:"bio-link-contact-item"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"}),e.createElement("circle",{cx:"12",cy:"10",r:"3"})),e.createElement("span",null,x))),y&&e.createElement("div",{className:"bio-link-description",style:{color:c}},y))},renderSocial:n=>{const{data:s,isPublic:c,textColor:m,buttonColor:p,buttonTextColor:a}=n,{social:r}=s.config,t=r!=null&&r.items&&r.items.length>0?r.items:T.social;if(!(r!=null&&r.display)||!t.length){const i=[{platform:"instagram",url:"#"},{platform:"twitter",url:"#"},{platform:"facebook",url:"#"},{platform:"linkedin",url:"#"}];return e.createElement("div",{className:"bio-link-social"},e.createElement("div",{className:"bio-link-social-title",style:{color:m}},o("Connect")),e.createElement("div",{className:"bio-link-social-icons"},i.map((l,d)=>e.createElement("a",{key:d,href:l.url,target:"_blank",rel:"noopener noreferrer",className:"bio-link-social-icon",style:{textDecoration:"none",animationDelay:`${.5+d*.1}s`}},e.createElement(k,{platform:l.platform,color:m})))))}return e.createElement("div",{className:"bio-link-social"},e.createElement("div",{className:"bio-link-social-title",style:{color:m}},o("Connect")),e.createElement("div",{className:"bio-link-social-icons"},t.map((i,l)=>i.platform&&e.createElement("a",{key:l,href:i.url||"#",target:"_blank",rel:"noopener noreferrer",className:"bio-link-social-icon",style:{textDecoration:"none",animationDelay:`${.5+l*.1}s`}},e.createElement(k,{platform:i.platform,color:m})))))},renderLinks:n=>{const{data:s,isPublic:c,buttonColor:m,textColor:p,buttonTextColor:a}=n,{links:r}=s.config,t=r&&r.length>0?r:T.links;if(!t||!t.length)return e.createElement("div",{className:"text-center p-4 opacity-70 text-sm",style:{color:a}},o("No links added yet"));const i=l=>l?l.replace(/[<>\"&]/g,d=>({"<":"&lt;",">":"&gt;",'"':"&quot;","&":"&amp;"})[d]||d):"";return e.createElement(e.Fragment,null,t.map((l,d)=>e.createElement("a",{key:d,href:l.url||"#",target:"_blank",rel:"noopener noreferrer",className:"bio-link-button",style:{background:m,color:a||"#000000",textDecoration:"none",animationDelay:`${.1+d*.1}s`,"--button-color":m}},l.icon&&e.createElement("img",{src:l.icon,alt:"",className:"w-5 h-5 mr-4 rounded"}),e.createElement("div",{className:"bio-link-button-text"},e.createElement("div",{className:"bio-link-button-title"},i(l.text||"Untitled Link")),l.description&&e.createElement("div",{className:"bio-link-button-desc"},i(l.description))))))},renderContainer:n=>{const{data:s,textColor:c,buttonColor:m,buttonTextColor:p,font:a}=n,{background:r}=s.config,t=s.config.copyright,i="https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=1200&h=800&fit=crop";let l={};(r==null?void 0:r.type)==="image"?l={backgroundImage:`url(${r.image||i})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}:(r==null?void 0:r.type)==="gradient"&&r.gradient?l={background:r.gradient}:(r==null?void 0:r.type)==="color"&&r.color?l={backgroundColor:r.color}:l={backgroundImage:`url(${i})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"};const d=b=>b?b.replace(/[<>\"&]/g,f=>({"<":"&lt;",">":"&gt;",'"':"&quot;","&":"&amp;"})[f]||f):"",g=d(s.config.displayName||""),h=d((t==null?void 0:t.text)||`© ${new Date().getFullYear()} ${g}. All rights reserved.`);return e.createElement("div",{className:"bio-link-container",style:{color:c,fontFamily:a,"--button-color":m,"--button-text-color":p,"--text-color":c,...l}},e.createElement("div",{className:"bio-link-layout"},e.createElement("div",{className:"bio-link-header"},H.renderProfile&&H.renderProfile(n)),H.renderLinks&&H.renderLinks(n),H.renderSocial&&H.renderSocial(n),(t==null?void 0:t.enabled)!==!1&&e.createElement("div",{className:"bio-link-copyright",style:{color:c}},h)))}},L={name:o('Tyler "ProGamer" Johnson'),tagline:o("Professional Esports Player"),links:[{text:"Watch Stream",url:"#",description:o("Live on Twitch"),icon:""},{text:"Gaming Setup",url:"#",description:o("My gear & config"),icon:""},{text:"Tournament Schedule",url:"#",description:o("Upcoming matches"),icon:""}],social:[{platform:"twitch",url:"#",icon:""},{platform:"youtube",url:"#",icon:""},{platform:"discord",url:"#",icon:""}]},G={name:"Gaming",layout:"modern",buttonStyle:"minimal",socialPosition:"bottom",profileStyle:"clean",profileFields:[{name:"name",label:o("Display Name"),type:"text",placeholder:o("Enter your display name"),defaultValue:L.name,required:!0,section:o("Profile"),cols:1},{name:"tagline",label:o("Bio"),type:"text",placeholder:o("Brief description about yourself"),defaultValue:L.tagline,required:!1,section:o("Profile"),cols:1},{name:"profile_image",label:o("Profile Image"),type:"image",placeholder:o("Upload your profile image"),required:!1,section:o("Profile"),cols:2},{name:"specialty",label:o("Specialty"),type:"text",placeholder:o("e.g. Content Creator, Streamer, Developer"),required:!1,section:o("Details"),cols:1},{name:"platform",label:o("Platform"),type:"text",placeholder:o("Primary platform or focus area"),required:!1,section:o("Details"),cols:1}],customCSS:`
    .gaming-theme {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      min-height: 100vh;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
    }

    .gaming-theme::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 0;
    }

    .gaming-theme .bio-link-layout {
      max-width: 480px;
      margin: 0 auto;
      padding: 2rem 1.5rem;
      position: relative;
      z-index: 1;
    }

    .gaming-theme .bio-link-profile-container {
      width: 120px;
      height: 120px;
      margin: 0 auto 2rem;
      border-radius: 24px;
      overflow: hidden;
      background: var(--button-color, #3b82f6);
      padding: 3px;
      position: relative;
      transition: all 0.3s ease;
    }

    .gaming-theme .bio-link-profile-container:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 6px 18px var(--button-color, rgba(0, 0, 0, 0.3));
    }

    .gaming-theme .bio-link-profile {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 21px;
      background: var(--bg-color, #0f0f23);
    }

    .gaming-theme .bio-link-title {
      font-size: 1.75rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 0.5rem;
      color: var(--text-color);
      letter-spacing: -0.025em;
    }

    .gaming-theme .bio-link-tagline {
      font-size: 1rem;
      text-align: center;
      margin-bottom: 2rem;
      color: var(--text-color);
      opacity: 0.95;
      line-height: 1.5;
      font-weight: 500;
    }

    .gaming-theme .profile-details {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-bottom: 2rem;
      justify-content: center;
    }

    .gaming-theme .detail-chip {
      background: rgba(255, 255, 255, 0.2);
      padding: 0.5rem 1rem;
      border-radius: 12px;
      font-size: 0.875rem;
      color: var(--text-color, #ffffff);
      font-weight: 500;
      backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .gaming-theme .link-card {
      background: var(--button-color, #3b82f6);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 16px;
      padding: 1.25rem;
      margin-bottom: 1.5rem;
      transition: all 0.3s ease;
      text-decoration: none;
      color: var(--button-text-color, #ffffff);
      display: block;
      backdrop-filter: blur(15px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2), 0 2px 8px var(--button-color, rgba(0, 0, 0, 0.15));
      font-weight: 600;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }

    .gaming-theme .link-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 4px 15px var(--button-color, rgba(0, 0, 0, 0.2));
      border-color: rgba(255, 255, 255, 0.3);
    }

    .gaming-theme .link-title {
      font-size: 1.125rem;
      font-weight: 700;
      margin-bottom: 0.25rem;
      color: var(--button-text-color, #ffffff);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    .gaming-theme .link-description {
      font-size: 0.875rem;
      color: var(--button-text-color, #ffffff);
      line-height: 1.4;
      font-weight: 500;
    }

    .gaming-theme .social-icons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin: 2rem 0;
      flex-wrap: wrap;
    }

    .gaming-theme .social-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      color: var(--text-color, #ffffff);
      border: 1px solid rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(15px);
    }

    .gaming-theme .social-icon:hover {
      background: var(--button-color);
      color: var(--button-text-color);
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2), 0 3px 8px var(--button-color, rgba(0, 0, 0, 0.15));
    }

    .gaming-theme .social-icon svg {
      color: inherit;
      fill: currentColor;
    }

    .gaming-theme .social-icon:hover svg {
      color: inherit;
      fill: currentColor;
    }

    .gaming-theme .copyright {
      text-align: center;
      margin-top: 2.2rem;
      padding: 2.2rem 1.5rem 0 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.15);
      font-size: 0.875rem;
      color: var(--text-color);
      opacity: 0.9;
      font-weight: 500;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);

    }

    @media (max-width: 768px) {
      .gaming-theme .bio-link-layout {
        padding: 1.5rem 1rem;
      }

      .gaming-theme .profile-details {
        flex-direction: column;
        align-items: center;
      }

      .gaming-theme .detail-chip {
        text-align: center;
      }
    }
  `,colorPresets:[{name:"Neon Gaming",background:{type:"image",color:"#EF4444",gradient:"linear-gradient(135deg, #ea580c 0%, #f97316 100%)",image:"https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=800&fit=crop"},buttonColor:"#EF4444",buttonTextColor:"#ffffff",textColor:"#ffffff"},{name:"Cyber Green",background:{type:"image",color:"#9333EA",gradient:"linear-gradient(135deg, #059669 0%, #10b77f 100%)",image:"https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=1200&h=800&fit=crop"},buttonColor:"#9333EA",buttonTextColor:"#ffffff",textColor:"#ffffff"},{name:"Gaming Blue",background:{type:"image",color:"#C3073F",gradient:"linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",image:"https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=800&fit=crop"},buttonColor:"#C3073F",buttonTextColor:"#ffffff",textColor:"#ffffff"},{name:"Gaming Purple",background:{type:"image",color:"#EC4899",gradient:"linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)",image:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop"},buttonColor:"#EC4899",buttonTextColor:"#ffffff",textColor:"#ffffff"},{name:"Esports Blue",background:{type:"image",color:"#14B8A6",gradient:"linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)",image:"https://images.unsplash.com/photo-1556438064-2d7646166914?w=1200&h=800&fit=crop"},buttonColor:"#14B8A6",buttonTextColor:"#ffffff",textColor:"#ffffff"}],font:"Inter, -apple-system, BlinkMacSystemFont, sans-serif",defaultPreset:0,renderProfile:n=>{const{data:s,textColor:c,buttonColor:m,buttonTextColor:p,isPublic:a}=n,r=!a,{header:t}=s.config,i=t.name||(t.name!==null&&t.name!==""&&r?L.name:null),l=t.tagline||(t.tagline!==null&&t.tagline!==""&&r?L.tagline:null);return t.email||t.email!==null&&t.email!==""&&r&&L.email,t.phone||t.phone!==null&&t.phone!==""&&r&&L.phone,t.description||t.description!==null&&t.description!==""&&r&&L.description,e.createElement("div",{className:"bio-link-header"},e.createElement("div",{className:"bio-link-profile-container"},t.profile_image?e.createElement("img",{src:F(t.profile_image),alt:i,className:"bio-link-profile"}):e.createElement("div",{className:"bio-link-profile",style:{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem",fontWeight:"700",color:m}},(i==null?void 0:i.charAt(0))||"?")),e.createElement("h1",{className:"bio-link-title"},i),l&&e.createElement("div",{className:"bio-link-tagline"},l),(t.specialty||t.platform)&&e.createElement("div",{className:"profile-details"},t.specialty&&e.createElement("div",{className:"detail-chip"},t.specialty),t.platform&&e.createElement("div",{className:"detail-chip"},t.platform)))},renderSocial:n=>{const{data:s,isPublic:c,textColor:m,buttonColor:p,buttonTextColor:a}=n,{social:r}=s.config,t=r!=null&&r.items&&r.items.length>0?r.items:L.social;return t.length?e.createElement("div",{className:"social-icons"},t.map((i,l)=>i.platform&&e.createElement("a",{key:l,href:i.url||"#",target:"_blank",rel:"noopener noreferrer",className:"social-icon"},e.createElement(k,{platform:i.platform,color:m})))):null},renderLinks:n=>{const{data:s,isPublic:c,buttonColor:m,textColor:p,buttonTextColor:a}=n,{links:r}=s.config,t=r&&r.length>0?r:L.links;return e.createElement(e.Fragment,null,t.map((i,l)=>e.createElement("a",{key:l,href:i.url||"#",target:"_blank",rel:"noopener noreferrer",className:"link-card",style:{"--button-color":n.buttonColor,"--button-text-color":n.buttonTextColor}},e.createElement("div",{className:"link-title"},i.text||o("Link")),i.description&&e.createElement("div",{className:"link-description"},i.description))))},renderContainer:n=>{var i,l;const{data:s,textColor:c,buttonColor:m,font:p}=n,{background:a}=s.config;let r={};const t="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=800&fit=crop";return(a==null?void 0:a.type)==="image"?r={backgroundImage:`url(${a.image||t})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}:(a==null?void 0:a.type)==="gradient"&&a.gradient?r={background:a.gradient}:(a==null?void 0:a.type)==="color"&&a.color?r={backgroundColor:a.color}:r={backgroundImage:`url(${t})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},e.createElement("div",{className:"gaming-theme",style:{color:c,fontFamily:p,"--button-color":m,"--button-text-color":n.buttonTextColor||"#ffffff","--text-color":c,...r}},e.createElement("div",{className:"bio-link-layout"},G.renderProfile&&G.renderProfile(n),G.renderLinks&&G.renderLinks(n),G.renderSocial&&G.renderSocial(n),((i=s.config.copyright)==null?void 0:i.enabled)!==!1&&e.createElement("div",{className:"copyright"},((l=s.config.copyright)==null?void 0:l.text)||`© ${new Date().getFullYear()} ${s.config.header.name||L.name}`)))}},A={name:o("Dr. Maya Patel"),tagline:o("Wellness Coach & Nutritionist"),description:o("Helping you achieve optimal health through personalized nutrition and lifestyle coaching."),links:[{text:"Book Consultation",url:"#",description:o("Schedule your session"),icon:""},{text:"Meal Plans",url:"#",description:o("Custom nutrition plans"),icon:""},{text:"Health Tips",url:"#",description:o("Daily wellness advice"),icon:""}],social:[{platform:"instagram",url:"#",icon:""},{platform:"youtube",url:"#",icon:""},{platform:"linkedin",url:"#",icon:""}]},X={name:"Health",layout:"card",buttonStyle:"soft",socialPosition:"floating",profileStyle:"circular-frame",profileFields:[{name:"name",label:o("Name"),type:"text",placeholder:o("Enter your name"),defaultValue:A.name,required:!0,section:o("Personal Details"),cols:1},{name:"tagline",label:o("Profession"),type:"text",placeholder:o("Enter your profession (e.g. Nutritionist, Fitness Coach)"),defaultValue:A.tagline,required:!1,section:o("Personal Details"),cols:1},{name:"profile_image",label:o("Profile Image"),type:"image",placeholder:o("Upload your profile image"),required:!1,section:o("Personal Details"),cols:2},{name:"specialty",label:o("Specialty"),type:"text",placeholder:o("Yoga, Nutrition, Fitness Training (separate with commas)"),required:!1,section:o("Professional Details"),cols:1},{name:"certification",label:o("Certification"),type:"text",placeholder:o("RYT-500, Certified Nutritionist (separate with commas)"),required:!1,section:o("Professional Details"),cols:1},{name:"description",label:o("Bio"),type:"textarea",placeholder:o("Tell people about your health expertise"),defaultValue:A.description,required:!1,section:o("Professional Details"),cols:2,rows:3}],customCSS:`
    /* Health Theme - Clean, Professional & Wellness-focused */
    .bio-link-container.health-theme {
      position: relative;
      font-family: 'Nunito', 'Quicksand', sans-serif;
      overflow: hidden;
      border-radius: 20px;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
      background: var(--theme-bg, #FFFFFF);
      color: var(--theme-text, #0F5C46);
      min-height: 100vh;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }



    /* Dynamic color system for health theme */
    .health-theme {
      --theme-bg: var(--health-bg, #FFFFFF);
      --theme-text: var(--health-text, #0F5C46);
      --theme-button: var(--health-button, #20C997);
      --theme-button-text: var(--health-button-text, #FFFFFF);
      --theme-accent: var(--health-accent, var(--health-button, #20C997));
      --theme-card-bg: var(--health-card-bg, rgba(255, 255, 255, 0.9));
      --theme-hover-bg: var(--health-hover-bg, rgba(255, 255, 255, 0.95));
      --theme-border: var(--health-border, rgba(32, 201, 151, 0.2));
      --theme-glow: var(--health-glow, rgba(32, 201, 151, 0.1));
    }

    .health-theme {
      overflow-x: hidden;
      width: 100%;
      padding: 0;
      margin: 0;
    }

    /* Subtle pattern overlay */
    .health-theme::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2320c997' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      opacity: 0.5;
      z-index: 0;
      filter: hue-rotate(var(--theme-hue, 0deg));
    }

    /* Decorative elements */
    .health-theme .pulse-circle {
      position: absolute;
      border-radius: 50%;
      background: var(--theme-accent);
      opacity: 0.05;
      z-index: 1;
    }

    .health-theme .pulse-circle-1 {
      width: 300px;
      height: 300px;
      top: -150px;
      right: -100px;
      animation: pulse 15s infinite alternate;
    }

    .health-theme .pulse-circle-2 {
      width: 200px;
      height: 200px;
      bottom: -50px;
      left: -50px;
      animation: pulse 12s infinite alternate-reverse;
    }

    .health-theme .heartbeat-icon {
      position: absolute;
      width: 40px;
      height: 40px;
      opacity: 0.1;
      z-index: 1;
    }

    .health-theme .heartbeat-1 {
      top: 15%;
      left: 10%;
      animation: heartbeat 2s infinite;
    }

    .health-theme .heartbeat-2 {
      bottom: 20%;
      right: 10%;
      animation: heartbeat 2s infinite;
      animation-delay: 1s;
    }

    /* Header styling */
    .health-theme .bio-link-header {
      position: relative;
      padding: 2.5rem 2rem 0;
      text-align: center;
      z-index: 2;
      background: var(--theme-card-bg);
      backdrop-filter: blur(10px);
      color: var(--theme-text);
    }

    /* Transparent header when background image is set */
    .health-theme.has-bg-image .bio-link-header {
      background: transparent;
      backdrop-filter: none;
    }

    /* Profile image styling */
    .health-theme .bio-link-profile {
      width: 130px !important;
      height: 130px !important;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto 1.5rem;
      position: relative;
      z-index: 2;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    /* Profile image hover effect */
    .health-theme .bio-link-profile:hover {
      transform: scale(1.05);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2),
                  0 0 0 12px var(--theme-glow),
                  0 8px 20px var(--health-button);
    }

    /* Name styling */
    .health-theme .bio-link-title {
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: var(--theme-text);
      position: relative;
      display: inline-block;
      letter-spacing: -0.01em;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    }

    /* Tagline styling */
    .health-theme .bio-link-tagline {
      font-size: 1.1rem;
      font-weight: 500;
      margin-bottom: 1rem;
      color: var(--theme-text);
      opacity: 0.9;
      text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    }

    /* Description styling */
    .health-theme .bio-link-description {
      font-size: 1rem;
      margin: 0 auto;
      line-height: 1.6;
      position: relative;
    }

    /* Enhanced Professional Details */
    .health-theme .professional-details {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin: 2rem auto;
      max-width: 700px;
    }

    .health-theme .enhanced-detail-card {
      background: var(--theme-card-bg);
      border-radius: 16px;
      padding: 1.2rem;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
      border: 1px solid var(--theme-border);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      color: var(--theme-text);
      position: relative;
      overflow: hidden;
    }

    /* Transparent detail cards when background image is set */
    .health-theme.has-bg-image .enhanced-detail-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .health-theme .enhanced-detail-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: var(--theme-accent);
      opacity: 0.3;
    }



    .health-theme .detail-header {
      display: flex;
      align-items: center;
      margin-bottom: 1.25rem;
    }

    .health-theme .detail-icon {
      width: 50px;
      height: 50px;
      margin-right: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      transition: all 0.4s ease;
    }



    .health-theme .detail-title {
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: 700;
      color: var(--theme-text);
    }

    .health-theme .detail-value {
      font-size: 1.05rem;
      font-weight: 600;
      line-height: 1.4;
    }

    /* Specialty Tags */
    .health-theme .specialty-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 12px 8px;
    }

    .health-theme .specialty-tag {
      padding: 0.4rem 0.8rem;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
      border: 1px solid currentColor;
      transition: all 0.3s ease;
      display: inline-block;
    }

    .health-theme .specialty-tag:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    /* Certification Items */
    .health-theme .certification-content {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .health-theme .certification-item {
      display: flex;
      align-items: flex-start;
      font-size: 0.95rem;
      font-weight: 500;
      line-height: 1.4;
    }

    .health-theme .cert-bullet {
      margin-right: 0.5rem;
      font-weight: 700;
      opacity: 0.7;
    }

    /* Links container */
    .health-theme .links-container {
      padding: 2rem;
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 600px;
      margin: 0 auto;
      overflow-x: hidden;
      width: auto;
    }

    /* Link button styling */
    .health-theme .bio-link-button {
      position: relative;
      padding: 1rem 1.5rem;
      background: var(--health-button);
      border-radius: 12px;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      overflow: hidden;
      display: flex;
      align-items: center;
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: var(--health-button-text);
      font-weight: 600;
    }

    /* Transparent link buttons when background image is set */
    .health-theme.has-bg-image .bio-link-button {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }


    /* Link icon */
    .health-theme .bio-link-button .link-icon {
      width: 40px;
      height: 40px;
      margin-right: 1rem;
      border-radius: 10px;
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--theme-glow);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .health-theme .bio-link-button .link-icon img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .health-theme .bio-link-button:hover .link-icon {
      transform: scale(1.1) rotate(5deg);
    }

    .health-theme .bio-link-button:hover .link-icon img {
      transform: scale(1.1);
    }

    /* Link text */
    .health-theme .bio-link-button .link-text {
      flex: 1;
    }

    .health-theme .bio-link-button .link-title {
      font-weight: 700;
      font-size: 1.05rem;
      letter-spacing: 0.01em;
      color: var(--health-button-text);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    .health-theme .bio-link-button .link-description {
      font-size: 0.85rem;
      opacity: 0.9;
      margin-top: 0.25rem;
      color: var(--health-button-text);
      font-weight: 500;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    /* Arrow icon */
    .health-theme .bio-link-button .arrow-icon {
      margin-left: 0.85rem;
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .health-theme .bio-link-button:hover .arrow-icon {
      transform: translateX(4px);
      opacity: 1;
    }

    /* Social icons section */
    .health-theme .social-container {
      margin: 0 auto 2rem;
      padding: 0 2rem 2rem 2rem;
      border-top: 1px solid rgba(32, 201, 151, 0.1);
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      max-width: 600px;
      overflow-x: hidden;
      width: auto;
    }

    /* Social title */
    .health-theme .social-title {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 1rem;
      text-align: center;
      color: currentColor;
      position: relative;
    }

    .health-theme .social-title::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 2px;
      background: currentColor;
      opacity: 0.2;
    }

    /* Social icons wrapper */
    .health-theme .social-icons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    /* Social icon styling */
    .health-theme .social-icon {
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      background: var(--theme-card-bg);
      border: 1px solid var(--theme-border);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      position: relative;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }

    /* Transparent social icons when background image is set */
    .health-theme.has-bg-image .social-icon {
      background: var(--theme-accent);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    /* Fix for social icons */
    .health-theme .social-icon svg {
      width: 18px;
      height: 18px;
      position: relative;
      z-index: 2;
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    /* Social icon hover effect */
    .health-theme .social-icon:hover {
      transform: translateY(-5px);
      background: var(--theme-accent);
      border-color: var(--theme-accent);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15), 0 4px 12px var(--health-button);
    }

    .health-theme .social-icon:hover svg {
      transform: scale(1.2);
      color: #FFFFFF !important;
    }

    /* Social icon wrapper */
    .health-theme .social-icon-wrapper {
      position: relative;
    }

    /* Footer */
    .health-theme .health-footer {
      padding: 1.25rem 0 0;
      text-align: center;
      font-size: 0.85rem;
      opacity: 0.9;
      margin-top: 1.5rem;
      font-weight: 500;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    }

    /* Transparent footer when background image is set */
    .health-theme.has-bg-image .health-footer {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 12px;
      padding: 1.5rem;
      margin-top: 1rem;
    }

    /* Animations */
    @keyframes pulse {
      0% { transform: scale(1); opacity: 0.05; }
      50% { transform: scale(1.05); opacity: 0.08; }
      100% { transform: scale(1); opacity: 0.05; }
    }

    @keyframes heartbeat {
      0% { transform: scale(1); }
      14% { transform: scale(1.3); }
      28% { transform: scale(1); }
      42% { transform: scale(1.3); }
      70% { transform: scale(1); }
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(-20px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(20px); }
      to { opacity: 1; transform: translateX(0); }
    }

    .health-theme .bio-link-profile {
      animation: fadeIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }

    .health-theme .bio-link-title,
    .health-theme .bio-link-tagline,
    .health-theme .bio-link-description {
      animation: fadeIn 0.8s ease forwards;
      animation-delay: 0.2s;
    }

    .health-theme .detail-card {
      animation: fadeIn 0.6s ease forwards;
      animation-delay: calc(0.1s * var(--index, 0) + 0.4s);
    }

    .health-theme .bio-link-button {
      animation: slideInRight 0.6s ease forwards;
      animation-delay: calc(0.1s * var(--index, 0) + 0.5s);
    }

    .health-theme .social-icon {
      animation: slideInLeft 0.6s ease forwards;
      animation-delay: calc(0.1s * var(--index, 0) + 0.7s);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .health-theme .bio-link-profile {
        width: 110px !important;
        height: 110px !important;
      }

      .health-theme .bio-link-title {
        font-size: 1.5rem;
      }

 

      .health-theme .professional-details {
        grid-template-columns: 1fr;
        gap: 1rem;
        margin: 1.5rem auto;
        padding: 0 0.5rem;
      }

      .health-theme .enhanced-detail-card {
        padding: 1.25rem;
      }

      .health-theme .detail-header {
        flex-direction: column;
        text-align: center;
        margin-bottom: 1rem;
      }

      .health-theme .detail-icon {
        margin-right: 0;
        margin-bottom: 0.75rem;
        width: 45px;
        height: 45px;
      }

      .health-theme .specialty-tags {
        justify-content: center;
      }

      .health-theme .specialty-tag {
        font-size: 0.8rem;
        padding: 0.3rem 0.6rem;
      }

      .health-theme .links-container,
      .health-theme .social-container {
        padding: 1.5rem;
        margin: 0 auto 1.5rem;
        max-width: 90%;
        overflow-x: hidden;
        width: auto;
      }

      .health-theme .social-icon {
        width: 2.75rem;
        height: 2.75rem;
      }

      .health-theme .social-icon:hover {
        transform: translateY(-5px);
      }
    }
  `,colorPresets:[{name:"Lavender Peace",background:{type:"image",color:"#6B8E23",gradient:"linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)",image:"https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&w=1200&h=800&fit=crop"},buttonColor:"#6B8E23",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Ocean Calm",background:{type:"image",color:"#3D5A80",gradient:"linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",image:"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&w=1200&h=800&fit=crop"},buttonColor:"#3D5A80",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Rose Wellness",background:{type:"image",color:"#D99B5D",gradient:"linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)",image:"https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&w=1200&h=800&fit=crop"},buttonColor:"#D99B5D",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Sunrise Vitality",background:{type:"image",color:"#A0522D",gradient:"linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)",image:"https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&w=1200&h=800&fit=crop"},buttonColor:"#A0522D",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Fresh Mint",background:{type:"image",color:"#56DFCF",gradient:"linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",image:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&w=1200&h=800&fit=crop"},buttonColor:"#56DFCF",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"}],font:"Nunito, Quicksand, sans-serif",defaultPreset:0,renderProfile:n=>{const{data:s,textColor:c,buttonColor:m,buttonTextColor:p,t:a=h=>h,isPublic:r}=n,t=!r,{header:i}=s.config,l=i.name||(i.name!==null&&i.name!==""&&t?A.name:null),d=i.tagline||(i.tagline!==null&&i.tagline!==""&&t?A.tagline:null);i.email||i.email!==null&&i.email!==""&&t&&A.email,i.phone||i.phone!==null&&i.phone!==""&&t&&A.phone;const g=i.description||(i.description!==null&&i.description!==""&&t?A.description:null);return e.createElement(e.Fragment,null,e.createElement("div",{className:"pulse-circle pulse-circle-1",style:{textDecoration:"none",background:m}}),e.createElement("div",{className:"pulse-circle pulse-circle-2",style:{textDecoration:"none",background:m}}),e.createElement("div",{className:"heartbeat-icon heartbeat-1",style:{textDecoration:"none",color:m}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},e.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}))),e.createElement("div",{className:"heartbeat-icon heartbeat-2",style:{textDecoration:"none",color:m}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},e.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}))),i.profile_image?e.createElement("div",{className:"bio-link-profile"},e.createElement("img",{src:F(i.profile_image),alt:l,className:"w-full h-full object-cover"})):e.createElement("div",{className:"bio-link-profile flex items-center justify-center text-xl font-bold",style:{textDecoration:"none",background:m,color:p}},l.charAt(0)),e.createElement("h1",{className:"bio-link-title"},l),d&&e.createElement("div",{className:"bio-link-tagline"},d),(i.specialty||i.certification)&&e.createElement("div",{className:"professional-details"},i.specialty&&e.createElement("div",{className:"enhanced-detail-card specialty-card",style:{textDecoration:"none","--index":0}},e.createElement("div",{className:"detail-header"},e.createElement("div",{className:"detail-title"},a("Specialties"))),e.createElement("div",{className:"specialty-content"},(()=>{const h=i.specialty.split(/[,;]|\s{2,}/).filter(b=>b.trim());return h.length>1?e.createElement("div",{className:"specialty-tags"},h.map((b,f)=>e.createElement("span",{key:f,className:"specialty-tag",style:{backgroundColor:`${m}`,color:c,borderColor:`${m}`}},b.trim()))):e.createElement("div",{className:"detail-value",style:{color:m}},i.specialty)})())),i.certification&&e.createElement("div",{className:"enhanced-detail-card certification-card",style:{textDecoration:"none","--index":1}},e.createElement("div",{className:"detail-header"},e.createElement("div",{className:"detail-icon",style:{backgroundColor:`${m}15`,color:m}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("circle",{cx:"12",cy:"8",r:"7"}),e.createElement("polyline",{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"}))),e.createElement("div",{className:"detail-title"},a("Certification"))),e.createElement("div",{className:"certification-content"},(()=>{const h=i.certification.split(/[,;]|\s{2,}/).filter(b=>b.trim());return h.length>1?h.map((b,f)=>e.createElement("div",{key:f,className:"certification-item",style:{color:m}},e.createElement("div",{className:"cert-bullet"},"•"),e.createElement("span",null,b.trim()))):e.createElement("div",{className:"detail-value",style:{color:m}},i.certification)})()))),g&&e.createElement("p",{className:"bio-link-description mt-4"},g))},renderSocial:n=>{var d,g;const{data:s,isPublic:c,textColor:m,buttonColor:p,buttonTextColor:a,t:r=h=>h}=n,{social:t}=s.config,i=t!=null&&t.items&&t.items.length>0?t.items:A.social;if(!(t!=null&&t.display)||!i.length)return null;const l={facebook:"Facebook",twitter:"Twitter",instagram:"Instagram",linkedin:"LinkedIn",youtube:"YouTube",pinterest:"Pinterest",tiktok:"TikTok",snapchat:"Snapchat",github:"GitHub",dribbble:"Dribbble",behance:"Behance",medium:"Medium",reddit:"Reddit",whatsapp:"WhatsApp",telegram:"Telegram",discord:"Discord",twitch:"Twitch",spotify:"Spotify",soundcloud:"SoundCloud",vimeo:"Vimeo"};return e.createElement("div",{className:"social-container"},e.createElement("div",{className:"social-title"},r("Connect With Me")),e.createElement("div",{className:"social-icons"},i.map((h,b)=>h.platform&&e.createElement("a",{key:b,href:h.url||"#",target:"_blank",rel:"noopener noreferrer",className:"social-icon-wrapper",style:{textDecoration:"none","--index":b}},e.createElement("a",{href:h.url||"#",target:"_blank",rel:"noopener noreferrer",className:"social-icon",style:{textDecoration:"none",color:p},title:l[h.platform]||h.platform},e.createElement(k,{platform:h.platform,color:m}))))),((d=s.config.copyright)==null?void 0:d.enabled)!==!1&&e.createElement("div",{className:"health-footer"},((g=s.config.copyright)==null?void 0:g.text)||`© ${new Date().getFullYear()} ${s.config.displayName}. All rights reserved.`))},renderLinks:n=>{const{data:s,isPublic:c,buttonColor:m,textColor:p,buttonTextColor:a}=n,{links:r}=s.config,t=r&&r.length>0?r:A.links;return!t||!t.length?e.createElement("div",{className:"text-center p-4 opacity-70 text-sm rounded-lg bg-white/10 backdrop-blur-md"},"No links added yet"):e.createElement("div",{className:"links-container"},t.map((i,l)=>e.createElement("a",{key:l,href:i.url||"#",target:"_blank",rel:"noopener noreferrer",className:"bio-link-button",style:{textDecoration:"none","--index":l}},i.icon&&e.createElement("div",{className:"link-icon"},e.createElement("img",{src:i.icon,alt:""})),e.createElement("div",{className:"link-text"},e.createElement("div",{className:"link-title"},i.text||o("Untitled Link")),i.description&&e.createElement("div",{className:"link-description"},i.description)),e.createElement("div",{className:"arrow-icon"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:a||"#FFFFFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M5 12h14"}),e.createElement("path",{d:"M12 5l7 7-7 7"}))))))},renderContainer:n=>{const{data:s,textColor:c,buttonColor:m,buttonTextColor:p,font:a}=n,{background:r}=s.config,t="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&w=1200&h=800&fit=crop",i=(r==null?void 0:r.type)==="image"&&r.image;let l={};return(r==null?void 0:r.type)==="image"?l={backgroundImage:`url(${r.image||t})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}:(r==null?void 0:r.type)==="gradient"&&r.gradient?l={background:r.gradient}:(r==null?void 0:r.type)==="color"&&r.color?l={backgroundColor:r.color}:l={backgroundImage:`url(${t})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},e.createElement("div",{className:`bio-link-container health-theme${i?" has-bg-image":""}`,style:{"--health-bg":(r==null?void 0:r.color)||"#FFFFFF","--health-text":c,"--health-button":m,"--health-button-text":p,"--health-accent":m,"--health-border":`${m}30`,"--health-glow":`${m}20`,"--health-card-bg":"rgba(255, 255, 255, 0.9)","--health-hover-bg":"rgba(255, 255, 255, 0.95)",color:c,fontFamily:a||"Nunito, Quicksand, sans-serif",...l}},e.createElement("div",{className:"bio-link-header"},X.renderProfile&&X.renderProfile(n)),X.renderLinks&&X.renderLinks(n),X.renderSocial&&X.renderSocial(n))}},B={name:o("Adventure Alex"),tagline:o("Travel Blogger & Explorer"),description:o("Exploring the world one destination at a time. Travel guides, tips, and inspiring adventures await!"),links:[{text:"Travel Guides",url:"#",description:o("Destination guides"),icon:""},{text:"Photo Gallery",url:"#",description:o("Travel photography"),icon:""},{text:"Travel Tips",url:"#",description:o("Expert advice"),icon:""}],social:[{platform:"instagram",url:"#",icon:""},{platform:"youtube",url:"#",icon:""},{platform:"facebook",url:"#",icon:""}]},O={name:"Travel",layout:"magazine",buttonStyle:"soft",socialPosition:"sidebar",profileStyle:"polaroid",profileFields:[{name:"name",label:o("Name"),type:"text",placeholder:o("Enter your name"),defaultValue:B.name,required:!0,section:o("Personal Details"),cols:1},{name:"tagline",label:o("Tagline"),type:"text",placeholder:o("Enter your travel tagline (e.g. Travel Blogger, Adventurer)"),defaultValue:B.tagline,required:!1,section:o("Personal Details"),cols:1},{name:"profile_image",label:o("Profile Image"),type:"image",placeholder:o("Upload your profile image"),required:!1,section:o("Personal Details"),cols:2},{name:"location",label:o("Current Location"),type:"text",placeholder:o("Enter your current location"),required:!1,section:o("Travel Details"),cols:1},{name:"countries",label:o("Countries Visited"),type:"text",placeholder:o("Enter number of countries visited"),required:!1,section:o("Travel Details"),cols:1},{name:"description",label:o("Bio"),type:"textarea",placeholder:o("Tell people about your travel experiences"),defaultValue:B.description,required:!1,section:o("Travel Details"),cols:2,rows:3}],customCSS:`
    .travel-theme {
      font-family: 'Inter', sans-serif;
      min-height: 100vh;
      position: relative;
      background-image: url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=800&fit=crop');
      background-size: cover;
      background-position: center;
    }
    
    .travel-theme::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.3);
      z-index: 0;
    }
    
    .travel-theme .bio-link-layout {
      max-width: 480px;
      margin: 0 auto;
      padding: 2rem 1.5rem;
      position: relative;
      z-index: 1;
    }
    
    .travel-theme .bio-link-profile-container {
      width: 120px;
      height: 120px;
      margin: 0 auto 1rem;
      border-radius: 50%;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    
    .travel-theme .bio-link-profile {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .travel-theme .bio-link-title {
      font-size: 2rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 0.5rem;
      color: currentColor;
    }
    
    .travel-theme .bio-link-tagline {
      font-size: 1rem;
      text-align: center;
      margin-bottom: 2rem;
      opacity: 0.95;
      color: currentColor;
      font-weight: 500;
    }
    
    .travel-theme .travel-stats {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin: 2rem 0;
      flex-wrap: wrap;
    }
    
    .travel-theme .stat-item {
      background: rgba(255,255,255,0.15);
      padding:  1rem;
      border-radius: 12px;
      text-align: center;
      min-width: 120px;
      backdrop-filter: blur(15px);
      border: 1px solid rgba(255,255,255,0.2);
      transition: all 0.3s ease;
      box-shadow: 0 8px 32px rgba(0,0,0,0.1);
      width:100%;
    }
    
    .travel-theme .stat-item:hover {
      transform: translateY(-5px);
      background: rgba(255,255,255,0.25);
      box-shadow: 0 12px 40px rgba(0,0,0,0.15);
    }
    
    .travel-theme .stat-label {
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 500;
    }
    
    .travel-theme .stat-value {
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 1.2;
      word-wrap: break-word;
      overflow-wrap: break-word;
      hyphens: auto;
    }
    
    .travel-theme .bio-link-description {
      background: rgba(255,255,255,0.1);
      padding: 2rem;
      border-radius: 24px;
      margin: 2rem 0;
      backdrop-filter: blur(20px);
      line-height: 1.7;
      border: 1px solid rgba(255,255,255,0.2);
      box-shadow: 0 8px 32px rgba(0,0,0,0.1);
      position: relative;
      overflow: hidden;
    }
    
    
    .travel-theme .bio-link-description:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 40px rgba(0,0,0,0.15);
    }
    
    .travel-theme .enhanced-card {
      background: var(--button-color, #0369a1);
      border-radius: 12px;
      overflow: hidden;
      margin-bottom: 1.5rem;
      backdrop-filter: blur(15px);
      transition: all 0.3s ease;
      border: 1px solid rgba(255,255,255,0.2);
      color: var(--button-text-color, #ffffff) !important;
      font-weight: 600;
    }
    

    

    
    .travel-theme .social-icons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin: 2rem 0;
      flex-wrap: wrap;
    }
    
    .travel-theme .social-icon {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--button-color, #0369a1);
      background: rgba(255,255,255,0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      backdrop-filter: blur(10px);
      color: var(--text-color, #ffffff);
      flex-shrink: 0;
    }
    
    .travel-theme .social-icon svg {
      width: 20px;
      height: 20px;
      color: inherit !important;
      fill: currentColor !important;
    }
    
    .travel-theme .social-icon:hover {
      background: var(--button-color, #0ea5e9);
      color: white;
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(0,0,0,0.2), 0 3px 8px var(--button-color, rgba(0,0,0,0.15));
    }
    
    .travel-theme .link-card:hover .arrow-icon {
      opacity: 1;
      transform: translateX(5px);
    }
    

    
    @media (max-width: 768px) {
      .travel-theme .bio-link-layout {
        padding: 1.5rem 1rem;
      }
      
      .travel-theme .bio-link-title {
        font-size: 1.75rem;
      }
    }
  `,colorPresets:[{name:"Ocean Depths",background:{type:"image",color:"#FF6B35",gradient:"linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)",image:"https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=800&fit=crop"},buttonColor:"#FF6B35",buttonTextColor:"#ffffff",textColor:"#ffffff"},{name:"Sunset Horizon",background:{type:"image",color:"#0284C7",gradient:"linear-gradient(135deg, #f97316 0%, #ea580c 50%, #dc2626 100%)",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop"},buttonColor:"#0284C7",buttonTextColor:"#ffffff",textColor:"#ffffff"},{name:"Forest Trail",background:{type:"image",color:"#35AC69",gradient:"linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%)",image:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop"},buttonColor:"#35AC69",buttonTextColor:"#ffffff",textColor:"#ffffff"},{name:"Desert Dunes",background:{type:"image",color:"#EF476F",gradient:"linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",image:"https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1200&h=800&fit=crop"},buttonColor:"#EF476F",buttonTextColor:"#ffffff",textColor:"#ffffff"},{name:"Arctic Aurora",background:{type:"image",color:"#8D4D47",gradient:"linear-gradient(135deg, #a78bfa 0%, #8b5cf6 50%, #7c3aed 100%)",image:"https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&h=800&fit=crop"},buttonColor:"#8D4D47",buttonTextColor:"#ffffff",textColor:"#ffffff"}],font:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',defaultPreset:0,renderProfile:n=>{const{data:s,textColor:c,buttonColor:m,buttonTextColor:p,isPublic:a}=n,r=!a,{header:t}=s.config,i=t.name||(t.name!==null&&t.name!==""&&r?B.name:null),l=t.tagline||(t.tagline!==null&&t.tagline!==""&&r?B.tagline:null);t.email||t.email!==null&&t.email!==""&&r&&B.email,t.phone||t.phone!==null&&t.phone!==""&&r&&B.phone;const d=t.description||(t.description!==null&&t.description!==""&&r?B.description:null);return e.createElement("div",{className:"bio-link-header"},e.createElement("div",{className:"bio-link-profile-container"},t.profile_image?e.createElement("img",{src:F(t.profile_image),alt:i,className:"bio-link-profile"}):e.createElement("div",{className:"bio-link-profile",style:{background:"rgba(255,255,255,0.2)",color:c,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem",fontWeight:"bold",backdropFilter:"blur(10px)",borderRadius:"50%",overflow:"hidden"}},i.charAt(0))),e.createElement("h1",{className:"bio-link-title"},i),l&&e.createElement("div",{className:"bio-link-tagline"},l),(t.location||t.countries)&&e.createElement("div",{className:"travel-stats"},t.location&&e.createElement("div",{className:"stat-item"},e.createElement("div",{className:"stat-label"},o("Location")),e.createElement("div",{className:"stat-value"},t.location)),t.countries&&e.createElement("div",{className:"stat-item"},e.createElement("div",{className:"stat-label"},o("Countries")),e.createElement("div",{className:"stat-value"},t.countries))),d&&e.createElement("div",{className:"bio-link-description",style:{color:c}},d))},renderSocial:n=>{const{data:s,isPublic:c,textColor:m,buttonColor:p,buttonTextColor:a}=n,{social:r}=s.config,t=r!=null&&r.items&&r.items.length>0?r.items:B.social;return t.length?e.createElement("div",{className:"social-icons"},t.map((i,l)=>i.platform&&e.createElement("a",{key:l,href:i.url||"#",target:"_blank",rel:"noopener noreferrer",className:"social-icon"},e.createElement(k,{platform:i.platform})))):null},renderLinks:n=>{const{data:s,isPublic:c,buttonColor:m,textColor:p,buttonTextColor:a}=n,{links:r}=s.config,t=r&&r.length>0?r:B.links;return e.createElement(e.Fragment,null,t&&t.length>0&&e.createElement("div",{style:{marginBottom:"1.5rem",textAlign:"center"}},e.createElement("h2",{style:{fontSize:"1.5rem",fontWeight:"700",color:p}},o("My Links"))),t&&t.map((i,l)=>e.createElement("a",{key:l,href:i.url||"#",target:"_blank",rel:"noopener noreferrer",className:"enhanced-card link-card",style:{textDecoration:"none",color:n.buttonTextColor,display:"flex",alignItems:"center",gap:"1rem",padding:"1.5rem","--button-color":n.buttonColor,"--button-text-color":n.buttonTextColor}},e.createElement("div",{style:{width:"50px",height:"50px",borderRadius:"12px",background:i.icon?"transparent":`${m}20`,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",flexShrink:0}},i.icon?e.createElement("img",{src:i.icon,alt:i.text||"Link",style:{width:"100%",height:"100%",objectFit:"cover"}}):e.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:n.buttonTextColor||"#ffffff",strokeWidth:"2"},e.createElement("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),e.createElement("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}))),e.createElement("div",{style:{flex:1}},e.createElement("h3",{style:{fontSize:"1.125rem",fontWeight:"600",margin:0,marginBottom:"0.25rem"}},i.text||"Untitled"),i.description&&e.createElement("p",{style:{margin:0,fontSize:"0.875rem",lineHeight:1.4}},i.description)),e.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:n.buttonTextColor||"#ffffff",strokeWidth:"2",style:{transition:"all 0.3s ease",transform:"translateX(0px)"},className:"arrow-icon"},e.createElement("path",{d:"M5 12h14"}),e.createElement("path",{d:"m12 5 7 7-7 7"})))))},renderContainer:n=>{var i,l;const{data:s,textColor:c,buttonColor:m,font:p}=n,{background:a}=s.config,r="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=800&fit=crop";let t={};return(a==null?void 0:a.type)==="image"?t={backgroundImage:`url(${a.image||r})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}:(a==null?void 0:a.type)==="gradient"&&a.gradient?t={background:a.gradient,backgroundImage:"none"}:(a==null?void 0:a.type)==="color"&&a.color?t={backgroundColor:a.color,backgroundImage:"none"}:t={backgroundImage:`url(${r})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},e.createElement("div",{className:"travel-theme",style:{color:c,fontFamily:p||"Inter, sans-serif","--button-color":m,"--text-color":c,...t}},e.createElement("div",{className:"bio-link-layout"},O.renderProfile&&O.renderProfile(n),O.renderLinks&&O.renderLinks(n),O.renderSocial&&O.renderSocial(n),((i=s.config.copyright)==null?void 0:i.enabled)!==!1&&e.createElement("div",{style:{textAlign:"center",marginTop:"2rem",padding:"1rem",fontSize:"0.875rem",background:"rgba(255,255,255,0.1)",borderRadius:"12px",backdropFilter:"blur(10px)",border:"1px solid rgba(255,255,255,0.2)"}},((l=s.config.copyright)==null?void 0:l.text)||`© ${new Date().getFullYear()} ${s.config.header.name||B.name}. All rights reserved.`)))}},M={name:o("Chef Marco"),tagline:o("Culinary Artist & Food Blogger"),description:o("Passionate about creating delicious experiences. Sharing recipes, restaurant reviews, and culinary adventures."),links:[{text:"Recipe Collection",url:"#",description:o("Try my recipes"),icon:""},{text:"Restaurant Reviews",url:"#",description:o("Best dining spots"),icon:""},{text:"Cooking Classes",url:"#",description:o("Learn to cook"),icon:""}],social:[{platform:"instagram",url:"#",icon:""},{platform:"youtube",url:"#",icon:""},{platform:"pinterest",url:"#",icon:""}]},J={name:"Food",layout:"masonry",buttonStyle:"soft",socialPosition:"bottom",profileStyle:"circle",profileFields:[{name:"name",label:o("Name"),type:"text",placeholder:o("Enter your name"),defaultValue:M.name,required:!0,section:o("Personal Details"),cols:1},{name:"tagline",label:o("Tagline"),type:"text",placeholder:o("Enter your food tagline (e.g. Chef, Food Blogger)"),defaultValue:M.tagline,required:!1,section:o("Personal Details"),cols:1},{name:"profile_image",label:o("Profile Image"),type:"image",placeholder:o("Upload your profile image"),required:!1,section:o("Personal Details"),cols:2},{name:"specialty",label:o("Specialty"),type:"text",placeholder:o("Italian Cuisine, Pastry, Vegan Cooking (separate with commas)"),required:!1,section:o("Culinary Details"),cols:1},{name:"experience",label:o("Experience"),type:"text",placeholder:o("Enter your years of experience"),required:!1,section:o("Culinary Details"),cols:1},{name:"description",label:o("Bio"),type:"textarea",placeholder:o("Tell people about your culinary journey"),defaultValue:M.description,required:!1,section:o("Culinary Details"),cols:2,rows:3}],customCSS:`
    /* Food Theme - Delicious & Appetizing */
    .bio-link-container.food-theme {
      position: relative;
      font-family: 'Lato', 'Open Sans', sans-serif;
      overflow: hidden;
      border-radius: 16px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      background-color: #FFFFFF;
      min-height: 100vh;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    /* Background overlay for readability */
    .bio-link-container.food-theme::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 1;
    }

    /* Subtle food pattern overlay */
    .food-theme::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      opacity: 0.5;
      z-index: 0;
    }

    /* Decorative elements */
    .food-theme .food-icon {
      position: absolute;
      opacity: 0.08;
      z-index: 1;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    }

    .food-theme .food-icon-1 {
      top: 10%;
      right: 10%;
      width: 40px;
      height: 40px;
      animation: float 8s infinite ease-in-out;
    }

    .food-theme .food-icon-2 {
      bottom: 15%;
      left: 10%;
      width: 50px;
      height: 50px;
      animation: float 10s infinite ease-in-out reverse;
    }

    .food-theme .food-icon-3 {
      top: 40%;
      left: 5%;
      width: 35px;
      height: 35px;
      animation: float 9s infinite ease-in-out;
      animation-delay: 1s;
    }

    .food-theme .food-icon-4 {
      bottom: 30%;
      right: 8%;
      width: 45px;
      height: 45px;
      animation: float 11s infinite ease-in-out reverse;
      animation-delay: 2s;
    }

    /* Header styling */
    .food-theme .bio-link-header {
      position: relative;
      padding: 3rem 2rem 2rem;
      text-align: center;
      z-index: 3;
      background: transparent;
      backdrop-filter: none;
      border-bottom: none;
    }

    /* Profile image styling */
    .food-theme .bio-link-profile {
      width: 130px !important;
      height: 130px !important;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto 1.5rem;
      position: relative;
      z-index: 2;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }



    /* Name styling */
    .food-theme .bio-link-title {
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 0.5rem;
      color: var(--text-color, #FFFFFF);
      position: relative;
      display: inline-block;
      letter-spacing: -0.01em;
    }



    /* Tagline styling */
    .food-theme .bio-link-tagline {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--text-color, #FFFFFF);
      opacity: 1;
    }

    /* Enhanced Culinary Section */
    .food-theme .enhanced-culinary-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin: 2rem auto;
      max-width: 600px;
      padding: 0 1rem;
    }

    .food-theme .culinary-card {
      background: rgba(0, 0, 0, 0.3);
      border-radius: 16px;
      padding: 1.5rem;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      position: relative;
      overflow: hidden;
      backdrop-filter: blur(10px);
      min-height: 180px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .food-theme .culinary-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: currentColor;
      opacity: 0.3;
    }

    .food-theme .culinary-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);
      background: rgba(0, 0, 0, 0.4);
    }

    .food-theme .culinary-icon {
      width: 60px;
      height: 60px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;
      transition: all 0.4s ease;
    }

    .food-theme .culinary-card:hover .culinary-icon {
      transform: scale(1.1) rotate(5deg);
    }

    .food-theme .culinary-content {
      text-align: center;
      width: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0.5rem 0;
    }

    .food-theme .culinary-label {
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: 700;
      margin-bottom: 0.75rem;
      color: #FFFFFF;
      width: 100%;
      min-height: 1.2rem;
      display: block;
      text-align: center;
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .food-theme .culinary-value {
      font-size: 1.1rem;
      font-weight: 800;
      line-height: 1.3;
      color: #FFFFFF;
      width: 100%;
      min-height: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      word-wrap: break-word;
      overflow-wrap: break-word;
    }

    /* Specialty Tags */
    .food-theme .specialty-tag {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      margin: 0.25rem;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
      border: 1px solid #ffffff;
      transition: all 0.3s ease;
    }

    .food-theme .specialty-tag:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    /* Description styling */
    .food-theme .bio-link-description {
      font-size: 1rem;
      opacity: 1;
      max-width: 85%;
      margin: 1.5rem auto 0;
      line-height: 1.7;
      position: relative;
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 12px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10px);
      color: #333333;
      font-weight: 500;
    }

    /* Quote marks for description */
    .food-theme .bio-link-description::before,
    .food-theme .bio-link-description::after {
      content: '"';
      position: absolute;
      font-size: 3rem;
      font-family: Georgia, serif;
      line-height: 1;
      opacity: 0.2;
    }

    .food-theme .bio-link-description::before {
      top: 0.5rem;
      left: 0.5rem;
    }

    .food-theme .bio-link-description::after {
      bottom: -0.5rem;
      right: 0.5rem;
    }

    /* Links container */
    .food-theme .links-container {
      padding: 2rem;
      position: relative;
      z-index: 3;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    /* Link button styling - Recipe card style */
    .food-theme .bio-link-button {
      position: relative;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 16px;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      border: 1px solid rgba(0, 0, 0, 0.05);
      height: 100%;
      backdrop-filter: blur(10px);
    }

    /* Link button hover effect */


    /* Link image */
    .food-theme .bio-link-button .link-image {
      width: 100%;
      height: 180px;
      overflow: hidden;
      position: relative;
    }

    .food-theme .bio-link-button .link-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .food-theme .bio-link-button:hover .link-image img {
      transform: scale(1.1);
    }

    /* Link content */
    .food-theme .bio-link-button .link-content {
      padding: 1.25rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      color: var(--links-text-color, #000000) !important;
    }

    .food-theme .bio-link-button .link-title {
      font-weight: 700;
      font-size: 1.1rem;
      letter-spacing: -0.01em;
      margin-bottom: 0.5rem;
      color: var(--links-text-color, #000000) !important;
    }

    .food-theme .bio-link-button .link-description {
      font-size: 0.9rem;
      line-height: 1.5;
      color: var(--links-text-color, #000000) !important;
    }

    /* Link button */
    .food-theme .bio-link-button .link-button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem;
      background: var(--button-color, currentColor);
      border-radius: 8px;
      font-size: 0.9rem;
      font-weight: 600;
      margin-top: auto;
      transition: all 0.3s ease;
      color: #FFFFFF;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1), 0 2px 6px var(--button-color, rgba(0, 0, 0, 0.1));
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }

    .food-theme .bio-link-button:hover .link-button {
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15), 0 3px 8px var(--button-color, rgba(0, 0, 0, 0.15));
    }

    /* Recipe meta info */
    .food-theme .recipe-meta {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .food-theme .recipe-stat {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.8rem;
      opacity: 0.7;
    }

    .food-theme .recipe-stat-icon {
      width: 16px;
      height: 16px;
      opacity: 0.8;
    }

    /* Social icons section */
    .food-theme .social-container {
      padding: 2rem;
      position: relative;
      z-index: 3;
      text-align: center;
      border-top: none;
      background: transparent;
      backdrop-filter: none;
    }

    .food-theme .social-title {
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      opacity: 1;
      margin-bottom: 1.25rem;
      font-weight: 700;
      color: var(--text-color, #FFFFFF);
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.9);
    }

    .food-theme .social-icons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    /* Social icon styling */
    .food-theme .social-icon {
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #FFFFFF;
      border: 1px solid rgba(0, 0, 0, 0.05);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      position: relative;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }

    /* Fix for social icons */
    .food-theme .social-icon svg {
      width: 18px;
      height: 18px;
      position: relative;
      z-index: 2;
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    /* Social icon hover effect */
    .food-theme .social-icon:hover {
      transform: translateY(-5px) rotate(8deg);
      background: var(--button-color, currentColor);
      border-color: transparent;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15), 0 4px 12px var(--button-color, rgba(0, 0, 0, 0.1));
    }

    .food-theme .social-icon:hover svg {
      transform: scale(1.2);
      color: #FFFFFF !important;
      fill: #FFFFFF !important;
    }

    .food-theme .social-icon svg {
      color: var(--button-color, #333333) !important;
      fill: var(--button-color, #333333) !important;
    }

    /* Footer */
    .food-theme .food-footer {
      padding: 1.5rem;
      text-align: center;
      font-size: 0.85rem;
      opacity: 1;
      border-top: none;
      background: transparent;
      backdrop-filter: none;
      font-weight: 600;
      color: var(--text-color, #FFFFFF);
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.9);
      position: relative;
      z-index: 3;
      margin-top: 2rem;
    }

    /* Animations */
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(5deg); }
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }

    @keyframes slideInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .food-theme .bio-link-profile {
      animation: scaleIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }

    .food-theme .bio-link-title,
    .food-theme .bio-link-tagline {
      animation: fadeIn 0.8s ease forwards;
      animation-delay: 0.2s;
    }

    .food-theme .culinary-stat {
      animation: fadeIn 0.6s ease forwards;
      animation-delay: calc(0.1s * var(--index, 0) + 0.4s);
    }

    .food-theme .bio-link-description {
      animation: fadeIn 0.8s ease forwards;
      animation-delay: 0.5s;
    }

    .food-theme .bio-link-button {
      animation: slideInUp 0.6s ease forwards;
      animation-delay: calc(0.1s * var(--index, 0) + 0.6s);
    }

    .food-theme .social-icon {
      animation: scaleIn 0.5s ease forwards;
      animation-delay: calc(0.1s * var(--index, 0) + 0.8s);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .food-theme .bio-link-profile {
        width: 110px !important;
        height: 110px !important;
      }

      .food-theme .bio-link-title {
        font-size: 1.75rem;
      }

      .food-theme .bio-link-description {
        max-width: 95%;
        padding: 1.25rem;
      }

      .food-theme .enhanced-culinary-section {
        grid-template-columns: 1fr;
        gap: 1rem;
        margin: 1.5rem auto;
        padding: 0 0.5rem;
      }

      .food-theme .culinary-card {
        padding: 1.25rem;
      }

      .food-theme .culinary-icon {
        width: 50px;
        height: 50px;
      }

      .food-theme .specialty-tag {
        font-size: 0.8rem;
        padding: 0.2rem 0.6rem;
        margin: 0.2rem;
      }

      .food-theme .links-container {
        grid-template-columns: 1fr;
        padding: 1.5rem;
      }
    }
  `,colorPresets:[{name:"Spicy Orange",background:{type:"image",color:"#C0392B",gradient:"linear-gradient(135deg, #FFFFFF, #FFF0E5)",image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=800&fit=crop"},buttonColor:"#C0392B",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Fresh Mint",background:{type:"image",color:"#F39C12",gradient:"linear-gradient(135deg, #FFFFFF, #ECFDF5)",image:"https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1200&h=800&fit=crop"},buttonColor:"#F39C12",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Berry Purple",background:{type:"image",color:"#347433",gradient:"linear-gradient(135deg, #FFFFFF, #F5F3FF)",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop"},buttonColor:"#347433",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Tomato Red",background:{type:"image",color:"#2980B9",gradient:"linear-gradient(135deg, #FFFFFF, #FEF2F2)",image:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1200&h=800&fit=crop"},buttonColor:"#2980B9",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Olive Green",background:{type:"image",color:"#E67514",gradient:"linear-gradient(135deg, #FFFFFF, #F7FEE7)",image:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&h=800&fit=crop"},buttonColor:"#E67514",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"}],font:"Lato, Open Sans, sans-serif",defaultPreset:0,renderProfile:n=>{const{data:s,textColor:c,buttonColor:m,buttonTextColor:p,isPublic:a}=n,r=!a,{header:t}=s.config,i=t.name||(t.name!==null&&t.name!==""&&r?M.name:null),l=t.tagline||(t.tagline!==null&&t.tagline!==""&&r?M.tagline:null);t.email||t.email!==null&&t.email!==""&&r&&M.email,t.phone||t.phone!==null&&t.phone!==""&&r&&M.phone;const d=t.description||(t.description!==null&&t.description!==""&&r?M.description:null);return e.createElement(e.Fragment,null,e.createElement("div",{className:"food-icon food-icon-1",style:{textDecoration:"none",color:m}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},e.createElement("path",{d:"M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"}))),e.createElement("div",{className:"food-icon food-icon-2",style:{textDecoration:"none",color:m}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},e.createElement("path",{d:"M12 3L4 9v12h16V9l-8-6zm.5 11.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75z"}))),e.createElement("div",{className:"food-icon food-icon-3",style:{textDecoration:"none",color:m}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},e.createElement("path",{d:"M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z"}))),e.createElement("div",{className:"food-icon food-icon-4",style:{textDecoration:"none",color:m}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},e.createElement("path",{d:"M2 19h20l-2 2H4l-2-2zM5 6h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zm0 4h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zm0 4h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1z"}))),t.profile_image?e.createElement("div",{className:"bio-link-profile"},e.createElement("img",{src:F(t.profile_image),alt:i,className:"w-full h-full object-cover"})):e.createElement("div",{className:"bio-link-profile flex items-center justify-center text-xl font-bold",style:{textDecoration:"none",background:m,color:c||"#FFFFFF"}},i.charAt(0)),e.createElement("h1",{className:"bio-link-title"},i),l&&e.createElement("div",{className:"bio-link-tagline"},l),(t.specialty||t.experience)&&e.createElement("div",{className:"enhanced-culinary-section"},t.specialty&&e.createElement("div",{className:"culinary-card specialty-card",style:{textDecoration:"none","--index":0}},e.createElement("div",{className:"culinary-icon",style:{backgroundColor:`${m}`,color:c}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"}))),e.createElement("div",{className:"culinary-content"},e.createElement("div",{className:"culinary-label"},o("Specialty")),e.createElement("div",{className:"culinary-value",style:{color:c}},(()=>{const g=t.specialty.split(/[,;]|\s{2,}/).filter(h=>h.trim());return g.length>1?g.map((h,b)=>e.createElement("span",{key:b,className:"specialty-tag",style:{backgroundColor:`${m}15`,color:c}},h.trim())):t.specialty})()))),t.experience&&e.createElement("div",{className:"culinary-card experience-card",style:{textDecoration:"none","--index":1}},e.createElement("div",{className:"culinary-icon",style:{backgroundColor:`${m}`,color:c}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("circle",{cx:"12",cy:"12",r:"10"}),e.createElement("polyline",{points:"12 6 12 12 16 14"}))),e.createElement("div",{className:"culinary-content"},e.createElement("div",{className:"culinary-label"},o("Experience")),e.createElement("div",{className:"culinary-value",style:{color:c}},t.experience)))),d&&e.createElement("p",{className:"bio-link-description"},d))},renderSocial:n=>{var i,l;const{data:s,isPublic:c,textColor:m,buttonColor:p,buttonTextColor:a}=n,{social:r}=s.config,t=r!=null&&r.items&&r.items.length>0?r.items:M.social;return!(r!=null&&r.display)||!t.length?null:e.createElement("div",{className:"social-container"},e.createElement("div",{className:"social-title"},o("Connect & Follow")),e.createElement("div",{className:"social-icons"},t.map((d,g)=>d.platform&&e.createElement("a",{key:g,href:d.url||"#",target:"_blank",rel:"noopener noreferrer",className:"social-icon",style:{textDecoration:"none","--index":g,color:p}},e.createElement(k,{platform:d.platform,color:n.buttonTextColor||"#FFFFFF"})))),((i=s.config.copyright)==null?void 0:i.enabled)!==!1&&e.createElement("div",{className:"food-footer"},((l=s.config.copyright)==null?void 0:l.text)||`© ${new Date().getFullYear()} ${s.config.displayName}. All rights reserved.`))},renderLinks:n=>{const{data:s,isPublic:c,buttonColor:m,textColor:p,buttonTextColor:a}=n,{links:r}=s.config,t=r&&r.length>0?r:M.links,i=["https://picsum.photos/400/300?random=1","https://picsum.photos/400/300?random=2","https://picsum.photos/400/300?random=3","https://picsum.photos/400/300?random=4","https://picsum.photos/400/300?random=5","https://picsum.photos/400/300?random=6","https://picsum.photos/400/300?random=7","https://picsum.photos/400/300?random=8"];return!t||!t.length?e.createElement("div",{className:"text-center p-4 opacity-70 text-sm rounded-lg bg-white/10 backdrop-blur-md mx-auto my-4",style:{textDecoration:"none",maxWidth:"600px"}},o("No recipes or links added yet")):e.createElement("div",{className:"links-container"},t.map((l,d)=>{const g=l.icon||i[d%i.length];return e.createElement("div",{key:d,className:"bio-link-button",style:{textDecoration:"none","--index":d,"--button-color":n.buttonColor}},e.createElement("div",{className:"link-image"},e.createElement("img",{src:g,alt:l.text||"Delicious Food",onError:h=>{h.target.src=i[0]}})),e.createElement("div",{className:"link-content"},e.createElement("div",{className:"link-title"},l.text||o("Delicious Recipe")),l.description&&e.createElement("div",{className:"link-description"},l.description),e.createElement("div",{className:"recipe-meta"}),e.createElement("a",{key:d,href:l.url||"#",target:"_blank",rel:"noopener noreferrer",className:"link-button",style:{textDecoration:"none",background:m,"--button-color":m}},"View Recipe")))}))},renderContainer:n=>{const{data:s,textColor:c,buttonColor:m,font:p}=n,{background:a}=s.config,r="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=800&fit=crop";let t={};return(a==null?void 0:a.type)==="image"?t={backgroundImage:`url(${a.image||r})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}:(a==null?void 0:a.type)==="gradient"&&a.gradient?t={background:a.gradient,backgroundImage:"none"}:(a==null?void 0:a.type)==="color"&&a.color?t={backgroundColor:a.color,backgroundImage:"none"}:t={backgroundImage:`url(${r})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},e.createElement("div",{className:"bio-link-container food-theme",style:{color:c,fontFamily:p,"--button-color":m,"--text-color":c,"--links-text-color":"#000000",...t}},e.createElement("div",{className:"bio-link-header"},J.renderProfile&&J.renderProfile(n)),J.renderLinks&&J.renderLinks(n),J.renderSocial&&J.renderSocial(n))}},j={name:o("ShopSmart Store"),tagline:o("Quality Products, Great Prices"),description:o("Your one-stop shop for premium products at unbeatable prices. Fast shipping and excellent customer service."),links:[{text:"Shop Now",url:"#",description:o("Browse our catalog"),icon:""},{text:"New Arrivals",url:"#",description:o("Latest products"),icon:""},{text:"Customer Support",url:"#",description:o("We are here to help"),icon:""}],social:[{platform:"facebook",url:"#",icon:""},{platform:"instagram",url:"#",icon:""},{platform:"twitter",url:"#",icon:""}]},Q={name:"Ecommerce",layout:"standard",buttonStyle:"soft",socialPosition:"top",profileStyle:"square",profileFields:[{name:"name",label:o("Store Name"),type:"text",placeholder:o("Enter your store name"),defaultValue:j.name,required:!0,section:o("Store Details"),cols:1},{name:"tagline",label:o("Tagline"),type:"text",placeholder:o("Enter your store tagline"),defaultValue:j.tagline,required:!1,section:o("Store Details"),cols:1},{name:"profile_image",label:o("Store Logo"),type:"image",placeholder:o("Upload your store logo"),required:!1,section:o("Store Details"),cols:2},{name:"categories",label:o("Categories"),type:"text",placeholder:o("Enter your main product categories"),required:!1,section:o("Business Details"),cols:1},{name:"shipping",label:o("Shipping Info"),type:"text",placeholder:o("Enter shipping information"),required:!1,section:o("Business Details"),cols:1},{name:"description",label:o("Store Description"),type:"textarea",placeholder:o("Tell people about your store and products"),defaultValue:j.description,required:!1,section:o("Business Details"),cols:2,rows:3}],customCSS:`
    /* Ecommerce Theme - Modern & Professional Shop */
    .bio-link-container.ecommerce-theme {
      position: relative;
      font-family: 'Inter', 'Roboto', sans-serif;
      overflow: hidden;
      border-radius: 12px;
      border: 2px solid #F3F3F3;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      background-color: #FFFFFF;
      min-height: 100vh;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    /* Background overlay for readability */
    .bio-link-container.ecommerce-theme::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 1;
    }

    /* Subtle pattern overlay */
    .ecommerce-theme::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      opacity: 0.5;
      z-index: 0;
    }

    /* Decorative elements */
    .ecommerce-theme .ecommerce-icon {
      position: absolute;
      opacity: 0.08;
      z-index: 1;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    }

    .ecommerce-theme .cart-icon {
      top: 10%;
      right: 10%;
      width: 40px;
      height: 40px;
      animation: float 8s infinite ease-in-out;
    }

    .ecommerce-theme .tag-icon {
      bottom: 15%;
      left: 10%;
      width: 35px;
      height: 35px;
      animation: float 10s infinite ease-in-out reverse;
    }

    .ecommerce-theme .shop-icon {
      top: 40%;
      left: 5%;
      width: 30px;
      height: 30px;
      animation: float 9s infinite ease-in-out;
      animation-delay: 1s;
    }

    .ecommerce-theme .delivery-icon {
      bottom: 30%;
      right: 8%;
      width: 35px;
      height: 35px;
      animation: float 11s infinite ease-in-out reverse;
      animation-delay: 2s;
    }

    /* Header styling */
    .ecommerce-theme .bio-link-header {
      position: relative;
      padding: 2rem 1.5rem;
      text-align: center;
      z-index: 2;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    }

    /* Transparent header when background image is set */
    .ecommerce-theme.has-bg-image .bio-link-header {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(15px);
    }

    /* Store banner */
    .ecommerce-theme .store-banner {
      position: relative;
      height: 180px;
      margin: -2rem -1.5rem 1.5rem;
      background: linear-gradient(45deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.05) 100%);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ecommerce-theme .store-banner::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 60px;
      background: linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
    }

    /* Profile image styling - Store logo */
    .ecommerce-theme .bio-link-profile {
      width: 100px !important;
      height: 100px !important;
      border-radius: 12px;
      overflow: hidden;
      margin: 0 auto 1.25rem;
      position: relative;
      z-index: 2;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      background: #FFFFFF;
    }


    /* Store name styling */
    .ecommerce-theme .bio-link-title {
      font-size: 1.75rem;
      font-weight: 800;
      margin-bottom: 0.5rem;
      position: relative;
      display: inline-block;
      letter-spacing: -0.01em;
      color: var(--text-color, #FFFFFF);
    }

    /* Tagline styling */
    .ecommerce-theme .bio-link-tagline {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 1rem;
      opacity: 1;
      color: var(--text-color, #FFFFFF);
    }

    /* Store info sections */
    .ecommerce-theme .store-info-sections {
      position: relative;
      z-index: 2;
    }

    .ecommerce-theme .categories-section,
    .ecommerce-theme .shipping-section {
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    }

    .ecommerce-theme .categories-section:hover,
    .ecommerce-theme .shipping-section:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    }

    .ecommerce-theme .categories-list {
      max-height: none;
      overflow: visible;
    }

    .ecommerce-theme .categories-list span {
      transition: all 0.2s ease;
      cursor: default;
    }

    .ecommerce-theme .categories-list span:hover {
      transform: scale(1.05);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    /* Description styling */
    .ecommerce-theme .bio-link-description {
      font-size: 0.95rem;
      opacity: 0.85;
      margin: 0 auto;
      line-height: 1.6;
      position: relative;
      padding: 1.25rem;
      background: rgba(0, 0, 0, 0.02);
      border-radius: 8px;
      text-align:start;
    }

    /* Social icons section */
    .ecommerce-theme .social-container {
      padding: 1.5rem 1rem;
      position: relative;
      z-index: 2;
      text-align: center;
      margin-top: 1rem;
    }

    .ecommerce-theme .social-icons {
      display: flex;
      justify-content: center;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    /* Social icon styling */
    .ecommerce-theme .social-icon {
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      background: var(--button-color, currentColor);
      border: 1px solid rgba(0, 0, 0, 0.05);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      position: relative;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    }

    /* Fix for social icons */
    .ecommerce-theme .social-icon svg {
      width: 16px;
      height: 16px;
      position: relative;
      z-index: 2;
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      color: #FFFFFF !important;
    }

    /* Social icon hover effect */
    .ecommerce-theme .social-icon:hover {
      transform: translateY(-5px);
      background: var(--button-color, currentColor);
      border-color: transparent;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15), 0 4px 12px var(--button-color, rgba(0, 0, 0, 0.1));
    }

    .ecommerce-theme .social-icon:hover svg {
      color: #FFFFFF !important;
    }

    .ecommerce-theme .social-icon:hover svg {
      transform: scale(1.2);
    }

    /* Links container */
    .ecommerce-theme .links-container {
      padding: 0.5rem 1.5rem 2.5rem;
      position: relative;
      z-index: 2;
      max-width: 650px;
      margin: 0 auto;
    }

    /* Product categories */
    .ecommerce-theme .product-categories {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;
      overflow-x: auto;
      padding: 0.5rem 0;
      scrollbar-width: none;
      -ms-overflow-style: none;
      justify-content: center;
    }

    .ecommerce-theme .product-categories::-webkit-scrollbar {
      display: none;
    }

    .ecommerce-theme .category-tab {
      padding: 0.75rem 1.25rem;
      background: rgba(0, 0, 0, 0.04);
      border-radius: 25px;
      font-size: 0.85rem;
      font-weight: 600;
      white-space: nowrap;
      transition: all 0.3s ease;
      cursor: pointer;
      display: flex;
      align-items: center;
      min-width: fit-content;
    }

    .ecommerce-theme .category-tab.active {
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .ecommerce-theme .category-tab:hover:not(.active) {
      background: rgba(0, 0, 0, 0.06);
      transform: translateY(-2px);
    }

    /* Grid and List view styles */

    .ecommerce-theme .products-list {
      margin-bottom: 1.5rem;
    }

    .ecommerce-theme .bio-link-button.grid-view {
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    .ecommerce-theme .bio-link-button.list-view {
      display: flex;
      flex-direction: row;
      text-align: left;
    }

    /* Link button styling - Product card style */
    .ecommerce-theme .bio-link-button {
      position: relative;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 12px;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      overflow: hidden;
      display: flex;
      margin-bottom: 1.25rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
    }

    /* Transparent link buttons when background image is set */
    .ecommerce-theme.has-bg-image .bio-link-button {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    /* Link button hover effect */


    /* Product image */
    .ecommerce-theme .bio-link-button .product-image {
      width: 100px;
      height: 100px;
      overflow: hidden;
      position: relative;
      flex-shrink: 0;
    }

    .ecommerce-theme .bio-link-button .product-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }



    /* Product content */
    .ecommerce-theme .bio-link-button .product-content {
      padding: 1rem;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .ecommerce-theme .bio-link-button .product-title {
      font-weight: 700;
      font-size: 1rem;
      letter-spacing: -0.01em;
      margin-bottom: 0.25rem;
      color: var(--text-color, #333333);
    }

    .ecommerce-theme .bio-link-button .product-description {
      font-size: 0.85rem;
      opacity: 1;
      margin-bottom: 0.8rem;
      line-height: 1.4;
      color: var(--text-color, #666666);
      font-weight: 500;
    }

    /* Product price */
    .ecommerce-theme .bio-link-button .product-price {
      font-weight: 700;
      font-size: 1.1rem;
      margin-top: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .ecommerce-theme .bio-link-button .price-tag {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
    }

    .ecommerce-theme .bio-link-button .original-price {
      font-size: 0.85rem;
      text-decoration: line-through;
      opacity: 0.6;
      font-weight: 400;
    }

    /* Shop now button */
    .ecommerce-theme .bio-link-button .shop-now {
      padding: 0.5rem 0.75rem;
      border-radius: 6px;
      font-size: 0.85rem;
      font-weight: 600;
      transition: all 0.3s ease;
      background: var(--button-color, currentColor);
      color: #FFFFFF;
    }



    /* Product badge */
    .ecommerce-theme .bio-link-button .product-badge {
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;
      padding: 0.25rem 0.5rem;
      background: rgba(255, 59, 48, 0.9);
      border-radius: 4px;
      font-size: 0.7rem;
      font-weight: 600;
      z-index: 2;
    }

    /* Footer */
    .ecommerce-theme .ecommerce-footer {
      padding: 1.5rem 0 0;
      text-align: center;
      font-size: 0.85rem;
      opacity: 1;
      border-top: none;
      font-weight: 600;
      color: var(--text-color, #FFFFFF);
      position: relative;
      z-index: 3;
      border-radius: 12px;
    }

    /* Animations */
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }

    @keyframes slideInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .ecommerce-theme .bio-link-profile {
      animation: scaleIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }

    .ecommerce-theme .bio-link-title,
    .ecommerce-theme .bio-link-tagline {
      animation: fadeIn 0.8s ease forwards;
      animation-delay: 0.2s;
    }

    .ecommerce-theme .categories-section,
    .ecommerce-theme .shipping-section {
      animation: fadeIn 0.8s ease forwards;
      animation-delay: 0.4s;
    }

    .ecommerce-theme .categories-list span {
      animation: scaleIn 0.5s ease forwards;
      animation-delay: calc(0.1s * var(--index, 0) + 0.6s);
    }

    .ecommerce-theme .bio-link-description {
      animation: fadeIn 0.8s ease forwards;
      animation-delay: 0.5s;
    }

    .ecommerce-theme .category-tab {
      animation: fadeIn 0.6s ease forwards;
      animation-delay: calc(0.1s * var(--index, 0) + 0.6s);
    }

    .ecommerce-theme .bio-link-button {
      animation: slideInUp 0.6s ease forwards;
      animation-delay: calc(0.1s * var(--index, 0) + 0.7s);
    }

    .ecommerce-theme .social-icon {
      animation: scaleIn 0.5s ease forwards;
      animation-delay: calc(0.1s * var(--index, 0) + 0.3s);
    }

    /* Responsive adjustments */
    @media (max-width: 640px) {
      .ecommerce-theme .bio-link-profile {
        width: 80px !important;
        height: 80px !important;
      }

      .ecommerce-theme .bio-link-title {
        font-size: 1.5rem;
      }

      .ecommerce-theme .bio-link-description {
        max-width: 95%;
        padding: 1rem;
      }

      .ecommerce-theme .bio-link-button {
        flex-direction: column;
      }

      .ecommerce-theme .bio-link-button .product-image {
        width: 100%;
        height: 150px;
      }

      .ecommerce-theme .store-banner {
        height: 120px;
      }
    }
  `,colorPresets:[{name:"Shop Blue",background:{type:"image",color:"#FFC107",gradient:"linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",image:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop"},buttonColor:"#FFC107",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Commerce Green",background:{type:"image",color:"#DB5941",gradient:"linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",image:"https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop"},buttonColor:"#DB5941",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Brand Orange",background:{type:"image",color:"#9929EA",gradient:"linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)",image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop"},buttonColor:"#9929EA",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Premium Purple",background:{type:"image",color:"#4D55CC",gradient:"linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)",image:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=800&fit=crop"},buttonColor:"#4D55CC",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Luxury Gold",background:{type:"image",color:"#D76C82",gradient:"linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",image:"https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop"},buttonColor:"#D76C82",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"}],font:"Inter, Roboto, sans-serif",defaultPreset:0,renderProfile:n=>{const{data:s,textColor:c,buttonColor:m,buttonTextColor:p,isPublic:a}=n,r=!a,{header:t}=s.config,i=t.name||(t.name!==null&&t.name!==""&&r?j.name:null),l=t.tagline||(t.tagline!==null&&t.tagline!==""&&r?j.tagline:null);t.email||t.email!==null&&t.email!==""&&r&&j.email,t.phone||t.phone!==null&&t.phone!==""&&r&&j.phone;const d=t.description||(t.description!==null&&t.description!==""&&r?j.description:null);return e.createElement(e.Fragment,null,e.createElement("div",{className:"ecommerce-icon cart-icon",style:{textDecoration:"none",color:m}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},e.createElement("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}))),e.createElement("div",{className:"ecommerce-icon tag-icon",style:{textDecoration:"none",color:m}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},e.createElement("path",{d:"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"}))),e.createElement("div",{className:"ecommerce-icon shop-icon",style:{textDecoration:"none",color:m}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},e.createElement("path",{d:"M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"}))),e.createElement("div",{className:"ecommerce-icon delivery-icon",style:{textDecoration:"none",color:m}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},e.createElement("path",{d:"M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}))),t.profile_image?e.createElement("div",{className:"bio-link-profile"},e.createElement("img",{src:F(t.profile_image),alt:i,className:"w-full h-full object-cover"})):e.createElement("div",{className:"bio-link-profile flex items-center justify-center text-xl font-bold",style:{textDecoration:"none",background:m,color:n.buttonTextColor}},i.charAt(0)),e.createElement("h1",{className:"bio-link-title"},i),l&&e.createElement("div",{className:"bio-link-tagline"},l),(t.categories||t.shipping)&&e.createElement("div",{className:"store-info-sections",style:{margin:"1.5rem 0"}},t.categories&&e.createElement("div",{className:"categories-section",style:{marginBottom:t.shipping?"1.5rem":"0",padding:"1rem",background:"rgba(0, 0, 0, 0.02)",borderRadius:"12px",border:"1px solid rgba(0, 0, 0, 0.05)"}},e.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.75rem",fontSize:"0.85rem",fontWeight:"700",color:"#FFFFFF",opacity:1}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",style:{width:"16px",height:"16px",marginRight:"0.5rem"}},e.createElement("path",{d:"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"})),"Categories"),e.createElement("div",{className:"categories-list",style:{display:"flex",flexWrap:"wrap",gap:"10px"}},t.categories.split(",").map(g=>g.trim()).filter(g=>g.length>0).map((g,h)=>e.createElement("span",{key:h,style:{padding:"0.4rem 0.8rem",background:m,color:c,borderRadius:"20px",fontSize:"0.8rem",fontWeight:"600",border:`1px solid ${m}25`,whiteSpace:"nowrap"}},g)))),t.shipping&&e.createElement("div",{className:"shipping-section",style:{padding:"1rem",background:"rgba(0, 0, 0, 0.02)",borderRadius:"12px",border:"1px solid rgba(0, 0, 0, 0.05)"}},e.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.75rem",fontSize:"0.85rem",fontWeight:"700",color:"#FFFFFF",opacity:1}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",style:{width:"16px",height:"16px",marginRight:"0.5rem"}},e.createElement("path",{d:"M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"})),o("Shipping & Delivery")),e.createElement("div",{style:{fontSize:"0.9rem",lineHeight:"1.5",color:"#FFFFFF",textAlign:"start"}},t.shipping))),d&&e.createElement("p",{className:"bio-link-description",style:{background:"rgba(255, 255, 255, 0.95)",color:"#333333",fontWeight:"500"}},d))},renderSocial:n=>{const{data:s,isPublic:c,textColor:m,buttonColor:p,buttonTextColor:a}=n,{social:r}=s.config,t=r!=null&&r.items&&r.items.length>0?r.items:j.social;return!(r!=null&&r.display)||!t.length?null:e.createElement("div",{className:"social-container"},e.createElement("div",{className:"social-icons"},t.map((i,l)=>i.platform&&e.createElement("a",{key:l,href:i.url||"#",target:"_blank",rel:"noopener noreferrer",className:"social-icon",style:{textDecoration:"none","--index":l,color:p}},e.createElement(k,{platform:i.platform,color:n.buttonTextColor||"#FFFFFF"})))))},renderLinks:n=>{const{data:s,isPublic:c,buttonColor:m,textColor:p,buttonTextColor:a}=n,{links:r}=s.config,t=r&&r.length>0?r:j.links;if(!t||!t.length)return e.createElement("div",{className:"text-center p-4 opacity-70 text-sm rounded-lg bg-white/10 backdrop-blur-md mx-auto my-4",style:{textDecoration:"none",maxWidth:"600px",color:"#FFFFFF",textShadow:"0 1px 3px rgba(0, 0, 0, 0.8)"}},"No products added yet");const i=()=>{var u,x;const[l,d]=e.useState(0),[g,h]=e.useState("grid"),f=l===0?r:l===1?r.slice(0,3):l===2?r.slice(-2):l===3?r.filter((y,v)=>v%2===0):r;return e.createElement("div",{className:"links-container"},e.createElement("div",{className:"view-toggle",style:{display:"flex",justifyContent:"center",gap:"0.5rem",marginBottom:"1rem"}},e.createElement("button",{onClick:()=>h("grid"),style:{padding:"0.5rem 0.8rem",borderRadius:"6px",border:"none",background:g==="grid"?m:"rgba(255, 255, 255, 0.2)",color:g==="grid"?a:"#FFFFFF",cursor:"pointer",fontSize:"0.85rem"}},"⊞ Grid"),e.createElement("button",{onClick:()=>h("list"),style:{padding:"0.5rem",borderRadius:"6px",border:"none",background:g==="list"?m:"rgba(255, 255, 255, 0.2)",color:g==="list"?a:"#FFFFFF",cursor:"pointer",fontSize:"0.85rem"}},"☰ List")),e.createElement("div",{className:`products-${g}`,style:{display:g==="grid"?"grid":"flex",gridTemplateColumns:g==="grid"?"repeat(auto-fit, minmax(280px, 1fr))":"none",flexDirection:g==="list"?"column":"row",gap:"1rem"}},f.map((y,v)=>e.createElement("div",{key:v,className:`bio-link-button ${g}-view`,style:{textDecoration:"none","--index":v,flexDirection:g==="grid"?"column":"row",minHeight:g==="grid"?"200px":"auto"}},e.createElement("div",{className:"product-image",style:{width:g==="grid"?"100%":"120px",height:g==="grid"?"150px":"125px"}},e.createElement("img",{src:y.icon||["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop","https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop","https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop","https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop","https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop","https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop","https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop"][v%8],alt:y.text||"Product",style:{width:"100%",height:"100%",objectFit:"cover"}})),e.createElement("div",{className:"product-content",style:{textAlign:g==="grid"?"center":"left"}},e.createElement("div",{className:"product-title",style:{color:"#FFFFFF",fontWeight:"700",textShadow:"0 2px 8px rgba(0, 0, 0, 0.8)"}},y.text||"Untitled Product"),y.description&&e.createElement("div",{className:"product-description",style:{color:"#FFFFFF",textShadow:"0 1px 4px rgba(0, 0, 0, 0.8)",opacity:"0.9"}},y.description),e.createElement("div",{className:"product-price",style:{justifyContent:g==="grid"?"center":"space-between"}},e.createElement("a",{key:v,href:y.url||"#",target:"_blank",rel:"noopener noreferrer",className:"shop-now",style:{textDecoration:"none",background:m,color:a}},o("Shop Now"))))))),((u=s.config.copyright)==null?void 0:u.enabled)!==!1&&e.createElement("div",{className:"ecommerce-footer"},((x=s.config.copyright)==null?void 0:x.text)||`© ${new Date().getFullYear()} ${s.config.displayName}. All rights reserved.`))};return e.createElement(i)},renderContainer:n=>{const{data:s,textColor:c,buttonColor:m,font:p}=n,{background:a}=s.config,r=(a==null?void 0:a.type)==="image"&&a.image,t="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop";let i={};return(a==null?void 0:a.type)==="image"?i={backgroundImage:`url(${a.image||t})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}:(a==null?void 0:a.type)==="gradient"&&a.gradient?i={background:a.gradient,backgroundImage:"none"}:(a==null?void 0:a.type)==="color"&&a.color?i={backgroundColor:a.color,backgroundImage:"none"}:i={backgroundImage:`url(${t})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},e.createElement("div",{className:`bio-link-container ecommerce-theme${r?" has-bg-image":""}`,style:{color:c,fontFamily:p||"Inter, Roboto, sans-serif","--button-color":m,"--button-text-color":n.buttonTextColor,"--text-color":c,...i}},e.createElement("div",{className:"bio-link-header"},Q.renderProfile&&Q.renderProfile(n)),Q.renderSocial&&Q.renderSocial(n),Q.renderLinks&&Q.renderLinks(n))}},P={name:o("Sophie Writer"),tagline:o("Content Creator & Storyteller"),description:o("Sharing stories that matter and creating content that inspires. Join me on this creative journey."),links:[{text:"Latest Posts",url:"#",description:o("Read my blog"),icon:""},{text:"Newsletter",url:"#",description:o("Weekly updates"),icon:""},{text:"Writing Services",url:"#",description:o("Hire me to write"),icon:""}],social:[{platform:"medium",url:"#",icon:""},{platform:"twitter",url:"#",icon:""},{platform:"linkedin",url:"#",icon:""}]},Z={name:o("Blogger"),layout:"magazine",buttonStyle:"underline",socialPosition:"inline",profileStyle:"editorial",profileFields:[{name:"name",label:o("Name"),type:"text",placeholder:o("Enter your name"),defaultValue:P.name,required:!0,section:o("Personal Details"),cols:1},{name:"tagline",label:o("Tagline"),type:"text",placeholder:o("Enter your blog tagline"),defaultValue:P.tagline,required:!1,section:o("Personal Details"),cols:1},{name:"profile_image",label:o("Profile Image"),type:"image",placeholder:o("Upload your profile image"),required:!1,section:o("Personal Details"),cols:2},{name:"topics",label:o("Blog Topics"),type:"text",placeholder:o("Technology, Design, Lifestyle (separate with commas)"),required:!1,section:o("Blog Details"),cols:1},{name:"founded",label:o("Founded"),type:"text",placeholder:o("Enter when your blog was founded"),required:!1,section:o("Blog Details"),cols:1},{name:"description",label:o("Bio"),type:"textarea",placeholder:o("Tell people about your blog and writing"),defaultValue:P.description,required:!1,section:o("Blog Details"),cols:2,rows:3}],customCSS:`
    /* Blogger Theme - Editorial & Sophisticated */
    .bio-link-container.blogger-theme {
      position: relative;
      font-family: 'Playfair Display', 'Georgia', serif;
      overflow: hidden;
      border-radius: 0;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      background-color: #FFFFFF;
      min-height: 100vh;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    /* Background overlay for readability */
    .bio-link-container.blogger-theme::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 1;
    }

    .blogger-theme {
      overflow-x: hidden;
      width: 100%;
      padding: 0;
      margin: 0;
    }

    /* Subtle paper texture */
    .blogger-theme::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      z-index: 0;
    }

    /* Decorative elements */
    .blogger-theme .decorative-element {
      position: absolute;
      opacity: 0.05;
      z-index: 1;
    }

    .blogger-theme .decorative-line {
      height: 1px;
      background: currentColor;
      position: absolute;
      z-index: 1;
    }

    .blogger-theme .decorative-line-1 {
      top: 80px;
      left: 0;
      right: 0;
      width: 100%;
    }

    .blogger-theme .decorative-line-2 {
      bottom: 80px;
      left: 0;
      right: 0;
      width: 100%;
    }

    .blogger-theme .decorative-quote {
      top: 10%;
      right: 10%;
      font-size: 120px;
      font-family: 'Georgia', serif;
      line-height: 1;
      opacity: 0.03;
    }

    /* Layout styling */


    /* Sidebar styling */
    .blogger-theme .bio-link-sidebar {
      position: relative;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      z-index: 2;
      border-right: 1px solid rgba(255, 255, 255, 0.1);
    }

    /* Profile image styling - Editorial style */
    .blogger-theme .bio-link-profile-container {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .blogger-theme .bio-link-profile {
      width: 100% !important;
      height: 240px !important;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      object-fit: cover;
      overflow:hidden;
    }

    /* Name styling */
    .blogger-theme .bio-link-title {
      font-size: 2.2rem;
      font-weight: 800;
      color: #FFFFFF;
      margin-bottom: 0.5rem;
      line-height: 1.1;
    }

    /* Tagline styling */
    .blogger-theme .bio-link-tagline {
      color: #ffffff;
      font-style: italic;
      margin-bottom: 2rem;
    }

    /* Blog stats */
    .blogger-theme .blog-stats {
      padding: 1.5rem;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 12px;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .blogger-theme .stat-item {
      margin-bottom: 1.5rem;
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
    }

    .blogger-theme .stat-item:last-child {
      margin-bottom: 0;
    }

    .blogger-theme .stat-icon {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      margin-top: 0.125rem;
      color: var(--button-color, #1CA7A0);
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    }

    .blogger-theme .stat-content {
      flex: 1;
      min-width: 0;
    }

    .blogger-theme .stat-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      font-weight: 700;
      color: #fff;
      letter-spacing: 0.8px;
      margin-bottom: 0.5rem;
      font-family: 'Montserrat', sans-serif;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    }

    .blogger-theme .stat-value {
      color: #FFFFFF;
      font-weight: 600;
      font-size: 1rem;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
    }

    .blogger-theme .topics-section {
      margin-bottom: 1rem;
    }

    .blogger-theme .topics-section .stat-content {
      width: 100%;
    }

    /* Enhanced Topics Display */
    .blogger-theme .topics-display {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 0.75rem;
    }

    .blogger-theme .topic-tag {
      background: var(--button-color, #1CA7A0);
      border: 1px solid var(--button-color, #1CA7A0);
      color: #ffffff;
      padding: 0.375rem 0.875rem;
      border-radius: 25px;
      font-size: 0.75rem;
      font-weight: 600;
      font-family: 'Montserrat', sans-serif;
    }



    /* Social icons in sidebar */
    .blogger-theme .social-container {
      margin-top: auto;
      padding-top: 2rem;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    .blogger-theme .social-title {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      opacity: 1;
      margin-bottom: 1rem;
      font-weight: 700;
      font-family: 'Montserrat', sans-serif;
      color: var(--text-color, #FFFFFF);
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    }

    .blogger-theme .social-icons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    /* Social icon styling */
    .blogger-theme .social-icon {
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      position: relative;
      background: var(--button-color, #1CA7A0);;
      backdrop-filter: blur(10px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      flex-shrink: 0;
    }

    /* Fix for social icons */
    .blogger-theme .social-icon svg {
      width: 18px;
      height: 18px;
      position: relative;
      z-index: 2;
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    /* Social icon hover effect */
    .blogger-theme .social-icon:hover {
      transform: translateY(-5px);
      background: var(--button-color, currentColor);
      border-color: transparent;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15), 0 4px 12px var(--button-color, rgba(0, 0, 0, 0.1));
    }

    .blogger-theme .social-icon:hover svg {
      transform: scale(1.2);
      color: #FFFFFF !important;
    }

    /* Main content styling */
    .blogger-theme .bio-link-content {
      position: relative;
      padding: 0 2rem 2rem;
      z-index: 2;
      overflow-x: hidden;
      width: auto;
      background: transparent;
      backdrop-filter: blur(3px);
    }

    /* Content header */
    .blogger-theme .content-header {
      margin-bottom: 2.5rem;
      position: relative;
    }

    .blogger-theme .content-title {
      font-size: 1.5rem;
      font-weight: 800;
      margin-bottom: 1rem;
      position: relative;
      display: inline-block;
      font-family: 'Montserrat', sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-color, #FFFFFF);
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.9);
    }

    .blogger-theme .content-title::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 2px;
      background: currentColor;
    }

    /* Elegant Bio Section */
    .blogger-theme .enhanced-bio-section {
      margin-bottom: 2.5rem;
      position: relative;
    }

    .blogger-theme .bio-section-title {
      font-size: 0.9rem;
      font-weight: 700;
      margin-bottom: 1.25rem;
      font-family: 'Montserrat', sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      opacity: 1;
      position: relative;
      padding-left: 1rem;
      color: var(--text-color, #FFFFFF);
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    }

    .blogger-theme .bio-section-title::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 3px;
      height: 20px;
      background: currentColor;
      border-radius: 2px;
    }

    .blogger-theme .bio-content {
      font-size: 1.15rem;
      line-height: 1.7;
      color: var(--text-color, #FFFFFF);
      font-family: 'Georgia', serif;
      position: relative;
      padding: 1.5rem;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 12px;
      backdrop-filter: blur(10px);
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    /* Elegant quote-style first letter */
    .blogger-theme .bio-content::first-letter {
      font-size: 3.5rem;
      font-weight: 400;
      float: left;
      line-height: 0.9;
      padding-right: 0.5rem;
      margin-top: 0.1rem;
      color: currentColor;
      font-family: 'Playfair Display', serif;
      opacity: 0.8;
    }

    .blogger-theme .bio-content::before {
      content: '"';
      position: absolute;
      top: -0.5rem;
      left: -0.5rem;
      font-size: 2rem;
      opacity: 0.2;
      font-family: 'Playfair Display', serif;
      color: currentColor;
    }

    .blogger-theme .bio-content::after {
      content: '"';
      position: absolute;
      bottom: -0.5rem;
      right: -0.5rem;
      font-size: 2rem;
      opacity: 0.2;
      font-family: 'Playfair Display', serif;
      color: currentColor;
    }

    /* Links container */
    .blogger-theme .links-container {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      overflow-x: hidden;
      width: auto;
    }

    /* Link button styling - Blog post style */
    .blogger-theme .bio-link-button {
      position: relative;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 12px;
      padding: 1.5rem;
      transition: all 0.3s ease;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-left: 4px solid transparent;
    }

    /* Link button hover effect */
    .blogger-theme .bio-link-button:hover {
      background: rgba(0, 0, 0, 0.8);
      border-left-color: var(--button-color, #1CA7A0);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }

    /* Post meta */
    .blogger-theme .bio-link-button .post-meta {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      opacity: 1;
      margin-bottom: 0.75rem;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      color: var(--text-color, #FFFFFF);
    }

    /* Post title */
    .blogger-theme .bio-link-button .post-title {
      font-weight: 800;
      font-size: 1.5rem;
      letter-spacing: -0.01em;
      margin-bottom: 0.75rem;
      line-height: 1.3;
      transition: all 0.3s ease;
      color: var(--text-color, #FFFFFF);
    }
    /* Post excerpt */
    .blogger-theme .bio-link-button .post-excerpt {
      font-size: 1rem;
      opacity: 1;
      line-height: 1.6;
      font-family: 'Georgia', serif;
      color: var(--text-color, #FFFFFF);
    }

    /* Read more link */
    .blogger-theme .bio-link-button .read-more {
      font-family: 'Montserrat', sans-serif;
      font-size: 1rem;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-color, #FFFFFF) !important;
      position: relative;
      display: inline-block;
      transition: none;
      background: transparent;
      padding: 1rem 0 0;
      border: none;
      opacity: 1;
      text-decoration: none;
    }

    .blogger-theme .bio-link-button .read-more:hover {
      color: var(--text-color, #FFFFFF) !important;
      text-decoration: underline;
      text-decoration-color: var(--text-color, #FFFFFF);
      text-underline-offset: 4px;
      text-decoration-thickness: 2px;
    }



    /* Footer */
    .blogger-theme .blogger-footer {
      padding: 2rem 0 0;
      text-align: center;
      font-size: 0.85rem;
      opacity: 1;
      font-family: 'Montserrat', sans-serif;
      color: var(--text-color, #FFFFFF);
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
      font-weight: 600;
    }

    /* Animations */
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(-20px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(20px); }
      to { opacity: 1; transform: translateX(0); }
    }

    .blogger-theme .bio-link-profile {
      animation: fadeIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }

    .blogger-theme .bio-link-title,
    .blogger-theme .bio-link-tagline {
      animation: slideInRight 0.8s ease forwards;
      animation-delay: 0.2s;
    }

    .blogger-theme .stat-item {
      animation: slideInRight 0.6s ease forwards;
      animation-delay: calc(0.1s * var(--index, 0) + 0.4s);
    }

    .blogger-theme .content-title,
    .blogger-theme .bio-link-description {
      animation: fadeIn 0.8s ease forwards;
      animation-delay: 0.3s;
    }

    .blogger-theme .bio-link-button {
      animation: slideInLeft 0.6s ease forwards;
      animation-delay: calc(0.1s * var(--index, 0) + 0.5s);
    }

    .blogger-theme .social-icon {
      animation: fadeIn 0.6s ease forwards;
      animation-delay: calc(0.1s * var(--index, 0) + 0.7s);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .blogger-theme .bio-link-layout {
        grid-template-columns: 1fr;
      }

      .blogger-theme .bio-link-sidebar {
        padding: 2rem 1.5rem;
        border-right: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }

      .blogger-theme .bio-link-profile {
        aspect-ratio: 1/1;
        max-width: 200px;
        margin: 0 auto 1.5rem;
      }

      .blogger-theme .bio-link-content {
        padding: 2rem;
        overflow-x: hidden;
        width: auto;
      }

      .blogger-theme .bio-link-title {
        font-size: 1.75rem;
        text-align: center;
      }

      .blogger-theme .bio-link-tagline {
        text-align: center;
      }

      .blogger-theme .enhanced-bio-section {
        margin-bottom: 2rem;
      }

      .blogger-theme .bio-content {
        font-size: 1.05rem;
        padding: 1.25rem 0;
      }

      .blogger-theme .bio-content::first-letter {
        font-size: 2.8rem;
        padding-right: 0.4rem;
        margin-top: 0.05rem;
      }

      .blogger-theme .bio-content::before,
      .blogger-theme .bio-content::after {
        font-size: 1.5rem;
      }

      .blogger-theme .topics-display {
        justify-content: center;
      }

      .blogger-theme .social-icons {
        justify-content: center;
      }

      .blogger-theme .topic-tag {
        font-size: 0.75rem;
        padding: 0.2rem 0.6rem;
      }
    }
  `,colorPresets:[{name:"Classic Editorial",background:{type:"image",color:"#FF7F50",gradient:"",image:"https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=800&fit=crop"},buttonColor:"#FF7F50",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Warm Serif",background:{type:"image",color:"#DA6CCB",gradient:"",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop"},buttonColor:"#DA6CCB",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Modern Minimal",background:{type:"image",color:"#6CDAAA",gradient:"",image:"https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?w=1200&h=800&fit=crop"},buttonColor:"#6CDAAA",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Literary Blue",background:{type:"image",color:"#DAD66C",gradient:"",image:"https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=800&fit=crop"},buttonColor:"#DAD66C",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Vintage Paper",background:{type:"image",color:"#DA6C6C",gradient:"",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop"},buttonColor:"#DA6C6C",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"}],font:"Playfair Display, Georgia, serif",defaultPreset:0,renderProfile:n=>{const{data:s,textColor:c,buttonColor:m,buttonTextColor:p,isPublic:a}=n,r=!a,{header:t}=s.config,i=t.name||(t.name!==null&&t.name!==""&&r?P.name:null),l=t.tagline||(t.tagline!==null&&t.tagline!==""&&r?P.tagline:null);return t.email||t.email!==null&&t.email!==""&&r&&P.email,t.phone||t.phone!==null&&t.phone!==""&&r&&P.phone,t.description||t.description!==null&&t.description!==""&&r&&P.description,e.createElement(e.Fragment,null,e.createElement("div",{className:"decorative-element decorative-quote",style:{textDecoration:"none",color:c}},"”"),e.createElement("div",{className:"bio-link-profile-container"},t.profile_image?e.createElement("div",{className:"bio-link-profile"},e.createElement("img",{src:F(t.profile_image),alt:i,className:"w-full h-full object-cover"})):e.createElement("div",{className:"bio-link-profile flex items-center justify-center text-xl font-bold",style:{textDecoration:"none",background:m,color:c||"#FFFFFF"}},i.charAt(0))),e.createElement("h1",{className:"bio-link-title"},i),l&&e.createElement("div",{className:"bio-link-tagline"},l),(t.topics||t.founded)&&e.createElement("div",{className:"blog-stats"},t.topics&&e.createElement("div",{className:"stat-item topics-section",style:{textDecoration:"none","--index":0}},e.createElement("div",{className:"stat-icon",style:{textDecoration:"none",color:c}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),e.createElement("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}))),e.createElement("div",{className:"stat-content"},e.createElement("div",{className:"stat-label"},"Topics"),e.createElement("div",{className:"topics-display"},t.topics.split(/[,;]|\s{2,}/).filter(d=>d.trim()).map((d,g)=>e.createElement("span",{key:g,className:"topic-tag",style:{backgroundColor:`${m}`,color:c}},d.trim()))))),t.founded&&e.createElement("div",{className:"stat-item",style:{textDecoration:"none","--index":1}},e.createElement("div",{className:"stat-icon",style:{textDecoration:"none",color:c}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("circle",{cx:"12",cy:"12",r:"10"}),e.createElement("polyline",{points:"12 6 12 12 16 14"}))),e.createElement("div",{className:"stat-content"},e.createElement("div",{className:"stat-label"},o("Founded")),e.createElement("div",{className:"stat-value"},t.founded)))))},renderSocial:n=>{const{data:s,isPublic:c,textColor:m,buttonColor:p,buttonTextColor:a}=n,{social:r}=s.config,t=r!=null&&r.items&&r.items.length>0?r.items:P.social;return!(r!=null&&r.display)||!t.length?null:e.createElement("div",{className:"social-container"},e.createElement("div",{className:"social-title"},o("Connect")),e.createElement("div",{className:"social-icons"},t.map((i,l)=>i.platform&&e.createElement("a",{key:l,href:i.url||"#",target:"_blank",rel:"noopener noreferrer",className:"social-icon",style:{textDecoration:"none","--index":l,color:p}},e.createElement(k,{platform:i.platform,color:n.buttonTextColor||"#FFFFFF"})))))},renderLinks:n=>{var d,g;const{data:s,isPublic:c,buttonColor:m,textColor:p,buttonTextColor:a}=n,{links:r}=s.config,t=!c,i=r&&r.length>0?r:t?P.links:[],l=s.config.header.description||(s.config.header.description!==null&&s.config.header.description!==""&&t?P.description:null);return e.createElement(e.Fragment,null,e.createElement("div",{className:"content-header"},e.createElement("h2",{className:"content-title"},o("Latest Articles"))),l&&e.createElement("div",{className:"enhanced-bio-section"},e.createElement("h3",{className:"bio-section-title",style:{color:p}},o("About the Author")),e.createElement("div",{className:"bio-content"},l)),e.createElement("div",{className:"links-container"},i&&i.length?i.map((h,b)=>e.createElement("a",{key:b,href:h.url||"#",target:"_blank",rel:"noopener noreferrer",className:"bio-link-button",style:{textDecoration:"none","--index":b}},e.createElement("div",{className:"post-meta"},`${new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})} • ${Math.floor(Math.random()*10)+2} min read`),e.createElement("div",{className:"post-title"},h.text||"Untitled Post"),h.description&&e.createElement("div",{className:"post-excerpt"},h.description),e.createElement("div",{className:"read-more",style:{textDecoration:"none",color:m}},o("Continue Reading")))):e.createElement("div",{className:"text-center p-4 opacity-70 text-sm"},o("No articles published yet"))),((d=s.config.copyright)==null?void 0:d.enabled)!==!1&&e.createElement("div",{className:"blogger-footer"},((g=s.config.copyright)==null?void 0:g.text)||`© ${new Date().getFullYear()} ${s.config.header.name||P.name}. All rights reserved.`))},renderContainer:n=>{const{data:s,textColor:c,buttonColor:m,font:p}=n,{background:a}=s.config,r="https://picsum.photos/1200/800?random=10";let t={};return(a==null?void 0:a.type)==="image"?t={backgroundImage:`url(${a.image||r})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}:(a==null?void 0:a.type)==="gradient"&&a.gradient?t={background:a.gradient,backgroundImage:"none"}:(a==null?void 0:a.type)==="color"&&a.color?t={backgroundColor:a.color,backgroundImage:"none"}:t={backgroundImage:`url(${r})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},e.createElement("div",{className:"bio-link-container blogger-theme",style:{color:c,fontFamily:p,"--button-color":m,"--text-color":c,...t}},e.createElement("div",{className:"bio-link-layout"},e.createElement("div",{className:"bio-link-sidebar"},Z.renderProfile&&Z.renderProfile(n),Z.renderSocial&&Z.renderSocial(n)),e.createElement("div",{className:"bio-link-content"},Z.renderLinks&&Z.renderLinks(n))))}},$={name:o("Victoria Glamour"),tagline:o("Beauty & Lifestyle Influencer"),description:o("Living life in full glamour! Beauty tips, luxury lifestyle, and everything that sparkles."),links:[{text:"Beauty Tutorials",url:"#",description:o("Makeup & skincare"),icon:""},{text:"Luxury Reviews",url:"#",description:o("Premium products"),icon:""},{text:"Glamour Guide",url:"#",description:o("Style inspiration"),icon:""}],social:[{platform:"instagram",url:"#",icon:""},{platform:"youtube",url:"#",icon:""},{platform:"tiktok",url:"#",icon:""}]},K={name:"Glamorous",layout:"standard",buttonStyle:"pill",socialPosition:"bottom",profileStyle:"circular-frame",profileFields:[{name:"name",label:o("Name"),type:"text",placeholder:o("Enter your name"),defaultValue:$.name,required:!0,section:o("Personal Details"),cols:1},{name:"tagline",label:o("Tagline"),type:"text",placeholder:o('e.g., "Glow Up with Mia"'),defaultValue:$.tagline,required:!1,section:o("Personal Details"),cols:1},{name:"profile_image",label:o("Profile Image"),type:"image",placeholder:o("Upload your profile image"),required:!1,section:o("Personal Details"),cols:2},{name:"description",label:o("Bio"),type:"textarea",placeholder:o("Tell your story..."),defaultValue:$.description,required:!1,section:o("About"),cols:2,rows:3}],customCSS:`
    /* Glamorous Influencer Theme */
    .bio-link-container.glamorous-theme {
      position: relative;
      font-family: var(--theme-font, 'Playfair Display', serif);
      overflow: hidden;
      min-height: 100vh;
      background: var(--theme-background, linear-gradient(135deg, #FFD1DC 0%, #FFF0F5 100%));
      color: var(--theme-text-color, #333333);
    }
    
    /* Sparkle overlay */
    .glamorous-theme::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.3) 2px, transparent 2px),
        radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
        radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.2) 1px, transparent 1px);
      background-size: 100px 100px, 150px 150px, 200px 200px;
      pointer-events: none;
      z-index: 0;
    }
    
    /* Container styling */
    .glamorous-theme .bio-link-header {
      position: relative;
      padding: 4rem 2rem 3rem;
      z-index: 1;
      text-align: center;
    }
    
    /* Transparent header when background image is set */

    
    /* Profile image with soft shadow */
    .glamorous-theme .bio-link-profile {
      width: 140px !important;
      height: 140px !important;
      margin: 0 auto 2rem;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      box-shadow: 0 20px 40px rgba(255, 105, 180, 0.2);
      transition: all 0.4s ease;
      border: 4px solid rgba(255, 255, 255, 0.8);
    }
    
    .glamorous-theme .bio-link-profile::after {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      border-radius: 50%;
      background: #000000;
      z-index: -1;
      opacity: 0.7;
    }
    
    .glamorous-theme .bio-link-profile img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    /* Name styling with Playfair Display */
    .glamorous-theme .bio-link-title {
      font-family: var(--theme-font, 'Playfair Display', serif);
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--theme-text-color, #333333);
      margin-bottom: 0.5rem;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 10px rgba(255, 255, 255, 0.9);
      position: relative;
    }
    
    /* Tagline styling */
    .glamorous-theme .bio-link-description {
      font-family: 'Lato', sans-serif;
      font-size: 1.1rem;
      color: var(--theme-text-color, #666666);
      margin-bottom: 2rem;
      font-style: italic;
      text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.7), 0 0 8px rgba(255, 255, 255, 0.8);
    }
    
    /* Links container */
    .glamorous-theme .links-container {
      padding: 0 2rem 3rem;
      position: relative;
      z-index: 1;
    }
    
    
    /* Button styling with Lato font */
    .glamorous-theme .bio-link-button {
      font-family: 'Lato', sans-serif;
      display: block;
      width: 100%;
      padding: 1rem 2rem;
      margin-bottom: 1rem;
      background: var(--theme-button-color, rgba(255, 255, 255, 0.9));
      border: 2px solid rgba(255, 105, 180, 0.2);
      border-radius: 50px;
      color: var(--theme-button-text-color, #333333);
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      text-align: center;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      backdrop-filter: blur(10px);
      box-shadow: 0 8px 25px rgba(255, 105, 180, 0.15);
    }
    
    /* Transparent link buttons when background image is set */
    .glamorous-theme.has-bg-image .bio-link-button {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    /* Sparkle hover effect */
    .glamorous-theme .bio-link-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.6),
        transparent
      );
      transition: left 0.6s ease;
    }
    


    
    /* Social icons container */
    .glamorous-theme .social-container {
      position: relative;
      z-index: 1;
      padding: 2rem;
      text-align: center;
      border-top: 1px solid rgba(255, 255, 255, 0.3);
      margin-top: 2rem;
    }
    
    
    .glamorous-theme .social-icons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }
    
    /* Social icon styling */
    .glamorous-theme .social-icon {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--theme-button-color, rgba(255, 255, 255, 0.9));
      border-radius: 50%;
      transition: all 0.3s ease;
      box-shadow: 0 8px 20px rgba(255, 105, 180, 0.15);
      position: relative;
      overflow: hidden;
    }
    
    .glamorous-theme .social-icon::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, #FF69B4, #FFD1DC);
      opacity: 0;
      transition: opacity 0.3s ease;
      border-radius: 50%;
    }
    
    .glamorous-theme .social-icon:hover::after {
      opacity: 0.1;
    }
    
    .glamorous-theme .social-icon:hover {
      transform: translateY(-5px) scale(1.1);
      box-shadow: 0 15px 30px rgba(255, 105, 180, 0.3);
    }
    
    .glamorous-theme .social-icon svg {
      width: 24px;
      height: 24px;
      position: relative;
      z-index: 2;
      transition: all 0.3s ease;
    }
    
    .glamorous-theme .social-icon:hover svg {
      transform: scale(1.2);
    }
    
    /* Bio section styling */
    .glamorous-theme .bio-section {
      position: relative;
      z-index: 1;
      max-width: 400px;
      margin: 0 auto;
    }
    
    .glamorous-theme .bio-text {
      font-family: 'Lato', sans-serif;
      font-size: 0.95rem;
      line-height: 1.6;
      color: var(--theme-text-color, #555555);
      text-align: center;
      background: rgba(0, 0, 0, 0.2);
      padding: 1.5rem;
      border-radius: 20px;
      backdrop-filter: blur(10px);
      box-shadow: 0 8px 25px rgba(255, 105, 180, 0.1);
    }
    
    /* Responsive design */
    @media (max-width: 768px) {
      .glamorous-theme .bio-link-title {
        font-size: 2rem;
      }
      
      .glamorous-theme .bio-link-header {
        padding: 3rem 1.5rem 2rem;
      }
      
      .glamorous-theme .links-container {
        padding: 0 1.5rem 2rem;
      }
      
      .glamorous-theme .bio-section {
        padding: 0 1.5rem 2rem;
      }
      
      .glamorous-theme .social-icons {
        gap: 1rem;
      }
      
      .glamorous-theme .social-icon {
        width: 45px;
        height: 45px;
      }
    }`,colorPresets:[{name:"Rose Gold Glam",background:{type:"image",color:"#DB2286",gradient:"linear-gradient(135deg, #D4A574 0%, #E6C2A6 100%)",image:"storage/images/bio-image/glamorous/image2.jpg"},buttonColor:"#DB2286",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Soft Peach Pink",background:{type:"image",color:"#D4AF37",gradient:"linear-gradient(135deg, #FFD1DC 0%, #FFF0F5 100%)",image:"storage/images/bio-image/glamorous/image1.jpg"},buttonColor:"#D4AF37",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Lavender Dreams",background:{type:"image",color:"#C41E3A",gradient:"linear-gradient(135deg, #B19CD9 0%, #D1C4E9 100%)",image:"storage/images/bio-image/glamorous/image3.jpg"},buttonColor:"#C41E3A",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Champagne Bubble",background:{type:"image",color:"#9966CC",gradient:"linear-gradient(135deg, #E6D7B8 0%, #F5E6D3 100%)",image:"storage/images/bio-image/glamorous/image4.jpg"},buttonColor:"#9966CC",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"},{name:"Midnight Elegance",background:{type:"image",color:"#B87333",gradient:"linear-gradient(135deg, #2C2C54 0%, #40407A 100%)",image:"storage/images/bio-image/glamorous/image5.jpg"},buttonColor:"#B87333",buttonTextColor:"#FFFFFF",textColor:"#FFFFFF"}],font:"Playfair Display, serif",defaultPreset:0,renderProfile:n=>{const{data:s,textColor:c,buttonColor:m,buttonTextColor:p,isPublic:a}=n,r=!a,{header:t}=s.config,i=t.name||(t.name!==null&&t.name!==""&&r?$.name:null),l=t.tagline||(t.tagline!==null&&t.tagline!==""&&r?$.tagline:null);t.email||t.email!==null&&t.email!==""&&r&&$.email,t.phone||t.phone!==null&&t.phone!==""&&r&&$.phone;const d=t.description||(t.description!==null&&t.description!==""&&r?$.description:null);return e.createElement("div",{className:"text-center"},t.profile_image?e.createElement("div",{className:"bio-link-profile"},e.createElement("img",{src:F(t.profile_image),alt:i})):e.createElement("div",{className:"bio-link-profile flex items-center justify-center text-4xl font-bold",style:{backgroundColor:"#000000",color:c||"#FFFFFF"}},(i==null?void 0:i.charAt(0))||"?"),e.createElement("h1",{className:"bio-link-title",style:{color:c}},i||"Your Name"),l&&e.createElement("p",{className:"bio-link-description",style:{color:c}},l),d&&e.createElement("div",{className:"bio-section"},e.createElement("div",{className:"bio-text"},d)))},renderLinks:n=>{const{data:s,isPublic:c,buttonColor:m,textColor:p,buttonTextColor:a}=n,{links:r}=s.config,t=r&&r.length>0?r:$.links;return!t||!t.length?e.createElement("div",{className:"text-center p-4 opacity-70 text-sm"},o("No links added yet")):e.createElement("div",{className:"links-container"},t.map((i,l)=>e.createElement("a",{key:l,href:i.url||"#",target:"_blank",rel:"noopener noreferrer",className:"bio-link-button",style:{backgroundColor:m,color:a,"--index":l}},i.text||o("Untitled Link"))))},renderSocial:n=>{const{data:s,isPublic:c,textColor:m,buttonColor:p,buttonTextColor:a}=n,{social:r}=s.config,t=r!=null&&r.items&&r.items.length>0?r.items:$.social;return!(r!=null&&r.display)||!t.length?null:e.createElement("div",{className:"social-container"},e.createElement("div",{className:"social-icons"},t.map((i,l)=>i.platform&&e.createElement("a",{key:l,href:i.url||"#",target:"_blank",rel:"noopener noreferrer",className:"social-icon",style:{"--index":l}},e.createElement(k,{platform:i.platform,color:a})))))},renderContainer:n=>{var l,d,g;const{data:s,textColor:c,buttonColor:m,buttonTextColor:p,font:a}=n,{background:r}=s.config,t=(r==null?void 0:r.type)==="image"&&r.image,i="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=800&fit=crop&auto=format";(r==null?void 0:r.type)==="image"?r.image:(r==null?void 0:r.type)==="gradient"&&r.gradient?r.gradient:(r==null?void 0:r.type)==="color"&&r.color&&r.color;try{const h=document.createElement("link");h.href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@400;600&display=swap",h.rel="stylesheet",document.head.appendChild(h)}catch{console.log("Could not add font link")}return e.createElement("div",{className:`glamorous-theme${t?" has-bg-image":""}`,style:{"--theme-text-color":c,"--theme-button-color":m,"--theme-button-text-color":p,"--theme-font":a||"'Playfair Display', serif",color:c,fontFamily:a||"'Playfair Display', serif",display:"flex",flexDirection:"column",minHeight:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",flexDirection:"column"}},e.createElement("div",{className:"bio-link-header"},K.renderProfile&&K.renderProfile(n)),K.renderLinks&&K.renderLinks(n),K.renderSocial&&K.renderSocial(n)),((l=s.config.copyright)==null?void 0:l.enabled)!==!1&&e.createElement("div",{className:"social-container",style:{marginTop:"auto",borderTop:"none",backgroundColor:"rgba(0, 0, 0, 0.2)"}},e.createElement("div",{className:"copyright-footer",style:{color:c,fontFamily:"'Lato', sans-serif"}},((d=s.config.copyright)==null?void 0:d.text)||`© ${new Date().getFullYear()} ${((g=s.config.header)==null?void 0:g.name)||"YourName"}. All rights reserved.`)))}},le={personal:U,business:q,portfolio:V,social:_,minimal:R,tech:Y,nature:W,fashion:H,gaming:G,health:X,travel:O,food:J,ecommerce:Q,blogger:Z,glamorous:K},be=n=>le[n]||le.personal,F=n=>{if(!n)return"";if(n.startsWith("local:media/")){const c=n.substring(6);return`${window.baseUrl||window.location.origin}/storage/${c}`}return n.startsWith("http://")||n.startsWith("https://")?n:n.startsWith("/")?`${window.baseUrl||window.location.origin}${n}`:n.startsWith("storage/")?`${window.baseUrl||window.location.origin}/${n}`:n.startsWith("media/")?`${window.baseUrl||window.location.origin}/storage/${n}`:`${window.baseUrl||window.location.origin}/${n}`},fe=[{value:"personal",label:"Personal"},{value:"business",label:"Business"},{value:"portfolio",label:"Portfolio"},{value:"social",label:"Social Media"},{value:"minimal",label:"Minimal"},{value:"tech",label:"Tech"},{value:"nature",label:"Nature"},{value:"fashion",label:"Fashion"},{value:"gaming",label:"Gaming"},{value:"health",label:"Health & Wellness"},{value:"travel",label:"Travel & Tourism"},{value:"food",label:"Food & Beverage"},{value:"ecommerce",label:"E-Commerce"},{value:"blogger",label:"Blogger"},{value:"glamorous",label:"Glamorous Influencer"}];export{F as a,fe as b,ce as c,be as g,me as i};

import React, { Suspense } from 'react';
import {motion} from 'framer-motion';
import iReact from '../../assets/IReact.svg';
import iJavaScript from '../../assets/IJavaScript.svg';
import js from '../../assets/JS.svg';
// import Icons from '../../assets/Icons.jsx';
import {ReactIcon,JavascriptIcon,NodeIcon,ExpressIcon,MongoIcon,CSSIcon,TypeScriptIcon,LettA} from '../../assets/Icons.jsx';




function Icon() {


  // const allicons = [
  //   {id: 'javascript', src:iJavaScript},
  //   {id: 'react', src:iReact},
  //   ]
  const allicons = [
    {id: 'javascript', Src:<JavascriptIcon/>},
    {id: 'ts', Src:<TypeScriptIcon/>},
    {id: 'react', Src:<ReactIcon/>},
    {id: 'node', Src:<NodeIcon/>},
    {id: 'express', Src:<ExpressIcon/>},
    {id: 'mongo', Src:<MongoIcon/>},
    {id: 'css', Src:<CSSIcon/>},
    ]
  return (
  <>
  {/*allicons.map((icon) => (
  <img className="icons" src={icon.src} alt={icon.id} key={icon.id} />
  ))*/}
  {allicons.map((icon, index) => (
  <motion.div
    className="icons" 
    key={icon.id}
    initial={{ x: '-500%', y: '500%',opacity:0 }}
    animate={{
      x: '0%',
      y: '0%',
      transition: { delay: index-0.8, duration: 1, ease: 'easeOut' },
      opacity:1
    }}
  >
    {icon.Src}
  </motion.div>
  ))}
  </>
  )
}
/*
    animate={{
    x: ['-500%','-200%','-200%','-100%','0%'],
    y:['100%','100%','100%','100%','0%']
  }}


initial={{ 
      opacity: 0, transition:{
        delay:2
      },
      translateX:'-200%',
      y:'100%'
      }}
    whileInView={{ 
      opacity: 1,
      translateX:'0',
      y:'0'
    }}*/
export default Icon;
import React from 'react';
import { motion } from 'framer-motion';
import { ReactIcon, JavascriptIcon, NodeIcon, ExpressIcon, MongoIcon, CSSIcon, TypeScriptIcon, LettA } from '../../assets/Icons.jsx';

function Icon() {

  const allicons = [
    { id: 'javascript', Src: <JavascriptIcon /> },
    { id: 'ts', Src: <TypeScriptIcon /> },
    { id: 'react', Src: <ReactIcon /> },
    { id: 'node', Src: <NodeIcon /> },
    { id: 'express', Src: <ExpressIcon /> },
    { id: 'mongo', Src: <MongoIcon /> },
    { id: 'css', Src: <CSSIcon /> },
  ]
  return (
    <>
      {allicons.map((icon, index) => (
        <motion.div
          className="icons"
          key={icon.id}
          initial={{ x: '-500%', y: '500%', opacity: 0 }}
          animate={{
            x: '0%',
            y: '0%',
            transition: { delay: index - 0.8, duration: 1, ease: 'easeOut' },
            opacity: 1
          }}
        >
          {icon.Src}
        </motion.div>
      ))}
    </>
  )
}

export default Icon;
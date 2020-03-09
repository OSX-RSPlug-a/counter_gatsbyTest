import React from 'react';
import rehypeReact from "rehype-react"

import './../templates/styles-main.css' 

import Counter from './../components/counter'

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { "interactive-counter": Counter },
  }).Compiler

export default function Index() {
    return (

            <Counter />

    )
}
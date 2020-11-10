import React from 'react'
import './_BubbleBoard.scss'
import { html } from './bubbleBoard'


export default function BubbleBoard() {
  return (
    <iframe
      className="BubbleBoard"
      title="bubbleBoard"
      srcDoc={ html } style={ {width: '100%', border: '0px', height: '1100px'} }
      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      scrolling="auto"
    />
  )
}

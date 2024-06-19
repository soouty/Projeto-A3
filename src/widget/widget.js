import { getColorIterator } from "./utils/colors/color.js"


function widget(key, draw) {
    
    let nextColor = getColorIterator(key)

    draw.rect().size(500,850).move(5,70).fill(nextColor())
    draw.rect().size(500,850).move(500,70).fill(nextColor())
  
    
}

export default widget


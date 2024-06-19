import { G } from "@svgdotjs/svg.js"
import shapelist from "./shape-list.js"

export default function (key) {
    let keys = Object.keys(shapelist)
    let name = keys[key%keys.length]
    //console.log(name);
    let shape = shapelist[name]
    let path = shape.path
    let g = new G()
    g.path(path)
    return g
}

// trecho que cria e desenha um shape
let s = shape(key.next())
s.fill("blue").move(50,50).size(700)
s.addTo(draw)
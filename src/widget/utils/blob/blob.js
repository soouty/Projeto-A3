import utils from "./utils.js"
import { G } from "@svgdotjs/svg.js"

export default function (key) {
    let path = utils.getPath(key).path
    let g = new G()
    g.path(path)
    return g
}

// trecho que cria e desenha uma blob
let b = blob(key.next())
b.fill("blue").move(50,50).size(500)
b.addTo(draw)
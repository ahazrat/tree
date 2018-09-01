import React from 'react'

class Tree extends React.Component {
    
    render() {

        const trunkLength = 125
        const branches = 20
        const bends = 5

    	const width = document.body.clientWidth
        const height = document.body.clientHeight || window.innerHeight
        const widthCenter = width / 2

        const blueSky = <rect width={width} height={height} fill='skyblue' />

        console.log(height)
        const ground = <circle cx={widthCenter} cy={height*(4+0.9)} r={height*4} fill='green' />

        const getBranch = (trunkLength, branches, bends, b) => {
            const branchOpacity = 1/branches*2
            const branchColor = 'rgba(139,69,19,' + branchOpacity + ')'
            const branchWidth = 5
            const branchRight = b%2==0
            const getBend = (currentPath, b, bend) => {
                const newBend = ' '
                return currentPath + newBend
            }
            let branchPath = 'm 0 0'
            for (let i = 0; i < bends; i++) {
                let moveX = (b*0.3)*i*3
                if (!branchRight) {
                    moveX = -moveX
                }
                const moveY = -(trunkLength-((b*0.15)*i*trunkLength*0.1))
                branchPath = branchPath + ' l ' + moveX + ' ' + moveY
            }
            return <path key={b} d={branchPath} stroke={branchColor} strokeWidth={branchWidth} fill='none' />
        }

        const tree = (trunkLength, branches, bends) => {
            const startingTransform = 'translate(' + widthCenter + ',' + (height - 10) + ')'
            let branchesList = []
            for (let b = 0; b < branches; b++) {
                branchesList.push(getBranch(trunkLength, branches, bends, b))
            }
            return <g transform={startingTransform}>
                {branchesList}
            </g>
        }

        return <div style={{margin: 0}}>
        	<svg width={width} height={height}>
                {blueSky}
                {ground}
                {tree(trunkLength, branches, bends)}
            }
        	</svg>
        </div>
        
    }
    
}

export default Tree
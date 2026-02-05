interface Op {
    id: number,
    propertyName: string,
    oldValue: any,
}
type layerId = number

class DocumentLayer {
    layers: Map<layerId, Map<string, string>> = new Map()
    history: Op[][] = []
    isBatching = false
    currentBatch : Op[] = []

    apply(id: layerId, propertyName: string, value: string) {
        if (!this.layers.has(id)) {
            this.layers.set(id, new Map())
        }
        const layerProps = this.layers.get(id)!
        const oldValue = layerProps.get(propertyName)

        const op: Op = { id, propertyName, oldValue }
        layerProps.set(propertyName, value)
        this.history.push([op])
    }

    undo() {
        const lastBatch = this.history.pop()

        if (!lastBatch) {
            return
        }
        for (let i = lastBatch.length - 1; i >= 0; --i) {
            const { id, propertyName, oldValue } = lastBatch[i]

            const layer = this.layers.get(id)
            if (layer) {
                layer?.set(propertyName, oldValue)
            }
        }

    }

    getState() {
        const state = {}
        this.layers.forEach((props, id) => {
            state[id] = Object.fromEntries(props);
        });
        console.log(state)
        return state
    }
}


// tests
let doc = new DocumentLayer()
doc.apply(1, "color", "green")
doc.apply(2, "shape", "triangle")
doc.apply(1, "color", "blue")
doc.getState()
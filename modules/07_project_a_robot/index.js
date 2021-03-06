export function test() {
    // 07 project a robot > meadowfield
    const roads = [
        "Alice's House-Bob's House",
        "Alice's House-Cabin",
        "Alice's House-Post Office",
        "Bob's House-Town Hall",
        "Daria's House-Ernie's House",
        "Daria's House-Town Hall",
        "Ernie's House-Grete's House",
        "Grete's House-Farm",
        "Grete's House-Shop",
        "Marketplace-Farm",
        "Marketplace-Post Office",
        "Marketplace-Shop",
        "Marketplace-Town Hall",
        "Shop-Town Hall"
    ]

    function buildGraph(edges) {
        let graph = Object.create(null)

        function addEdge(from, to) {
            if (null == graph[from]) {
                graph[from] = [to]
            } else {
                graph[from].push(to)
            }
        }

        for (let [from, to] of edges.map(r => r.split("-"))) {
            addEdge(from, to)
            addEdge(to, from)
        }

        return graph
    }

    const roadGraph = buildGraph(roads)

    // console.log(roadGraph)

    // 07 project a robot > the task
    class VillageState {

        constructor(place, parcels) {
            this.place = place
            this.parcels = parcels
        }

        /*
         * Checks wether there is a direct road going from current place to destination,
         * if not,
         */
        move(destination) {
            if (!roadGraph[this.place].includes(destination)) {
                return this
            } else {
                let parcels = this.parcels.map(p => {
                    if (p.place != this.place) {
                        return p
                    }

                    return {
                        place: destination,
                        address: p.address
                    }
                }).filter(p => p.place != p.address)

                return new VillageState(destination, parcels)
            }
        }

    }

    let first = new VillageState(
        "Post Office",
        [{
            place: "Post Office",
            address: "Alice's House"
        }]
    )

    let next = first.move("Alice's House")

    // console.log(next.place)
    // console.log(next.parcels)
    // console.log(first.place)

    // 07 project a robot > persistent data
    let object = Object.freeze({
        value: 5
    })

    // object.value = 10
    // console.log(object.value)

    // 07 project a robot > simulation
    function runRobot(state, robot, memory) {
        for (let turn = 0;; turn++) {
            if (0 == state.parcels.length) {
                console.log(`Done in ${turn} turns`)
            }

            let action = robot(state, memory)

            state = state.move(action.direction)
            memory = action.memory

            console.log(`Moved to ${action.direction}`)
        }
    }
}

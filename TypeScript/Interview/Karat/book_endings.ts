function find_ending(endings: number[], choices: number[][], option: number): number {
    const choiceMap = new Map<number, [number, number]>();
    for (const [current_page, option1, option2] of choices) {
        choiceMap.set(current_page, [option1, option2]);
    }

    let currentPage = 1;
    const visitedPages = new Set<number>();

    while (true) {
        if (endings.includes(currentPage)) {
            return currentPage
        }

        if (visitedPages.has(currentPage)) {
            return -1
        }

        visitedPages.add(currentPage)

        if (choiceMap.has(currentPage)) {
            currentPage = choiceMap.get(currentPage)[option - 1]
        } else {
            ++currentPage
        }
    }
}

console.log(find_ending([6, 15, 21, 30], [[3, 14, 2]], 1));
console.log(find_ending([6, 15, 21, 30], [[3, 14, 2]], 2));

// Test Part 2
const choices1 = [[3, 16, 24]]
const choices2 = [[3, 16, 20]]
const choices3 = [[3, 2, 19], [20, 21, 34]]
const choices4 = []
const choices5 = [[9, 16, 26], [14, 16, 13], [27, 29, 28], [28, 15, 34], [29, 30, 38]]
const choices6 = [[9, 16, 26], [13, 31, 14], [14, 16, 13], [27, 12, 24], [32, 34, 15]]
const choices7 = [[3, 9, 10]]
const good_endings =  [10, 15, 25, 34]
const bad_endings =  [21, 30, 40]
console.log(find_good_endings(good_endings, bad_endings, choices1));
console.log(find_good_endings(good_endings, bad_endings, choices2));
console.log(find_good_endings(good_endings, bad_endings, choices3))
console.log(find_good_endings(good_endings, bad_endings, choices4))
console.log(find_good_endings(good_endings, bad_endings, choices5))
console.log(find_good_endings(good_endings, bad_endings, choices6))
console.log(find_good_endings(good_endings, bad_endings, choices7))

function find_good_endings(good_endings: number[], bad_endings: number[], choices: number[][]): number[] {
    const choiceMap = new Map<number, [number, number]>();
    for (const [current_page, option1, option2] of choices) {
        choiceMap.set(current_page, [option1, option2]);
    }

    const reachableGoodEndings = new Set<number>();

    const visited = new Set<number>()
    function dfs(page: number) {
        if (visited.has(page)||bad_endings.includes(page)) {
            return
        }
        visited.add(page)
        if (good_endings.includes(page)) {
            reachableGoodEndings.add(page)
            return
        }
        const choices = choiceMap.get(page)
        if (choices) {
            const [choice1, choice2] = choices
            dfs(choice1)
            dfs(choice2)
        }
        else {
            dfs(page + 1)
        }
    }
    dfs(1)
    return Array.from(reachableGoodEndings).sort((a, b) => a - b);
}
export const url = (path) => {
    return "https://api.fifsky.com/" + (path[0] === "/" ?  path.substr(1) : path)
}
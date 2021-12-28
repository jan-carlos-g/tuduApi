const CorrectLimit = (limit) => {
    return limit !== null ? parseInt(`${limit}`) : null
}

const CorrectOffset = (limit,page) => {
    return limit === null ? null : limit * ( page - 1 )
}

const CorrectWord = (string) => {
    return string ? string.toUpperCase() : null
}

const CorrectPage = (page) => {
    return parseInt(`${page}`)
}
module.exports = { CorrectLimit, CorrectOffset, CorrectWord, CorrectPage }
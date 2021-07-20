const dummy = (blogs) => {
  return 1
}

const totalLikes = blogs => blogs.reduce((total, blog) => blog.likes + total, 0)

const favoriteBlog = (blogs) => {
  return blogs.reduce((prev, current) => {
    return prev.likes <= current.likes ? current : prev
  })
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}

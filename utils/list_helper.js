const dummy = (blogs) => {
  return 1
}

const totalLikes = blogs => blogs.reduce((total, blog) => blog.likes + total, 0)

module.exports = {
  dummy,
  totalLikes
}

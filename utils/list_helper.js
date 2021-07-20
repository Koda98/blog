const lodash = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = blogs => blogs.reduce((total, blog) => blog.likes + total, 0)

const favoriteBlog = blogs => {
  const mostLikedBlog = blogs.reduce((prev, current) => prev.likes <= current.likes ? current : prev)
  const favBlog = {
    title: mostLikedBlog.title,
    author: mostLikedBlog.author,
    likes: mostLikedBlog.likes
  }
  return favBlog
}

const mostBlogs = blogs => {
  const maxBlogCount = lodash.chain(blogs)
    .countBy('author')
    .toPairs()
    .values()
    .max()
    .value() 
  return {
    author: maxBlogCount[0],
    blogs: maxBlogCount[1]
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}

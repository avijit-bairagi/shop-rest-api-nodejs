
exports.get404Page = (request, response, next) => {
    
    response.status(404).render('not-found', { pageTitle: 'Page not found!' })
}
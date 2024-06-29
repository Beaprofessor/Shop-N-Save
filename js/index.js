console.log("Index file of JS")

async function fetchCategories(){
    // this function is marked async so this will also return a promise
       const response =   await fetch("https://fakestoreapi.com/products/categories")
       const data = await response.json()
       return data
}

async function populateCategories(){
    const categories = await fetchCategories()
    const loaderBackdrop = document.getElementById('loader-backdrop')
    loaderBackdrop.style.display = 'none'
    const categoryList = document.getElementById('categoryList')
    categories.forEach(category => {
        const categoryHolder = document.createElement('div')
        const categoryLink = document.createElement('a')


        categoryLink.textContent = category           // setting the category name as the text of the anchor tag
        categoryLink.href = `productList.html?category=${category}`
        categoryHolder.classList.add('category-item', 'd-flex' ,  'align-items-center' , 'justify-content-center')
        categoryHolder.appendChild(categoryLink)

        categoryList.appendChild(categoryHolder)
    })


}

populateCategories()